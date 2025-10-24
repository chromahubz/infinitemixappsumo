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

    // Kie.ai sends: { code, data: { callbackType, data: [...], task_id }, msg }
    const taskId = payload.data?.task_id || payload.taskId || payload.task_id || payload.id;
    const callbackType = payload.data?.callbackType;
    const songsData = payload.data?.data || []; // Array of song objects

    if (!taskId) {
      console.error('[Music Callback] Missing taskId in callback. Full payload:', payload);
      return NextResponse.json({ error: 'Missing taskId' }, { status: 400 });
    }

    console.log(`[Music Callback] Task ID: ${taskId}, Callback Type: ${callbackType}`);
    console.log(`[Music Callback] Songs in callback: ${songsData.length}`);

    // Get existing task status
    const existingStatus = taskStatusStore.get(taskId);

    // Extract audio URLs from the songs array (Kie.ai sends 2 variations)
    let audioUrl = null;
    let audioUrl2 = null;
    let duration = null;
    let title = null;

    // Find songs with audio_url (completed songs)
    const completedSongs = songsData.filter((song: any) => song.audio_url);

    if (completedSongs.length > 0) {
      audioUrl = completedSongs[0].audio_url;
      duration = completedSongs[0].duration;
      title = completedSongs[0].title;
      console.log(`[Music Callback] ✅ Found Audio URL 1: ${audioUrl}`);
    }

    if (completedSongs.length > 1) {
      audioUrl2 = completedSongs[1].audio_url;
      console.log(`[Music Callback] ✅ Found Audio URL 2: ${audioUrl2}`);
    }

    // Determine status based on callbackType
    let status = 'pending';
    if (callbackType === 'complete') {
      status = 'complete';
    } else if (callbackType === 'first') {
      status = 'first';
    } else if (callbackType === 'text') {
      status = 'text';
    }

    if (!existingStatus) {
      console.warn(`[Music Callback] Task ${taskId} not found in store, creating new entry`);
      taskStatusStore.set(taskId, {
        taskId,
        status,
        audioUrl,
        audioUrl2,
        duration,
        title,
      });
    } else {
      // Update task status
      const updatedStatus = {
        ...existingStatus,
        status,
      };

      if (audioUrl) updatedStatus.audioUrl = audioUrl;
      if (audioUrl2) updatedStatus.audioUrl2 = audioUrl2;
      if (duration) updatedStatus.duration = duration;
      if (title) updatedStatus.title = title;

      taskStatusStore.set(taskId, updatedStatus);

      console.log(`[Music Callback] Task ${taskId} updated to status: ${status}`);
      console.log(`[Music Callback] Updated task data:`, JSON.stringify(updatedStatus, null, 2));
    }

    return NextResponse.json({
      success: true,
      message: 'Callback received',
      taskId,
      callbackType,
      status,
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
