import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { prompt, genre } = await req.json();

    const API_KEY = process.env.NEXT_PUBLIC_TOGETHER_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Default prompt if not provided
    const finalPrompt = prompt || `Aesthetic ${genre} music artwork, soft pastel colors, minimalist design, calming atmosphere, high quality, 16:9 aspect ratio`;

    const response = await axios.post(
      'https://api.together.xyz/v1/images/generations',
      {
        model: 'black-forest-labs/FLUX.1-schnell-Free',
        prompt: finalPrompt,
        width: 1792,
        height: 1008,
        steps: 4,
        n: 1,
        response_format: 'url',
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const imageUrl = response.data.data[0].url;

    // Download image and convert to base64 for storage
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const base64Image = Buffer.from(imageResponse.data).toString('base64');

    return NextResponse.json({
      url: imageUrl,
      base64: `data:image/png;base64,${base64Image}`,
    });
  } catch (error: any) {
    console.error('Thumbnail generation error:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to generate thumbnail', details: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
