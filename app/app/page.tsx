'use client';

import { useState } from 'react';
import { Song } from '@/lib/types';
import ModeSelector from '@/components/ModeSelector';
import GenreSelector from '@/components/GenreSelector';
import DurationSelector from '@/components/DurationSelector';
import CrossfadeSelector from '@/components/CrossfadeSelector';
import FileUploader from '@/components/FileUploader';
import PlaylistEditor from '@/components/PlaylistEditor';
import ThumbnailGenerator from '@/components/ThumbnailGenerator';
import AudioEffects, { AudioEffectSettings } from '@/components/AudioEffects';
import ProgressTracker from '@/components/ProgressTracker';
import DescriptionPanel from '@/components/DescriptionPanel';
import AudioAnalyzer from '@/components/AudioAnalyzer';
import { Download, Sparkles } from 'lucide-react';
import axios from 'axios';
import { sortSongsForMix } from '@/lib/song-sorter';

export default function Home() {
  const [mode, setMode] = useState<'ai' | 'manual'>('ai');
  const [genre, setGenre] = useState('Lofi');
  const [audioEffects, setAudioEffects] = useState<AudioEffectSettings>({
    preset: 'none',
  });
  const [duration, setDuration] = useState(30);
  const [crossfadeDuration, setCrossfadeDuration] = useState(5);
  const [skipAnalysis, setSkipAnalysis] = useState(false);
  const [videoFormat, setVideoFormat] = useState<'original' | 'youtube' | 'tiktok'>('original');
  const [songs, setSongs] = useState<Song[]>([]);
  const [thumbnail, setThumbnail] = useState('');
  const [thumbnailBase64, setThumbnailBase64] = useState('');
  const [thumbnails, setThumbnails] = useState<Array<{ url: string; base64: string }>>([]);
  const [mixUrl, setMixUrl] = useState('');
  const [description, setDescription] = useState('');
  const [stage, setStage] = useState<'idle' | 'analyzing' | 'generating' | 'mixing' | 'complete'>('idle');
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1); // Track highest step unlocked for navigation
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [mixPlaylist, setMixPlaylist] = useState<string[]>([]);
  const [analysisProgress, setAnalysisProgress] = useState({ current: 0, total: 0, message: '' });
  const [aiGeneratedSongsWithUrls, setAiGeneratedSongsWithUrls] = useState<Song[]>([]); // Store AI songs with URLs before analysis
  const [showCrossfade, setShowCrossfade] = useState(false);

  // Helper to navigate to a step and update max reached
  const goToStep = (step: number) => {
    setCurrentStep(step);
    if (step > maxStepReached) {
      setMaxStepReached(step);
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    setUploadedFiles(files);

    if (skipAnalysis) {
      // Skip analysis - get actual durations without analysis
      setStage('analyzing');
      const simpleSongs: Song[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Get actual audio duration
        const duration = await new Promise<number>((resolve) => {
          const audio = new Audio();
          audio.src = URL.createObjectURL(file);
          audio.onloadedmetadata = () => {
            URL.revokeObjectURL(audio.src);
            resolve(Math.floor(audio.duration));
          };
          audio.onerror = () => {
            URL.revokeObjectURL(audio.src);
            resolve(180); // Fallback to 3 minutes on error
          };
        });

        simpleSongs.push({
          id: `${Date.now()}-${i}`,
          title: file.name.replace(/\.[^/.]+$/, ''),
          duration: duration,
          filename: file.name,
          bpm: 120,
          key: 'C',
          energy: 0.5,
        });
      }

      setSongs(simpleSongs);
      setMixPlaylist(files.map(f => f.name));
      setStage('idle');
      goToStep(3);
    } else {
      setStage('analyzing');
    }
  };

  const handleAnalysisComplete = (analyzedSongs: any[], mixOrder: string[]) => {
    console.log('[DEBUG] handleAnalysisComplete called');
    console.log('[DEBUG] AI songs with URLs:', aiGeneratedSongsWithUrls.map(s => ({ filename: s.filename, hasUrl: !!s.url })));
    console.log('[DEBUG] Analyzed songs:', analyzedSongs.map(a => ({ name: a.name, fileName: a.file?.name, bpm: a.bpm })));
    console.log('[DEBUG] Mix order (from analyzer):', mixOrder);

    let songs: Song[];
    const isAiGenerated = aiGeneratedSongsWithUrls.length > 0;

    // Check if we have AI-generated songs with URLs to merge analysis data into
    if (isAiGenerated) {
      console.log('[DEBUG] Processing AI-generated songs...');

      // Merge analysis data back into AI-generated songs with URLs
      songs = aiGeneratedSongsWithUrls.map((aiSong) => {
        // Find matching analyzed song by filename (strip .mp3 extension for comparison)
        const analyzed = analyzedSongs.find(a => {
          const analyzedName = a.file?.name?.replace(/\.mp3$/, '') || a.name?.replace(/\.mp3$/, '');
          const match = analyzedName === aiSong.filename;
          console.log('[DEBUG] Matching:', { aiFilename: aiSong.filename, analyzedName, match });
          return match;
        });

        if (analyzed) {
          console.log(`[DEBUG] ✅ Merged analysis for: ${aiSong.filename}`, { bpm: analyzed.bpm, key: analyzed.key, getAudioDuration: aiSong.duration, essentiaDuration: analyzed.duration });
          // Merge analysis data with URL
          // Use Essentia's duration because it analyzes the full audio file
          // getAudioDuration() can fail with variable bitrate MP3s or when metadata isn't fully loaded
          return {
            ...aiSong,
            bpm: analyzed.bpm,
            key: analyzed.key,
            camelotKey: analyzed.camelotKey,
            energy: analyzed.energy,
            duration: analyzed.duration, // Use Essentia's duration (more accurate than HTML5 Audio)
          };
        }
        console.log(`[DEBUG] ⚠️ No match found for: ${aiSong.filename}`);
        return aiSong; // Keep original if no match found
      });

      console.log('[DEBUG] Final AI songs with analysis:', songs.map(s => ({
        filename: s.filename,
        hasUrl: !!s.url,
        bpm: s.bpm,
        key: s.key
      })));

      // Clear the temporary storage
      setAiGeneratedSongsWithUrls([]);
    } else {
      console.log('[DEBUG] Processing manual uploads...');
      // Regular manual uploads - convert analyzed songs to Song format
      songs = analyzedSongs.map((s, index) => ({
        id: `${Date.now()}-${index}`,
        title: s.name,
        duration: s.duration,
        bpm: s.bpm,
        key: s.key,
        camelotKey: s.camelotKey,
        energy: s.energy,
        filename: s.file?.name,
      }));
    }

    setSongs(songs);
    // Strip .mp3 extension from mixOrder for AI-generated songs
    const cleanMixOrder = isAiGenerated
      ? mixOrder.map(name => name.replace(/\.mp3$/, ''))
      : mixOrder;

    console.log('[DEBUG] Clean mix order:', cleanMixOrder);
    console.log('[DEBUG] Songs filenames:', songs.map(s => s.filename));

    setMixPlaylist(cleanMixOrder);
    setStage('idle');
    goToStep(3);

    // Auto-export JSON (like in songkeybpmanalyzer)
    const playlistData = {
      playlist: mixOrder,
      songs: songs.map(s => ({
        name: s.title,
        bpm: s.bpm,
        key: s.key,
        camelotKey: s.camelotKey,
        energy: s.energy,
        duration: s.duration,
      })),
    };

    console.log('Mix playlist generated:', playlistData);
  };

  const handleAnalysisProgress = (current: number, total: number, message: string) => {
    setAnalysisProgress({ current, total, message });
  };

  // Helper to get real audio duration from blob
  const getAudioDuration = async (blob: Blob): Promise<number> => {
    return new Promise((resolve) => {
      const audio = new Audio();
      const url = URL.createObjectURL(blob);

      audio.onloadedmetadata = () => {
        URL.revokeObjectURL(url);
        resolve(Math.floor(audio.duration));
      };

      audio.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(180); // Fallback to 3 minutes on error
      };

      audio.src = url;
    });
  };

  // Helper to auto-download description as txt file
  const downloadDescription = (description: string) => {
    const blob = new Blob([description], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mix_description_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Generate variation name using genre-specific word banks
  const generateVariationName = (baseTitle: string, genre: string): string => {
    const genreWordBanks: Record<string, string[]> = {
      'Lofi': [
        'Coffee', 'Rain', 'Night', 'Cafe', 'Study', 'Chill', 'Moon', 'Dreams',
        'Clouds', 'Sunset', 'Morning', 'Tokyo', 'Vibes', 'Lazy', 'Cozy',
        'Jazzy', 'Smooth', 'Mellow', 'Warm', 'Soft', 'Vinyl', 'Nostalgia'
      ],
      'Trap': [
        'Dark', 'Beast', 'Fire', 'Ice', 'Savage', 'Flex', 'Wave', 'Gang',
        'Street', 'Hustle', 'Drip', 'Heat', 'Storm', 'Thunder', 'Phantom',
        'Shadow', 'Midnight', 'Zone', 'Mode', 'Energy', 'Fury', 'Rage'
      ],
      'Ambient': [
        'Space', 'Cosmos', 'Dream', 'Float', 'Drift', 'Horizon', 'Echo',
        'Aura', 'Mystic', 'Ethereal', 'Celestial', 'Void', 'Nebula', 'Galaxy',
        'Aurora', 'Zen', 'Peace', 'Serenity', 'Calm', 'Tranquil', 'Meditation'
      ],
      'EDM': [
        'Pulse', 'Drop', 'Rave', 'Electric', 'Neon', 'Laser', 'Synth', 'Bass',
        'Beat', 'Rush', 'Euphoria', 'Festival', 'Anthem', 'Peak', 'Surge',
        'Power', 'Energy', 'Hype', 'Vibe', 'Dance', 'Club', 'Party'
      ],
      'Hip-Hop': [
        'Flow', 'Bars', 'Beat', 'Groove', 'Boom', 'Bap', 'Jazz', 'Soul',
        'Classic', 'Golden', 'Underground', 'Raw', 'Real', 'Street', 'Urban',
        'City', 'Block', 'Hood', 'Smooth', 'Dope', 'Fresh', 'Legacy'
      ],
      'Jazz': [
        'Blue', 'Smooth', 'Sax', 'Piano', 'Soul', 'Bebop', 'Swing', 'Cool',
        'Night', 'Lounge', 'Velvet', 'Silk', 'Mood', 'Groove', 'Rhythm',
        'Melody', 'Harmony', 'Soulful', 'Sultry', 'Mellow', 'Late', 'Hour'
      ],
      'Classical': [
        'Symphony', 'Opus', 'Sonata', 'Prelude', 'Nocturne', 'Waltz', 'Suite',
        'Concerto', 'Movement', 'Aria', 'Overture', 'Serenade', 'Elegance',
        'Grace', 'Majesty', 'Royal', 'Grand', 'Noble', 'Divine', 'Eternal'
      ],
    };

    const wordBank = genreWordBanks[genre] || genreWordBanks['Lofi'];

    // Pick two random words from the word bank
    const shuffled = [...wordBank].sort(() => Math.random() - 0.5);
    const word1 = shuffled[0];
    const word2 = shuffled[1];

    return `${word1} ${word2}`;
  };

  const handleGenerateMusic = async () => {
    setStage('generating');

    try {
      // Calculate number of Kie.ai generations needed
      // Each generation gives 2 songs (~3 min each = 6 min total per generation)
      const generationsNeeded = Math.ceil(duration / 6);

      const response = await axios.post('/api/generate-music', {
        genre,
        count: generationsNeeded,
      });

      // Poll for completion
      const taskIds = response.data.songs.map((s: any) => s.taskId);
      const generatedSongs: Song[] = [];
      const downloadedFiles: File[] = [];

      for (let i = 0; i < taskIds.length; i++) {
        let completed = false;
        while (!completed) {
          await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5 seconds

          const statusResponse = await axios.get(`/api/generate-music?taskId=${taskIds[i]}`);

          // Kie.ai sends: 'text', 'first', 'complete' (complete has audio URL)
          if (statusResponse.data.status === 'complete' && statusResponse.data.audioUrl) {
            const baseTitle = statusResponse.data.title || `Track ${i + 1}`;

            // Download first song as File for analysis
            const response1 = await fetch(statusResponse.data.audioUrl);
            const blob1 = await response1.blob();
            const file1 = new File([blob1], `${baseTitle}.mp3`, { type: 'audio/mpeg' });
            downloadedFiles.push(file1);

            // Get REAL audio duration from the actual file
            const realDuration1 = await getAudioDuration(blob1);
            console.log(`[DEBUG] ${baseTitle} - Kie.ai duration: ${statusResponse.data.duration}, Real duration: ${realDuration1}`);

            // Add first song variation with REAL duration
            generatedSongs.push({
              id: `${Date.now()}-${i}-v1`,
              title: baseTitle,
              duration: realDuration1,
              url: statusResponse.data.audioUrl,
              filename: baseTitle,
              bpm: 120,
              key: 'C',
              energy: 0.5,
            });

            // Add second song variation with random genre-specific title
            if (statusResponse.data.audioUrl2) {
              const variationTitle = generateVariationName(baseTitle, genre);

              // Download second song as File for analysis
              const response2 = await fetch(statusResponse.data.audioUrl2);
              const blob2 = await response2.blob();
              const file2 = new File([blob2], `${variationTitle}.mp3`, { type: 'audio/mpeg' });
              downloadedFiles.push(file2);

              // Get REAL audio duration for second variation
              const realDuration2 = await getAudioDuration(blob2);
              console.log(`[DEBUG] ${variationTitle} - Kie.ai duration: ${statusResponse.data.duration}, Real duration: ${realDuration2}`);

              generatedSongs.push({
                id: `${Date.now()}-${i}-v2`,
                title: variationTitle,
                duration: realDuration2,
                url: statusResponse.data.audioUrl2,
                filename: variationTitle,
                bpm: 120,
                key: 'C',
                energy: 0.5,
              });
            }

            completed = true;
          } else if (statusResponse.data.status === 'failed') {
            throw new Error('Music generation failed');
          }
          // Still polling if status is 'text', 'first', or 'pending'
        }
      }

      console.log('[DEBUG] Generated songs:', generatedSongs.map(s => ({
        filename: s.filename,
        title: s.title,
        hasUrl: !!s.url,
        url: s.url?.substring(0, 50) + '...'
      })));

      console.log('[DEBUG] Downloaded files:', downloadedFiles.map(f => ({
        name: f.name,
        size: f.size,
        type: f.type
      })));

      // If skip analysis, use as-is and sort, otherwise analyze them first
      if (skipAnalysis) {
        const finalSongs = sortSongsForMix(generatedSongs);
        setSongs(finalSongs);
        setMixPlaylist(finalSongs.map(s => s.filename || s.title));
        setStage('idle');
        goToStep(3);
      } else {
        console.log('[DEBUG] Storing AI songs before analysis...');
        // Store AI-generated songs with URLs before analysis
        setAiGeneratedSongsWithUrls(generatedSongs);

        console.log('[DEBUG] Starting analysis with Essentia.js...');
        // Analyze downloaded files with Essentia (same as manual uploads)
        setUploadedFiles(downloadedFiles);
        setStage('analyzing');
        setCurrentStep(2);
        // AudioAnalyzer will be triggered and call handleAnalysisComplete
        // which will merge analysis data back into generatedSongs
      }
    } catch (error) {
      console.error('Error generating music:', error);
      setStage('idle');
    }
  };

  const handleThumbnailGenerated = (url: string, base64: string) => {
    setThumbnail(url);
    setThumbnailBase64(base64);
    setThumbnails([]); // Clear multiple thumbnails if single is generated
  };

  const handleMultipleThumbnailsGenerated = (thumbs: Array<{ url: string; base64: string }>) => {
    setThumbnails(thumbs);
    setThumbnail(thumbs[0]?.url || '');
    setThumbnailBase64(thumbs[0]?.base64 || '');
  };

  const handleCreateMix = async () => {
    if (songs.length === 0 || !thumbnailBase64) {
      alert('Please add songs and generate a thumbnail first');
      return;
    }

    setStage('mixing');

    try {
      // Upload files to temp directory first - create a map of filename to path
      const filePathMap: Record<string, string> = {};
      for (const file of uploadedFiles) {
        const formData = new FormData();
        formData.append('files', file);

        const uploadResponse = await axios.post('/api/upload', formData);
        filePathMap[file.name] = uploadResponse.data.files[0].path;
      }

      console.log('File path map:', filePathMap);
      console.log('Songs to send:', songs.map(s => ({ title: s.title, filename: s.filename, mappedPath: filePathMap[s.filename || ''] })));

      // Create the mix using the playlist order from analyzer
      const mixResponse = await axios.post('/api/create-mix', {
        songs: songs.map((song) => ({
          ...song,
          path: filePathMap[song.filename || ''],
        })),
        thumbnail: thumbnailBase64,
        thumbnails: thumbnails.length > 0 ? thumbnails.map(t => t.base64) : undefined,
        playlistOrder: mixPlaylist, // Use the order from songkeybpmanalyzer
        crossfadeDuration,
        audioEffects: audioEffects,
        videoFormat: videoFormat, // Pass selected format
      }, {
        responseType: 'blob' // Receive binary video data
      });

      // Create blob URL from the response
      const blob = new Blob([mixResponse.data], { type: 'video/mp4' });
      const blobUrl = URL.createObjectURL(blob);
      setMixUrl(blobUrl);

      // Auto-download the file
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `mix_${Date.now()}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Generate description (optional - don't fail if it errors)
      // IMPORTANT: Reorder songs according to mixPlaylist order for accurate timestamps
      const orderedSongs = mixPlaylist.map(filename =>
        songs.find(s => (s.filename || s.title) === filename)
      ).filter(Boolean) as Song[];

      try {
        const descResponse = await axios.post('/api/generate-description', {
          songs: orderedSongs, // Send songs in playlist order!
          genre,
          totalDuration: orderedSongs.reduce((sum, s) => sum + s.duration, 0),
          crossfadeDuration,
        });
        const desc = descResponse.data.description;
        setDescription(desc);
        // Auto-download description as txt file
        downloadDescription(desc);
      } catch (descError) {
        console.error('Description generation failed, using default:', descError);
        // Use default description with crossfade adjustments
        const timestamps = orderedSongs.map((song, i) => {
          // Each song after the first starts earlier due to crossfade overlap
          const time = orderedSongs.slice(0, i).reduce((sum, s) => sum + s.duration, 0) - (i * crossfadeDuration);
          const mins = Math.floor(time / 60);
          const secs = Math.floor(time % 60);
          return `${mins}:${secs.toString().padStart(2, '0')} - ${song.title}`;
        }).join('\n');
        const desc = `${genre} Mix\n\nTracklist:\n${timestamps}`;
        setDescription(desc);
        // Auto-download description as txt file
        downloadDescription(desc);
      }

      setStage('complete');
      goToStep(5);
    } catch (error) {
      console.error('Error creating mix:', error);
      setStage('idle');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <img src="/logo.png" alt="InfiniteMix Logo" className="w-10 h-10" />
            InfiniteMix
          </h1>
          <p className="text-lg text-gray-800">Create professional music mixes with AI in minutes</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {['Setup', 'Content', 'Playlist', 'Thumbnail', 'Export'].map((step, index) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => index + 1 <= maxStepReached && setCurrentStep(index + 1)}
                  disabled={index + 1 > maxStepReached}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index + 1 <= maxStepReached
                      ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {index + 1}
                </button>
                {index < 4 && <div className={`w-12 h-1 ${index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* Step 1: Mode Selection */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Your Mode</h2>
              <ModeSelector mode={mode} onModeChange={setMode} />
              <button
                onClick={() => goToStep(2)}
                className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Configuration & Content */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Configure Your Mix</h2>

              <GenreSelector genre={genre} onGenreChange={setGenre} />
              <DurationSelector duration={duration} onDurationChange={setDuration} disabled={mode === 'manual'} />

              {/* Collapsible Crossfade Section */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setShowCrossfade(!showCrossfade)}
                  className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-gray-900">Advanced: Crossfade Duration</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${showCrossfade ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showCrossfade && (
                  <div className="p-4">
                    <CrossfadeSelector duration={crossfadeDuration} onDurationChange={setCrossfadeDuration} />
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="skipAnalysis"
                    checked={skipAnalysis}
                    onChange={(e) => setSkipAnalysis(e.target.checked)}
                    className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
                  />
                  <div className="flex-1">
                    <label htmlFor="skipAnalysis" className="text-sm font-medium text-gray-900 cursor-pointer block mb-1">
                      {mode === 'ai'
                        ? 'Skip audio analysis (faster processing)'
                        : 'Skip audio analysis (faster processing)'}
                    </label>
                    <p className="text-xs text-gray-600">
                      {skipAnalysis ? (
                        <span className="text-green-700 font-medium">
                          ⚡ Quick mode enabled - Songs will be stitched {mode === 'ai' ? 'in generated order' : 'in upload order'} without harmonic analysis (saves 30-60 seconds)
                        </span>
                      ) : (
                        <span>
                          When unchecked, AI analyzes BPM, key, and energy to create perfectly harmonized transitions using our Smart Audio System (takes an extra 30-60 seconds)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                <label htmlFor="videoFormat" className="block text-sm font-medium text-gray-900 mb-2">
                  Video Format
                </label>
                <select
                  id="videoFormat"
                  value={videoFormat}
                  onChange={(e) => setVideoFormat(e.target.value as 'original' | 'youtube' | 'tiktok')}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900 bg-white"
                >
                  <option value="original">Original (No Modification)</option>
                  <option value="youtube">YouTube (16:9 Horizontal)</option>
                  <option value="tiktok">TikTok (9:16 Vertical)</option>
                </select>
                <p className="text-xs text-gray-600 mt-2">
                  {videoFormat === 'original' && 'Video will maintain its original aspect ratio'}
                  {videoFormat === 'youtube' && 'Video will be letterboxed to 1920x1080 (16:9) for YouTube'}
                  {videoFormat === 'tiktok' && 'Video will be pillarboxed to 1080x1920 (9:16) for TikTok/Instagram Reels'}
                </p>
              </div>

              {mode === 'manual' ? (
                <FileUploader onFilesSelected={handleFilesSelected} />
              ) : (
                <button
                  onClick={handleGenerateMusic}
                  disabled={stage === 'generating'}
                  className="w-full py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 font-medium transition-colors"
                >
                  {stage === 'generating' ? 'Generating Music...' : 'Generate AI Music'}
                </button>
              )}

              {stage === 'analyzing' || stage === 'generating' ? (
                <ProgressTracker
                  stage={stage}
                  message={analysisProgress.message}
                />
              ) : null}

              {/* Audio Analyzer Component */}
              {uploadedFiles.length > 0 && stage === 'analyzing' && currentStep === 2 && !skipAnalysis && (
                <AudioAnalyzer
                  files={uploadedFiles}
                  onAnalysisComplete={handleAnalysisComplete}
                  onProgress={handleAnalysisProgress}
                />
              )}
            </div>
          )}

          {/* Step 3: Playlist Editor */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Edit Playlist Order</h2>
              <p className="text-sm text-gray-700 mb-4">
                Songs are optimally sorted using smart harmonic analysis. You can drag to reorder if needed.
              </p>
              <PlaylistEditor
                songs={songs}
                onReorder={(reordered) => {
                  setSongs(reordered);
                  // Update playlist order when manually reordered
                  setMixPlaylist(reordered.map(s => s.filename || s.title));
                }}
                onRemove={(id) => {
                  const filtered = songs.filter(s => s.id !== id);
                  setSongs(filtered);
                  setMixPlaylist(filtered.map(s => s.filename || s.title));
                }}
                onRename={(id, newTitle) => {
                  const updated = songs.map(s => s.id === id ? { ...s, title: newTitle } : s);
                  setSongs(updated);
                  // No need to update mixPlaylist - it uses filename, not title
                }}
              />
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => goToStep(4)}
                  className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3.5: Audio Effects (optional, shown inline with Step 3) */}
          {currentStep === 3 && (
            <div className="mt-6">
              <AudioEffects onEffectsChange={setAudioEffects} />
            </div>
          )}

          {/* Step 4: Thumbnail */}
          {currentStep === 4 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Generate Thumbnail</h2>
              <ThumbnailGenerator
                genre={genre}
                onThumbnailGenerated={handleThumbnailGenerated}
                onMultipleThumbnailsGenerated={handleMultipleThumbnailsGenerated}
                currentThumbnail={thumbnail}
                songCount={songs.length}
                skipAnalysis={skipAnalysis}
              />
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleCreateMix}
                  disabled={!thumbnail || stage === 'mixing'}
                  className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 font-medium transition-colors"
                >
                  {stage === 'mixing' ? 'Creating Mix...' : 'Create Mix'}
                </button>
              </div>

              {stage === 'mixing' && <ProgressTracker stage={stage} />}
            </div>
          )}

          {/* Step 5: Preview & Download */}
          {currentStep === 5 && mixUrl && (
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Mix is Ready!</h2>

              <video controls className="w-full rounded-lg" src={mixUrl} />

              <DescriptionPanel description={description} />

              <a
                href={mixUrl}
                download={`infinitemix-${Date.now()}.mp4`}
                className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Mix
              </a>

              <button
                onClick={() => {
                  setCurrentStep(1);
                  setMaxStepReached(1);
                  setSongs([]);
                  setThumbnail('');
                  setMixUrl('');
                  setDescription('');
                }}
                className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
              >
                Create Another Mix
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
