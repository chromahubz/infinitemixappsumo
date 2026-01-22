'use client';

import { useState } from 'react';
import {
  TrendingUp, DollarSign, Users, Clock, BarChart3, Zap, CheckCircle, ArrowRight,
  Youtube, Music, Target, Rocket, Award, Globe, PlayCircle, Repeat, Sparkles,
  LineChart, PieChart, Shield, Star, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function OpportunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="InfiniteMix Logo" className="w-7 h-7" />
            <span className="text-2xl font-bold text-gray-900">InfiniteMix</span>
          </Link>
          <Link
            href="/software"
            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 animate-pulse">
              <DollarSign className="w-5 h-5" />
              $100B+ YouTube Music Industry
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              The Lofi Video Gold Rush Is <span className="text-green-400">NOW</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-6 leading-relaxed opacity-95">
              Tap into the fastest-growing YouTube niche with zero music production skills
            </p>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Lofi channels earning $5K-$50K/month. InfiniteMix makes it accessible to anyone in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/software"
                className="flex items-center gap-2 px-10 py-5 bg-green-500 text-white text-xl font-bold rounded-lg hover:bg-green-600 transition-all shadow-2xl hover:shadow-green-500/50 w-full sm:w-auto justify-center"
              >
                Start Building Your Channel <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="#market-size"
                className="flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white text-xl font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
              >
                <BarChart3 className="w-6 h-6" /> See The Numbers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section id="market-size" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Lofi Video Market Is Exploding
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real data from the fastest-growing music niche on YouTube
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-purple-200">
              <Youtube className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">15B+</div>
              <div className="text-lg text-gray-700">Monthly Lofi Views</div>
              <p className="text-sm text-gray-500 mt-2">Growing 40% YoY</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-green-200">
              <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">$50K</div>
              <div className="text-lg text-gray-700">Top Channel Revenue/Mo</div>
              <p className="text-sm text-gray-500 mt-2">From a single niche</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-blue-200">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">500M+</div>
              <div className="text-lg text-gray-700">Global Audience</div>
              <p className="text-sm text-gray-500 mt-2">Students, workers, creators</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-yellow-200">
              <TrendingUp className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-lg text-gray-700">Passive Income</div>
              <p className="text-sm text-gray-500 mt-2">Content works while you sleep</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">The Perfect Storm</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Massive demand + Low competition + High monetization + InfiniteMix automation =
              <span className="font-bold text-green-300"> Your opportunity to capture this market NOW</span>
            </p>
          </div>
        </div>
      </section>

      {/* AI-Generated Music Opportunity */}
      <section className="py-20 bg-white border-t-4 border-green-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6">
              <Sparkles className="w-5 h-5" />
              AI Music Revolution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why AI-Generated Lofi Is The Ultimate Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The top lofi channels already use AI and automated tools. Now it's accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">The Hidden Truth About Top Lofi Channels</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Most successful lofi channels don't manually produce every track. They use:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">AI music generation tools</strong>
                    <p className="text-gray-600">Just like InfiniteMix, but they paid $10K+ for custom solutions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Licensed music libraries</strong>
                    <p className="text-gray-600">Costs $500-2000/month for commercial use</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Automated mixing software</strong>
                    <p className="text-gray-600">Professional DAWs with scripts, requires technical knowledge</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Batch production workflows</strong>
                    <p className="text-gray-600">Creating 10-20 videos at once, but takes days to set up</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 shadow-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">InfiniteMix Democratizes Everything</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Custom AI Solution</span>
                    <span className="text-red-600 font-bold">$10,000+</span>
                  </div>
                  <p className="text-sm text-gray-600">What top channels paid</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Music Licensing</span>
                    <span className="text-red-600 font-bold">$500-2K/mo</span>
                  </div>
                  <p className="text-sm text-gray-600">Ongoing subscription costs</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Professional DAW</span>
                    <span className="text-red-600 font-bold">$300-600</span>
                  </div>
                  <p className="text-sm text-gray-600">+ months of learning</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">InfiniteMix</span>
                    <span className="font-bold text-3xl">Accessible</span>
                  </div>
                  <p className="text-sm opacity-90">Everything included • Ready in 5 minutes</p>
                </div>
              </div>
              <p className="text-gray-700 text-center font-semibold">
                You get the same tools as $100K+ channels without the massive investment
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Real Numbers: What Lofi Girl Makes</h3>
            <p className="text-center text-gray-600 mb-8 text-lg">The most successful lofi channel on YouTube - here's the proof</p>

            {/* Screenshot Placeholder - Add your Lofi Girl screenshot here */}
            <div className="bg-white rounded-xl p-6 shadow-2xl mb-8 border-4 border-purple-200">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-center">
                <p className="text-white text-lg mb-4">📸 Add Lofi Girl YouTube Channel Screenshot Here</p>
                <p className="text-gray-400 text-sm mb-2">Save your screenshot to: <code className="bg-gray-700 px-2 py-1 rounded">/public/lofi-girl-channel.png</code></p>
                <p className="text-gray-400 text-sm">Then uncomment the img tag below:</p>
                {/* <img src="/lofi-girl-channel.png" alt="Lofi Girl YouTube Channel" className="w-full rounded-lg mt-4" /> */}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-blue-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">15.6M</div>
                <div className="text-gray-600 font-medium">Subscribers</div>
                <div className="text-xs text-gray-500 mt-2">327 total videos</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">$38K-116K</div>
                <div className="text-gray-600 font-medium">Monthly Revenue</div>
                <div className="text-xs text-gray-500 mt-2">From YouTube ads alone</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-purple-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">2.5B</div>
                <div className="text-gray-600 font-medium">Total Views</div>
                <div className="text-xs text-gray-500 mt-2">Across all content</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">🔥 Their Most Viral Videos:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between items-center bg-white px-4 py-2 rounded-lg">
                  <span className="text-gray-700">1 A.M Study Session 📚</span>
                  <span className="font-bold text-purple-600">128M views</span>
                </div>
                <div className="flex justify-between items-center bg-white px-4 py-2 rounded-lg">
                  <span className="text-gray-700">Best of lofi 2018 🎵</span>
                  <span className="font-bold text-purple-600">56M views</span>
                </div>
                <div className="flex justify-between items-center bg-white px-4 py-2 rounded-lg">
                  <span className="text-gray-700">Best of lofi hip hop 2021 ✨</span>
                  <span className="font-bold text-purple-600">51M views</span>
                </div>
                <div className="flex justify-between items-center bg-white px-4 py-2 rounded-lg">
                  <span className="text-gray-700">2 A.M Study Session 🌙</span>
                  <span className="font-bold text-purple-600">23M views</span>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-700 text-lg">
              <strong>Started in 2015 with simple lofi beats.</strong> They built their empire using AI-generated and curated music,
              professional mixing tools, and consistent uploads. <span className="text-green-600 font-bold">Now you can do the same with InfiniteMix.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Why Lofi Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Lofi Videos Print Money
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most profitable content format on YouTube right now
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 shadow-lg border-2 border-purple-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Insane Watch Time</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Average session: <strong>2-8 hours</strong>. Students and workers play these on repeat while studying/working.
                    YouTube's algorithm LOVES this. More watch time = More ad revenue = More money in your pocket.
                  </p>
                  <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                    <p className="text-green-900 font-semibold">💰 Real Example:</p>
                    <p className="text-green-800 text-sm">1 video with 10M views at 3hr avg watch time = $20K-$40K revenue</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 shadow-lg border-2 border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Repeat className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Evergreen Content</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Unlike trending topics that die in days, lofi videos earn <strong>for years</strong>. Upload once,
                    earn forever. Top channels have videos from 2018 still getting millions of views monthly.
                  </p>
                  <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4">
                    <p className="text-blue-900 font-semibold">📈 Compounding Effect:</p>
                    <p className="text-blue-800 text-sm">100 videos × $500/mo each = $50K/month passive income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-10 shadow-lg border-2 border-green-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Copyright Safe</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    With InfiniteMix's AI generation, you own 100% of the music. <strong>Zero copyright strikes.</strong>
                    Full commercial rights. Monetize immediately without waiting for review.
                  </p>
                  <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4">
                    <p className="text-green-900 font-semibold">✅ Full Control:</p>
                    <p className="text-green-800 text-sm">Keep 100% revenue. No licensing fees. No takedown risks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-10 shadow-lg border-2 border-yellow-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy To Scale</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Most channels produce 1 video/week manually. With InfiniteMix? <strong>10 videos/day</strong> if you want.
                    Batch-create content, schedule uploads, dominate your niche before competitors wake up.
                  </p>
                  <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4">
                    <p className="text-yellow-900 font-semibold">⚡ Speed Advantage:</p>
                    <p className="text-yellow-800 text-sm">Traditional: 5 hours/video. InfiniteMix: 5 minutes/video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Barrier (Problem) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Traditional Barrier: <span className="text-red-600">DESTROYED</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What used to take months of learning now takes 5 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">The Old Way (Impossible for Most)</h3>
              <div className="space-y-4">
                {[
                  { text: 'Learn music production (6-12 months)', icon: '❌' },
                  { text: 'Buy expensive DAW software ($300-600)', icon: '❌' },
                  { text: 'Master audio mixing & mastering', icon: '❌' },
                  { text: 'Learn video editing software', icon: '❌' },
                  { text: 'Understand music theory & keys', icon: '❌' },
                  { text: '5-8 hours per video minimum', icon: '❌' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-600 text-white p-6 rounded-xl">
                <p className="text-xl font-bold">Total barrier to entry: $5,000+ and 6+ months of learning</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">The InfiniteMix Way (Anyone Can Do It)</h3>
              <div className="space-y-4">
                {[
                  { text: 'Zero music production knowledge needed', icon: '✅' },
                  { text: 'Affordable and accessible to everyone', icon: '✅' },
                  { text: 'AI handles all mixing automatically', icon: '✅' },
                  { text: 'Built-in video generation', icon: '✅' },
                  { text: 'AI analyzes keys & harmonies', icon: '✅' },
                  { text: '5 minutes per video average', icon: '✅' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-600 text-white p-6 rounded-xl">
                <p className="text-xl font-bold">Total barrier to entry: Minimal cost and 30 minutes to learn the tool</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Revenue Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conservative earnings timeline for a consistent creator
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                  MONTH 1-3
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Building Phase</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$0-500</div>
                <p className="text-gray-600">Getting monetized</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Upload 3-5 videos/week</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Hit 1K subs + 4K watch hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Get monetization approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>First earnings appear</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                  MONTH 4-6
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Growth Phase</h3>
                <div className="text-5xl font-bold text-purple-600 mb-2">$500-2K</div>
                <p className="text-gray-600">Momentum building</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Old videos gaining traction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>50-100 videos in catalog</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Algorithm starts recommending</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>First viral video possible</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                  MONTH 7-12
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Scale Phase</h3>
                <div className="text-5xl font-bold text-green-600 mb-2">$2K-10K</div>
                <p className="text-gray-600">Passive income flowing</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>100+ videos compounding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Multiple viral hits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Can hire team/scale more</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Quit day job possible</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Real Success Stories from Lofi Channels</h3>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              These are actual channels earning real money from AI-generated and curated lofi music
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">Lofi Girl</div>
                <div className="text-lg opacity-90 mb-2">15.6M Subscribers</div>
                <div className="text-2xl font-bold text-green-300">$38K-116K/month</div>
                <p className="text-sm opacity-75 mt-2">2.5B total views • Started 2015</p>
                <p className="text-xs opacity-60 mt-2">Est. yearly: $3.5M+ from ads alone</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">Chillhop Music</div>
                <div className="text-lg opacity-90 mb-2">European-based</div>
                <div className="text-2xl font-bold text-green-300">$5M-8M/year</div>
                <p className="text-sm opacity-75 mt-2">From Spotify alone (2019 data)</p>
                <p className="text-xs opacity-60 mt-2">Additional revenue from YouTube, vinyl, merch</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">College Music</div>
                <div className="text-lg opacity-90 mb-2">24/7 Livestreams</div>
                <div className="text-2xl font-bold text-green-300">Passive Income</div>
                <p className="text-sm opacity-75 mt-2">20K+ concurrent viewers</p>
                <p className="text-xs opacity-60 mt-2">Revenue from streams, vinyl, Spotify</p>
              </div>
            </div>
            <div className="mt-8 bg-yellow-400/20 rounded-xl p-6 border-2 border-yellow-400/40">
              <p className="text-sm font-semibold mb-2">💡 KEY INSIGHT</p>
              <p className="text-lg">
                These channels use <strong>AI-generated, licensed, or curated music</strong>.
                With InfiniteMix, you can create similar content in <strong>5 minutes vs 5 hours</strong> of manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why You Need To Start <span className="text-red-600">RIGHT NOW</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The window of opportunity won't stay open forever
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Competition Is Coming</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Right now, most creators still think they need expensive software and months of training.
                    InfiniteMix changes that. <strong>First movers will dominate.</strong> By the time everyone realizes
                    how easy this is, you'll already have hundreds of videos and a loyal audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">YouTube Algorithm Advantage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Established channels get priority in recommendations. <strong>Start today = better positioning tomorrow.</strong>
                    Your first 100 videos are building your authority. Delaying means missing months of compounding growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Genre Saturation Risk</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Remember cryptocurrency YouTube in 2020? Early creators made millions. Late arrivals struggled.
                    Lofi is at that sweet spot NOW. <strong>Massive demand, manageable competition.</strong>
                    In 12 months, this could be oversaturated.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Early Adopter Advantage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Get in now while the barrier to entry is low.</strong> As more creators discover
                    AI-powered music mixing, the market becomes more competitive. Early adopters build
                    their channels and audiences before the niche gets crowded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Lofi Empire Starts Today
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Everything you need to tap into the $100B+ YouTube music industry
          </p>
          <p className="text-lg mb-10 opacity-80">
            Join the creators already building passive income with lofi videos. Zero experience required.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
            <h3 className="text-2xl font-bold mb-6">What You Get With InfiniteMix</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'AI music generation (unlimited tracks)',
                'Professional harmonic mixing',
                'YouTube-ready video export',
                'AI thumbnail creation',
                'Auto-generated descriptions',
                'Multiple genre support',
                'Manual upload option',
                'Full commercial usage rights',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/software"
            className="inline-flex items-center gap-3 px-12 py-6 bg-green-500 text-white text-2xl font-bold rounded-lg hover:bg-green-600 transition-all shadow-2xl hover:shadow-green-500/50 mb-6"
          >
            <Rocket className="w-8 h-8" />
            Start Building Your Channel Now
          </Link>
          <p className="text-sm opacity-75">Try it free • Start creating immediately</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/logo.png" alt="InfiniteMix Logo" className="w-7 h-7" />
            <span className="text-2xl font-bold text-white">InfiniteMix</span>
          </div>
          <p className="mb-4">Turn your music into viral videos. Build your YouTube empire.</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/software" className="hover:text-white transition-colors">Try Free</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
          <p className="text-xs mt-6">© 2026 InfiniteMix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
