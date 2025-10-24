import { NextRequest, NextResponse } from 'next/server';
import { taskStatusStore } from '@/lib/task-store';

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

    console.log('[Music Callback] ===== FULL CALLBACK PAYLOAD =====');
    console.log(JSON.stringify(payload, null, 2));
    console.log('[Music Callback] ===================================');

    // Kie.ai might send different structures, handle all cases
    const taskId = payload.taskId || payload.task_id || payload.id;
    const stage = payload.stage || payload.status;
    const data = payload.data || payload;

    if (!taskId) {
      console.error('[Music Callback] Missing taskId in callback. Full payload:', payload);
      return NextResponse.json({ error: 'Missing taskId' }, { status: 400 });
    }

    // Get existing task status
    const existingStatus = taskStatusStore.get(taskId);

    if (!existingStatus) {
      console.warn(`[Music Callback] Task ${taskId} not found in store, creating new entry`);
      // Still update the store with the callback data
      taskStatusStore.set(taskId, {
        taskId,
        status: stage || 'complete',
        ...data,
        // Try multiple possible field names for audio URLs
        audioUrl: data.audioUrl || data.audio_url || data.url || payload.audioUrl,
        audioUrl2: data.audioUrl2 || data.audio_url_2 || payload.audioUrl2,
        duration: data.duration || payload.duration,
        title: data.title || payload.title,
      });
    } else {
      // Update task status based on callback
      const updatedStatus = {
        ...existingStatus,
        status: stage || 'complete',
        ...data,
      };

      // Extract audio URLs from callback data - try multiple field names
      const audioUrl = data?.audioUrl || data?.audio_url || data?.url || payload.audioUrl;
      const audioUrl2 = data?.audioUrl2 || data?.audio_url_2 || payload.audioUrl2;

      if (audioUrl) {
        updatedStatus.audioUrl = audioUrl;
        console.log(`[Music Callback] ✅ Found Audio URL 1: ${audioUrl}`);
      }
      if (audioUrl2) {
        updatedStatus.audioUrl2 = audioUrl2;
        console.log(`[Music Callback] ✅ Found Audio URL 2: ${audioUrl2}`);
      }
      if (data?.duration || payload.duration) {
        updatedStatus.duration = data.duration || payload.duration;
      }
      if (data?.title || payload.title) {
        updatedStatus.title = data.title || payload.title;
      }

      taskStatusStore.set(taskId, updatedStatus);

      console.log(`[Music Callback] Task ${taskId} updated to status: ${stage}`);
      console.log(`[Music Callback] Updated task data:`, JSON.stringify(updatedStatus, null, 2));
    }

    return NextResponse.json({
      success: true,
      message: 'Callback received',
      taskId,
      stage,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Music Callback] Error processing callback:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to process callback', details: errorMessage },
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
    const allTasks = Array.from(taskStatusStore.entries()).map(([, status]) => ({
      ...status,
    }));

    return NextResponse.json({
      success: true,
      tasks: allTasks,
      count: allTasks.length,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Music Callback] Error fetching status:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to fetch status', details: errorMessage },
      { status: 500 }
    );
  }
}
