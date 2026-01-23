'use client';

import { ArrowRight, Play, Zap, Music, Video, Sparkles, TrendingUp, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ModernLanding() {
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-5 py-2 bg-black text-white font-black text-sm mb-8 transform -rotate-2">
                🔥 VIRAL MUSIC MIXER
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none uppercase">
                MIX LIKE<br/>
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  A PRO
                </span>
              </h1>
              <p className="text-2xl text-gray-700 mb-8 font-bold leading-tight">
                Create professional music videos in 5 minutes. Zero skills needed. 100% viral potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/software"
                  className="px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-lg font-black rounded-none hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase"
                >
                  <Zap className="w-5 h-5" /> START NOW
                </Link>
                <button className="px-8 py-5 bg-black text-white text-lg font-black rounded-none hover:bg-gray-900 transform hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase">
                  <Play className="w-5 h-5" /> WATCH DEMO
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 border-4 border-black">
                  <div className="text-3xl font-black text-purple-600 mb-1">4.9★</div>
                  <div className="text-xs font-bold text-gray-600 uppercase">Rating</div>
                </div>
                <div className="bg-white p-4 border-4 border-black">
                  <div className="text-3xl font-black text-pink-600 mb-1">10K+</div>
                  <div className="text-xs font-bold text-gray-600 uppercase">Users</div>
                </div>
                <div className="bg-white p-4 border-4 border-black">
                  <div className="text-3xl font-black text-orange-600 mb-1">500K+</div>
                  <div className="text-xs font-bold text-gray-600 uppercase">Mixes</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-none transform rotate-3"></div>
              <div className="relative bg-black p-12 border-4 border-black flex items-center justify-center">
                <Music className="w-40 h-40 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-6 py-3 font-black text-lg transform rotate-6 border-4 border-black">
                AI POWERED!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 uppercase">
            WHY WE'RE <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">DIFFERENT</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 border-4 border-white transform hover:scale-105 transition-transform">
              <Zap className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-black mb-4 uppercase">INSTANT MIX</h3>
              <p className="text-purple-100 font-bold">
                5 minutes from upload to viral video. That's it. No complicated software. No learning curve.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-8 border-4 border-white transform hover:scale-105 transition-transform">
              <Music className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-black mb-4 uppercase">AI BRAIN</h3>
              <p className="text-pink-100 font-bold">
                Smart harmonic mixing analyzes BPM, keys, and energy. Sequences tracks like a pro DJ automatically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-8 border-4 border-white transform hover:scale-105 transition-transform">
              <Video className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-black mb-4 uppercase">YOUTUBE READY</h3>
              <p className="text-orange-100 font-bold">
                Export HD videos with AI thumbnails and descriptions. Upload and go viral immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-12 border-8 border-black">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-black text-white font-black text-xs mb-6 uppercase">
                  ⚡ REAL USE CASE
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase leading-tight">
                  PARTY MODE:<br/>ACTIVATED
                </h2>
                <p className="text-xl text-gray-700 mb-6 font-bold leading-relaxed">
                  Last-minute party? No problem. Upload 50 songs. Get a professional mix in 3 minutes. Impress everyone.
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

              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-8 border-8 border-black">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-4 uppercase">
            ALL GENRES.<br/>NO LIMITS.
          </h2>
          <p className="text-2xl text-gray-600 mb-12 font-bold">
            Lofi, Trap, EDM, Latin - WE GOT YOU
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { name: 'LOFI', color: 'from-purple-600 to-purple-800' },
              { name: 'TRAP', color: 'from-pink-600 to-pink-800' },
              { name: 'AMBIENT', color: 'from-blue-600 to-blue-800' },
              { name: 'LATIN', color: 'from-orange-600 to-orange-800' },
              { name: 'SYNTHWAVE', color: 'from-cyan-600 to-cyan-800' },
              { name: 'VAPORWAVE', color: 'from-purple-600 to-pink-800' }
            ].map((genre) => (
              <div
                key={genre.name}
                className={`aspect-square bg-gradient-to-br ${genre.color} flex items-center justify-center border-4 border-black hover:scale-110 transition-transform cursor-pointer`}
              >
                <span className="text-white font-black text-center">{genre.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-6 uppercase leading-none">
            READY TO<br/>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              GO VIRAL?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 font-bold">
            JOIN 10,000+ CREATORS MAKING WAVES
          </p>
          <Link
            href="/software"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-xl font-black rounded-none hover:shadow-2xl transform hover:scale-105 transition-all uppercase"
          >
            <Zap className="w-6 h-6" /> CREATE FREE NOW <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-8 border-black py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-black text-gray-900 uppercase">© 2026 INFINITEMIX - POWERED BY AI</p>
        </div>
      </footer>
    </div>
  );
}
