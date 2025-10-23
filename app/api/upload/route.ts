import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { cleanupOldFiles } from '@/lib/cleanup';

export async function POST(req: NextRequest) {
  try {
    // Run cleanup in background (non-blocking) - delete files older than 24 hours
    cleanupOldFiles('/tmp', 24 * 60 * 60 * 1000).catch((error) => {
      console.error('[Upload] Background cleanup error:', error);
    });

    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    const uploadedFiles = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Save to /tmp directory (Vercel-compatible)
      const filename = `${Date.now()}_${file.name}`;
      const filepath = path.join('/tmp', filename);

      await writeFile(filepath, buffer);

      uploadedFiles.push({
        filename,
        originalName: file.name,
        size: file.size,
        type: file.type,
        path: filepath, // Full path for backend processing
      });
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('File upload error:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to upload files', details: errorMessage },
      { status: 500 }
    );
  }
}
