'use client';

import { useState, useEffect } from 'react';
import { Volume2, Sparkles } from 'lucide-react';

export interface AudioEffectSettings {
  preset: 'none' | 'bass-boost' | 'vintage' | 'club-reverb' | 'bathroom-reverb' | 'concert-hall';
}

interface AudioEffectsProps {
  onEffectsChange: (settings: AudioEffectSettings) => void;
}

const EFFECT_PRESETS = [
  { id: 'none', name: 'None', description: 'Original audio', icon: '🎵' },
  { id: 'bass-boost', name: 'Bass Boost', description: 'Enhanced low frequencies', icon: '🔊' },
  { id: 'vintage', name: 'Vintage', description: 'Lo-fi phone filter', icon: '📻' },
  { id: 'club-reverb', name: 'Club Reverb', description: 'Large club atmosphere', icon: '🎪' },
  { id: 'bathroom-reverb', name: 'Bathroom', description: 'Tight reverb space', icon: '🚿' },
  { id: 'concert-hall', name: 'Concert Hall', description: 'Large hall reverb', icon: '🎭' },
];

export default function AudioEffects({ onEffectsChange }: AudioEffectsProps) {
  const [selectedPreset, setSelectedPreset] = useState<AudioEffectSettings['preset']>('none');

  // Notify parent when settings change
  useEffect(() => {
    onEffectsChange({ preset: selectedPreset });
  }, [selectedPreset, onEffectsChange]);

  const handlePresetClick = (presetId: AudioEffectSettings['preset']) => {
    setSelectedPreset(presetId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Volume2 className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-semibold text-gray-900">Audio Effects</h2>
        <Sparkles className="w-5 h-5 text-yellow-500" />
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Apply professional audio effects to your mix
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {EFFECT_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => handlePresetClick(preset.id as AudioEffectSettings['preset'])}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedPreset === preset.id
                ? 'border-purple-500 bg-purple-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="text-3xl mb-2">{preset.icon}</div>
            <div className="font-semibold text-gray-900 mb-1">{preset.name}</div>
            <div className="text-xs text-gray-600">{preset.description}</div>
          </button>
        ))}
      </div>

      {selectedPreset !== 'none' && (
        <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
          <p className="text-sm text-purple-900">
            <strong>{EFFECT_PRESETS.find(p => p.id === selectedPreset)?.name}</strong> effect will be applied to your mix
          </p>
        </div>
      )}
    </div>
  );
}
