'use client';

import { Loader2 } from 'lucide-react';

interface ProgressTrackerProps {
  stage: 'idle' | 'analyzing' | 'generating' | 'mixing' | 'complete';
  progress?: number;
  message?: string;
}

export default function ProgressTracker({ stage, progress, message }: ProgressTrackerProps) {
  if (stage === 'idle') return null;

  const stages = [
    { key: 'analyzing', label: 'Analyzing Audio' },
    { key: 'generating', label: 'Generating Content' },
    { key: 'mixing', label: 'Creating Mix' },
    { key: 'complete', label: 'Complete' },
  ];

  const currentStageIndex = stages.findIndex(s => s.key === stage);

  return (
    <div className="bg-white border-2 border-blue-100 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
        <h3 className="font-semibold text-lg text-gray-900">
          {stages[currentStageIndex]?.label || 'Processing'}
        </h3>
      </div>

      <div className="space-y-3">
        {stages.map((s, index) => (
          <div key={s.key} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index < currentStageIndex
                ? 'bg-green-500 text-white'
                : index === currentStageIndex
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {index < currentStageIndex ? '✓' : index + 1}
            </div>
            <span className={`flex-1 ${
              index === currentStageIndex ? 'text-gray-900 font-medium' : 'text-gray-500'
            }`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {progress !== undefined && progress > 0 && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {message && (
        <p className="mt-3 text-sm text-gray-600">{message}</p>
      )}
    </div>
  );
}
