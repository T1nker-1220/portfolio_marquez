import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('portfolio-session');
    
    if (!sessionCookie) {
      return NextResponse.json({ 
        authenticated: false 
      });
    }

    // Simple check - in a real app you'd validate the session token
    return NextResponse.json({ 
      authenticated: true 
    });

  } catch (error) {
    console.error('Error checking auth:', error);
    return NextResponse.json({ 
      authenticated: false 
    });
  }
}