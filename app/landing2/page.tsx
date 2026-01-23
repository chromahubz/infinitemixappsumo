'use client';

import { useState } from 'react';
import {
  Sparkles, Zap, Music, Wand2, Clock, TrendingUp, CheckCircle, ArrowRight, Play, Users, Star,
  Upload, Sliders, Image, Video, Download, Headphones, BarChart3, Repeat, Palette, FileAudio,
  Mic2, Radio, Disc3, ListMusic, Globe, Shield, Rocket, Target, Award, ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function SleekLanding() {
  const [activeTab, setActiveTab] = useState<'ai' | 'manual'>('ai');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="InfiniteMix" className="w-7 h-7" />
            <span className="text-xl font-serif text-white" style={{ fontFamily: 'Georgia, serif' }}>InfiniteMix</span>
          </div>
          <Link
            href="/software"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/50"
          >
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium text-sm">
              ✦ AUTOMATE MUSIC MIXING
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Transform Your Music<br/>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Into Viral Videos
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
            Auto music mixing that creates professional-quality content in under 5 minutes
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            No music production skills needed. No expensive software. Just upload, click, and download YouTube-ready videos with perfect harmonic transitions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/software"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              Begin Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-lg font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-400">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">500K+ Mixes Created</span>
            </div>
          </div>
        </div>
      </section>

      {/* Genres Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Generate Any Genre You Want
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              From viral lofi beats to trap bangers - create professional mixes in any style. <strong className="text-white">Each generation creates unique music just for you, never heard before.</strong>
            </p>
            <p className="text-gray-400">
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
                <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img
                    src={genre.img}
                    alt={`${genre.name} music`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center justify-end p-4">
                    <h3 className="text-white font-medium text-base">{genre.name}</h3>
                    {genre.badge && (
                      <span className="mt-1 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                        {genre.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300">
              <strong className="text-white">AI not your style?</strong> Upload your own MP3s from local files and create professional mixes with real songs!
            </p>
          </div>
        </div>
      </section>

      {/* Party Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-xs font-medium mb-6">
                  REAL-WORLD USE CASE
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Throwing a Party Tonight? <br/>No DJ? No Problem.
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  You're hosting the party of the year, but you didn't have time to prepare the perfect playlist. Your DJ friend bailed. You have a folder full of songs but no time to manually mix them.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  <strong className="text-purple-400">InfiniteMix solves this in 3 minutes.</strong> Drop your local MP3s, and our AI instantly analyzes BPM and musical keys, sequences them for perfect energy flow, and adds professional crossfades between tracks.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Upload Your Songs</h3>
                      <p className="text-gray-300">Drag and drop your music library - any MP3, WAV, or M4A files</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">AI Sequences Perfectly</h3>
                      <p className="text-gray-300">Smart harmonic mixing orders tracks for seamless transitions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Download & Play</h3>
                      <p className="text-gray-300">Professional mix with DJ-quality crossfades ready in minutes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl shadow-purple-500/50">
                  <Music className="w-16 h-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-serif mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>Party Mode Activated</h3>
                  <div className="space-y-3 text-sm">
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
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <p className="text-white font-medium mb-3 text-center">Professional DJ Techniques Built-In:</p>
                  <ul className="text-gray-300 space-y-1 text-sm">
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
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Stop Spending Hours on Manual Music Mixing
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Traditional music mixing requires expensive software, technical expertise, and hours of manual work. DJs and producers use complex tools like Ableton, FL Studio, or Traktor to analyze BPM, match keys, and create seamless transitions.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                InfiniteMix automates the entire workflow using AI and advanced audio analysis algorithms. Our Smart Audio System analyzes your tracks for BPM, musical key, and energy levels, then automatically sequences them for perfect transitions that professional DJs dream of.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">No Music Production Experience Required</h3>
                    <p className="text-gray-300">AI handles complex audio analysis, key detection, and harmonic mixing automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">5 Minutes vs 5 Hours</h3>
                    <p className="text-gray-300">Complete professional mixes in under 5 minutes instead of spending hours in a DAW</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">All-in-One Solution</h3>
                    <p className="text-gray-300">Audio mixing, AI thumbnails, video generation, and YouTube descriptions in one tool</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="demo-video" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="InfiniteMix Demo Video"
                  loading="lazy"
                ></iframe>
              </div>
              <h3 className="text-xl font-serif mb-3" style={{ fontFamily: 'Georgia, serif' }}>See InfiniteMix in Action</h3>
              <p className="text-gray-300 mb-4">Watch how creators produce viral lofi mixes, study playlists, and background music for content in minutes</p>
              <a
                href="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm"
              >
                <Play className="w-4 h-4" />
                Open in new tab if video doesn't load
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Mixes Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Real Mixes Created with InfiniteMix
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Listen to actual lofi mixes generated and mixed by our platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/BmnqYrLwbOM?modestbranding=1&rel=0&showinfo=0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="InfiniteMix Sample 1"
                ></iframe>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/yz0K_RYGpW8?modestbranding=1&rel=0&showinfo=0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="InfiniteMix Sample 2"
                ></iframe>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
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
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Professional Music Production Tools for Everyone
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create viral music content, from AI generation to final export
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Wand2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>AI Music Generation + Real Song Uploads</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate unique, royalty-free AI tracks instantly OR upload your own MP3s from local files. Choose from Lofi, EDM, Hip-Hop, Jazz, Classical and more.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Disc3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Smart Harmonic Mixing</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional DJ-quality transitions using intelligent harmonic analysis. Our algorithm analyzes BPM, musical key, and energy levels.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Advanced Audio Analysis</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional audio analysis extracts tempo, key signature, energy levels, and musical characteristics from your files instantly.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Repeat className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Intelligent Crossfade Engine</h3>
              <p className="text-gray-400 leading-relaxed">
                Customizable crossfade duration (0-10 seconds) with automatic timing calculation. Smooth audio transitions that blend perfectly.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Image className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>AI Thumbnail Generation</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate eye-catching, professional thumbnails instantly with AI. Create single static images or multiple thumbnails per song.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>YouTube-Ready Video Export</h3>
              <p className="text-gray-400 leading-relaxed">
                Export high-quality videos with embedded audio, AI-generated thumbnails, and auto-generated descriptions with accurate timestamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Professional Results, Zero Complexity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading technology delivers studio-quality output every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileAudio className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2" style={{ fontFamily: 'Georgia, serif' }}>Intelligent Audio Analysis</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Professional-grade audio engine analyzes your tracks instantly. Detects tempo, musical key, rhythm patterns, and energy levels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sliders className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2" style={{ fontFamily: 'Georgia, serif' }}>Studio-Quality Output</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Professional video rendering creates broadcast-quality results with perfect audio-video synchronization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2" style={{ fontFamily: 'Georgia, serif' }}>Next-Gen AI Visuals</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Advanced AI creates stunning, unique thumbnails optimized for maximum click-through rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mic2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2" style={{ fontFamily: 'Georgia, serif' }}>Smart Content Generation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    AI analyzes your mix and creates engaging YouTube descriptions with perfect timestamps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              From Upload to Viral Mix in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional results without the learning curve
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              AI Music Generation Mode
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'manual'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              Manual Upload Mode
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activeTab === 'ai' ? (
              <>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">1</div>
                  <Sliders className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Configure Your Mix</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Select your desired genre (Lofi, EDM, Hip-Hop, Jazz, Classical) and set the total duration for your mix.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Multiple genre options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Custom duration settings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Adjustable crossfade timing
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">2</div>
                  <Wand2 className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>AI Generates & Sequences</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Our AI creates unique tracks, then automatically sequences them using harmonic mixing algorithms.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      AI music generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Automatic harmonic mixing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Energy-based sequencing
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">3</div>
                  <Download className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Generate & Export</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Create AI thumbnails, generate YouTube descriptions with timestamps, and download your complete video file.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      AI thumbnail generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Auto descriptions & timestamps
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      YouTube-ready MP4 export
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">1</div>
                  <Upload className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Upload Audio Files</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Drop your MP3, WAV, or M4A files. Our intelligent audio engine analyzes each track instantly.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      BPM detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Key & harmonic analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Energy level calculation
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">2</div>
                  <ListMusic className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Auto-Sequence & Edit</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Smart Audio System automatically orders tracks for harmonic compatibility. Manually reorder if desired.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Smart harmonic sequencing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Drag & drop reordering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Optional analysis skip
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">3</div>
                  <Video className="w-10 h-10 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Create & Download</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Generate AI thumbnails, get auto-generated descriptions with accurate timestamps, and export your mix.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Multiple thumbnail options
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      Synced video transitions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
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
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Built for Content Creators & Music Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're building a YouTube channel or producing professional mixes, InfiniteMix scales to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-500/50 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <Radio className="w-10 h-10 text-purple-400" />
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">🔥 VIRAL</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">YouTube Lofi & Music Channels</h3>
              <p className="text-gray-400 text-sm">
                Create viral lofi study mixes, chill beats compilations, and genre-specific playlists. Generate unlimited content for 24/7 music streams.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <Headphones className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Podcast Producers</h3>
              <p className="text-gray-400 text-sm">
                Generate intro/outro music, background tracks, and transition segments. Create branded audio content.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <Mic2 className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">DJs & Party Hosts</h3>
              <p className="text-gray-400 text-sm">
                Instant party mixes without a DJ! Quick professional mixes with your own songs and perfect crossfades.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <Video className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Video Content Creators</h3>
              <p className="text-gray-400 text-sm">
                Generate royalty-free background music for vlogs, tutorials, and social media content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              What Creators Are Saying
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real creators building successful channels with InfiniteMix
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                initials: 'MK',
                name: 'Marcus Kim',
                title: 'YouTube Creator • 150K subscribers',
                text: 'I went from spending 6+ hours on each mix to under 10 minutes. My lofi channel hit 100K subs in 3 months thanks to consistent uploads InfiniteMix made possible.',
                color: 'from-purple-600 to-pink-600'
              },
              {
                initials: 'SJ',
                name: 'Sarah Johnson',
                title: 'Podcast Producer • 5 shows',
                text: 'As a podcast producer, I needed quick background music without licensing headaches. The AI generation is perfect - saved me thousands already.',
                color: 'from-blue-600 to-purple-600'
              },
              {
                initials: 'DJ',
                name: 'David Rodriguez',
                title: 'DJ & Producer • 12 years experience',
                text: 'The BPM and key detection is scary accurate. I tested it against Traktor and got identical results. InfiniteMix replaced my entire mixing workflow.',
                color: 'from-green-600 to-cyan-600'
              },
              {
                initials: 'AC',
                name: 'Amanda Chen',
                title: 'Content Creator • Started 2 months ago',
                text: 'I had zero music production knowledge. Within 30 minutes I had my first viral mix uploaded. Hit 50K views in 48 hours.',
                color: 'from-pink-600 to-orange-600'
              },
              {
                initials: 'TR',
                name: 'Tom Reeves',
                title: 'Music Producer • 8K YouTube subs',
                text: 'The crossfade engine is brilliant. I can adjust from 0-10 seconds and the timestamps stay perfectly accurate.',
                color: 'from-yellow-600 to-orange-600'
              },
              {
                initials: 'LP',
                name: 'Lisa Park',
                title: 'Channel Owner • 500K total subs',
                text: 'Running 3 different music channels now. InfiniteMix lets me batch-create content for the entire week in one afternoon.',
                color: 'from-indigo-600 to-purple-600'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-center mb-16" style={{ fontFamily: 'Georgia, serif' }}>
            Trusted by Creators Worldwide
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl opacity-90">Active Users</div>
            </div>
            <div>
              <Disc3 className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-xl opacity-90">Mixes Created</div>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">50M+</div>
              <div className="text-xl opacity-90">Total Views Generated</div>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-xl opacity-90">Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
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
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-8">{faq.q}</h3>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Begin Your Creative Journey
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 10,000+ creators using InfiniteMix to build successful music channels and produce professional content in minutes
          </p>
          <Link
            href="/software"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            <Rocket className="w-6 h-6" />
            Start Creating Free
          </Link>
          <p className="text-sm text-gray-400 mt-6">Start creating professional mixes today</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="InfiniteMix Logo" className="w-7 h-7" />
                <span className="text-2xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>InfiniteMix</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional music mixing and video creation platform for content creators and music professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Product</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/tutorials" className="hover:text-white transition-colors">Written Tutorials</Link></li>
                <li><Link href="/guide" className="hover:text-white transition-colors">Getting Started Guide</Link></li>
                <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Support</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">Contact us for more info</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link href="/license" className="hover:text-white transition-colors">License Agreement</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/gdpr" className="hover:text-white transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
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
