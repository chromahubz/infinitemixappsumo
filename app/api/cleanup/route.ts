import { NextRequest, NextResponse } from 'next/server';
import { cleanupAllTempFiles } from '@/lib/cleanup';

/**
 * API endpoint to manually trigger cleanup of old temporary files
 * GET /api/cleanup
 *
 * Can be called:
 * 1. Manually via browser/curl
 * 2. By a cron job (e.g., GitHub Actions, Vercel Cron, etc.)
 * 3. By external monitoring services
 */
export async function GET(req: NextRequest) {
  try {
    console.log('[Cleanup API] Starting cleanup process...');

    const result = await cleanupAllTempFiles();

    return NextResponse.json({
      success: true,
      message: `Cleanup completed. Deleted ${result.totalDeleted} files.`,
      ...result,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('[Cleanup API] Error:', error.message);
    return NextResponse.json(
      {
        success: false,
        error: 'Cleanup failed',
        details: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
