'use client';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProgressTrackerProps {
  stage: 'idle' | 'analyzing' | 'generating' | 'mixing' | 'complete';
  progress?: number;
  message?: string;
}

const ANALYZING_MESSAGES = [
  'Analyzing audio frequencies...',
  'Detecting BPM and tempo...',
  'Extracting musical key signatures...',
  'Calculating energy levels...',
  'Mapping Camelot wheel positions...',
  'Finding harmonic relationships...',
  'Optimizing track sequence...',
];

const GENERATING_MESSAGES = [
  'Generating AI music tracks...',
  'Creating unique compositions...',
  'This may take 1-2 minutes per track...',
  'Crafting melodies and rhythms...',
  'Adding harmonic layers...',
  'Finalizing audio quality...',
];

const MIXING_MESSAGES = [
  'Mixing audio tracks...',
  'Applying crossfade transitions...',
  'Synchronizing video and audio...',
  'Rendering high-quality video...',
  'Optimizing for YouTube upload...',
  'Almost done, finalizing...',
];

export default function ProgressTracker({ stage, progress, message }: ProgressTrackerProps) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let messages: string[] = [];

    switch (stage) {
      case 'analyzing':
        messages = ANALYZING_MESSAGES;
        break;
      case 'generating':
        messages = GENERATING_MESSAGES;
        break;
      case 'mixing':
        messages = MIXING_MESSAGES;
        break;
      default:
        return;
    }

    // Cycle through messages every 3 seconds
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stage]);

  useEffect(() => {
    let messages: string[] = [];

    switch (stage) {
      case 'analyzing':
        messages = ANALYZING_MESSAGES;
        break;
      case 'generating':
        messages = GENERATING_MESSAGES;
        break;
      case 'mixing':
        messages = MIXING_MESSAGES;
        break;
    }

    setCurrentMessage(messages[messageIndex] || '');
  }, [stage, messageIndex]);

  if (stage === 'idle') return null;

  const getEstimatedTime = () => {
    switch (stage) {
      case 'analyzing':
        return '30-60 seconds';
      case 'generating':
        return '1-2 minutes per track';
      case 'mixing':
        return '1-2 minutes';
      default:
        return '';
    }
  };

  const stages = [
    { key: 'analyzing', label: 'Analyzing Audio' },
    { key: 'generating', label: 'Generating Content' },
    { key: 'mixing', label: 'Creating Mix' },
    { key: 'complete', label: 'Complete' },
  ];

  const currentStageIndex = stages.findIndex(s => s.key === stage);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {stages[currentStageIndex]?.label || 'Processing'}
          </h3>
          <p className="text-sm text-gray-600">
            Estimated time: {getEstimatedTime()}
          </p>
        </div>
      </div>

      {/* Animated status message */}
      <div className="mb-4 p-3 bg-white rounded-lg border border-blue-100">
        <p className="text-sm font-medium text-blue-700 animate-pulse">
          {message || currentMessage}
        </p>
      </div>

      <div className="space-y-3">
        {stages.map((s, index) => (
          <div key={s.key} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              index < currentStageIndex
                ? 'bg-green-500 text-white'
                : index === currentStageIndex
                ? 'bg-blue-500 text-white animate-pulse'
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
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-xs text-yellow-800">
          💡 Tip: Please keep this tab open while processing. Don't close or refresh the page.
        </p>
      </div>
    </div>
  );
}
