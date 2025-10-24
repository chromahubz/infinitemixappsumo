/**
 * In-memory task status store for music generation
 * In production, this should be replaced with Redis or a database
 */

export interface TaskStatus {
  taskId: string;
  status: string;
  title?: string;
  genre?: string;
  index?: number;
  audioUrl?: string;
  audioUrl2?: string;
  duration?: number;
  error?: string;
}

// Store task status in memory
export const taskStatusStore = new Map<string, TaskStatus>();
