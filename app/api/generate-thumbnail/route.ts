import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { prompt, genre, seed } = await req.json();

    const API_KEY = process.env.NEXT_PUBLIC_FIREWORKS_API_KEY || 'fw_3ZMLwprQ7PjXK1j9a8MmrsgU';

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Default prompt if not provided
    const finalPrompt = prompt || `Aesthetic ${genre} music artwork, soft pastel colors, minimalist design, calming atmosphere, high quality, 16:9 aspect ratio`;

    // Use provided seed or generate a random one
    const finalSeed = seed !== undefined ? seed : Math.floor(Math.random() * 1000000);

    console.log('Generating thumbnail with Fireworks AI:', finalPrompt, 'Seed:', finalSeed);

    // Fireworks AI returns image as blob
    const requestBody: Record<string, string | number> = {
      prompt: finalPrompt,
      aspect_ratio: '16:9',
      guidance_scale: 3.5,
      num_inference_steps: 4,
      seed: finalSeed,
    };

    const response = await axios.post(
      'https://api.fireworks.ai/inference/v1/workflows/accounts/fireworks/models/flux-1-schnell-fp8/text_to_image',
      requestBody,
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'image/png',
        },
        responseType: 'arraybuffer', // Important: Get binary data
      }
    );

    // Convert arraybuffer to base64
    const base64Image = Buffer.from(response.data).toString('base64');
    const base64DataUrl = `data:image/png;base64,${base64Image}`;

    console.log('Thumbnail generated successfully');

    // On Vercel, return base64 only (no file storage needed)
    return NextResponse.json({
      base64: base64DataUrl,
      url: base64DataUrl, // Use base64 as URL for compatibility
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorData = (error as { response?: { data?: unknown } }).response?.data;
    console.error('Thumbnail generation error:', errorData || errorMessage);
    return NextResponse.json(
      { error: 'Failed to generate thumbnail', details: errorData || errorMessage },
      { status: 500 }
    );
  }
}
