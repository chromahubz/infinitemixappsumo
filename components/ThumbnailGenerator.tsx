'use client';

import { useState } from 'react';
import { Image, RefreshCw, Sparkles } from 'lucide-react';
import axios from 'axios';

interface ThumbnailGeneratorProps {
  genre: string;
  onThumbnailGenerated: (url: string, base64: string) => void;
  onMultipleThumbnailsGenerated?: (thumbnails: Array<{ url: string; base64: string }>) => void;
  currentThumbnail?: string;
  songCount?: number;
}

export default function ThumbnailGenerator({ genre, onThumbnailGenerated, onMultipleThumbnailsGenerated, currentThumbnail, songCount = 1 }: ThumbnailGeneratorProps) {
  const [customPrompt, setCustomPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatingPrompt, setGeneratingPrompt] = useState(false);
  const [useMultipleThumbnails, setUseMultipleThumbnails] = useState(false);
  const [error, setError] = useState('');

  const generateAIPrompt = async () => {
    setGeneratingPrompt(true);
    setError('');

    try {
      const response = await axios.post('/api/generate-prompt', { genre });
      setCustomPrompt(response.data.prompt);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to generate prompt');
    } finally {
      setGeneratingPrompt(false);
    }
  };

  const generateThumbnail = async () => {
    setLoading(true);
    setError('');

    try {
      if (useMultipleThumbnails && onMultipleThumbnailsGenerated) {
        // Generate multiple thumbnails (one per song)
        const thumbnails = [];
        for (let i = 0; i < songCount; i++) {
          const response = await axios.post('/api/generate-thumbnail', {
            prompt: customPrompt || `${genre} music artwork variation ${i + 1}`,
            genre,
          });
          thumbnails.push({ url: response.data.url, base64: response.data.base64 });

          // Wait 2 seconds between requests to avoid rate limits
          if (i < songCount - 1) {
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        }
        onMultipleThumbnailsGenerated(thumbnails);
      } else {
        // Single thumbnail
        const response = await axios.post('/api/generate-thumbnail', {
          prompt: customPrompt,
          genre,
        });
        onThumbnailGenerated(response.data.url, response.data.base64);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to generate thumbnail');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {songCount > 1 && (
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <input
            type="checkbox"
            id="useMultipleThumbnails"
            checked={useMultipleThumbnails}
            onChange={(e) => setUseMultipleThumbnails(e.target.checked)}
            className="w-5 h-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="useMultipleThumbnails" className="text-sm font-medium text-gray-900 cursor-pointer">
            Generate different image for each song ({songCount} images with fade transitions)
          </label>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-800">
            Custom Prompt (Optional)
          </label>
          <button
            onClick={generateAIPrompt}
            disabled={generatingPrompt}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:bg-gray-300 transition-colors"
          >
            {generatingPrompt ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                AI Prompt
              </>
            )}
          </button>
        </div>
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder={`Aesthetic ${genre} music artwork, soft pastel colors, minimalist design...`}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none text-gray-900 placeholder-gray-400"
          rows={3}
        />
      </div>

      <button
        onClick={generateThumbnail}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Image className="w-5 h-5" />
            {currentThumbnail ? 'Regenerate' : 'Generate'} Thumbnail
          </>
        )}
      </button>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {currentThumbnail && (
        <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
          <img src={currentThumbnail} alt="Mix thumbnail" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
}
