import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { cleanupOldFiles } from '@/lib/cleanup';

export async function POST(req: NextRequest) {
  try {
    // Run cleanup in background (non-blocking) - delete files older than 24 hours
    cleanupOldFiles('temp', 24 * 60 * 60 * 1000).catch((error) => {
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

      // Save to public/temp directory
      const filename = `${Date.now()}_${file.name}`;
      const filepath = path.join(process.cwd(), 'public', 'temp', filename);

      await writeFile(filepath, buffer);

      uploadedFiles.push({
        filename,
        originalName: file.name,
        size: file.size,
        type: file.type,
        path: `/temp/${filename}`,
      });
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
    });
  } catch (error: any) {
    console.error('File upload error:', error.message);
    return NextResponse.json(
      { error: 'Failed to upload files', details: error.message },
      { status: 500 }
    );
  }
}
