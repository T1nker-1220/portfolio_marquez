import { NextRequest, NextResponse } from 'next/server';
import { errorLogger } from '@/lib/error-logger';

const WAKATIME_API_KEY = process.env.NEXT_PUBLIC_WAKATIME_API_KEY;
const WAKATIME_BASE_URL = 'https://wakatime.com/api/v1';

export async function GET(request: NextRequest) {
  if (!WAKATIME_API_KEY) {
    return NextResponse.json(
      { error: 'WakaTime API key not configured' },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

  try {
    const response = await fetch(`${WAKATIME_BASE_URL}/users/current/heartbeats?date=${date}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`WakaTime API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    
    // Process heartbeats to create hourly breakdown
    const heartbeats = data.data || [];
    const hourlyData = Array.from({ length: 24 }, (_, hour) => ({
      hour,
      minutes: 0,
      label: `${hour.toString().padStart(2, '0')}:00`
    }));

    heartbeats.forEach((heartbeat: any) => {
      if (heartbeat.time) {
        const hour = new Date(heartbeat.time * 1000).getHours();
        hourlyData[hour].minutes += 1; // Approximate - each heartbeat ~= 1 minute
      }
    });

    return NextResponse.json({
      data: heartbeats,
      hourly_breakdown: hourlyData,
      total_heartbeats: heartbeats.length
    });
  } catch (error) {
    errorLogger.logError('WakaTime Heartbeats API', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime heartbeats data', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
