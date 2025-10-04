'use client';

import { DURATIONS } from '@/lib/types';

interface DurationSelectorProps {
  duration: number;
  onDurationChange: (duration: number) => void;
}

export default function DurationSelector({ duration, onDurationChange }: DurationSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-2">
        Mix Duration
      </label>
      <div className="grid grid-cols-3 gap-3">
        {DURATIONS.map((d) => (
          <button
            key={d.value}
            onClick={() => onDurationChange(d.value)}
            className={`p-3 rounded-lg border-2 transition-all font-medium ${
              duration === d.value
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 bg-white hover:border-gray-300 text-gray-900'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}
