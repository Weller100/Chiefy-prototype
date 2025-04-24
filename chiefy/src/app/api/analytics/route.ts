import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const event = await request.json();
    
    // Store analytics event in database
    await prisma.analyticsEvent.create({
      data: {
        eventName: event.eventName,
        timestamp: new Date(event.timestamp),
        userId: event.userId,
        metadata: event.metadata,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to store analytics:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET() {
  try {
    const events = await prisma.analyticsEvent.findMany({
      orderBy: {
        timestamp: 'desc',
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error('Failed to fetch analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
} 