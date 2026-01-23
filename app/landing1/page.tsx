'use client';

import { ArrowRight, Play, CheckCircle, Music } from 'lucide-react';
import Link from 'next/link';

export default function AppleLanding() {
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

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900 mb-6 tracking-tight leading-none">
            Turn your music<br/>into viral videos.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-normal max-w-2xl mx-auto leading-relaxed">
            Professional music mixing in under 5 minutes. No skills required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/software"
              className="px-8 py-3 bg-blue-600 text-white text-base font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              Start creating for free
            </Link>
            <button className="px-8 py-3 text-blue-600 text-base font-medium">
              Watch the film <Play className="inline w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                AI that thinks like a DJ.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Our intelligent system analyzes BPM, musical keys, and energy levels to create seamless transitions. What takes professionals hours now takes you minutes.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automatic BPM matching</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Harmonic key detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Perfect crossfades</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl aspect-square flex items-center justify-center shadow-2xl">
              <Music className="w-32 h-32 text-white opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">5 min</div>
                  <div className="text-xl opacity-80">Average mix time</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                From upload to YouTube in minutes.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Upload your songs or generate AI tracks. Our system handles the rest. Export YouTube-ready videos with professional quality.
              </p>
              <p className="text-base text-gray-500">
                Works with MP3, WAV, M4A, and more. Supports all major music formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Every genre.<br/>Your way.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            From lofi to trap, ambient to synthwave. Create professional mixes in any style.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['Lofi', 'Trap', 'Ambient', 'Latin', 'Synthwave', 'Vaporwave'].map((genre) => (
              <div key={genre} className="aspect-square rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                <span className="text-gray-900 font-medium">{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Get started today.
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Create your first mix in minutes. No credit card required.
          </p>
          <Link
            href="/software"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white text-base font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            Start creating <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 InfiniteMix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
