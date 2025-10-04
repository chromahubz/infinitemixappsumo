import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface Song {
  title: string;
  duration: number;
}

export async function POST(req: NextRequest) {
  try {
    const { songs, genre, totalDuration, crossfadeDuration = 5 } = await req.json();

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Generate timestamps accounting for crossfades
    const timestamps: string[] = [];
    let currentTime = 0;

    songs.forEach((song: Song, index: number) => {
      const hours = Math.floor(currentTime / 3600);
      const minutes = Math.floor((currentTime % 3600) / 60);
      const seconds = Math.floor(currentTime % 60);

      const timeStr = hours > 0
        ? `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        : `${minutes}:${seconds.toString().padStart(2, '0')}`;

      timestamps.push(`${timeStr} - ${song.title}`);

      // Add duration minus crossfade (except for first song which has no previous crossfade)
      currentTime += song.duration - (index > 0 ? crossfadeDuration : 0);
    });

    // Generate description using Google Gemini
    const prompt = `Create a catchy YouTube video description for a ${genre} music mix.
The mix is ${Math.floor(totalDuration / 60)} minutes long and perfect for studying, working, or relaxing.
Write 2-3 engaging sentences that would attract viewers. Don't use hashtags.`;

    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY,
        },
      }
    );

    const description = response.data.candidates[0].content.parts[0].text;

    // Combine description with timestamps
    const fullDescription = `${description}\n\nTracklist:\n${timestamps.join('\n')}`;

    return NextResponse.json({
      description: fullDescription,
      timestamps,
    });
  } catch (error: any) {
    console.error('Description generation error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to generate description', details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
