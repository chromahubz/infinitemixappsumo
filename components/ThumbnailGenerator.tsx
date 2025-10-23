'use client';

import { useState } from 'react';
import { Image, RefreshCw, Sparkles, Upload } from 'lucide-react';
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
  const [generatedThumbnails, setGeneratedThumbnails] = useState<Array<{ url: string; base64: string }>>([]);

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
        // Generate multiple thumbnails (one per song) with different seeds
        const thumbnails = [];
        const baseSeed = Math.floor(Math.random() * 1000000);

        for (let i = 0; i < songCount; i++) {
          // Use different seed for each image to ensure variation
          const seed = baseSeed + i * 1000;
          const response = await axios.post('/api/generate-thumbnail', {
            prompt: customPrompt || `${genre} music artwork variation ${i + 1}`,
            genre,
            seed,
          });
          thumbnails.push({ url: response.data.url, base64: response.data.base64 });

          // Wait 2 seconds between requests to avoid rate limits
          if (i < songCount - 1) {
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        }
        setGeneratedThumbnails(thumbnails);  // Store locally for gallery display
        onMultipleThumbnailsGenerated(thumbnails);
      } else {
        // Single thumbnail - let API generate random seed
        const response = await axios.post('/api/generate-thumbnail', {
          prompt: customPrompt,
          genre,
        });
        setGeneratedThumbnails([]);  // Clear multiple thumbnails
        onThumbnailGenerated(response.data.url, response.data.base64);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to generate thumbnail');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setError('');

    // Check if uploading multiple files
    if (files.length > 1) {
      // Multiple files - flexible count, will repeat last if fewer than songs
      const thumbnails: Array<{ url: string; base64: string }> = [];
      let processedCount = 0;

      Array.from(files).forEach((file, index) => {
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
          setError(`File ${index + 1} must be an image or video. Supported: JPG, PNG, GIF, MP4, MOV`);
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target?.result as string;
          const url = URL.createObjectURL(file);
          thumbnails.push({ url, base64 });
          processedCount++;

          // When all files are processed
          if (processedCount === files.length && onMultipleThumbnailsGenerated) {
            setGeneratedThumbnails(thumbnails);  // Store locally for gallery display
            onMultipleThumbnailsGenerated(thumbnails);
          }
        };
        reader.readAsDataURL(file);
      });
    } else {
      // Single file upload
      const file = files[0];
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
        setError('Please upload an image or video file (JPG, PNG, GIF, MP4, MOV, etc.)');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        const url = URL.createObjectURL(file);
        setGeneratedThumbnails([]);  // Clear multiple thumbnails
        onThumbnailGenerated(url, base64);
      };
      reader.readAsDataURL(file);
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

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      {/* Upload Section */}
      <div>
        <label className="w-full flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-sm font-medium text-gray-900 mb-1">Upload Your Own Image/Video{songCount > 1 ? 's' : ''}</span>
          {songCount > 1 ? (
            <span className="text-xs text-gray-500">Select up to {songCount} images/videos (or fewer - will repeat last one)</span>
          ) : (
            <span className="text-xs text-gray-500">Images (JPG, PNG) or Videos (MP4, MOV) - Max 50MB</span>
          )}
          <input
            type="file"
            accept="image/*,video/*"
            multiple={songCount > 1}
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {/* Gallery for multiple thumbnails */}
      {generatedThumbnails.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Generated Images ({generatedThumbnails.length})</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {generatedThumbnails.map((thumb, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden border-2 border-blue-300 shadow-md">
                {thumb.base64.startsWith('data:video/') ? (
                  <video src={thumb.url} className="w-full h-auto" muted loop autoPlay />
                ) : (
                  <img src={thumb.url} alt={`Thumbnail ${index + 1}`} className="w-full h-auto" />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs py-1 px-2 text-center">
                  Image {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Single thumbnail display */}
      {currentThumbnail && generatedThumbnails.length === 0 && (
        <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
          {currentThumbnail.startsWith('blob:') && currentThumbnail.includes('video') ? (
            <video src={currentThumbnail} className="w-full h-auto" controls muted loop />
          ) : (
            <img src={currentThumbnail} alt="Mix thumbnail" className="w-full h-auto" />
          )}
        </div>
      )}
    </div>
  );
}
