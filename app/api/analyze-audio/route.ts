import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { parseFile } from 'music-metadata';
import { analyzeAudio } from '@/lib/audio-analyzer-server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Save file temporarily
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const tempPath = path.join(process.cwd(), 'public', 'temp', `temp_${Date.now()}_${file.name}`);
    await writeFile(tempPath, buffer);

    try {
      // Extract metadata
      const metadata = await parseFile(tempPath);

      // Analyze audio using our analyzer (based on songkeybpmanalyzer logic)
      const audioAnalysis = await analyzeAudio(tempPath, metadata);

      const analysis = {
        title: metadata.common.title || file.name.replace(/\.[^/.]+$/, ''),
        artist: metadata.common.artist || 'Unknown',
        duration: metadata.format.duration || 0,
        bpm: audioAnalysis.bpm,
        key: audioAnalysis.key,
        camelotKey: audioAnalysis.camelotKey,
        energy: audioAnalysis.energy,
        filename: file.name,
      };

      // Clean up temp file
      await unlink(tempPath);

      return NextResponse.json(analysis);
    } catch (error) {
      // Clean up temp file on error
      try {
        await unlink(tempPath);
      } catch {}
      throw error;
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Audio analysis error:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to analyze audio', details: errorMessage },
      { status: 500 }
    );
  }
}
