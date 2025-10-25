'use client';

import { Song } from '@/lib/types';
import { GripVertical, X, Play, Pause, Edit2, Check } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState, useRef } from 'react';

interface PlaylistEditorProps {
  songs: Song[];
  onReorder: (songs: Song[]) => void;
  onRemove: (id: string) => void;
  onRename?: (id: string, newTitle: string) => void;
}

function SortableItem({ song, onRemove, onRename }: { song: Song; onRemove: (id: string) => void; onRename?: (id: string, newTitle: string) => void }) {
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

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(song.title);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRename = () => {
    if (editedTitle.trim() && editedTitle !== song.title && onRename) {
      onRename(song.id, editedTitle.trim());
    }
    setIsEditing(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
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
        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleRename();
                if (e.key === 'Escape') {
                  setIsEditing(false);
                  setEditedTitle(song.title);
                }
              }}
              className="flex-1 px-2 py-1 border-2 border-blue-500 rounded focus:outline-none text-gray-900"
              autoFocus
            />
            <button
              onClick={handleRename}
              className="p-1 hover:bg-green-50 rounded transition-colors"
            >
              <Check className="w-4 h-4 text-green-600" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-gray-900">{song.title}</h4>
            {onRename && (
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 hover:bg-gray-100 rounded transition-colors opacity-0 group-hover:opacity-100"
              >
                <Edit2 className="w-3 h-3 text-gray-500" />
              </button>
            )}
          </div>
        )}
        <div className="flex gap-4 text-xs text-gray-500 mt-1">
          <span>{formatDuration(song.duration)}</span>
          {song.bpm && <span>{song.bpm} BPM</span>}
          {song.camelotKey && <span className="font-semibold text-blue-600">{song.camelotKey}</span>}
          {song.key && <span>{song.key}</span>}
        </div>
      </div>

      {/* Audio Preview */}
      {song.url && (
        <>
          <button
            onClick={togglePlay}
            className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
            title="Preview audio"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-blue-600" />
            ) : (
              <Play className="w-5 h-5 text-blue-600" />
            )}
          </button>
          <audio
            ref={audioRef}
            src={song.url}
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
          />
        </>
      )}

      <button
        onClick={() => onRemove(song.id)}
        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
      >
        <X className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}

export default function PlaylistEditor({ songs, onReorder, onRemove, onRename }: PlaylistEditorProps) {
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
            <SortableItem key={song.id} song={song} onRemove={onRemove} onRename={onRename} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
