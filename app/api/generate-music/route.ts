import { NextRequest, NextResponse } from 'next/server';
import { generateMusic, generateMusicMetadata } from '@/lib/kie-api';

// Store task status in memory (in production, use Redis or database)
const taskStatusStore = new Map<string, any>();

export async function POST(req: NextRequest) {
  try {
    const { genre, count } = await req.json();

    console.log(`[Generate Music] Starting generation for ${count} ${genre} tracks`);

    // Generate multiple songs
    const songs = [];
    for (let i = 0; i < count; i++) {
      const { style, title } = generateMusicMetadata(genre, i);

      const response = await generateMusic({
        customMode: true,
        instrumental: true,
        model: 'V5', // Use V5 for best quality
        style,
        title,
      });

      if (response.code === 200 && response.data?.taskId) {
        const taskId = response.data.taskId;

        // Store initial task status
        taskStatusStore.set(taskId, {
          taskId,
          status: 'pending',
          title,
          genre,
          index: i,
        });

        songs.push({
          taskId,
          index: i,
          title,
        });

        console.log(`[Generate Music] Track ${i + 1}/${count} queued. Task ID: ${taskId}`);
      } else {
        console.error(`[Generate Music] Failed to queue track ${i + 1}:`, response.msg);

        // Check for specific error messages
        if (response.msg?.includes('insufficient') || response.msg?.includes('credits')) {
          throw new Error(`Insufficient credits on Kie.ai account. Please visit https://kie.ai/pricing to add credits. (Generated ${i}/${count} tracks successfully)`);
        }

        throw new Error(`Failed to generate track ${i + 1}: ${response.msg}`);
      }
    }

    return NextResponse.json({
      success: true,
      songs,
      message: `${count} tracks queued for generation`
    });
  } catch (error: any) {
    console.error('[Generate Music] Error:', error.message);
    return NextResponse.json(
      { error: 'Failed to generate music', details: error.message },
      { status: 500 }
    );
  }
}

// Check status of music generation
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get('taskId');

    if (!taskId) {
      return NextResponse.json({ error: 'Task ID required' }, { status: 400 });
    }

    // Get status from in-memory store
    const taskStatus = taskStatusStore.get(taskId);

    if (!taskStatus) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      ...taskStatus,
    });
  } catch (error: any) {
    console.error('[Generate Music] Status check error:', error.message);
    return NextResponse.json(
      { error: 'Failed to check status', details: error.message },
      { status: 500 }
    );
  }
}

// Export task store for use in callback
export { taskStatusStore };
