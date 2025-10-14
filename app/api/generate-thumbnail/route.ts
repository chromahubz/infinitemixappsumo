import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { prompt, genre } = await req.json();

    const API_KEY = process.env.NEXT_PUBLIC_FIREWORKS_API_KEY || 'fw_3ZMLwprQ7PjXK1j9a8MmrsgU';

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Default prompt if not provided
    const finalPrompt = prompt || `Aesthetic ${genre} music artwork, soft pastel colors, minimalist design, calming atmosphere, high quality, 16:9 aspect ratio`;

    console.log('Generating thumbnail with Fireworks AI:', finalPrompt);

    // Fireworks AI returns image as blob
    const response = await axios.post(
      'https://api.fireworks.ai/inference/v1/workflows/accounts/fireworks/models/flux-1-schnell-fp8/text_to_image',
      {
        prompt: finalPrompt,
        aspect_ratio: '16:9',
        guidance_scale: 3.5,
        num_inference_steps: 4,
      },
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

    // Save to temp file for URL access
    const filename = `thumbnail_${Date.now()}.png`;
    const filepath = path.join(process.cwd(), 'public', 'temp', filename);
    await writeFile(filepath, response.data);

    const imageUrl = `/temp/${filename}`;

    console.log('Thumbnail generated successfully');

    return NextResponse.json({
      url: imageUrl,
      base64: base64DataUrl,
    });
  } catch (error: any) {
    console.error('Thumbnail generation error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to generate thumbnail', details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
