'use client';

import { Song } from '@/lib/types';
import { GripVertical, X } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface PlaylistEditorProps {
  songs: Song[];
  onReorder: (songs: Song[]) => void;
  onRemove: (id: string) => void;
}

function SortableItem({ song, onRemove }: { song: Song; onRemove: (id: string) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
    >
      <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing">
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>

      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{song.title}</h4>
        <div className="flex gap-4 text-xs text-gray-500 mt-1">
          <span>{formatDuration(song.duration)}</span>
          {song.bpm && <span>{song.bpm} BPM</span>}
          {song.camelotKey && <span className="font-semibold text-blue-600">{song.camelotKey}</span>}
          {song.key && <span>{song.key}</span>}
        </div>
      </div>

      <button
        onClick={() => onRemove(song.id)}
        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
      >
        <X className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}

export default function PlaylistEditor({ songs, onReorder, onRemove }: PlaylistEditorProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = songs.findIndex((s) => s.id === active.id);
      const newIndex = songs.findIndex((s) => s.id === over.id);
      onReorder(arrayMove(songs, oldIndex, newIndex));
    }
  };

  if (songs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No songs added yet
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={songs.map(s => s.id)} strategy={verticalListSortingStrategy}>
          {songs.map((song) => (
            <SortableItem key={song.id} song={song} onRemove={onRemove} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
