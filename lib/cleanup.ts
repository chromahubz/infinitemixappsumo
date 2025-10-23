import { readdir, stat, unlink } from 'fs/promises';
import path from 'path';

// Clean files older than this (in milliseconds)
const MAX_FILE_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours (1 day)

/**
 * Cleans up old temporary files from the specified directory
 * @param directory - Directory to clean (relative to public/)
 * @param maxAge - Maximum age in milliseconds (default: 24 hours)
 * @returns Object with cleanup statistics
 */
export async function cleanupOldFiles(
  directory: string = 'temp',
  maxAge: number = MAX_FILE_AGE_MS
): Promise<{ deletedCount: number; deletedFiles: string[]; errors: string[] }> {
  const deletedFiles: string[] = [];
  const errors: string[] = [];

  try {
    const dirPath = path.join(process.cwd(), 'public', directory);
    const now = Date.now();

    // Read all files in directory
    const files = await readdir(dirPath);

    for (const file of files) {
      try {
        const filePath = path.join(dirPath, file);
        const fileStats = await stat(filePath);

        // Check if file is older than maxAge
        const fileAge = now - fileStats.mtimeMs;

        if (fileAge > maxAge) {
          await unlink(filePath);
          deletedFiles.push(file);
          console.log(`[Cleanup] Deleted old file: ${file} (age: ${Math.round(fileAge / 1000 / 60)} minutes)`);
        }
      } catch (error: any) {
        errors.push(`Failed to delete ${file}: ${error.message}`);
        console.error(`[Cleanup] Error deleting ${file}:`, error.message);
      }
    }

    console.log(`[Cleanup] Completed. Deleted ${deletedFiles.length} files from ${directory}/`);

    return {
      deletedCount: deletedFiles.length,
      deletedFiles,
      errors,
    };
  } catch (error: any) {
    console.error(`[Cleanup] Error reading directory ${directory}:`, error.message);
    return {
      deletedCount: 0,
      deletedFiles: [],
      errors: [error.message],
    };
  }
}

/**
 * Cleans up all temporary directories
 */
export async function cleanupAllTempFiles(): Promise<{
  totalDeleted: number;
  results: Record<string, any>;
}> {
  const directories = ['temp']; // Add more directories here if needed
  const results: Record<string, any> = {};
  let totalDeleted = 0;

  for (const dir of directories) {
    const result = await cleanupOldFiles(dir);
    results[dir] = result;
    totalDeleted += result.deletedCount;
  }

  return { totalDeleted, results };
}
