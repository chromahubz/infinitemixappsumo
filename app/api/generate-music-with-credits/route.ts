// app/api/generate-music-with-credits/route.ts - Generate music with credit checks

import { NextRequest, NextResponse } from 'next/server';
import { generateMusic, generateMusicPrompt } from '@/lib/kie-api';
import { taskStatusStore } from '@/lib/task-store';
import { getUserFromRequest, checkAndDeductCredits } from '@/lib/credits';

export async function POST(req: NextRequest) {
  try {
    const { genre, count } = await req.json();

    console.log(`[Generate Music] Starting generation for ${count} ${genre} tracks`);

    // 1. Try to get authenticated user (optional - backwards compatible)
    const userId = await getUserFromRequest(req);

    // 2. If user exists, check credits
    if (userId) {
      console.log(`[Generate Music] User ${userId} authenticated, checking credits`);

      // Check if user has enough credits for all tracks
      const creditCheck = await checkAndDeductCredits(userId, 'ai_music', count);

      if (!creditCheck.allowed) {
        console.log(`[Generate Music] Insufficient credits for user ${userId}`);
        return NextResponse.json(
          {
            error: creditCheck.warning || 'Insufficient AI credits',
            remaining: creditCheck.remaining,
            needed: count,
            upgradeMessage: 'Manual mixing is still unlimited! Or contact support to add more AI credits.',
          },
          { status: 402 } // 402 Payment Required
        );
      }

      console.log(`[Generate Music] Credits deducted. Remaining: ${creditCheck.remaining}`);
    } else {
      console.log(`[Generate Music] No user authenticated - allowing generation (backwards compat)`);
    }

    // 3. Generate multiple songs (same as before)
    const songs = [];
    for (let i = 0; i < count; i++) {
      const prompt = generateMusicPrompt(genre, i);

      const response = await generateMusic({
        customMode: false,
        instrumental: true,
        model: 'V5',
        prompt,
      });

      if (response.code === 200 && response.data?.taskId) {
        const taskId = response.data.taskId;

        taskStatusStore.set(taskId, {
          taskId,
          status: 'pending',
          genre,
          index: i,
        });

        songs.push({
          taskId,
          index: i,
          title: `Generating ${genre} track ${i + 1}...`,
        });

        console.log(`[Generate Music] Track ${i + 1}/${count} queued. Task ID: ${taskId}`);
      } else {
        console.error(`[Generate Music] Failed to queue track ${i + 1}:`, response.msg);

        // If generation fails, refund credits
        if (userId && i > 0) {
          // TODO: Implement credit refund for failed generations
          console.log(`[Generate Music] Should refund ${count - i} credits to user ${userId}`);
        }

        if (response.msg?.includes('insufficient') || response.msg?.includes('credits')) {
          throw new Error(`Insufficient credits on Kie.ai account. Please visit https://kie.ai/pricing to add credits. (Generated ${i}/${count} tracks successfully)`);
        }

        throw new Error(`Failed to generate track ${i + 1}: ${response.msg}`);
      }
    }

    // 4. Return success with credit info
    return NextResponse.json({
      success: true,
      songs,
      count: songs.length,
      message: `Successfully queued ${songs.length} tracks for generation`,
      ...(userId && {
        creditsUsed: count,
        creditsRemaining: (await checkAndDeductCredits(userId, 'ai_music', 0)).remaining
      })
    });

  } catch (error: any) {
    console.error('[Generate Music] Error:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to generate music',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
