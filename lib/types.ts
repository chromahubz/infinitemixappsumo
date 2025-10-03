export interface Song {
  id: string;
  title: string;
  artist?: string;
  duration: number;
  bpm?: number;
  key?: string;
  camelotKey?: string;
  energy?: number;
  url?: string;
  path?: string;
  filename?: string;
}

export interface MixConfig {
  genre: string;
  duration: number; // in minutes
  mode: 'ai' | 'manual';
}

export interface ThumbnailConfig {
  url?: string;
  base64?: string;
  prompt?: string;
}

export const GENRES = [
  'Lofi',
  'Chillhop',
  'Ambient',
  'Lo-fi Hip Hop',
  'Study Beats',
  'Jazz',
  'Electronic',
] as const;

export const DURATIONS = [
  { label: '15 min', value: 15 },
  { label: '30 min', value: 30 },
  { label: '45 min', value: 45 },
  { label: '1 hour', value: 60 },
  { label: '1h 30min', value: 90 },
  { label: '2 hours', value: 120 },
] as const;
