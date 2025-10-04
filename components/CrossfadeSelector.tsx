'use client';

interface CrossfadeSelectorProps {
  duration: number;
  onDurationChange: (duration: number) => void;
}

export default function CrossfadeSelector({ duration, onDurationChange }: CrossfadeSelectorProps) {
  const durations = [
    { value: 0, label: 'No Crossfade' },
    { value: 2, label: '2 seconds' },
    { value: 3, label: '3 seconds' },
    { value: 5, label: '5 seconds' },
    { value: 8, label: '8 seconds' },
    { value: 10, label: '10 seconds' },
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-2">
        Crossfade Duration
      </label>
      <div className="grid grid-cols-3 gap-3">
        {durations.map((d) => (
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
