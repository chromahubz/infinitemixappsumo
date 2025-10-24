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
    // Non-custom mode: prompt is always required
    if (!params.prompt) {
      throw new Error('Prompt is required when customMode is false');
    }
    payload.prompt = params.prompt;
    // style and title are ignored in non-custom mode (Kie.ai generates them)
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
 * Generate music prompt based on genre for non-custom mode
 */
export function generateMusicPrompt(genre: string, index: number): string {
  const genrePrompts: Record<string, string[]> = {
    'Lofi': [
      'A relaxing lofi hip-hop beat with jazzy piano and vinyl crackle',
      'Chill lofi track with mellow guitar and ambient sounds',
      'Dreamy lofi instrumental with soft keys and smooth bass',
      'Atmospheric lofi beat with subtle drums and warm melodies',
      'Peaceful lofi music with gentle piano and lo-fi textures'
    ],
    'Trap': [
      'Hard-hitting trap beat with heavy 808s and dark synths',
      'Melodic trap instrumental with atmospheric pads and rolling hi-hats',
      'Aggressive trap track with distorted bass and energetic drums',
      'Club trap banger with powerful kicks and hypnotic melodies',
      'Street trap beat with raw energy and booming low end'
    ],
    'Ambient': [
      'Ethereal ambient soundscape with floating pads and peaceful atmosphere',
      'Dark ambient music with mysterious textures and cinematic depth',
      'Cosmic ambient journey through space with evolving drones',
      'Zen ambient meditation music with calming tones',
      'Atmospheric ambient track with layered synths and reverb'
    ],
    'EDM': [
      'Uplifting progressive house with energetic builds and euphoric drops',
      'Festival-ready big room EDM with powerful kicks and massive synths',
      'Melodic future bass with emotional chords and dynamic drops',
      'Peak time EDM banger with driving beats and catchy melodies',
      'High-energy electronic dance music with intense buildups'
    ],
    'Hip-Hop': [
      'Classic boom bap hip-hop beat with jazzy samples and head-nodding drums',
      'Modern hip-hop instrumental with melodic keys and punchy 808s',
      'Underground hip-hop beat with raw drums and gritty textures',
      'Smooth hip-hop track with soulful samples and laid-back groove',
      'Hard-hitting hip-hop instrumental with aggressive drums'
    ],
    'Jazz': [
      'Smooth jazz with relaxing saxophone and gentle piano',
      'Bebop jazz with fast-paced improvisation and complex harmonies',
      'Cool jazz with sophisticated melodies and mellow mood',
      'Late night jazz with sultry tones and intimate atmosphere',
      'Modern jazz fusion with dynamic rhythms and rich textures'
    ],
    'Classical': [
      'Epic orchestral piece with powerful strings and dramatic crescendos',
      'Elegant piano classical with refined melodies and expressive dynamics',
      'Beautiful string quartet with harmonious interplay',
      'Cinematic orchestral music with emotional depth',
      'Peaceful classical piano meditation with gentle touch'
    ],
  };

  const prompts = genrePrompts[genre] || genrePrompts['Lofi'];
  const promptIndex = index % prompts.length;

  return prompts[promptIndex];
}
