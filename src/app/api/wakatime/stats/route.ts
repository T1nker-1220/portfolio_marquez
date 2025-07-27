import { NextRequest, NextResponse } from 'next/server';

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
  const range = searchParams.get('range') || 'last_30_days';

  try {
    const response = await fetch(`${WAKATIME_BASE_URL}/users/current/stats/${range}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`WakaTime API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('WakaTime API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime data' },
      { status: 500 }
    );
  }
}