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
      // Perfect match gets highest score
      if (compatibilityRules.perfect(currentSong.camelotKey, candidate.camelotKey)) {
        score += 10;
      }

      // Energy boost gets good score
      if (compatibilityRules.energyBoost(currentSong.camelotKey, candidate.camelotKey)) {
        score += 8;
      }

      // Mood change gets medium score
      if (compatibilityRules.moodChange(currentSong.camelotKey, candidate.camelotKey)) {
        score += 6;
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
