'use client';

import { useEffect, useRef, useState } from 'react';

interface AnalyzedSong {
  name: string;
  file: File | null;
  bpm: number;
  key: string;
  camelotKey: string;
  energy: number;
  duration: number;
}

interface AnalyzerProps {
  files: File[];
  onAnalysisComplete: (songs: AnalyzedSong[], mixOrder: string[]) => void;
  onProgress?: (current: number, total: number, message: string) => void;
}

export default function AudioAnalyzer({ files, onAnalysisComplete, onProgress }: AnalyzerProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const essentiaRef = useRef<any>(null);

  useEffect(() => {
    // Load Essentia.js dynamically only in browser
    if (typeof window === 'undefined') {
      console.log('Not in browser, skipping Essentia load');
      return;
    }

    console.log('Browser detected, starting Essentia load...');

    const loadEssentia = async () => {
      try {
        console.log('Loading Essentia.js...');

        const Essentia = (await import('essentia.js/dist/essentia.js-core.es.js')).default as new (wasm: unknown) => unknown;
        console.log('Essentia core loaded');

        // Load and initialize WASM module with custom locateFile
        const EssentiaWASMFactory = (await import('essentia.js/dist/essentia-wasm.web.js')).default as (config: { locateFile: (path: string, prefix: string) => string }) => Promise<unknown>;
        console.log('WASM factory loaded, initializing...');

        const EssentiaWASM = await EssentiaWASMFactory({
          locateFile: (path: string, prefix: string) => {
            if (path.endsWith('.wasm')) {
              return '/essentia-wasm.web.wasm';
            }
            return prefix + path;
          }
        });
        console.log('WASM initialized');

        essentiaRef.current = new Essentia(EssentiaWASM);
        console.log('Essentia initialized successfully');
      } catch (error) {
        console.error('Failed to load Essentia.js:', error);
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      }
    };

    loadEssentia();
  }, []);

  useEffect(() => {
    if (files.length > 0 && !isAnalyzing) {
      analyzeSongs();
    }
  }, [files]);

  const initAudioContext = async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  };

  const monomix = (buffer: AudioBuffer): Float32Array => {
    if (buffer.numberOfChannels > 1) {
      const leftCh = buffer.getChannelData(0);
      const rightCh = buffer.getChannelData(1);
      return leftCh.map((sample, i) => 0.5 * (sample + rightCh[i]));
    }
    return buffer.getChannelData(0);
  };

  const downsampleArray = (audioIn: Float32Array, sampleRateIn: number, sampleRateOut: number): Float32Array => {
    if (sampleRateOut === sampleRateIn) return audioIn;

    const sampleRateRatio = sampleRateIn / sampleRateOut;
    const newLength = Math.round(audioIn.length / sampleRateRatio);
    const result = new Float32Array(newLength);
    let offsetResult = 0;
    let offsetAudioIn = 0;

    while (offsetResult < result.length) {
      const nextOffsetAudioIn = Math.round((offsetResult + 1) * sampleRateRatio);
      let accum = 0, count = 0;
      for (let i = offsetAudioIn; i < nextOffsetAudioIn && i < audioIn.length; i++) {
        accum += audioIn[i];
        count++;
      }
      result[offsetResult] = accum / count;
      offsetResult++;
      offsetAudioIn = nextOffsetAudioIn;
    }

    return result;
  };

  const preprocess = (audioBuffer: AudioBuffer): Float32Array => {
    const mono = monomix(audioBuffer);
    return downsampleArray(mono, audioBuffer.sampleRate, 16000);
  };

  const detectKey = (vectorSignal: any) => {
    const essentia = essentiaRef.current;
    if (!essentia) throw new Error('Essentia not loaded');

    const keys: Record<string, string> = {
      'Ab minor': '1A', 'B major': '1B', 'Eb minor': '2A', 'Gb major': '2B',
      'Bb minor': '3A', 'Db major': '3B', 'F minor': '4A', 'Ab major': '4B',
      'C minor': '5A', 'Eb major': '5B', 'G minor': '6A', 'Bb major': '6B',
      'D minor': '7A', 'F major': '7B', 'A minor': '8A', 'C major': '8B',
      'E minor': '9A', 'G major': '9B', 'B minor': '10A', 'D major': '10B',
      'Gb minor': '11A', 'A major': '11B', 'Db minor': '12A', 'E major': '12B',
    };

    const enharmonicMap: Record<string, string> = {
      'F# minor': 'Gb minor', 'C# major': 'Db major', 'D# minor': 'Eb minor',
      'G# minor': 'Ab minor', 'A# major': 'Bb major', 'C# minor': 'Db minor',
      'F# major': 'Gb major', 'D# major': 'Eb major', 'G# major': 'Ab major',
      'A# minor': 'Bb minor',
    };

    const keyData = essentia.KeyExtractor(vectorSignal, true, 4096, 4096, 12, 3500, 60, 25, 0.2, 'bgate', 16000, 0.0001, 440, 'cosine', 'hann');
    let key = `${keyData.key} ${keyData.scale}`;
    key = enharmonicMap[key] || key;
    const camelotKey = keys[key];

    return { key, camelotKey };
  };

  const calculateEnergy = (audioData: Float32Array): number => {
    let energy = 0;
    for (let i = 0; i < audioData.length; i++) {
      energy += audioData[i] * audioData[i];
    }
    return Math.sqrt(energy / audioData.length);
  };

  const analyzeSong = async (file: File, index: number, total: number): Promise<AnalyzedSong> => {
    const essentia = essentiaRef.current;
    if (!essentia) throw new Error('Essentia not loaded');

    onProgress?.(index + 1, total, `Analyzing ${file.name}...`);

    const arrayBuffer = await file.arrayBuffer();
    const audioContext = await initAudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Preprocess audio
    const audioSignal = preprocess(audioBuffer);
    const vectorSignal = essentia.arrayToVector(audioSignal);

    // BPM detection
    const bpm = Math.round(essentia.PercivalBpmEstimator(vectorSignal, 1024, 2048, 128, 128, 210, 50, 16000).bpm);

    // Key detection
    const { key, camelotKey } = detectKey(vectorSignal);

    // Energy calculation
    const signal = audioBuffer.getChannelData(0);
    const energy = calculateEnergy(signal);

    return {
      name: file.name.replace(/\.[^/.]+$/, ''),
      file,
      bpm,
      key,
      camelotKey,
      energy,
      duration: audioBuffer.duration,
    };
  };

  const findBestNextSong = (currentSong: AnalyzedSong, candidates: AnalyzedSong[]): { song: AnalyzedSong; index: number; score: number } => {
    let bestMatch = { song: candidates[0], index: 0, score: 0 };

    const isPerfect = (from: string, to: string) => {
      return from === to ||
        (from.slice(0, -1) === to.slice(0, -1) && from !== to) ||
        (Math.abs(parseInt(from) - parseInt(to)) === 1 && from.slice(-1) === to.slice(-1));
    };

    const isEnergyBoost = (from: string, to: string) => {
      const fromNum = parseInt(from);
      const toNum = parseInt(to);
      return toNum === (fromNum % 12) + 1 && from.slice(-1) === to.slice(-1);
    };

    const isMoodChange = (from: string, to: string) => {
      return from.slice(0, -1) === to.slice(0, -1) && from.slice(-1) !== to.slice(-1);
    };

    candidates.forEach((candidate, index) => {
      let score = 0;

      if (isPerfect(currentSong.camelotKey, candidate.camelotKey)) score += 10;
      if (isEnergyBoost(currentSong.camelotKey, candidate.camelotKey)) score += 8;
      if (isMoodChange(currentSong.camelotKey, candidate.camelotKey)) score += 6;

      const bpmDiff = Math.abs(currentSong.bpm - candidate.bpm);
      if (bpmDiff <= 5) score += 5;
      else if (bpmDiff <= 10) score += 3;
      else if (bpmDiff <= 20) score += 1;

      if (score > bestMatch.score) {
        bestMatch = { song: candidate, index, score };
      }
    });

    return bestMatch;
  };

  const generateMixSequence = (songs: AnalyzedSong[]): AnalyzedSong[] => {
    const sortedSongs = [...songs].sort((a, b) => a.energy - b.energy);
    const sequence: AnalyzedSong[] = [];
    let currentSong = sortedSongs[0];
    sequence.push(currentSong);

    const remaining = sortedSongs.slice(1);

    while (remaining.length > 0) {
      const nextSong = findBestNextSong(currentSong, remaining);
      sequence.push(nextSong.song);
      currentSong = nextSong.song;
      remaining.splice(nextSong.index, 1);
    }

    return sequence;
  };

  const analyzeSongs = async () => {
    console.log('Starting analysis, essentia loaded:', !!essentiaRef.current);
    if (!essentiaRef.current) {
      console.error('Essentia not loaded yet, waiting...');
      setTimeout(analyzeSongs, 1000); // Retry after 1 second
      return;
    }

    setIsAnalyzing(true);
    const analyzedSongs: AnalyzedSong[] = [];

    try {
      console.log(`Analyzing ${files.length} files...`);
      for (let i = 0; i < files.length; i++) {
        console.log(`Processing file ${i + 1}/${files.length}: ${files[i].name}`);
        const song = await analyzeSong(files[i], i, files.length);
        console.log(`Completed analysis for ${files[i].name}:`, song);
        analyzedSongs.push(song);
      }

      // Generate optimal mix sequence
      console.log('Generating mix sequence...');
      const mixSequence = generateMixSequence(analyzedSongs);
      const mixOrder = mixSequence.map(s => s.file?.name || s.name);

      console.log('Analysis complete, calling onAnalysisComplete');
      onAnalysisComplete(mixSequence, mixOrder);
    } catch (error) {
      console.error('Analysis error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return null; // This is a headless component
}
