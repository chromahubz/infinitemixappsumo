'use client';

import { Upload } from 'lucide-react';
import { useRef } from 'react';

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
}

export default function FileUploader({ onFilesSelected, accept = 'audio/*' }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      onFilesSelected(filesArray);
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500" />
      <p className="text-lg font-medium text-gray-900 mb-1">Upload Audio Files</p>
      <p className="text-sm text-gray-700">Click to browse or drag and drop</p>
      <p className="text-xs text-gray-600 mt-2">Supports MP3, WAV, M4A</p>
    </div>
  );
}
