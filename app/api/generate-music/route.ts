import { NextRequest, NextResponse } from 'next/server';
import { generateMusic, generateMusicPrompt } from '@/lib/kie-api';
import { taskStatusStore } from '@/lib/task-store';

export async function POST(req: NextRequest) {
  try {
    const { genre, count } = await req.json();

    console.log(`[Generate Music] Starting generation for ${count} ${genre} tracks`);

    // Generate multiple songs
    const songs = [];
    for (let i = 0; i < count; i++) {
      const prompt = generateMusicPrompt(genre, i);

      const response = await generateMusic({
        customMode: false, // Let Kie.ai generate unique titles
        instrumental: true,
        model: 'V5', // Use V5 for best quality
        prompt,
      });

      if (response.code === 200 && response.data?.taskId) {
        const taskId = response.data.taskId;

        // Store initial task status (title will come from Kie.ai callback)
        taskStatusStore.set(taskId, {
          taskId,
          status: 'pending',
          genre,
          index: i,
        });

        songs.push({
          taskId,
          index: i,
          title: `Generating ${genre} track ${i + 1}...`, // Temporary title
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
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Generate Music] Error:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to generate music', details: errorMessage },
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
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Generate Music] Status check error:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to check status', details: errorMessage },
      { status: 500 }
    );
  }
}
