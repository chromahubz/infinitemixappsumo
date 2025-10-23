import { NextRequest, NextResponse } from 'next/server';
import { taskStatusStore } from '../generate-music/route';

/**
 * Callback endpoint for Kie.ai music generation
 *
 * Kie.ai will POST to this endpoint when music generation progresses:
 * - Stage "text": Text generation complete
 * - Stage "first": First track complete
 * - Stage "complete": All tracks complete
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    console.log('[Music Callback] Received callback:', JSON.stringify(payload, null, 2));

    const { taskId, stage, data } = payload;

    if (!taskId) {
      console.error('[Music Callback] Missing taskId in callback');
      return NextResponse.json({ error: 'Missing taskId' }, { status: 400 });
    }

    // Get existing task status
    const existingStatus = taskStatusStore.get(taskId);

    if (!existingStatus) {
      console.warn(`[Music Callback] Task ${taskId} not found in store`);
      // Still update the store with the callback data
      taskStatusStore.set(taskId, {
        taskId,
        status: stage || 'complete',
        ...data,
      });
    } else {
      // Update task status based on callback
      const updatedStatus = {
        ...existingStatus,
        status: stage || 'complete',
        ...data,
      };

      // Extract audio URLs from callback data
      if (data?.audioUrl) {
        updatedStatus.audioUrl = data.audioUrl;
      }
      if (data?.audioUrl2) {
        updatedStatus.audioUrl2 = data.audioUrl2;
      }
      if (data?.duration) {
        updatedStatus.duration = data.duration;
      }
      if (data?.title) {
        updatedStatus.title = data.title;
      }

      taskStatusStore.set(taskId, updatedStatus);

      console.log(`[Music Callback] Task ${taskId} updated to status: ${stage}`);

      // Log audio URLs when available
      if (updatedStatus.audioUrl) {
        console.log(`[Music Callback] Audio URL 1 available: ${updatedStatus.audioUrl}`);
      }
      if (updatedStatus.audioUrl2) {
        console.log(`[Music Callback] Audio URL 2 available: ${updatedStatus.audioUrl2}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Callback received',
      taskId,
      stage,
    });
  } catch (error: any) {
    console.error('[Music Callback] Error processing callback:', error.message);
    return NextResponse.json(
      { error: 'Failed to process callback', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint to manually check callback status (for debugging)
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get('taskId');

    if (taskId) {
      const status = taskStatusStore.get(taskId);
      return NextResponse.json({
        success: true,
        taskId,
        status: status || null,
      });
    }

    // Return all tasks
    const allTasks = Array.from(taskStatusStore.entries()).map(([id, status]) => ({
      taskId: id,
      ...status,
    }));

    return NextResponse.json({
      success: true,
      tasks: allTasks,
      count: allTasks.length,
    });
  } catch (error: any) {
    console.error('[Music Callback] Error fetching status:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch status', details: error.message },
      { status: 500 }
    );
  }
}
