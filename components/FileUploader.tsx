'use client';

import { Upload } from 'lucide-react';
import { useRef } from 'react';

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
}

const MAX_SONGS = 30;
const MAX_FILE_SIZE_MB = 30;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ['audio/mpeg', 'audio/wav', 'audio/x-wav', 'audio/mp4', 'audio/x-m4a'];
const ALLOWED_EXTENSIONS = ['.mp3', '.wav', '.m4a'];

export default function FileUploader({ onFilesSelected, accept = 'audio/*' }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      // Validate number of songs
      if (filesArray.length > MAX_SONGS) {
        alert(`Maximum ${MAX_SONGS} songs allowed. You selected ${filesArray.length} songs. Please select fewer files.`);
        return;
      }

      // Validate file sizes and types
      const invalidFiles: string[] = [];
      const oversizedFiles: string[] = [];

      const validFiles = filesArray.filter(file => {
        // Check file type
        const hasValidType = ALLOWED_TYPES.includes(file.type);
        const hasValidExtension = ALLOWED_EXTENSIONS.some(ext => file.name.toLowerCase().endsWith(ext));

        if (!hasValidType && !hasValidExtension) {
          invalidFiles.push(file.name);
          return false;
        }

        // Check file size
        if (file.size > MAX_FILE_SIZE_BYTES) {
          oversizedFiles.push(`${file.name} (${(file.size / 1024 / 1024).toFixed(1)}MB)`);
          return false;
        }

        return true;
      });

      // Show error messages if any files were rejected
      if (invalidFiles.length > 0) {
        alert(`Invalid file format. Only MP3, WAV, and M4A files are supported.\n\nRejected files:\n${invalidFiles.join('\n')}`);
      }

      if (oversizedFiles.length > 0) {
        alert(`Some files exceed the ${MAX_FILE_SIZE_MB}MB size limit:\n\n${oversizedFiles.join('\n')}\n\nPlease use smaller files.`);
      }

      // Only proceed if we have valid files
      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      } else if (invalidFiles.length === 0 && oversizedFiles.length === 0) {
        // No files selected at all
        return;
      }
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
      <p className="text-xs text-gray-500 mt-1">Max 30 songs • 30MB per file</p>
    </div>
  );
}
