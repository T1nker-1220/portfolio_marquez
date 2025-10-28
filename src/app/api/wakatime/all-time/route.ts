import { NextResponse } from 'next/server';
import { errorLogger } from '@/lib/error-logger';

const WAKATIME_API_KEY = process.env.NEXT_PUBLIC_WAKATIME_API_KEY;
const WAKATIME_BASE_URL = 'https://wakatime.com/api/v1';

export async function GET() {
  if (!WAKATIME_API_KEY) {
    return NextResponse.json(
      { error: 'WakaTime API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`${WAKATIME_BASE_URL}/users/current/all_time_since_today`, {
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
    errorLogger.logError('WakaTime All-Time API', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime all-time data', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
