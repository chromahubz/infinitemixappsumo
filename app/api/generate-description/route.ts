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
    // Each song starts where the previous ended minus the crossfade duration
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

      // For first song, add full duration
      // For subsequent songs, subtract crossfade because songs overlap
      if (index === 0) {
        currentTime += song.duration;
      } else {
        currentTime += song.duration - crossfadeDuration;
      }
    });

    // Generate description using Google Gemini
    const prompt = `Create a catchy YouTube video description for a ${genre} music mix.
The mix is ${Math.floor(totalDuration / 60)} minutes long and perfect for studying, working, or relaxing.
Write 2-3 engaging sentences that would attract viewers. Don't use hashtags.

IMPORTANT: Provide a single, ready-to-use description only. Do NOT include options like "Option 1" or "Option 2". Do NOT include any formatting labels or choices. Just write the description directly.`;

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

    // InfiniteMix branding
    const branding = `\n✨ This mix was expertly crafted with InfiniteMix - AI-powered music curation at its finest. Experience perfectly blended transitions and harmonically matched tracks for the ultimate listening experience.\n🎵 Create your own professional mixes at https://infinitemix.app`;

    // Combine description with branding and timestamps
    const fullDescription = `${description}${branding}\n\nTracklist:\n${timestamps.join('\n')}`;

    return NextResponse.json({
      description: fullDescription,
      timestamps,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorData = (error as { response?: { data?: unknown } }).response?.data;
    console.error('Description generation error:', errorData || errorMessage);
    return NextResponse.json(
      { error: 'Failed to generate description', details: errorData || errorMessage },
      { status: 500 }
    );
  }
}
