import { NextRequest, NextResponse } from 'next/server';

const WAKATIME_API_KEY = process.env.NEXT_PUBLIC_WAKATIME_API_KEY;
const WAKATIME_BASE_URL = 'https://wakatime.com/api/v1';

function transformSummariesToStats(summariesData: any) {
  const summaries = summariesData.data || [];
  
  // Aggregate all data across days
  const languageMap = new Map();
  const projectMap = new Map();
  const editorMap = new Map();
  const osMap = new Map();
  let totalSeconds = 0;
  let bestDay = null;
  let bestDaySeconds = 0;

  summaries.forEach((day: any) => {
    // Safely access grand_total
    const dayTotal = day?.grand_total?.total_seconds || 0;
    totalSeconds += dayTotal;
    
    // Track best day
    if (dayTotal > bestDaySeconds) {
      bestDaySeconds = dayTotal;
      bestDay = {
        date: day.range?.date || 'Unknown',
        total_seconds: dayTotal,
        text: formatSecondsToText(dayTotal)
      };
    }
    
    // Aggregate languages
    if (day.languages && Array.isArray(day.languages)) {
      day.languages.forEach((lang: any) => {
        if (lang.name && typeof lang.total_seconds === 'number') {
          const existing = languageMap.get(lang.name) || { name: lang.name, total_seconds: 0 };
          existing.total_seconds += lang.total_seconds;
          languageMap.set(lang.name, existing);
        }
      });
    }
    
    // Aggregate projects  
    if (day.projects && Array.isArray(day.projects)) {
      day.projects.forEach((proj: any) => {
        if (proj.name && typeof proj.total_seconds === 'number') {
          const existing = projectMap.get(proj.name) || { name: proj.name, total_seconds: 0 };
          existing.total_seconds += proj.total_seconds;
          projectMap.set(proj.name, existing);
        }
      });
    }

    // Aggregate editors
    if (day.editors && Array.isArray(day.editors)) {
      day.editors.forEach((editor: any) => {
        if (editor.name && typeof editor.total_seconds === 'number') {
          const existing = editorMap.get(editor.name) || { name: editor.name, total_seconds: 0 };
          existing.total_seconds += editor.total_seconds;
          editorMap.set(editor.name, existing);
        }
      });
    }

    // Aggregate operating systems
    if (day.operating_systems && Array.isArray(day.operating_systems)) {
      day.operating_systems.forEach((os: any) => {
        if (os.name && typeof os.total_seconds === 'number') {
          const existing = osMap.get(os.name) || { name: os.name, total_seconds: 0 };
          existing.total_seconds += os.total_seconds;
          osMap.set(os.name, existing);
        }
      });
    }
  });

  // Convert to arrays and calculate percentages
  const languages = Array.from(languageMap.values()).map(lang => ({
    ...lang,
    percent: totalSeconds > 0 ? (lang.total_seconds / totalSeconds) * 100 : 0,
    digital: formatSeconds(lang.total_seconds),
    text: formatSecondsToText(lang.total_seconds)
  })).sort((a, b) => b.total_seconds - a.total_seconds);

  const projects = Array.from(projectMap.values()).map(proj => ({
    ...proj,
    percent: totalSeconds > 0 ? (proj.total_seconds / totalSeconds) * 100 : 0,
    digital: formatSeconds(proj.total_seconds),
    text: formatSecondsToText(proj.total_seconds)
  })).sort((a, b) => b.total_seconds - a.total_seconds);

  const editors = Array.from(editorMap.values()).map(editor => ({
    ...editor,
    percent: totalSeconds > 0 ? (editor.total_seconds / totalSeconds) * 100 : 0,
    digital: formatSeconds(editor.total_seconds),
    text: formatSecondsToText(editor.total_seconds)
  })).sort((a, b) => b.total_seconds - a.total_seconds);

  const operating_systems = Array.from(osMap.values()).map(os => ({
    ...os,
    percent: totalSeconds > 0 ? (os.total_seconds / totalSeconds) * 100 : 0,
    digital: formatSeconds(os.total_seconds),
    text: formatSecondsToText(os.total_seconds)
  })).sort((a, b) => b.total_seconds - a.total_seconds);

  return {
    data: {
      total_seconds: totalSeconds,
      human_readable_total: formatSecondsToText(totalSeconds),
      daily_average: summaries.length > 0 ? Math.round(totalSeconds / summaries.length) : 0,
      human_readable_daily_average: formatSecondsToText(summaries.length > 0 ? Math.round(totalSeconds / summaries.length) : 0),
      languages,
      projects,
      editors,
      operating_systems,
      best_day: bestDay,
      human_readable_range: 'Last 7 days',
      range: 'last_7_days',
      status: 'ok'
    }
  };
}

function formatSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

function formatSecondsToText(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours} hrs ${minutes} mins`;
  }
  return `${minutes} mins`;
}

export async function GET(request: NextRequest) {
  if (!WAKATIME_API_KEY) {
    return NextResponse.json(
      { error: 'WakaTime API key not configured' },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || 'last_7_days';

  try {
    // Calculate date range that includes today
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    // Use summaries endpoint which includes today's data
    const response = await fetch(`${WAKATIME_BASE_URL}/users/current/summaries?start=${startDate}&end=${endDate}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`WakaTime API error: ${response.status} - ${response.statusText}`);
      
      // Handle payment required (402) and other errors gracefully
      if (response.status === 402) {
        return NextResponse.json({
          data: {
            total_seconds: 0,
            human_readable_total: '0 mins',
            daily_average: 0,
            human_readable_daily_average: '0 mins',
            languages: [],
            projects: [],
            editors: [],
            operating_systems: [],
            best_day: null,
            human_readable_range: 'Last 7 days',
            range: 'last_7_days',
            status: 'payment_required',
            message: 'WakaTime subscription required'
          }
        });
      }
      
      // For other errors, return empty data
      return NextResponse.json({
        data: {
          total_seconds: 0,
          human_readable_total: '0 mins',
          daily_average: 0,
          human_readable_daily_average: '0 mins',
          languages: [],
          projects: [],
          editors: [],
          operating_systems: [],
          best_day: null,
          human_readable_range: 'Last 7 days',
          range: 'last_7_days',
          status: 'error',
          message: `API Error: ${response.status}`
        }
      });
    }

    const summariesData = await response.json();
    
    // Check if we have data
    if (!summariesData.data || summariesData.data.length === 0) {
      return NextResponse.json({
        data: {
          total_seconds: 0,
          human_readable_total: '0 secs',
          daily_average: 0,
          human_readable_daily_average: '0 secs',
          languages: [],
          projects: [],
          editors: [],
          operating_systems: [],
          best_day: null,
          human_readable_range: 'Last 7 days',
          range: 'last_7_days',
          status: 'ok'
        }
      });
    }
    
    // Transform summaries data to match stats format
    try {
      const transformedData = transformSummariesToStats(summariesData);
      return NextResponse.json(transformedData);
    } catch (transformError) {
      return NextResponse.json({
        data: {
          total_seconds: 0,
          human_readable_total: '0 secs',
          daily_average: 0,
          human_readable_daily_average: '0 secs',
          languages: [],
          projects: [],
          editors: [],
          operating_systems: [],
          best_day: null,
          human_readable_range: 'Last 7 days',
          range: 'last_7_days',
          status: 'error'
        }
      });
    }
  } catch (error) {
    console.error('WakaTime API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime data', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}