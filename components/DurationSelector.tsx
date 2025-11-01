'use client';

import { DURATIONS } from '@/lib/types';
import { calculateCreditsForMix } from '@/lib/credit-calculator';

interface DurationSelectorProps {
  duration: number;
  onDurationChange: (duration: number) => void;
  disabled?: boolean;
}

export default function DurationSelector({ duration, onDurationChange, disabled = false }: DurationSelectorProps) {
  return (
    <div className={disabled ? 'opacity-50' : ''}>
      <label className="block text-sm font-medium text-gray-800 mb-2">
        Mix Duration {disabled && <span className="text-xs text-gray-500">(Not applicable in manual mode)</span>}
      </label>
      <div className="grid grid-cols-3 gap-3">
        {DURATIONS.map((d) => {
          const credits = calculateCreditsForMix(d.value);
          return (
            <button
              key={d.value}
              onClick={() => !disabled && onDurationChange(d.value)}
              disabled={disabled}
              className={`p-3 rounded-lg border-2 transition-all ${
                duration === d.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white hover:border-gray-300 text-gray-900'
              } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="font-medium">{d.label}</div>
              <div className="text-xs opacity-60 mt-0.5">{credits} credits</div>
            </button>
          );
        })}
      </div>
      {!disabled && (
        <p className="text-xs text-gray-500 mt-2">
          💡 Manual mixing is <strong>free & unlimited</strong>! Credits only for AI-generated mixes.
        </p>
      )}
    </div>
  );
}
