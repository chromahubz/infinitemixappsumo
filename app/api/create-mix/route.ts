import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import axios from 'axios';

// Increase timeout for processing (5 minutes)
export const maxDuration = 300;

// Set FFmpeg path - construct direct path to binary if ffmpeg-static path is invalid
if (ffmpegStatic && !ffmpegStatic.includes('/ROOT/') && !ffmpegStatic.includes('\\ROOT\\')) {
  console.log('Using ffmpeg-static path:', ffmpegStatic);
  ffmpeg.setFfmpegPath(ffmpegStatic);
} else {
  // Construct path to ffmpeg binary in node_modules
  const ffmpegPath = path.join(process.cwd(), 'node_modules', 'ffmpeg-static', 'ffmpeg');
  console.log('Using direct path to ffmpeg-static binary:', ffmpegPath);
  ffmpeg.setFfmpegPath(ffmpegPath);
}

interface Song {
  url?: string;
  path?: string;
  title: string;
  duration: number;
}

interface AudioEffectSettings {
  preset: 'none' | 'bass-boost' | 'vintage' | 'club-reverb' | 'bathroom-reverb' | 'concert-hall';
}

// Helper function to generate audio effect filter based on preset
function generateAudioEffectFilter(preset: AudioEffectSettings['preset']): string {
  if (preset === 'none') return '';

  switch (preset) {
    case 'bass-boost':
      // Boost frequencies below 150Hz by +10dB
      return ',equalizer=f=60:width_type=o:width=2:g=10,equalizer=f=100:width_type=o:width=2:g=8';

    case 'vintage':
      // Simulate phone/lo-fi filter: cut lows (<300Hz) and highs (>3500Hz)
      return ',highpass=f=300,lowpass=f=3500,equalizer=f=1000:width_type=o:width=2:g=-2';

    case 'club-reverb':
      // Large club reverb with moderate wet/dry mix
      return ',aecho=0.8:0.88:60:0.4,aecho=0.8:0.88:120:0.3';

    case 'bathroom-reverb':
      // Tight reverb space
      return ',aecho=0.8:0.9:40:0.5,aecho=0.8:0.9:80:0.4';

    case 'concert-hall':
      // Large hall reverb with long decay
      return ',aecho=0.8:0.85:100:0.3,aecho=0.8:0.85:200:0.25,aecho=0.8:0.85:300:0.2';

    default:
      return '';
  }
}

