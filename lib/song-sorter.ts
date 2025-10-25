import { Song } from './types';

// Compatibility rules from songkeybpmanalyzer
interface CompatibilityRules {
  perfect: (from: string, to: string) => boolean;
  energyBoost: (from: string, to: string) => boolean;
  energyDrop: (from: string, to: string) => boolean;
  moodChange: (from: string, to: string) => boolean;
}

const compatibilityRules: CompatibilityRules = {
  perfect: (from: string, to: string) => {
    return (
      from === to ||
      (from.slice(0, -1) === to.slice(0, -1) && from !== to) || // Same number, different letter
      (Math.abs(parseInt(from) - parseInt(to)) === 1 && from.slice(-1) === to.slice(-1)) // Adjacent numbers, same letter
    );
  },
  energyBoost: (from: string, to: string) => {
    const fromNum = parseInt(from);
    const toNum = parseInt(to);
    return toNum === (fromNum % 12) + 1 && from.slice(-1) === to.slice(-1);
  },
  energyDrop: (from: string, to: string) => {
    const fromNum = parseInt(from);
    const toNum = parseInt(to);
    return toNum === (fromNum === 1 ? 12 : fromNum - 1) && from.slice(-1) === to.slice(-1);
  },
  moodChange: (from: string, to: string) => {
    return from.slice(0, -1) === to.slice(0, -1) && from.slice(-1) !== to.slice(-1);
  },
};

interface SongMatch {
  song: Song;
  index: number;
  score: number;
}

function findBestNextSong(currentSong: Song, candidates: Song[]): SongMatch {
  let bestMatch: SongMatch = { song: candidates[0], index: 0, score: 0 };

  candidates.forEach((candidate, index) => {
    let score = 0;

    // Use camelotKey if available, otherwise skip key matching
    if (currentSong.camelotKey && candidate.camelotKey) {
      // Check for good transitions first
      let hasGoodTransition = false;

      // Perfect match gets highest score (distance 0 or 1 on wheel)
      if (compatibilityRules.perfect(currentSong.camelotKey, candidate.camelotKey)) {
        score += 15;  // Increased from 10 to strongly prefer distance-1
        hasGoodTransition = true;
      }

      // Energy boost gets good score
      if (compatibilityRules.energyBoost(currentSong.camelotKey, candidate.camelotKey)) {
        score += 12;  // Increased from 8
        hasGoodTransition = true;
      }

      // Mood change gets medium score
      if (compatibilityRules.moodChange(currentSong.camelotKey, candidate.camelotKey)) {
        score += 10;  // Increased from 6
        hasGoodTransition = true;
      }

      // If no good transition found, penalize based on distance
      if (!hasGoodTransition) {
        const fromNum = parseInt(currentSong.camelotKey);
        const toNum = parseInt(candidate.camelotKey);

        // Calculate shortest distance around the Camelot wheel (12 positions)
        const numDistance = Math.min(
          Math.abs(fromNum - toNum),
          12 - Math.abs(fromNum - toNum)
        );

        const letterMatch = currentSong.camelotKey.slice(-1) === candidate.camelotKey.slice(-1);

        // Penalize bad key distances
        // Tritone (distance 5-6) is ALWAYS bad, regardless of letter
        if (numDistance >= 5) {
          score -= 15;  // Tritone or worse (e.g., 12B → 6B, 10B → 3B)
        } else if (numDistance === 4 && !letterMatch) {
          score -= 10;  // Very far with different mode (e.g., 3A → 10B)
        } else if (numDistance === 3 && !letterMatch) {
          score -= 5;   // Far with different mode (e.g., 8B → 11A)
        } else if (numDistance === 2) {
          // Distance 2 with same or different letter - moderately bad
          if (letterMatch) {
            score -= 2;  // Same letter but 2 away (e.g., 8B → 10B)
          } else {
            score -= 3;  // Different letter and 2 away
          }
        }
      }
    }

    // BPM compatibility
    if (currentSong.bpm && candidate.bpm) {
      const bpmDiff = Math.abs(currentSong.bpm - candidate.bpm);
      if (bpmDiff <= 5) score += 5;
      else if (bpmDiff <= 10) score += 3;
      else if (bpmDiff <= 20) score += 1;
    }

    // Energy level proximity
    if (currentSong.energy !== undefined && candidate.energy !== undefined) {
      const energyDiff = Math.abs(currentSong.energy - candidate.energy);
      if (energyDiff <= 0.1) score += 3;
      else if (energyDiff <= 0.2) score += 1;
    }

    if (score > bestMatch.score) {
      bestMatch = { song: candidate, index, score };
    }
  });

  return bestMatch;
}

export function sortSongsForMix(songs: Song[]): Song[] {
  if (songs.length <= 1) return songs;

  // Sort songs by energy level for better flow (like in songkeybpmanalyzer)
  const sortedByEnergy = [...songs].sort((a, b) => (a.energy || 0.5) - (b.energy || 0.5));

  const sequence: Song[] = [];
  let currentSong = sortedByEnergy[0];
  sequence.push(currentSong);

  const remaining = sortedByEnergy.slice(1);

  while (remaining.length > 0) {
    const nextSong = findBestNextSong(currentSong, remaining);
    sequence.push(nextSong.song);
    currentSong = nextSong.song;
    remaining.splice(nextSong.index, 1);
  }

  return sequence;
}

export function calculateMixDuration(songs: Song[]): number {
  const crossfadeDuration = 5; // seconds per transition
  const totalSongDuration = songs.reduce((sum, song) => sum + song.duration, 0);
  const totalCrossfades = Math.max(0, songs.length - 1) * crossfadeDuration;
  return totalSongDuration - totalCrossfades;
}

export function getTransitionType(fromKey: string, toKey: string): string {
  if (compatibilityRules.perfect(fromKey, toKey)) {
    return 'Perfect Match';
  } else if (compatibilityRules.energyBoost(fromKey, toKey)) {
    return 'Energy Boost';
  } else if (compatibilityRules.energyDrop(fromKey, toKey)) {
    return 'Energy Drop';
  } else if (compatibilityRules.moodChange(fromKey, toKey)) {
    return 'Mood Change';
  } else {
    return 'Standard Transition';
  }
}
