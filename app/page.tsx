'use client';

import { useState } from 'react';
import { Song } from '@/lib/types';
import ModeSelector from '@/components/ModeSelector';
import GenreSelector from '@/components/GenreSelector';
import DurationSelector from '@/components/DurationSelector';
import FileUploader from '@/components/FileUploader';
import PlaylistEditor from '@/components/PlaylistEditor';
import ThumbnailGenerator from '@/components/ThumbnailGenerator';
import ProgressTracker from '@/components/ProgressTracker';
import DescriptionPanel from '@/components/DescriptionPanel';
import AudioAnalyzer from '@/components/AudioAnalyzer';
import { Download, Sparkles } from 'lucide-react';
import axios from 'axios';
import { sortSongsForMix } from '@/lib/song-sorter';

export default function Home() {
  const [mode, setMode] = useState<'ai' | 'manual'>('ai');
  const [genre, setGenre] = useState('Lofi');
  const [duration, setDuration] = useState(30);
  const [songs, setSongs] = useState<Song[]>([]);
  const [thumbnail, setThumbnail] = useState('');
  const [thumbnailBase64, setThumbnailBase64] = useState('');
  const [mixUrl, setMixUrl] = useState('');
  const [description, setDescription] = useState('');
  const [stage, setStage] = useState<'idle' | 'analyzing' | 'generating' | 'mixing' | 'complete'>('idle');
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [mixPlaylist, setMixPlaylist] = useState<string[]>([]);
  const [analysisProgress, setAnalysisProgress] = useState({ current: 0, total: 0, message: '' });

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
    setStage('analyzing');
  };

  const handleAnalysisComplete = (analyzedSongs: any[], mixOrder: string[]) => {
    // Convert analyzed songs to Song format
    const songs: Song[] = analyzedSongs.map((s, index) => ({
      id: `${Date.now()}-${index}`,
      title: s.name,
      duration: s.duration,
      bpm: s.bpm,
      key: s.key,
      camelotKey: s.camelotKey,
      energy: s.energy,
      filename: s.file?.name,
    }));

    setSongs(songs);
    setMixPlaylist(mixOrder);
    setStage('idle');
    setCurrentStep(3);

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

  const handleGenerateMusic = async () => {
    setStage('generating');

    try {
      // Calculate number of songs needed (assuming avg 3 min per song)
      const songsNeeded = Math.ceil(duration / 3);

      const response = await axios.post('/api/generate-music', {
        genre,
        count: songsNeeded,
      });

      // Poll for completion
      const taskIds = response.data.songs.map((s: any) => s.taskId);
      const generatedSongs: Song[] = [];

      for (let i = 0; i < taskIds.length; i++) {
        let completed = false;
        while (!completed) {
          await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5 seconds

          const statusResponse = await axios.get(`/api/generate-music?taskId=${taskIds[i]}`);

          if (statusResponse.data.status === 'completed') {
            generatedSongs.push({
              id: `${Date.now()}-${i}`,
              title: statusResponse.data.title || `Track ${i + 1}`,
              duration: statusResponse.data.duration || 180,
              url: statusResponse.data.audioUrl,
              bpm: 120,
              key: 'C',
              energy: 0.5,
            });
            completed = true;
          } else if (statusResponse.data.status === 'failed') {
            throw new Error('Music generation failed');
          }
        }
      }

      const sorted = sortSongsForMix(generatedSongs);
      setSongs(sorted);
      setStage('idle');
      setCurrentStep(3);
    } catch (error) {
      console.error('Error generating music:', error);
      setStage('idle');
    }
  };

  const handleThumbnailGenerated = (url: string, base64: string) => {
    setThumbnail(url);
    setThumbnailBase64(base64);
  };

  const handleCreateMix = async () => {
    if (songs.length === 0 || !thumbnailBase64) {
      alert('Please add songs and generate a thumbnail first');
      return;
    }

    setStage('mixing');

    try {
      // Upload files to temp directory first
      const uploadedPaths: string[] = [];
      for (const file of uploadedFiles) {
        const formData = new FormData();
        formData.append('files', file);

        const uploadResponse = await axios.post('/api/upload', formData);
        uploadedPaths.push(uploadResponse.data.files[0].path);
      }

      // Create the mix using the playlist order from analyzer
      const mixResponse = await axios.post('/api/create-mix', {
        songs: songs.map((song, index) => ({
          ...song,
          path: uploadedPaths[songs.findIndex(s => s.filename === song.filename)],
        })),
        thumbnail: thumbnailBase64,
        playlistOrder: mixPlaylist, // Use the order from songkeybpmanalyzer
      });

      setMixUrl(mixResponse.data.mixUrl);

      // Generate description (optional - don't fail if it errors)
      try {
        const descResponse = await axios.post('/api/generate-description', {
          songs,
          genre,
          totalDuration: songs.reduce((sum, s) => sum + s.duration, 0),
        });
        setDescription(descResponse.data.description);
      } catch (descError) {
        console.error('Description generation failed, using default:', descError);
        // Use default description with crossfade adjustments
        const crossfadeDuration = 5; // seconds
        const timestamps = songs.map((song, i) => {
          // Each song after the first starts 5 seconds earlier due to crossfade overlap
          const time = songs.slice(0, i).reduce((sum, s) => sum + s.duration, 0) - (i * crossfadeDuration);
          const mins = Math.floor(time / 60);
          const secs = Math.floor(time % 60);
          return `${mins}:${secs.toString().padStart(2, '0')} - ${song.title}`;
        }).join('\n');
        setDescription(`${genre} Mix\n\nTracklist:\n${timestamps}`);
      }

      setStage('complete');
      setCurrentStep(5);
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
            <Sparkles className="w-10 h-10 text-blue-500" />
            InfiniteMix
          </h1>
          <p className="text-lg text-gray-800">Create professional music mixes with AI in minutes</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {['Setup', 'Content', 'Playlist', 'Thumbnail', 'Export'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  index + 1 <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {index + 1}
                </div>
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
                onClick={() => setCurrentStep(2)}
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
              <DurationSelector duration={duration} onDurationChange={setDuration} />

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
              {uploadedFiles.length > 0 && stage === 'analyzing' && (
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
                Songs are optimally sorted using Camelot wheel analysis. You can drag to reorder if needed.
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
              />
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Thumbnail */}
          {currentStep === 4 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Generate Thumbnail</h2>
              <ThumbnailGenerator
                genre={genre}
                onThumbnailGenerated={handleThumbnailGenerated}
                currentThumbnail={thumbnail}
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
