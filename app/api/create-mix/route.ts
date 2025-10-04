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
    const { songs, thumbnail, thumbnails, playlistOrder, crossfadeDuration = 5 } = await req.json();

    if (!songs || songs.length === 0) {
      return NextResponse.json({ error: 'No songs provided' }, { status: 400 });
    }

    console.log('Creating mix with playlist order:', playlistOrder);
    console.log('Received songs:', songs.map((s: any) => ({ filename: s.filename, title: s.title, path: s.path })));
    console.log('Multiple thumbnails mode:', thumbnails ? 'enabled' : 'disabled');

    // Build song paths array in the order specified by playlistOrder (from analyzer)
    const songPaths: string[] = [];
    const orderedSongs = playlistOrder && playlistOrder.length > 0
      ? playlistOrder.map((filename: string) => {
          const found = songs.find((s: any) => s.filename === filename);
          console.log(`Looking for ${filename}, found:`, found ? { title: found.title, path: found.path } : 'NOT FOUND');
          return found;
        }).filter(Boolean)
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

    // Download thumbnail(s)
    const thumbnailPaths: string[] = [];
    if (thumbnails && thumbnails.length > 0) {
      // Multiple thumbnails - one per song
      for (let i = 0; i < thumbnails.length; i++) {
        const thumb = thumbnails[i];
        const base64Data = thumb.startsWith('data:')
          ? thumb.replace(/^data:image\/\w+;base64,/, '')
          : thumb;
        const buffer = Buffer.from(base64Data, 'base64');
        const thumbPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}_${i}.png`);
        await writeFile(thumbPath, buffer);
        thumbnailPaths.push(thumbPath);
      }
    } else {
      // Single thumbnail
      let thumbnailPath: string;
      if (thumbnail.startsWith('data:')) {
        const base64Data = thumbnail.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        thumbnailPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}.png`);
        await writeFile(thumbnailPath, buffer);
      } else {
        const response = await axios.get(thumbnail, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        thumbnailPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}.png`);
        await writeFile(thumbnailPath, buffer);
      }
      thumbnailPaths.push(thumbnailPath);
    }

    // Create output path
    const outputFilename = `mix_${Date.now()}.mp4`;
    const outputPath = path.join(process.cwd(), 'public', 'temp', outputFilename);

    // Build FFmpeg command with crossfades
    await new Promise<void>((resolve, reject) => {
      const command = ffmpeg();

      if (thumbnailPaths.length === 1) {
        // Single thumbnail mode (original behavior)
        command.input(thumbnailPaths[0]).inputOptions(['-loop 1', '-framerate 1']);

        songPaths.forEach(songPath => {
          command.input(songPath);
        });

        let filterComplex = '';

        if (songPaths.length === 1 || crossfadeDuration === 0) {
          filterComplex = '[1:a]anull[aout]';
        } else {
          for (let i = 0; i < songPaths.length; i++) {
            if (i === 0) {
              filterComplex += `[${i + 1}:a]`;
            } else if (i === 1) {
              filterComplex += `[${i + 1}:a]acrossfade=d=${crossfadeDuration}:c1=tri:c2=tri[a${i}];`;
            } else {
              filterComplex += `[a${i - 1}][${i + 1}:a]acrossfade=d=${crossfadeDuration}:c1=tri:c2=tri[a${i}];`;
            }
          }

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
            '-map 0:v',
            '-map [aout]',
            '-c:v libx264',
            '-preset fast',
            '-pix_fmt yuv420p',
            '-c:a aac',
            '-b:a 192k',
            '-shortest'
          ])
          .output(outputPath);
      } else {
        // Multiple thumbnails mode with video transitions
        // Add all thumbnails and songs as inputs
        thumbnailPaths.forEach(thumbPath => {
          command.input(thumbPath).inputOptions(['-loop 1', '-framerate 1']);
        });

        songPaths.forEach(songPath => {
          command.input(songPath);
        });

        // Build complex filter for audio crossfades and video fades
        let filterComplex = '';
        const numSongs = songPaths.length;
        const numThumbs = thumbnailPaths.length;

        // Audio crossfading
        let audioFilter = '';
        if (numSongs === 1 || crossfadeDuration === 0) {
          audioFilter = `[${numThumbs}:a]anull[aout];`;
        } else {
          for (let i = 0; i < numSongs; i++) {
            const audioIndex = numThumbs + i;
            if (i === 0) {
              audioFilter += `[${audioIndex}:a]`;
            } else if (i === 1) {
              audioFilter += `[${audioIndex}:a]acrossfade=d=${crossfadeDuration}:c1=tri:c2=tri[a${i}];`;
            } else {
              audioFilter += `[a${i - 1}][${audioIndex}:a]acrossfade=d=${crossfadeDuration}:c1=tri:c2=tri[a${i}];`;
            }
          }

          if (numSongs === 2) {
            audioFilter = audioFilter.replace('[a1];', '[aout];');
          } else {
            audioFilter = audioFilter.replace(`[a${numSongs - 1}];`, `[aout];`);
          }
        }

        // Video fading - create segments with crossfade transitions
        let videoFilter = '';
        for (let i = 0; i < numThumbs; i++) {
          const songDuration = orderedSongs[i]?.duration || 180;
          const segmentDuration = i === 0 ? songDuration : songDuration - crossfadeDuration;

          // Trim each thumbnail to song duration
          videoFilter += `[${i}:v]trim=duration=${segmentDuration},setpts=PTS-STARTPTS[v${i}];`;
        }

        // Apply xfade transitions between segments
        if (numThumbs > 1 && crossfadeDuration > 0) {
          // First transition
          const firstDuration = orderedSongs[0]?.duration || 180;
          videoFilter += `[v0][v1]xfade=transition=fade:duration=${crossfadeDuration}:offset=${firstDuration - crossfadeDuration}[vt1];`;

          // Subsequent transitions
          for (let i = 2; i < numThumbs; i++) {
            const prevDuration = orderedSongs.slice(0, i).reduce((sum: number, s: Song) => sum + s.duration, 0) - (i * crossfadeDuration);
            videoFilter += `[vt${i - 1}][v${i}]xfade=transition=fade:duration=${crossfadeDuration}:offset=${prevDuration - crossfadeDuration}[vt${i}];`;
          }

          filterComplex = audioFilter + videoFilter;
        } else {
          // No transitions, just concatenate
          videoFilter += numThumbs > 1 ? `${Array.from({ length: numThumbs }, (_, i) => `[v${i}]`).join('')}concat=n=${numThumbs}:v=1:a=0[vout];` : '[v0]null[vout];';
          filterComplex = audioFilter + videoFilter;
        }

        const finalVideoLabel = numThumbs > 1 && crossfadeDuration > 0 ? `[vt${numThumbs - 1}]` : '[vout]';

        command
          .complexFilter(filterComplex)
          .outputOptions([
            `-map ${finalVideoLabel}`,
            '-map [aout]',
            '-c:v libx264',
            '-preset fast',
            '-pix_fmt yuv420p',
            '-c:a aac',
            '-b:a 192k'
          ])
          .output(outputPath);
      }

      command
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
      for (const thumbPath of thumbnailPaths) {
        await unlink(thumbPath);
      }
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
