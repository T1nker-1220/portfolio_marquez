import { NextRequest, NextResponse } from 'next/server';
import { insertMessage } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, message, sessionId } = body;

    // Validate required fields
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    // Insert message into database and create notification
    const newMessage = await insertMessage(name, company || null, message, sessionId);

    return NextResponse.json({ 
      success: true, 
      message: newMessage 
    });

  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}