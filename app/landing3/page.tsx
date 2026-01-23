'use client';

import { useState } from 'react';
import {
  Sparkles, Zap, Music, Wand2, Clock, TrendingUp, CheckCircle, ArrowRight, Play, Users, Star,
  Upload, Sliders, Image, Video, Download, Headphones, BarChart3, Repeat, Palette, FileAudio,
  Mic2, Radio, Disc3, ListMusic, Globe, Shield, Rocket, Target, Award, ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function ModernLanding() {
  const [activeTab, setActiveTab] = useState<'ai' | 'manual'>('ai');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white border-b-4 border-black z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">IM</span>
            </div>
            <span className="text-2xl font-black text-gray-900">INFINITEMIX</span>
          </div>
          <Link
            href="/software"
            className="px-8 py-3 bg-black text-white text-base font-bold rounded-none hover:bg-gray-900 transition-colors transform hover:scale-105"
          >
            LAUNCH APP →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-12">
            <div className="inline-block px-5 py-2 bg-black text-white font-black text-sm mb-8 transform -rotate-2 uppercase">
              🔥 AUTOMATE MUSIC MIXING
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none uppercase">
              TURN YOUR MUSIC<br/>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                INTO VIRAL VIDEOS
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 leading-tight font-bold">
              Auto music mixing that creates professional-quality content in under 5 minutes
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              No music production skills needed. No expensive software. Just upload, click, and download YouTube-ready videos with perfect harmonic transitions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/software"
                className="flex items-center gap-2 px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-lg font-black rounded-none hover:shadow-2xl transform hover:scale-105 transition-all uppercase"
              >
                <Zap className="w-5 h-5" /> START NOW <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="px-8 py-5 bg-black text-white text-lg font-black rounded-none hover:bg-gray-900 transform hover:scale-105 transition-all flex items-center gap-2 uppercase"
              >
                <Play className="w-5 h-5" /> WATCH DEMO
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="bg-white p-4 border-4 border-black">
                <div className="text-3xl font-black text-purple-600 mb-1">4.9★</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Average Rating</div>
              </div>
              <div className="bg-white p-4 border-4 border-black">
                <div className="text-3xl font-black text-pink-600 mb-1">10K+</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Active Users</div>
              </div>
              <div className="bg-white p-4 border-4 border-black">
                <div className="text-3xl font-black text-orange-600 mb-1">500K+</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Mixes Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              GENERATE ANY GENRE YOU WANT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              From viral lofi beats to trap bangers - create professional mixes in any style. <strong className="text-gray-900">Each generation creates unique music just for you, never heard before.</strong>
            </p>
            <p className="text-lg text-gray-500">
              These are just our top genres - many more available in the app!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { name: 'Lofi', img: '/homepageimg/lofi.jpg', badge: '🔥 VIRAL' },
              { name: 'Trap', img: '/homepageimg/trap.jpg', badge: '' },
              { name: 'Ambient', img: '/homepageimg/ambient.jpg', badge: '' },
              { name: 'Latin', img: '/homepageimg/latin.jpg', badge: '' },
              { name: 'Synthwave', img: '/homepageimg/synthwave.jpg', badge: '' },
              { name: 'Vaporwave', img: '/homepageimg/vaporwave.jpg', badge: '' },
            ].map((genre) => (
              <div key={genre.name} className="relative group cursor-pointer">
                <div className="aspect-square overflow-hidden shadow-lg border-4 border-black group-hover:scale-110 transition-transform">
                  <img
                    src={genre.img}
                    alt={`${genre.name} music`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-4">
                    <h3 className="text-white font-black text-lg uppercase">{genre.name}</h3>
                    {genre.badge && (
                      <span className="mt-1 px-2 py-1 bg-red-500 text-white text-xs font-bold">
                        {genre.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 font-bold">
              <strong className="text-gray-900">AI not your style?</strong> Upload your own MP3s from local files and create professional mixes with real songs!
            </p>
          </div>
        </div>
      </section>

      {/* Party Story */}
      <section className="py-20 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-12 border-8 border-black">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-black text-white font-black text-xs mb-6 uppercase">
                  ⚡ REAL-WORLD USE CASE
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase leading-tight">
                  PARTY MODE:<br/>ACTIVATED
                </h2>
                <p className="text-xl text-gray-700 mb-6 font-bold leading-relaxed">
                  You're hosting the party of the year, but you didn't have time to prepare the perfect playlist. Your DJ friend bailed. You have a folder full of songs but no time to manually mix them.
                </p>
                <p className="text-xl text-gray-700 mb-6 font-bold leading-relaxed">
                  <strong className="text-purple-600">InfiniteMix solves this in 3 minutes.</strong> Drop your local MP3s, and our AI instantly analyzes BPM and musical keys, sequences them for perfect energy flow, and adds professional crossfades between tracks.
                </p>
                <div className="space-y-4">
                  {[
                    { num: '01', text: 'DRAG & DROP YOUR SONGS' },
                    { num: '02', text: 'AI DOES THE MIXING MAGIC' },
                    { num: '03', text: 'DOWNLOAD & DOMINATE' }
                  ].map((step) => (
                    <div key={step.num} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-600 text-white font-black flex items-center justify-center border-4 border-black">
                        {step.num}
                      </div>
                      <span className="text-gray-900 font-black uppercase">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-8 border-8 border-black text-white">
                  <div className="text-center mb-6">
                    <Sparkles className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-3xl font-black mb-4 uppercase">RESULTS</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      '✓ 50 TRACKS MIXED',
                      '✓ ZERO SILENCE',
                      '✓ PERFECT FLOW',
                      '✓ DJ-LEVEL QUALITY'
                    ].map((item, i) => (
                      <div key={i} className="bg-white/20 backdrop-blur-sm px-4 py-3 border-2 border-white">
                        <span className="font-black">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-white/20">
                    <p className="text-xs italic">"Used this 30 mins before my housewarming party. Everyone thought I hired a professional DJ. Absolutely worth it!" - Mike T.</p>
                  </div>
                </div>
                <div className="bg-white rounded-none p-6 border-4 border-black">
                  <p className="text-gray-900 font-black mb-2 uppercase text-center">DJ TECHNIQUES BUILT-IN:</p>
                  <ul className="text-gray-700 space-y-1 text-sm font-bold">
                    <li>• Automatic BPM matching</li>
                    <li>• Harmonic key detection & compatibility</li>
                    <li>• Energy-based track sequencing</li>
                    <li>• Smooth crossfades (0-10 seconds)</li>
                    <li>• Perfect timing for fade points</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase">
                STOP SPENDING HOURS ON MANUAL MUSIC MIXING
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-bold">
                Traditional music mixing requires expensive software, technical expertise, and hours of manual work. DJs and producers use complex tools like Ableton, FL Studio, or Traktor to analyze BPM, match keys, and create seamless transitions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-bold">
                InfiniteMix automates the entire workflow using AI and advanced audio analysis algorithms. Our Smart Audio System analyzes your tracks for BPM, musical key, and energy levels, then automatically sequences them for perfect transitions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white p-4 border-4 border-black">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-black text-gray-900 mb-1 uppercase">NO EXPERIENCE REQUIRED</h3>
                    <p className="text-gray-700 font-bold">AI handles complex audio analysis automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 border-4 border-black">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-black text-gray-900 mb-1 uppercase">5 MINUTES VS 5 HOURS</h3>
                    <p className="text-gray-700 font-bold">Professional mixes in under 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 border-4 border-black">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-black text-gray-900 mb-1 uppercase">ALL-IN-ONE SOLUTION</h3>
                    <p className="text-gray-700 font-bold">Audio mixing, AI thumbnails, video generation in one tool</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="demo-video" className="bg-white rounded-none p-8 shadow-xl border-4 border-black">
              <div className="aspect-video bg-black overflow-hidden mb-6">
                <iframe
                  src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="InfiniteMix Demo Video"
                  loading="lazy"
                ></iframe>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">SEE INFINITEMIX IN ACTION</h3>
              <p className="text-gray-700 mb-4 font-bold">Watch how creators produce viral lofi mixes, study playlists, and background music in minutes</p>
              <a
                href="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-black uppercase text-sm"
              >
                <Play className="w-4 h-4" />
                OPEN IN NEW TAB
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Mixes */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              REAL MIXES CREATED WITH INFINITEMIX
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              Listen to actual lofi mixes generated and mixed by our platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-none p-4 border-4 border-black hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-black overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/BmnqYrLwbOM?modestbranding=1&rel=0&showinfo=0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="InfiniteMix Sample 1"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border-4 border-black hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-black overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/yz0K_RYGpW8?modestbranding=1&rel=0&showinfo=0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="InfiniteMix Sample 2"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-none p-4 border-4 border-black hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-black overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/JQAK3iJO05I?modestbranding=1&rel=0&showinfo=0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="InfiniteMix Sample 3"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              PROFESSIONAL MUSIC PRODUCTION TOOLS FOR EVERYONE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              Everything you need to create viral music content, from AI generation to final export
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-4 border-purple-300 p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-600 flex items-center justify-center mb-6">
                <Wand2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">AI MUSIC + REAL UPLOADS</h3>
              <p className="text-gray-700 leading-relaxed font-bold">
                Generate unique AI tracks OR upload your own MP3s. Choose from Lofi, EDM, Hip-Hop, Jazz, Classical and more.
              </p>
            </div>

            <div className="bg-white border-4 border-pink-300 p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-pink-600 flex items-center justify-center mb-6">
                <Disc3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">SMART HARMONIC MIXING</h3>
              <p className="text-gray-700 leading-relaxed font-bold">
                Professional DJ-quality transitions using intelligent harmonic analysis. Analyzes BPM and musical key.
              </p>
            </div>

            <div className="bg-white border-4 border-blue-300 p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-600 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">ADVANCED AUDIO ANALYSIS</h3>
              <p className="text-gray-700 leading-relaxed font-bold">
                Professional audio analysis extracts tempo, key signature, energy levels from your files instantly.
              </p>
            </div>

            <div className="bg-white border-4 border-green-300 p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-600 flex items-center justify-center mb-6">
                <Repeat className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">INTELLIGENT CROSSFADE ENGINE</h3>
              <p className="text-gray-700 leading-relaxed font-bold">
                Customizable crossfade (0-10 seconds) with automatic timing. Smooth audio transitions that blend perfectly.
              </p>
            </div>

            <div className="bg-white border-4 border-yellow-300 p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-600 flex items-center justify-center mb-6">
                <Image className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">AI THUMBNAIL GENERATION</h3>
              <p className="text-gray-700 leading-relaxed font-bold">
                Generate eye-catching professional thumbnails instantly with AI. Single or multiple thumbnails per song.
              </p>
            </div>

            <div className="bg-white border-4 border-indigo-300 p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-600 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase">YOUTUBE-READY VIDEO EXPORT</h3>
              <p className="text-gray-700 leading-relaxed font-bold">
                Export high-quality videos with embedded audio, AI thumbnails, and auto-generated descriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              PROFESSIONAL RESULTS, ZERO COMPLEXITY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              Industry-leading technology delivers studio-quality output every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-4 border-black">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <FileAudio className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 uppercase">INTELLIGENT AUDIO ANALYSIS</h3>
                  <p className="text-gray-700 leading-relaxed font-bold">
                    Professional-grade audio engine analyzes your tracks instantly. Detects tempo, musical key, rhythm patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Sliders className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 uppercase">STUDIO-QUALITY OUTPUT</h3>
                  <p className="text-gray-700 leading-relaxed font-bold">
                    Professional video rendering creates broadcast-quality results with perfect audio-video synchronization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-600 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 uppercase">NEXT-GEN AI VISUALS</h3>
                  <p className="text-gray-700 leading-relaxed font-bold">
                    Advanced AI creates stunning unique thumbnails optimized for maximum click-through rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <Mic2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 uppercase">SMART CONTENT GENERATION</h3>
                  <p className="text-gray-700 leading-relaxed font-bold">
                    AI analyzes your mix and creates engaging YouTube descriptions with perfect timestamps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              FROM UPLOAD TO VIRAL MIX IN 3 SIMPLE STEPS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              Professional results without the learning curve
            </p>
          </div>

          {/* Mode Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-8 py-3 font-black transition-all uppercase ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-4 border-black shadow-lg'
                  : 'bg-white text-gray-700 border-4 border-black hover:bg-gray-100'
              }`}
            >
              AI MUSIC MODE
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`px-8 py-3 font-black transition-all uppercase ${
                activeTab === 'manual'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-4 border-black shadow-lg'
                  : 'bg-white text-gray-700 border-4 border-black hover:bg-gray-100'
              }`}
            >
              MANUAL UPLOAD MODE
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activeTab === 'ai' ? (
              <>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 border-4 border-black">
                  <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center text-2xl font-black mb-6 border-4 border-black">1</div>
                  <Sliders className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">CONFIGURE YOUR MIX</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 font-bold">
                    Select your desired genre (Lofi, EDM, Hip-Hop, Jazz, Classical) and set the total duration.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Multiple genre options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Custom duration settings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Adjustable crossfade timing
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 border-4 border-black">
                  <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center text-2xl font-black mb-6 border-4 border-black">2</div>
                  <Wand2 className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">AI GENERATES & SEQUENCES</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 font-bold">
                    Our AI creates unique tracks, then automatically sequences them using harmonic mixing algorithms.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      AI music generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Automatic harmonic mixing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Energy-based sequencing
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 border-4 border-black">
                  <div className="w-16 h-16 bg-purple-600 text-white flex items-center justify-center text-2xl font-black mb-6 border-4 border-black">3</div>
                  <Download className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">GENERATE & EXPORT</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 font-bold">
                    Create AI thumbnails, generate YouTube descriptions with timestamps, and download your video.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      AI thumbnail generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Auto descriptions & timestamps
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      YouTube-ready MP4 export
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-4 border-black">
                  <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center text-2xl font-black mb-6 border-4 border-black">1</div>
                  <Upload className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">UPLOAD AUDIO FILES</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 font-bold">
                    Drop your MP3, WAV, or M4A files. Our intelligent audio engine analyzes each track instantly.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      BPM detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Key & harmonic analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Energy level calculation
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-4 border-black">
                  <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center text-2xl font-black mb-6 border-4 border-black">2</div>
                  <ListMusic className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">AUTO-SEQUENCE & EDIT</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 font-bold">
                    Smart Audio System automatically orders tracks for harmonic compatibility. Manually reorder if desired.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Smart harmonic sequencing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Drag & drop reordering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Optional analysis skip
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-4 border-black">
                  <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center text-2xl font-black mb-6 border-4 border-black">3</div>
                  <Video className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">CREATE & DOWNLOAD</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 font-bold">
                    Generate AI thumbnails, get auto-generated descriptions with accurate timestamps, and export.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Multiple thumbnail options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Synced video transitions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Accurate timestamp generation
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              BUILT FOR CONTENT CREATORS & MUSIC PROFESSIONALS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              Whether you're building a YouTube channel or producing professional mixes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Radio className="w-10 h-10 text-purple-600" />
                <span className="bg-red-500 text-white text-xs font-black px-2 py-1">🔥 VIRAL</span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2 uppercase">YOUTUBE LOFI CHANNELS</h3>
              <p className="text-gray-700 font-bold text-sm">
                Create viral lofi study mixes. Generate unlimited content for 24/7 music streams.
              </p>
            </div>

            <div className="bg-white p-6 border-4 border-black hover:shadow-xl transition-shadow">
              <Headphones className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-black text-gray-900 mb-2 uppercase">PODCAST PRODUCERS</h3>
              <p className="text-gray-700 font-bold text-sm">
                Generate intro/outro music, background tracks, and transition segments.
              </p>
            </div>

            <div className="bg-white p-6 border-4 border-black hover:shadow-xl transition-shadow">
              <Mic2 className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg font-black text-gray-900 mb-2 uppercase">DJS & PARTY HOSTS</h3>
              <p className="text-gray-700 font-bold text-sm">
                Instant party mixes without a DJ! Quick professional mixes with perfect crossfades.
              </p>
            </div>

            <div className="bg-white p-6 border-4 border-black hover:shadow-xl transition-shadow">
              <Video className="w-10 h-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-black text-gray-900 mb-2 uppercase">VIDEO CONTENT CREATORS</h3>
              <p className="text-gray-700 font-bold text-sm">
                Generate royalty-free background music for vlogs and social media content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              WHAT CREATORS ARE SAYING
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              Real results from real creators building successful channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { initials: 'MK', name: 'Marcus Kim', title: 'YouTube Creator • 150K subs', text: 'I went from spending 6+ hours on each mix to under 10 minutes. My lofi channel hit 100K subs in 3 months.' },
              { initials: 'SJ', name: 'Sarah Johnson', title: 'Podcast Producer • 5 shows', text: 'As a podcast producer, I needed quick background music without licensing headaches. Saved me thousands already.' },
              { initials: 'DJ', name: 'David Rodriguez', title: 'DJ & Producer • 12 years', text: 'The BPM and key detection is scary accurate. InfiniteMix replaced my entire mixing workflow.' },
              { initials: 'AC', name: 'Amanda Chen', title: 'Content Creator', text: 'I had zero music production knowledge. Within 30 minutes I had my first viral mix. Hit 50K views in 48 hours.' },
              { initials: 'TR', name: 'Tom Reeves', title: 'Music Producer • 8K subs', text: 'The crossfade engine is brilliant. I can adjust from 0-10 seconds and timestamps stay perfectly accurate.' },
              { initials: 'LP', name: 'Lisa Park', title: 'Channel Owner • 500K subs', text: 'Running 3 different music channels now. InfiniteMix lets me batch-create content for the week in one afternoon.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-white p-8 border-4 border-black">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-bold">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-black border-2 border-black">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-black text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 font-bold">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase">
            TRUSTED BY CREATORS WORLDWIDE
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 border-4 border-white">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">10,000+</div>
              <div className="text-xl font-bold uppercase">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 border-4 border-white">
              <Disc3 className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">500K+</div>
              <div className="text-xl font-bold uppercase">Mixes Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 border-4 border-white">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">50M+</div>
              <div className="text-xl font-bold uppercase">Total Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 border-4 border-white">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">100K+</div>
              <div className="text-xl font-bold uppercase">Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              Everything you need to know about InfiniteMix
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I use the generated music and mixes commercially?',
                a: 'Yes, absolutely. InfiniteMix includes full commercial usage rights for all AI-generated music and final mixes. You can monetize YouTube videos, use in client projects, and create content for commercial purposes without any restrictions or additional licensing fees.',
              },
              {
                q: 'How does the harmonic mixing algorithm work?',
                a: 'InfiniteMix uses advanced harmonic analysis, a professional DJ technique for seamless mixing. Our Smart Audio System analyzes each track to detect its musical key and BPM. The algorithm then sequences songs that are harmonically compatible to create smooth, musical transitions that sound professional.',
              },
              {
                q: 'What audio formats are supported for upload?',
                a: 'InfiniteMix accepts MP3, WAV, and M4A audio files for upload. For AI generation mode, no upload is needed - we generate tracks directly. Export format is high-quality MP4 video optimized for YouTube and other video platforms.',
              },
              {
                q: 'Is there a limit on mix length or number of songs?',
                a: 'No limits on mix length or song count. Create short 10-minute mixes or multi-hour compilations for YouTube streams. Upload as many tracks as you want in manual mode, or generate any number of AI tracks.',
              },
              {
                q: 'How accurate are the BPM and key detection features?',
                a: 'Our audio analysis uses the same technology trusted by major streaming platforms and professional music applications. BPM detection accuracy is typically 95%+ for most electronic and modern music genres.',
              },
              {
                q: 'Can I edit the mix order after auto sequencing?',
                a: 'Yes. While our Smart Audio System provides optimal sequencing for harmonic compatibility, you have full control to drag-and-drop reorder tracks, remove songs, or manually adjust the playlist before final export.',
              },
              {
                q: 'How long does it take to create a complete mix?',
                a: 'Typically under 5 minutes from start to download. AI music generation takes 1-2 minutes per track. Audio analysis is real-time. Mixing and video generation usually complete in 1-2 minutes depending on mix length.',
              },
              {
                q: 'What makes InfiniteMix different from other mixing tools?',
                a: 'InfiniteMix is the only all-in-one solution that combines AI music generation, professional harmonic mixing analysis, AI thumbnail creation, and YouTube-optimized video export in one tool. Traditional DAWs require extensive knowledge and manual work.',
              },
              {
                q: 'Do I need any music production experience?',
                a: 'No experience required. InfiniteMix handles all technical aspects automatically - BPM detection, key analysis, harmonic compatibility, crossfade timing, and video encoding. Just upload files or choose AI generation.',
              },
              {
                q: 'What happens to my uploaded audio files?',
                a: 'Files are processed securely in your browser for analysis, then temporarily uploaded to our servers only for the mixing process. Files are automatically deleted after processing.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-black pr-8 uppercase">{faq.q}</h3>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-6 h-6 text-gray-900 flex-shrink-0 font-black" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-900 flex-shrink-0 font-black" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-8 pb-6 border-t-4 border-black">
                    <p className="text-gray-700 leading-relaxed font-bold pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-6 uppercase leading-none">
            READY TO<br/>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              GO VIRAL?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 font-bold uppercase">
            JOIN 10,000+ CREATORS MAKING WAVES
          </p>
          <Link
            href="/software"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-xl font-black hover:shadow-2xl transform hover:scale-105 transition-all uppercase border-4 border-white"
          >
            <Zap className="w-6 h-6" /> CREATE FREE NOW <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-8 border-black py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-black text-sm">IM</span>
                </div>
                <span className="text-xl font-black text-gray-900">INFINITEMIX</span>
              </div>
              <p className="text-gray-700 font-bold text-sm">
                Professional music mixing and video creation platform.
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 font-black text-sm mb-3 uppercase">Product</h3>
              <ul className="space-y-2 text-sm font-bold text-gray-700">
                <li><Link href="/features" className="hover:text-gray-900">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/tutorials" className="hover:text-gray-900">Tutorials</Link></li>
                <li><Link href="/guide" className="hover:text-gray-900">Getting Started</Link></li>
                <li><Link href="/changelog" className="hover:text-gray-900">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-black text-sm mb-3 uppercase">Support</h3>
              <ul className="space-y-2 text-sm font-bold text-gray-700">
                <li><Link href="/help" className="hover:text-gray-900">Help Center</Link></li>
                <li><Link href="/documentation" className="hover:text-gray-900">Documentation</Link></li>
                <li><Link href="/faq" className="hover:text-gray-900">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
                <li><Link href="/community" className="hover:text-gray-900">Community</Link></li>
              </ul>
              <p className="text-xs text-gray-500 mt-3 italic">Contact us for more info</p>
            </div>

            <div>
              <h3 className="text-gray-900 font-black text-sm mb-3 uppercase">Legal</h3>
              <ul className="space-y-2 text-sm font-bold text-gray-700">
                <li><Link href="/terms" className="hover:text-gray-900">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/refund" className="hover:text-gray-900">Refund</Link></li>
                <li><Link href="/license" className="hover:text-gray-900">License</Link></li>
                <li><Link href="/cookies" className="hover:text-gray-900">Cookies</Link></li>
                <li><Link href="/gdpr" className="hover:text-gray-900">GDPR</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t-4 border-black pt-6">
            <p className="font-black text-gray-900 uppercase text-center text-sm">
              © 2024 INFINITEMIX - POWERED BY AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
