// Server-side audio analysis adapted from songkeybpmanalyzer
// Note: Essentia.js works in browser, so we use music-metadata for basic analysis
// For production, you'd want to use a Node.js audio analysis library like aubio or librosa-like tools

interface AudioAnalysis {
  bpm: number;
  key: string;
  camelotKey: string;
  energy: number;
}

// Camelot wheel mapping
const camelotWheel: Record<string, string> = {
  '1A': 'Ab minor',
  '1B': 'B major',
  '2A': 'Eb minor',
  '2B': 'Gb major',
  '3A': 'Bb minor',
  '3B': 'Db major',
  '4A': 'F minor',
  '4B': 'Ab major',
  '5A': 'C minor',
  '5B': 'Eb major',
  '6A': 'G minor',
  '6B': 'Bb major',
  '7A': 'D minor',
  '7B': 'F major',
  '8A': 'A minor',
  '8B': 'C major',
  '9A': 'E minor',
  '9B': 'G major',
  '10A': 'B minor',
  '10B': 'D major',
  '11A': 'Gb minor',
  '11B': 'A major',
  '12A': 'Db minor',
  '12B': 'E major',
};

// Reverse mapping: key to Camelot
const keyToCamelot: Record<string, string> = {
  'Ab minor': '1A',
  'B major': '1B',
  'Eb minor': '2A',
  'Gb major': '2B',
  'Bb minor': '3A',
  'Db major': '3B',
  'F minor': '4A',
  'Ab major': '4B',
  'C minor': '5A',
  'Eb major': '5B',
  'G minor': '6A',
  'Bb major': '6B',
  'D minor': '7A',
  'F major': '7B',
  'A minor': '8A',
  'C major': '8B',
  'E minor': '9A',
  'G major': '9B',
  'B minor': '10A',
  'D major': '10B',
  'Gb minor': '11A',
  'F# minor': '11A',
  'A major': '11B',
  'Db minor': '12A',
  'C# minor': '12A',
  'E major': '12B',
};

// Enharmonic equivalents
const enharmonicMap: Record<string, string> = {
  'F# minor': 'Gb minor',
  'C# major': 'Db major',
  'D# minor': 'Eb minor',
  'G# minor': 'Ab minor',
  'A# major': 'Bb major',
  'C# minor': 'Db minor',
  'F# major': 'Gb major',
  'D# major': 'Eb major',
  'G# major': 'Ab major',
  'A# minor': 'Bb minor',
};

/**
 * Analyzes audio file using metadata and estimates BPM/key
 * For production: Integrate with actual audio analysis library
 * or use the browser-based Essentia.js analyzer from songkeybpmanalyzer
 */
export async function analyzeAudio(filePath: string, metadata: any): Promise<AudioAnalysis> {
  // Extract BPM from metadata if available
  let bpm = 120; // Default

  // Some audio files have BPM in metadata
  if (metadata.common?.bpm) {
    bpm = metadata.common.bpm;
  } else if (metadata.native) {
    // Try to find BPM in native tags
    for (const tags of Object.values(metadata.native)) {
      const bpmTag = (tags as any[]).find((tag: any) =>
        tag.id?.toLowerCase().includes('bpm') ||
        tag.id?.toLowerCase().includes('tempo')
      );
      if (bpmTag?.value) {
        bpm = parseInt(bpmTag.value);
        break;
      }
    }
  }

  // Estimate key from filename or metadata (simplified)
  let key = 'C major'; // Default
  let camelotKey = '8B';

  // Try to extract key from metadata
  if (metadata.common?.key) {
    key = normalizeKey(metadata.common.key);
    camelotKey = keyToCamelot[key] || '8B';
  }

  // Estimate energy level based on duration and other factors
  // In production, this would be calculated from actual audio analysis
  const energy = estimateEnergy(metadata);

  return {
    bpm,
    key,
    camelotKey,
    energy,
  };
}

function normalizeKey(keyString: string): string {
  // Normalize key string to match our format
  const normalized = keyString.trim();

  // Apply enharmonic mapping
  if (enharmonicMap[normalized]) {
    return enharmonicMap[normalized];
  }

  // Check if key exists in our mapping
  if (keyToCamelot[normalized]) {
    return normalized;
  }

  // Try to parse and fix format
  const match = normalized.match(/^([A-G][#b]?)\s*(major|minor|maj|min|m|M)?$/i);
  if (match) {
    const note = match[1];
    const scale = match[2]?.toLowerCase();
    const isMinor = scale?.startsWith('min') || scale === 'm';
    const fullKey = `${note} ${isMinor ? 'minor' : 'major'}`;

    return enharmonicMap[fullKey] || fullKey;
  }

  return 'C major'; // Fallback
}

function estimateEnergy(metadata: any): number {
  // Simplified energy estimation
  // In production, this would analyze actual audio samples
  const duration = metadata.format?.duration || 180;

  // Longer songs tend to have varied energy
  // This is just a placeholder estimation
  if (duration < 120) return 0.3; // Short = low energy
  if (duration < 240) return 0.5; // Medium
  if (duration < 360) return 0.7; // Higher energy
  return 0.6; // Default
}

export { camelotWheel, keyToCamelot };
