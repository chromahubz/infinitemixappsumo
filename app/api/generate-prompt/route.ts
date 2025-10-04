import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { genre } = await req.json();

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const systemPrompt = `Generate a creative and detailed image prompt for a ${genre} music mix thumbnail. The prompt should describe visual elements, colors, mood, and aesthetic that would make an eye-catching YouTube or music platform thumbnail. Keep it to 2-3 sentences maximum. Focus on visual details that work well with AI image generation.`;

    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
      {
        contents: [{
          parts: [{
            text: systemPrompt
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

    const prompt = response.data.candidates[0].content.parts[0].text;

    return NextResponse.json({ prompt });
  } catch (error: any) {
    console.error('Prompt generation error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to generate prompt', details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
