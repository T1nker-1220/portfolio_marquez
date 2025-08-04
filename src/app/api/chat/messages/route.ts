import { NextRequest, NextResponse } from 'next/server';
import { getMessages } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session');
    
    // Get messages from portfolio.messages table
    // If sessionId is provided, filter by session (regular users)
    // If no sessionId, return all messages (admin users)
    const messages = await getMessages(sessionId || undefined);

    return NextResponse.json({ 
      success: true, 
      messages 
    });

  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}