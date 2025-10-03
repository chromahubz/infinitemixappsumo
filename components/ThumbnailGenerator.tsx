'use client';

import { useState } from 'react';
import { Image, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface ThumbnailGeneratorProps {
  genre: string;
  onThumbnailGenerated: (url: string, base64: string) => void;
  currentThumbnail?: string;
}

export default function ThumbnailGenerator({ genre, onThumbnailGenerated, currentThumbnail }: ThumbnailGeneratorProps) {
  const [customPrompt, setCustomPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateThumbnail = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/generate-thumbnail', {
        prompt: customPrompt,
        genre,
      });

      onThumbnailGenerated(response.data.url, response.data.base64);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to generate thumbnail');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Custom Prompt (Optional)
        </label>
        <textarea
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder={`Aesthetic ${genre} music artwork, soft pastel colors, minimalist design...`}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
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
