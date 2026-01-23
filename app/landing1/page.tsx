'use client';

import { useState } from 'react';
import {
  Sparkles, Zap, Music, Wand2, Clock, TrendingUp, CheckCircle, ArrowRight, Play, Users, Star,
  Upload, Sliders, Image, Video, Download, Headphones, BarChart3, Repeat, Palette, FileAudio,
  Mic2, Radio, Disc3, ListMusic, Globe, Shield, Rocket, Target, Award, ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function AppleLanding() {
  const [activeTab, setActiveTab] = useState<'ai' | 'manual'>('ai');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="InfiniteMix" className="w-6 h-6" />
            <span className="text-lg font-medium text-gray-900">InfiniteMix</span>
          </div>
          <Link
            href="/software"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Try it free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AUTOMATE MUSIC MIXING
            <Sparkles className="w-4 h-4" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900 mb-6 tracking-tight leading-none">
            Turn your music<br/>into viral videos.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-normal max-w-2xl mx-auto leading-relaxed">
            Auto music mixing that creates professional-quality content in under 5 minutes
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            No music production skills needed. No expensive software. Just upload, click, and download YouTube-ready videos with perfect harmonic transitions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/software"
              className="px-8 py-3 bg-blue-600 text-white text-base font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              Start creating for free
            </Link>
            <button
              onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="px-8 py-3 text-blue-600 text-base font-medium"
            >
              Watch the film <Play className="inline w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-600">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-gray-600">10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">500K+ Mixes Created</span>
            </div>
          </div>
        </div>
      </section>

      {/* Genres Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Generate Any Genre You Want
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              From viral lofi beats to trap bangers - create professional mixes in any style. <strong className="text-gray-900">Each generation creates unique music just for you, never heard before.</strong>
            </p>
            <p className="text-base text-gray-500">
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
                <div className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={genre.img}
                    alt={`${genre.name} music`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-4">
                    <h3 className="text-white font-medium text-base">{genre.name}</h3>
                    {genre.badge && (
                      <span className="mt-1 px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                        {genre.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base text-gray-600">
              <strong className="text-gray-900">AI not your style?</strong> Upload your own MP3s from local files and create professional mixes with real songs!
            </p>
          </div>
        </div>
      </section>

      {/* Party Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-6">
                REAL-WORLD USE CASE
              </div>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                Throwing a Party Tonight? <br/>No DJ? No Problem.
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                You're hosting the party of the year, but you didn't have time to prepare the perfect playlist. Your DJ friend bailed. You have a folder full of songs but no time to manually mix them.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong className="text-blue-600">InfiniteMix solves this in 3 minutes.</strong> Drop your local MP3s, and our AI instantly analyzes BPM and musical keys, sequences them for perfect energy flow, and adds professional crossfades between tracks.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Upload Your Songs</h3>
                    <p className="text-gray-600">Drag and drop your music library - any MP3, WAV, or M4A files</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">AI Sequences Perfectly</h3>
                    <p className="text-gray-600">Smart harmonic mixing orders tracks for seamless transitions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Download & Play</h3>
                    <p className="text-gray-600">Professional mix with DJ-quality crossfades ready in minutes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <Music className="w-16 h-16 mb-6 opacity-90 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4 text-center">Party Mode Activated</h3>
                <div className="space-y-3 text-sm opacity-90">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>50 songs mixed in under 5 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>No awkward silence between tracks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Energy builds throughout the night</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Guests asking "Who's your DJ?"</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs italic">"Used this 30 mins before my housewarming party. Everyone thought I hired a professional DJ. Absolutely worth it!" - Mike T.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <p className="text-gray-900 font-medium mb-3 text-center">Professional DJ Techniques Built-In:</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Automatic BPM matching</li>
                  <li>• Harmonic key detection & compatibility</li>
                  <li>• Energy-based track sequencing</li>
                  <li>• Smooth crossfades (0-10 seconds customizable)</li>
                  <li>• Perfect timing for fade in/out points</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                Stop Spending Hours on Manual Music Mixing
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional music mixing requires expensive software, technical expertise, and hours of manual work. DJs and producers use complex tools like Ableton, FL Studio, or Traktor to analyze BPM, match keys, and create seamless transitions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                InfiniteMix automates the entire workflow using AI and advanced audio analysis algorithms. Our Smart Audio System analyzes your tracks for BPM, musical key, and energy levels, then automatically sequences them for perfect transitions that professional DJs dream of.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Music Production Experience Required</h3>
                    <p className="text-gray-600">AI handles complex audio analysis, key detection, and harmonic mixing automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">5 Minutes vs 5 Hours</h3>
                    <p className="text-gray-600">Complete professional mixes in under 5 minutes instead of spending hours in a DAW</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">All-in-One Solution</h3>
                    <p className="text-gray-600">Audio mixing, AI thumbnails, video generation, and YouTube descriptions in one tool</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="demo-video" className="bg-gray-50 rounded-3xl p-8 shadow-sm">
              <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-6">
                <iframe
                  src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="InfiniteMix Demo Video"
                  loading="lazy"
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">See InfiniteMix in Action</h3>
              <p className="text-gray-600 mb-4">Watch how creators produce viral lofi mixes, study playlists, and background music for content in minutes</p>
              <a
                href="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                <Play className="w-4 h-4" />
                Open in new tab if video doesn't load
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Mixes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Real Mixes Created with InfiniteMix
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listen to actual lofi mixes generated and mixed by our platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/BmnqYrLwbOM?modestbranding=1&rel=0&showinfo=0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="InfiniteMix Sample 1"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/yz0K_RYGpW8?modestbranding=1&rel=0&showinfo=0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="InfiniteMix Sample 2"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
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
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Professional Music Production Tools for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create viral music content, from AI generation to final export
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Wand2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Music Generation + Real Song Uploads</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate unique, royalty-free AI tracks instantly OR upload your own MP3s from local files. Choose from Lofi, EDM, Hip-Hop, Jazz, Classical and more.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Disc3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Harmonic Mixing</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional DJ-quality transitions using intelligent harmonic analysis. Our algorithm analyzes BPM, musical key, and energy levels.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Audio Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional audio analysis extracts tempo, key signature, energy levels, and musical characteristics from your files instantly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Repeat className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Crossfade Engine</h3>
              <p className="text-gray-600 leading-relaxed">
                Customizable crossfade duration (0-10 seconds) with automatic timing calculation. Smooth audio transitions that blend perfectly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Image className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Thumbnail Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate eye-catching, professional thumbnails instantly with AI. Create single static images or multiple thumbnails per song.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">YouTube-Ready Video Export</h3>
              <p className="text-gray-600 leading-relaxed">
                Export high-quality videos with embedded audio, AI-generated thumbnails, and auto-generated descriptions with accurate timestamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Professional Results, Zero Complexity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading technology delivers studio-quality output every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileAudio className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Audio Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional-grade audio engine analyzes your tracks instantly. Detects tempo, musical key, rhythm patterns, and energy levels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sliders className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Studio-Quality Output</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional video rendering creates broadcast-quality results with perfect audio-video synchronization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Next-Gen AI Visuals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced AI creates stunning, unique thumbnails optimized for maximum click-through rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mic2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Content Generation</h3>
                  <p className="text-gray-600 leading-relaxed">
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
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              From Upload to Viral Mix in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional results without the learning curve
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'ai'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              AI Music Generation Mode
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'manual'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Manual Upload Mode
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activeTab === 'ai' ? (
              <>
                <div className="bg-gray-50 rounded-3xl p-8">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-semibold mb-6">1</div>
                  <Sliders className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Configure Your Mix</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Select your desired genre (Lofi, EDM, Hip-Hop, Jazz, Classical) and set the total duration for your mix.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Multiple genre options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Custom duration settings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Adjustable crossfade timing
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-semibold mb-6">2</div>
                  <Wand2 className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Generates & Sequences</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our AI creates unique tracks, then automatically sequences them using harmonic mixing algorithms.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      AI music generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Automatic harmonic mixing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Energy-based sequencing
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-semibold mb-6">3</div>
                  <Download className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Generate & Export</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Create AI thumbnails, generate YouTube descriptions with timestamps, and download your complete video file.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      AI thumbnail generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Auto descriptions & timestamps
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      YouTube-ready MP4 export
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gray-50 rounded-3xl p-8">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-semibold mb-6">1</div>
                  <Upload className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upload Audio Files</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Drop your MP3, WAV, or M4A files. Our intelligent audio engine analyzes each track instantly.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
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

                <div className="bg-gray-50 rounded-3xl p-8">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-semibold mb-6">2</div>
                  <ListMusic className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Auto-Sequence & Edit</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Smart Audio System automatically orders tracks for harmonic compatibility. Manually reorder if desired.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
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

                <div className="bg-gray-50 rounded-3xl p-8">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-semibold mb-6">3</div>
                  <Video className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Create & Download</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Generate AI thumbnails, get auto-generated descriptions with accurate timestamps, and export your mix.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Built for Content Creators & Music Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're building a YouTube channel or producing professional mixes, InfiniteMix scales to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <Radio className="w-10 h-10 text-blue-600" />
                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">🔥 VIRAL</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">YouTube Lofi & Music Channels</h3>
              <p className="text-gray-600">
                Create viral lofi study mixes, chill beats compilations, and genre-specific playlists. Generate unlimited content for 24/7 music streams.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Headphones className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Podcast Producers</h3>
              <p className="text-gray-600">
                Generate intro/outro music, background tracks, and transition segments. Create branded audio content.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Mic2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">DJs & Party Hosts</h3>
              <p className="text-gray-600">
                Instant party mixes without a DJ! Quick professional mixes with your own songs and perfect crossfades.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Video className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Content Creators</h3>
              <p className="text-gray-600">
                Generate royalty-free background music for vlogs, tutorials, and social media content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              What Creators Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real creators building successful channels with InfiniteMix
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "I went from spending 6+ hours on each mix to under 10 minutes. My lofi channel hit 100K subs in 3 months thanks to consistent uploads InfiniteMix made possible."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  MK
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marcus Kim</div>
                  <div className="text-sm text-gray-600">YouTube Creator • 150K subscribers</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "As a podcast producer, I needed quick background music without licensing headaches. The AI generation is perfect - saved me thousands already."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Podcast Producer • 5 shows</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The BPM and key detection is scary accurate. I tested it against Traktor and got identical results. InfiniteMix replaced my entire mixing workflow."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  DJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">David Rodriguez</div>
                  <div className="text-sm text-gray-600">DJ & Producer • 12 years experience</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "I had zero music production knowledge. Within 30 minutes I had my first viral mix uploaded. Hit 50K views in 48 hours."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amanda Chen</div>
                  <div className="text-sm text-gray-600">Content Creator • Started 2 months ago</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The crossfade engine is brilliant. I can adjust from 0-10 seconds and the timestamps stay perfectly accurate."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  TR
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Tom Reeves</div>
                  <div className="text-sm text-gray-600">Music Producer • 8K YouTube subs</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Running 3 different music channels now. InfiniteMix lets me batch-create content for the entire week in one afternoon."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  LP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Park</div>
                  <div className="text-sm text-gray-600">Channel Owner • 500K total subs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-center mb-16 tracking-tight">
            Trusted by Creators Worldwide
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-semibold mb-2">10,000+</div>
              <div className="text-xl opacity-90">Active Users</div>
            </div>
            <div>
              <Disc3 className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-semibold mb-2">500K+</div>
              <div className="text-xl opacity-90">Mixes Created</div>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-semibold mb-2">50M+</div>
              <div className="text-xl opacity-90">Total Views Generated</div>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-semibold mb-2">100K+</div>
              <div className="text-xl opacity-90">Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
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
                a: 'InfiniteMix uses advanced harmonic analysis, a professional DJ technique for seamless mixing. Our Smart Audio System analyzes each track to detect its musical key and BPM. The algorithm then sequences songs that are harmonically compatible (same key, adjacent keys, or relative major/minor) to create smooth, musical transitions that sound professional.',
              },
              {
                q: 'What audio formats are supported for upload?',
                a: 'InfiniteMix accepts MP3, WAV, and M4A audio files for upload. For AI generation mode, no upload is needed - we generate tracks directly. Export format is high-quality MP4 video optimized for YouTube and other video platforms.',
              },
              {
                q: 'Is there a limit on mix length or number of songs?',
                a: 'No limits on mix length or song count. Create short 10-minute mixes or multi-hour compilations for YouTube streams. Upload as many tracks as you want in manual mode, or generate any number of AI tracks. The only constraint is your available storage space for final exports.',
              },
              {
                q: 'How accurate are the BPM and key detection features?',
                a: 'Our audio analysis uses the same technology trusted by major streaming platforms and professional music applications. BPM detection accuracy is typically 95%+ for most electronic and modern music genres. Key detection works best with harmonic music and may be less accurate for purely percussive or highly distorted tracks.',
              },
              {
                q: 'Can I edit the mix order after auto sequencing?',
                a: 'Yes. While our Smart Audio System provides optimal sequencing for harmonic compatibility, you have full control to drag-and-drop reorder tracks, remove songs, or manually adjust the playlist before final export. You can also skip analysis entirely and stitch songs in upload order.',
              },
              {
                q: 'How long does it take to create a complete mix?',
                a: 'Typically under 5 minutes from start to download. AI music generation takes 1-2 minutes per track. Audio analysis is real-time (processes as fast as your browser can handle). Mixing and video generation usually complete in 1-2 minutes depending on mix length. Thumbnail generation is near-instant.',
              },
              {
                q: 'What makes InfiniteMix different from other mixing tools?',
                a: 'InfiniteMix is the only all-in-one solution that combines AI music generation, professional harmonic mixing analysis, AI thumbnail creation, and YouTube-optimized video export in one tool. Traditional DAWs like Ableton or FL Studio require extensive knowledge and manual work. InfiniteMix automates the entire workflow while maintaining professional quality.',
              },
              {
                q: 'Do I need any music production experience?',
                a: 'No experience required. InfiniteMix handles all technical aspects automatically - BPM detection, key analysis, harmonic compatibility, crossfade timing, and video encoding. Just upload files or choose AI generation, select preferences, and export. Perfect for beginners while powerful enough for professionals.',
              },
              {
                q: 'What happens to my uploaded audio files?',
                a: 'Files are processed securely in your browser for analysis, then temporarily uploaded to our servers only for the mixing process. Files are automatically deleted after processing. We never store your audio permanently or use it for any purpose beyond creating your requested mix.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6 tracking-tight">
            Start Creating Viral Music Content Today
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join 10,000+ creators using InfiniteMix to build successful music channels and produce professional content in minutes
          </p>
          <Link
            href="/software"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-600 text-lg font-medium rounded-full hover:bg-gray-50 transition-all shadow-lg"
          >
            <Rocket className="w-6 h-6" />
            Get Started Now
          </Link>
          <p className="text-sm mt-6 opacity-75">Start creating professional mixes today</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="InfiniteMix Logo" className="w-7 h-7" />
                <span className="text-2xl font-semibold text-white">InfiniteMix</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional music mixing and video creation platform for content creators and music professionals.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-base mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/tutorials" className="hover:text-white transition-colors">Written Tutorials</Link></li>
                <li><Link href="/guide" className="hover:text-white transition-colors">Getting Started Guide</Link></li>
                <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-base mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">Contact us for more info</p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-base mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link href="/license" className="hover:text-white transition-colors">License Agreement</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/gdpr" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <div>
                © 2024 InfiniteMix. All rights reserved. Built for creators, by creators.
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <a href="/status" className="hover:text-white transition-colors">System Status</a>
                <a href="/security" className="hover:text-white transition-colors">Security</a>
                <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
                <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
