'use client';

import { GENRES } from '@/lib/types';

interface GenreSelectorProps {
  genre: string;
  onGenreChange: (genre: string) => void;
}

export default function GenreSelector({ genre, onGenreChange }: GenreSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-2">
        Select Genre
      </label>
      <select
        value={genre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
      >
        {GENRES.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}
