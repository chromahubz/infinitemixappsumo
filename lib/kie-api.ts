/**
 * Kie.ai API Integration for AI Music Generation
 * Documentation: https://kie.ai/docs
 */

const KIE_API_KEY = process.env.KIE_API_KEY;
const KIE_API_BASE_URL = process.env.KIE_API_BASE_URL || 'https://api.kie.ai';
const CALLBACK_BASE_URL = process.env.CALLBACK_BASE_URL || 'http://localhost:3000';

export interface GenerateMusicParams {
  prompt?: string;
  style?: string;
  title?: string;
  customMode: boolean;
  instrumental: boolean;
  model: 'V3_5' | 'V4' | 'V4_5' | 'V4_5PLUS' | 'V5';
  callBackUrl?: string;
  negativeTags?: string;
  vocalGender?: 'm' | 'f';
  styleWeight?: number;
  weirdnessConstraint?: number;
  audioWeight?: number;
}

export interface GenerateMusicResponse {
  code: number;
  msg: string;
  data?: {
    taskId: string;
  };
}

export interface MusicTaskStatus {
  taskId: string;
  status: 'pending' | 'text' | 'first' | 'complete' | 'failed';
  audioUrl?: string;
  audioUrl2?: string; // Second variation
  title?: string;
  duration?: number;
  error?: string;
}

/**
 * Generate music using Kie.ai API
 */
export async function generateMusic(params: GenerateMusicParams): Promise<GenerateMusicResponse> {
  if (!KIE_API_KEY || KIE_API_KEY === 'your_kie_api_key_here') {
    throw new Error('KIE_API_KEY is not configured. Please add it to .env.local');
  }

  // Build the request payload
  const payload: Record<string, string | boolean | number> = {
    customMode: params.customMode,
    instrumental: params.instrumental,
    model: params.model,
    callBackUrl: params.callBackUrl || `${CALLBACK_BASE_URL}/api/music-callback`,
  };

  // Add required fields based on mode
  if (params.customMode) {
    if (!params.instrumental && !params.prompt) {
      throw new Error('Prompt is required when customMode is true and instrumental is false');
    }
    if (!params.style || !params.title) {
      throw new Error('Style and title are required when customMode is true');
    }

    payload.style = params.style;
    payload.title = params.title;
    if (params.prompt) payload.prompt = params.prompt;
  } else {
    if (!params.prompt) {
      throw new Error('Prompt is required when customMode is false');
    }
    payload.prompt = params.prompt;
  }

  // Add optional parameters
  if (params.negativeTags) payload.negativeTags = params.negativeTags;
  if (params.vocalGender) payload.vocalGender = params.vocalGender;
  if (params.styleWeight !== undefined) payload.styleWeight = params.styleWeight;
  if (params.weirdnessConstraint !== undefined) payload.weirdnessConstraint = params.weirdnessConstraint;
  if (params.audioWeight !== undefined) payload.audioWeight = params.audioWeight;

  console.log('[Kie.ai] Generating music with params:', JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(`${KIE_API_BASE_URL}/api/v1/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KIE_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[Kie.ai] API error:', data);
      throw new Error(data.msg || `API request failed with status ${response.status}`);
    }

    console.log('[Kie.ai] Music generation started. Task ID:', data.data?.taskId);

    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Kie.ai] Request failed:', errorMessage);
    throw error;
  }
}

interface TaskStatusResponse {
  code: number;
  msg: string;
  data?: MusicTaskStatus;
}

/**
 * Get music generation task details (for polling)
 * Note: You need to implement the GET endpoint for task status if needed
 */
export async function getMusicTaskStatus(taskId: string): Promise<TaskStatusResponse> {
  if (!KIE_API_KEY || KIE_API_KEY === 'your_kie_api_key_here') {
    throw new Error('KIE_API_KEY is not configured');
  }

  try {
    const response = await fetch(`${KIE_API_BASE_URL}/api/v1/music/${taskId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${KIE_API_KEY}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || `Failed to get task status`);
    }

    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Kie.ai] Failed to get task status:', errorMessage);
    throw error;
  }
}

/**
 * Generate music style/title based on genre
 */
export function generateMusicMetadata(genre: string, index: number): { style: string; title: string } {
  const genreMap: Record<string, { styles: string[]; titlePrefix: string }> = {
    'Lofi': {
      styles: ['Lofi Hip-Hop, Chill Beats, Relaxed', 'Jazzy Lofi, Mellow, Downtempo', 'Ambient Lofi, Dreamy, Atmospheric'],
      titlePrefix: 'Lofi Vibes'
    },
    'Trap': {
      styles: ['Heavy Bass Trap, 808s, Dark', 'Melodic Trap, Atmospheric, Hard-Hitting', 'Aggressive Trap, Distorted, Energetic'],
      titlePrefix: 'Trap Anthem'
    },
    'Ambient': {
      styles: ['Ethereal Ambient, Soundscape, Peaceful', 'Dark Ambient, Mysterious, Cinematic', 'Space Ambient, Cosmic, Floating'],
      titlePrefix: 'Ambient Journey'
    },
    'EDM': {
      styles: ['Progressive House, Uplifting, Energetic', 'Future Bass, Melodic, Euphoric', 'Big Room, Festival, Powerful'],
      titlePrefix: 'EDM Banger'
    },
    'Hip-Hop': {
      styles: ['Boom Bap, Classic, Jazzy', 'Modern Hip-Hop, Melodic, Catchy', 'Underground Hip-Hop, Raw, Gritty'],
      titlePrefix: 'Hip-Hop Beat'
    },
    'Jazz': {
      styles: ['Smooth Jazz, Saxophone, Relaxing', 'Bebop Jazz, Fast, Complex', 'Cool Jazz, Mellow, Sophisticated'],
      titlePrefix: 'Jazz Nights'
    },
    'Classical': {
      styles: ['Orchestral, Epic, Cinematic', 'Piano Classical, Elegant, Refined', 'String Quartet, Harmonious, Beautiful'],
      titlePrefix: 'Classical Piece'
    },
  };

  const genreData = genreMap[genre] || genreMap['Lofi'];
  const styleIndex = index % genreData.styles.length;

  return {
    style: genreData.styles[styleIndex],
    title: `${genreData.titlePrefix} ${index + 1}`,
  };
}