export async function POST(req: NextRequest) {
  try {
    const { songs, thumbnail, thumbnails, playlistOrder, crossfadeDuration = 5, audioEffects } = await req.json();

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

    // Download thumbnail(s) - supports images and videos
    const thumbnailPaths: string[] = [];
    const thumbnailTypes: string[] = []; // Track if it's video or image

    if (thumbnails && thumbnails.length > 0) {
      // Multiple thumbnails - flexible count, will repeat last if fewer than songs
      for (let i = 0; i < thumbnails.length; i++) {
        const thumb = thumbnails[i];
        const isVideo = thumb.startsWith('data:video/');
        const isImage = thumb.startsWith('data:image/');

        let fileExt = 'png';
        let base64Data = thumb;

        if (isVideo) {
          // Extract video type and convert to appropriate extension
          const videoType = thumb.match(/data:video\/(\w+);/)?.[1] || 'mp4';
          fileExt = videoType === 'quicktime' ? 'mov' : videoType;
          base64Data = thumb.replace(/^data:video\/\w+;base64,/, '');
          thumbnailTypes.push('video');
        } else if (isImage) {
          base64Data = thumb.replace(/^data:image\/\w+;base64,/, '');
          thumbnailTypes.push('image');
        } else {
          // Assume image if no data: prefix
          thumbnailTypes.push('image');
        }

        const buffer = Buffer.from(base64Data, 'base64');
        const thumbPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}_${i}.${fileExt}`);
        await writeFile(thumbPath, buffer);
        thumbnailPaths.push(thumbPath);
      }

      // If fewer thumbnails than songs, repeat the last one
      while (thumbnailPaths.length < orderedSongs.length) {
        thumbnailPaths.push(thumbnailPaths[thumbnailPaths.length - 1]);
        thumbnailTypes.push(thumbnailTypes[thumbnailTypes.length - 1]);
      }
    } else {
      // Single thumbnail
      let thumbnailPath: string;
      const isVideo = thumbnail.startsWith('data:video/');

      if (thumbnail.startsWith('data:')) {
        let fileExt = 'png';
        let base64Data = thumbnail;

        if (isVideo) {
          const videoType = thumbnail.match(/data:video\/(\w+);/)?.[1] || 'mp4';
          fileExt = videoType === 'quicktime' ? 'mov' : videoType;
          base64Data = thumbnail.replace(/^data:video\/\w+;base64,/, '');
          thumbnailTypes.push('video');
        } else {
          base64Data = thumbnail.replace(/^data:image\/\w+;base64,/, '');
          thumbnailTypes.push('image');
        }

        const buffer = Buffer.from(base64Data, 'base64');
        thumbnailPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}.${fileExt}`);
        await writeFile(thumbnailPath, buffer);
      } else {
        const response = await axios.get(thumbnail, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        thumbnailPath = path.join(process.cwd(), 'public', 'temp', `thumbnail_${Date.now()}.png`);
        await writeFile(thumbnailPath, buffer);
        thumbnailTypes.push('image');
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
        // Single thumbnail mode
        const isVideo = thumbnailTypes[0] === 'video';

        if (isVideo) {
          // For videos, enable looping with stream_loop
          command.input(thumbnailPaths[0]).inputOptions(['-stream_loop -1']);
        } else {
          // For images, use loop with framerate
          command.input(thumbnailPaths[0]).inputOptions(['-loop 1', '-framerate 1']);
        }

        songPaths.forEach(songPath => {
          command.input(songPath);
        });

        let filterComplex = '';

        // Audio crossfading
        if (songPaths.length === 1 || crossfadeDuration === 0) {
          // Single song or no crossfade - check if audio effects are enabled
          const effectFilter = generateAudioEffectFilter(audioEffects?.preset || 'none');
          if (effectFilter) {
            filterComplex = `[1:a]anull${effectFilter}[aout]`;
          } else {
            filterComplex = '[1:a]anull[aout]';
          }
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
          // Apply audio effects if enabled
          const effectFilter = generateAudioEffectFilter(audioEffects?.preset || 'none');
          const finalLabel = effectFilter ? '[apre]' : '[aout]';

          if (songPaths.length === 2) {
            filterComplex = filterComplex.replace('[a1];', `${finalLabel};`);
          } else {
            filterComplex = filterComplex.replace(`[a${lastIndex}];`, `${finalLabel};`);
          }

          // Add audio effect filter if present
          if (effectFilter) {
            filterComplex += `[apre]anull${effectFilter}[aout];`;
          }
        }

        command
          .complexFilter(filterComplex)
          .outputOptions([
            '-map 0:v',
            '-map [aout]',
            '-c:v libx264',
            '-preset ultrafast',
            '-pix_fmt yuv420p',
            '-c:a aac',
            '-b:a 192k',
            '-shortest'
          ])
          .output(outputPath);
      } else {
        // Multiple thumbnails mode with video transitions
        // Add all thumbnails and songs as inputs
        thumbnailPaths.forEach((thumbPath, idx) => {
          const isVideo = thumbnailTypes[idx] === 'video';
          if (isVideo) {
            // For videos, enable looping
            command.input(thumbPath).inputOptions(['-stream_loop -1']);
          } else {
            // For images, use loop with framerate
            command.input(thumbPath).inputOptions(['-loop 1', '-framerate 1']);
          }
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
          // Single song or no crossfade - check if audio effects are enabled
          const effectFilter = generateAudioEffectFilter(audioEffects?.preset || 'none');
          if (effectFilter) {
            audioFilter = `[${numThumbs}:a]anull${effectFilter}[aout];`;
          } else {
            audioFilter = `[${numThumbs}:a]anull[aout];`;
          }
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

          // Apply audio effects if enabled
          const effectFilter = generateAudioEffectFilter(audioEffects?.preset || 'none');
          const finalLabel = effectFilter ? '[apre]' : '[aout]';

          if (numSongs === 2) {
            audioFilter = audioFilter.replace('[a1];', `${finalLabel};`);
          } else {
            audioFilter = audioFilter.replace(`[a${numSongs - 1}];`, `${finalLabel};`);
          }

          // Add audio effect filter if present
          if (effectFilter) {
            audioFilter += `[apre]anull${effectFilter}[aout];`;
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
            '-preset ultrafast',
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
