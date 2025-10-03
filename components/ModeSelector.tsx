'use client';

import { Music, Upload } from 'lucide-react';

interface ModeSelectorProps {
  mode: 'ai' | 'manual';
  onModeChange: (mode: 'ai' | 'manual') => void;
}

export default function ModeSelector({ mode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onModeChange('ai')}
        className={`flex-1 p-6 rounded-xl border-2 transition-all ${
          mode === 'ai'
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
        }`}
      >
        <Music className={`w-8 h-8 mx-auto mb-2 ${mode === 'ai' ? 'text-blue-500' : 'text-gray-400'}`} />
        <h3 className="font-semibold text-lg mb-1 text-gray-900">AI Generation</h3>
        <p className="text-sm text-gray-700">Generate music with AI</p>
      </button>

      <button
        onClick={() => onModeChange('manual')}
        className={`flex-1 p-6 rounded-xl border-2 transition-all ${
          mode === 'manual'
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 bg-white hover:border-gray-300'
        }`}
      >
        <Upload className={`w-8 h-8 mx-auto mb-2 ${mode === 'manual' ? 'text-blue-500' : 'text-gray-400'}`} />
        <h3 className="font-semibold text-lg mb-1 text-gray-900">Manual Upload</h3>
        <p className="text-sm text-gray-700">Upload your own tracks</p>
      </button>
    </div>
  );
}
