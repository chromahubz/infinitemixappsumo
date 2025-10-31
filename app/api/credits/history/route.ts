// app/api/credits/history/route.ts - Get credit usage history

import { NextResponse } from 'next/server';
import { getUserFromRequest, getCreditUsageHistory } from '@/lib/credits';

export async function GET(req: Request) {
  try {
    // Get authenticated user
    const userId = await getUserFromRequest(req);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Get query params
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '100');

    // Get usage history
    const history = await getCreditUsageHistory(userId, limit);

    return NextResponse.json({
      history,
      count: history.length
    });

  } catch (error) {
    console.error('[API] Failed to get credit history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch credit history' },
      { status: 500 }
    );
  }
}
