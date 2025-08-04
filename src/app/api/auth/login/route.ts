import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username } = body;

    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // Check against environment variable
    const validUsername = process.env.PORTFOLIO_USERNAME;
    
    if (username !== validUsername) {
      return NextResponse.json(
        { error: 'Invalid username' },
        { status: 401 }
      );
    }

    // Create simple session token
    const sessionToken = crypto.randomUUID();
    
    // Set cookie
    const response = NextResponse.json({ 
      success: true,
      message: 'Login successful' 
    });

    response.cookies.set('portfolio-session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;

  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}