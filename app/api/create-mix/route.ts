import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import axios from 'axios';

// Set FFmpeg path
if (ffmpegStatic) {
  // On Windows, ffmpegStatic may return a weird path like \ROOT\...
  // Use absolute path resolution
  const ffmpegPath = ffmpegStatic.includes('\\ROOT\\')
    ? path.resolve(process.cwd(), 'node_modules', 'ffmpeg-static', 'ffmpeg.exe')
    : ffmpegStatic;

  console.log('FFmpeg path:', ffmpegPath);
  ffmpeg.setFfmpegPath(ffmpegPath);
}

interface Song {
  url?: string;
  path?: string;
  title: string;
  duration: number;
}

export async function POST(req: NextRequest) {
  try {
    const { songs, thumbnail, playlistOrder } = await req.json();

    if (!songs || songs.length === 0) {
      return NextResponse.json({ error: 'No songs provided' }, { status: 400 });
    }

    console.log('Creating mix with playlist order:', playlistOrder);

    // Build song paths array in the order specified by playlistOrder (from analyzer)
    const songPaths: string[] = [];
    const orderedSongs = playlistOrder && playlistOrder.length > 0
      ? playlistOrder.map((filename: string) => songs.find((s: any) => s.filename === filename)).filter(Boolean)
      : songs;

    for (let i = 0; i < orderedSongs.length; i++) {
      const song: Song = orderedSongs[i];
      let songPath: string;

      if (song.url) {
        // Download from URL
        const response = await axios.get(song.url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        songPath = path.join(process.cwd(), 'public', 'temp', `song_${Date.now()}_${i}.mp3`);
        await writeFile(songPath, buffer);
      } else if (song.path) {
        // Use local file - need absolute path
        const fullPath = song.path.startsWith(process.cwd())
          ? song.path
          : path.join(process.cwd(), 'public', song.path);
        songPath = fullPath;
      } else {
        throw new Error(`Song ${i} has no URL or path`);
      }

      songPaths.push(songPath);
      console.log(`Added to mix (${i + 1}/${orderedSongs.length}): ${song.title || 'Unknown'} -> ${songPath}`);
    }

    // Download thumbnail
    let thumbnailPath: string;
    if (thumbnail.startsWith('data:')) {
      // Base64 image
      const base64Data = thumbnail.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      thumbnailPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}.png`);
      await writeFile(thumbnailPath, buffer);
    } else {
      // URL
      const response = await axios.get(thumbnail, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);
      thumbnailPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}.png`);
      await writeFile(thumbnailPath, buffer);
    }

    // Create output path
    const outputFilename = `mix_${Date.now()}.mp4`;
    const outputPath = path.join(process.cwd(), 'public', 'temp', outputFilename);

    // Build FFmpeg command with crossfades
    await new Promise<void>((resolve, reject) => {
      const command = ffmpeg();

      // Add thumbnail as looping input
      command.input(thumbnailPath).inputOptions(['-loop 1', '-framerate 1']);

      // Add all song inputs
      songPaths.forEach(songPath => {
        command.input(songPath);
      });

      // Build complex filter for crossfading
      let filterComplex = '';
      const crossfadeDuration = 5; // 5 seconds

      if (songPaths.length === 1) {
        // Single song, no crossfade needed
        filterComplex = '[1:a]anull[aout]';
      } else {
        // Multiple songs with crossfades
        for (let i = 0; i < songPaths.length; i++) {
          if (i === 0) {
            // First song
            filterComplex += `[${i + 1}:a]`;
          } else if (i === 1) {
            // Second song - create first crossfade
            filterComplex += `[${i + 1}:a]acrossfade=d=${crossfadeDuration}:c1=tri:c2=tri[a${i}];`;
          } else {
            // Subsequent songs
            filterComplex += `[a${i - 1}][${i + 1}:a]acrossfade=d=${crossfadeDuration}:c1=tri:c2=tri[a${i}];`;
          }
        }

        // Final output label
        const lastIndex = songPaths.length - 1;
        if (songPaths.length === 2) {
          filterComplex = filterComplex.replace('[a1];', '[aout]');
        } else {
          filterComplex = filterComplex.replace(`[a${lastIndex}];`, `[aout]`);
        }
      }

      command
        .complexFilter(filterComplex)
        .outputOptions([
          '-map 0:v',      // Map video from thumbnail
          '-map [aout]',   // Map final audio output
          '-c:v libx264',
          '-preset fast',
          '-pix_fmt yuv420p',
          '-c:a aac',
          '-b:a 192k',
          '-shortest'
        ])
        .output(outputPath)
        .on('start', (commandLine) => {
          console.log('FFmpeg command:', commandLine);
        })
        .on('progress', (progress) => {
          console.log('Processing:', progress.percent + '% done');
        })
        .on('end', () => {
          console.log('Mix creation completed');
          resolve();
        })
        .on('error', (err) => {
          console.error('FFmpeg error:', err.message);
          reject(err);
        })
        .run();
    });

    // Clean up temporary files
    try {
      for (const songPath of songPaths) {
        if (songPath.includes('temp')) {
          await unlink(songPath);
        }
      }
      await unlink(thumbnailPath);
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }

    return NextResponse.json({
      success: true,
      mixUrl: `/temp/${outputFilename}`,
    });
  } catch (error: any) {
    console.error('Mix creation error:', error.message);
    return NextResponse.json(
      { error: 'Failed to create mix', details: error.message },
      { status: 500 }
    );
  }
}
