'use client';

import { ArrowRight, Play, CheckCircle, Music, Zap, Video, Star } from 'lucide-react';
import Link from 'next/link';

export default function SleekLanding() {
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

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium text-sm">
              ✦ PROFESSIONAL MUSIC PRODUCTION
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Transform Your Music<br/>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Into Art
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Elevate your sound with AI-powered music mixing.<br/>
            Create stunning videos in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/software"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              Begin Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-lg font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-400">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">500K+ Mixes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Lightning Fast</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional mixes in under 5 minutes. Our AI analyzes and sequences your tracks with precision.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Music className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Harmonic Mixing</h3>
              <p className="text-gray-400 leading-relaxed">
                Intelligent BPM and key detection creates seamless transitions between tracks automatically.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>YouTube Ready</h3>
              <p className="text-gray-400 leading-relaxed">
                Export professional MP4 videos with AI-generated thumbnails and descriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-xs font-medium mb-6">
                  CREATOR'S CHOICE
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Party. Studio. Anywhere.
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  From last-minute party playlists to professional content creation, InfiniteMix adapts to your workflow. Upload your songs or generate AI tracks in any genre.
                </p>
                <div className="space-y-4">
                  {['Upload your music library', 'AI analyzes & sequences', 'Download professional mix'].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl shadow-purple-500/50">
                <div className="text-center mb-6">
                  <Music className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>Effortless Excellence</h3>
                </div>
                <div className="space-y-3 text-sm">
                  {[
                    '50+ songs mixed in minutes',
                    'Perfect harmonic transitions',
                    'DJ-quality crossfades',
                    'Commercial usage rights'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Every Genre. Every Style.
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Create unique mixes across all music genres
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['Lofi', 'Trap', 'Ambient', 'Latin', 'Synthwave', 'Vaporwave'].map((genre) => (
              <div key={genre} className="aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                <span className="font-medium">{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Begin Your Creative Journey
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of creators transforming their music into viral content
          </p>
          <Link
            href="/software"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Start Creating Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 InfiniteMix. Crafted with precision.</p>
        </div>
      </footer>
    </div>
  );
}
