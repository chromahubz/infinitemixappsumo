import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { genre, count } = await req.json();

    const API_KEY = process.env.NEXT_PUBLIC_KIE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Generate genre-specific prompts
    const genrePrompts: Record<string, string> = {
      lofi: 'calm lofi hip hop with gentle piano and smooth beats',
      chillhop: 'relaxing chillhop with jazzy elements and laid-back rhythm',
      ambient: 'peaceful ambient soundscape with ethereal tones',
      'lo-fi hip hop': 'mellow lo-fi hip hop with vinyl crackle and warm bass',
      'study beats': 'focused study beats with soft melody and repetitive rhythm',
      jazz: 'smooth jazz instrumental with saxophone and piano',
      'electronic': 'downtempo electronic music with atmospheric synths',
    };

    const prompt = genrePrompts[genre.toLowerCase()] || `relaxing ${genre} instrumental music`;

    // Generate multiple songs
    const songs = [];
    for (let i = 0; i < count; i++) {
      const response = await axios.post(
        'https://api.kie.ai/api/v1/generate',
        {
          prompt: `${prompt}, track ${i + 1}`,
          customMode: false,
          instrumental: true,
          model: 'V4_5',
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      songs.push({
        taskId: response.data.taskId,
        index: i,
      });
    }

    return NextResponse.json({ songs });
  } catch (error: any) {
    console.error('Music generation error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to generate music', details: error.response?.data || error.message },
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

    const API_KEY = process.env.NEXT_PUBLIC_KIE_API_KEY;

    const response = await axios.get(
      `https://api.kie.ai/api/v1/task/${taskId}`,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Status check error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to check status', details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
