'use client';

import { useState } from 'react';
import {
  TrendingUp, DollarSign, Users, BarChart3, Zap, Target, Shield, Rocket,
  Music, Video, CheckCircle, ArrowRight, Globe, Clock, Star, ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function PitchDeckPage() {
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="InfiniteMix Logo" className="w-7 h-7" />
            <span className="text-2xl font-bold text-gray-900">InfiniteMix</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/business" className="text-gray-600 hover:text-gray-900 font-medium">
              Opportunity
            </Link>
            <Link
              href="/software"
              className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-green-500 px-6 py-2 rounded-full text-sm font-bold mb-6">
              INVESTOR DECK • 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Democratizing Music Production for 500M+ Creators
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              AI-powered music mixing platform capturing the $100B+ YouTube music economy
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>5 Minutes to Professional Mix</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>$10B+ Market Opportunity</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span>Pre-Launch • Seed Round</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              InfiniteMix is the Canva for music production — making professional music mixing accessible to everyone
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-200">
              <Target className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Market</h3>
              <p className="text-gray-600">$100B+ YouTube music industry, 500M+ content creators globally</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
              <Rocket className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Product Ready</h3>
              <p className="text-gray-600">Beta-tested platform ready for launch. Pre-launch waitlist building momentum</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-200">
              <DollarSign className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Business Model</h3>
              <p className="text-gray-600">Flexible pricing ($29-$199) + credit system. Enterprise white-label ready</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border-2 border-yellow-200">
              <Shield className="w-10 h-10 text-yellow-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Defensibility</h3>
              <p className="text-gray-600">Proprietary AI music engine + 18 months technical lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 1: Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">01. The Problem</h2>
              <div className="text-sm font-bold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                $10B+ Addressable Pain Point
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Music Production is Broken for 99% of Creators</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Content creators face a massive bottleneck: <strong>professional music mixing requires 6+ months of learning</strong> and
                  expensive software costing $500-2,000. This excludes 500M+ creators from the $100B YouTube music economy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">6-12 Months</div>
                  <p className="text-gray-700 text-sm">Learning curve for music production tools</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">$2,000+</div>
                  <p className="text-gray-700 text-sm">Software + licensing costs per year</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">5+ Hours</div>
                  <p className="text-gray-700 text-sm">To create a single professional mix</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Real Market Validation:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Lofi Girl:</strong> 15.6M subscribers, $38K-116K/month — proving creators will pay for music content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>15B+ monthly lofi views</strong> on YouTube, growing 40% YoY — massive untapped demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Top creators</strong> spend $10K+ on custom AI music solutions — but 99% can't afford it</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-10 border-2 border-purple-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">02. The Solution</h2>
              <div className="text-sm font-bold text-green-600 bg-green-100 px-4 py-2 rounded-full">
                10X Faster, 100X Cheaper
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">InfiniteMix: Professional Music Mixing in 5 Minutes</h3>
                <p className="text-lg opacity-95 leading-relaxed">
                  We've built an AI-powered platform that automates the entire music production workflow — from generation
                  to mixing to video export. <strong>What takes professionals 5 hours now takes anyone 5 minutes.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Core Technology Stack:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span><strong>AI Music Generation:</strong> Advanced ML models for royalty-free track creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span><strong>Audio Analysis:</strong> Real-time BPM and key detection engine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span><strong>Smart Sequencing:</strong> Proprietary harmonic mixing algorithm</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span><strong>Video Processing:</strong> High-performance media encoding pipeline</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">What We Deliver:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>YouTube-ready MP4 videos with professional audio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>AI-generated thumbnails optimized for CTR</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Auto-generated descriptions with timestamps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Full commercial usage rights (no licensing fees)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl mt-6">
                <h4 className="font-bold mb-3 text-lg">Our Secret Sauce: Custom Harmonic Mixing Algorithm</h4>
                <p className="opacity-95 leading-relaxed">
                  Our proprietary in-house algorithm analyzes BPM, musical key, energy levels, and harmonic compatibility
                  to create seamless transitions between tracks. Unlike traditional DJ software that requires manual beatmatching,
                  our AI automatically sequences songs in the optimal order for maximum listener engagement and retention.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h4 className="font-bold text-gray-900 mb-3">Competitive Advantage:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-green-700 mb-1">Traditional DAWs</div>
                    <div className="text-gray-600">Ableton, FL Studio require months of training. We take 5 minutes.</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-700 mb-1">Music Libraries</div>
                    <div className="text-gray-600">Epidemic Sound charges $300+/year. We generate unlimited unique tracks.</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-700 mb-1">Custom Solutions</div>
                    <div className="text-gray-600">Top channels pay $10K+. We offer same capability democratically.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Videos */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See InfiniteMix in Action</h2>
            <p className="text-xl opacity-90">Watch how easy it is to create professional music mixes in minutes</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Tutorial Videos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border-2 border-white/20">
                <h4 className="text-lg font-bold mb-3 text-center">Tutorial 1: Getting Started</h4>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border-2 border-white/20">
                <h4 className="text-lg font-bold mb-3 text-center">Tutorial 2: Advanced Features</h4>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://drive.google.com/file/d/1rHGN6NMEI7DWKvDdHZHVNgtPkad3UG1f/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">Real Mixes Created with InfiniteMix</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border-2 border-white/20">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/BmnqYrLwbOM"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border-2 border-white/20">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/yz0K_RYGpW8"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border-2 border-white/20">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/JQAK3iJO05I"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Market Size */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">03. Market Opportunity</h2>
              <div className="text-sm font-bold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                $10B+ TAM
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
                <h3 className="text-5xl font-bold mb-3">$100B+</h3>
                <p className="text-xl opacity-95">Total YouTube Music Industry</p>
                <p className="text-sm opacity-75 mt-2">Growing 25% YoY • 500M+ global creators</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$10B</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">TAM (Total Addressable Market)</div>
                  <div className="text-xs text-gray-600">Music production tools + AI music services</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$3B</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">SAM (Serviceable Available Market)</div>
                  <div className="text-xs text-gray-600">Content creators needing music solutions</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">$500M</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">SOM (Serviceable Obtainable Market)</div>
                  <div className="text-xs text-gray-600">Realistic 3-year capture (16% of SAM)</div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-4">Market Validation — Real Numbers:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-bold text-yellow-700 mb-2">Lofi Music Niche Alone:</div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 15B+ monthly views on YouTube</li>
                      <li>• Growing 40% year-over-year</li>
                      <li>• Top channel: $38K-116K/month revenue</li>
                      <li>• Chillhop Music: $5M-8M/year (Spotify alone)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-700 mb-2">Creator Economy Tailwinds:</div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• 500M+ content creators globally (Linktree 2025)</li>
                      <li>• 2M+ full-time YouTubers (YouTube 2025)</li>
                      <li>• AI music tools market: $1.5B by 2027 (Gartner)</li>
                      <li>• Video production software: $8B market (Allied 2024)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Why Now & Go-to-Market */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-10 border-2 border-green-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">04. Why Now & Go-to-Market Strategy</h2>
              <div className="text-sm font-bold text-green-600 bg-green-100 px-4 py-2 rounded-full">
                Perfect Timing
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Why This Moment is Critical</h3>
                <p className="text-lg opacity-95 leading-relaxed mb-4">
                  The convergence of three major trends creates an unprecedented opportunity to capture the creator economy's
                  music production needs before the market gets saturated.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                  <Rocket className="w-10 h-10 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">AI Music Breakthrough</h4>
                  <p className="text-sm text-gray-700">
                    2024-2026: AI music quality crossed the "good enough" threshold. Udio, Suno, and enterprise APIs
                    now produce radio-quality tracks. We're riding this wave.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-green-200">
                  <Globe className="w-10 h-10 text-green-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Creator Economy Boom</h4>
                  <p className="text-sm text-gray-700">
                    500M+ creators globally need content tools. YouTube pays $15B+ annually to creators.
                    Music content channels are exploding — this is our window.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                  <Clock className="w-10 h-10 text-purple-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Lofi Gold Rush</h4>
                  <p className="text-sm text-gray-700">
                    Lofi music: 15B+ monthly views, 40% YoY growth. Channels earning $38K-116K/month.
                    Market is hot but unsaturated — first-mover advantage available.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-4">Go-to-Market Strategy (First 18 Months):</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-yellow-700 mb-3">Phase 1: Launch & Validate (Months 1-6)</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Beta Launch:</strong> 500 hand-picked creators (YouTube, TikTok)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Content Marketing:</strong> SEO + tutorials targeting "lofi music creation"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Community Building:</strong> Discord server for early adopters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Lifetime Deals:</strong> Launch on ProductHunt, AppSumo for quick cash + users</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-yellow-700 mb-3">Phase 2: Scale & Monetize (Months 7-18)</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Paid Acquisition:</strong> YouTube ads, influencer partnerships ($50K/month)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Viral Loop:</strong> Branded watermarks on free tier → organic growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Enterprise Outreach:</strong> Target music labels, podcast networks, agencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Platform Partnerships:</strong> Integrate with YouTube Studio, Spotify for Creators</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2 text-lg">The Window is Closing Fast</h4>
                <p className="opacity-95">
                  Big players (Adobe, Canva) are eyeing this space but haven't moved yet. We have 12-18 months to capture
                  market share before competition intensifies. First mover advantage in the lofi/music creator niche
                  will create defensible moats through network effects and brand recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Business Model */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">05. Business Model</h2>
              <div className="text-sm font-bold text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                Multiple Revenue Streams
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-center">Flexible One-Time Pricing Model</h4>
                <p className="text-sm text-gray-600 text-center mb-4">Adjustable tiers based on market demand and user acquisition strategy</p>
                <div className="grid md:grid-cols-4 gap-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-xs font-bold text-gray-500 mb-1">Creator</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">$29</div>
                    <div className="text-xs text-gray-600 mb-2">2,000 credits</div>
                    <div className="text-xs text-gray-500">~10-20 mixes</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-purple-300 text-center">
                    <div className="text-xs font-bold text-purple-600 mb-1">Pro</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">$69</div>
                    <div className="text-xs text-gray-600 mb-2">5,000 credits</div>
                    <div className="text-xs text-gray-500">~30-50 mixes</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-xs font-bold text-gray-500 mb-1">Studio</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">$119</div>
                    <div className="text-xs text-gray-600 mb-2">10,000 credits</div>
                    <div className="text-xs text-gray-500">~60-90 mixes</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-xs font-bold text-gray-500 mb-1">Agency+</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">$199</div>
                    <div className="text-xs text-gray-600 mb-2">18,000 credits</div>
                    <div className="text-xs text-gray-500">~120-160 mixes</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                  <h4 className="font-bold text-gray-900 mb-3">Credit-Based Usage</h4>
                  <p className="text-sm text-gray-600 mb-3">AI mix generation: 4 credits per minute</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <div>• 15 min mix = 60 credits</div>
                    <div>• 30 min mix = 120 credits</div>
                    <div>• 1 hour mix = 240 credits</div>
                    <div className="font-bold text-purple-600 pt-2">• Manual mode: Unlimited (FREE)</div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-gray-900 mb-3">Enterprise/White Label</h4>
                  <div className="text-2xl font-bold text-green-600 mb-2">$5K-25K/mo</div>
                  <p className="text-sm text-gray-600 mb-3">Custom solutions for music labels, agencies, platforms</p>
                  <div className="text-xs text-gray-500">
                    <div>• White-labeled platform</div>
                    <div>• API access</div>
                    <div>• Custom features</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">Revenue Projections (Conservative):</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="text-left p-3">Metric</th>
                        <th className="text-right p-3">Year 1</th>
                        <th className="text-right p-3">Year 2</th>
                        <th className="text-right p-3">Year 3</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3 text-gray-700">Paid Users</td>
                        <td className="text-right p-3 font-semibold">2,500</td>
                        <td className="text-right p-3 font-semibold">15,000</td>
                        <td className="text-right p-3 font-semibold">75,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-gray-700">ARPU ($/month)</td>
                        <td className="text-right p-3 font-semibold">$35</td>
                        <td className="text-right p-3 font-semibold">$42</td>
                        <td className="text-right p-3 font-semibold">$48</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="p-3 font-bold text-gray-900">MRR</td>
                        <td className="text-right p-3 font-bold text-green-600">$87K</td>
                        <td className="text-right p-3 font-bold text-green-600">$630K</td>
                        <td className="text-right p-3 font-bold text-green-600">$3.6M</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-3 font-bold text-gray-900">ARR</td>
                        <td className="text-right p-3 font-bold text-blue-600">$1.05M</td>
                        <td className="text-right p-3 font-bold text-blue-600">$7.56M</td>
                        <td className="text-right p-3 font-bold text-blue-600">$43.2M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-2">Unit Economics:</h5>
                  <div>• Gross margin: 85% (SaaS)</div>
                  <div>• CAC: $15 (organic + paid)</div>
                  <div>• LTV: $540 (12-month avg retention)</div>
                  <div>• Payback: 0.3 months</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-2">Growth Levers:</h5>
                  <div>• Viral loops (users share videos)</div>
                  <div>• Content marketing (lofi niche)</div>
                  <div>• Partnerships (YouTube, Spotify)</div>
                  <div>• Platform integrations (APIs)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: Competition */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-10 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">06. Competitive Landscape</h2>
              <div className="text-sm font-bold text-green-600 bg-green-100 px-4 py-2 rounded-full">
                18-Month Technical Lead
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-2 border-gray-200">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left p-4">Feature</th>
                      <th className="text-center p-4 bg-purple-600">InfiniteMix</th>
                      <th className="text-center p-4">Traditional DAWs</th>
                      <th className="text-center p-4">Music Libraries</th>
                      <th className="text-center p-4">AI Tools</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 font-semibold">Learning Curve</td>
                      <td className="text-center p-4 bg-green-50 font-bold text-green-600">5 minutes</td>
                      <td className="text-center p-4">6+ months</td>
                      <td className="text-center p-4">1 week</td>
                      <td className="text-center p-4">days</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Cost</td>
                      <td className="text-center p-4 bg-green-50 font-bold text-green-600">Starting from $29</td>
                      <td className="text-center p-4">$600+/year</td>
                      <td className="text-center p-4">$300+/year</td>
                      <td className="text-center p-4">$200+/year</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">AI Music Generation</td>
                      <td className="text-center p-4 bg-green-50 font-bold text-green-600">✓ Built-in</td>
                      <td className="text-center p-4">✗</td>
                      <td className="text-center p-4">✗</td>
                      <td className="text-center p-4">✓ Limited</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Harmonic Mixing</td>
                      <td className="text-center p-4 bg-green-50 font-bold text-green-600">✓ Automatic</td>
                      <td className="text-center p-4">✓ Manual</td>
                      <td className="text-center p-4">✗</td>
                      <td className="text-center p-4">✗</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Video Export</td>
                      <td className="text-center p-4 bg-green-50 font-bold text-green-600">✓ YouTube-ready</td>
                      <td className="text-center p-4">Separate tool</td>
                      <td className="text-center p-4">✗</td>
                      <td className="text-center p-4">✗</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Commercial Rights</td>
                      <td className="text-center p-4 bg-green-50 font-bold text-green-600">✓ Included</td>
                      <td className="text-center p-4">Complex</td>
                      <td className="text-center p-4">Extra fee</td>
                      <td className="text-center p-4">Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Our Moat:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Proprietary AI music engine</strong> — 18 months of training data + algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Network effects</strong> — User-generated content creates viral loops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Data moat</strong> — 500K+ mixes analyzed for algorithm improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>All-in-one platform</strong> — Only solution combining music + video + AI</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Why We Win:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Time to value:</strong> 5 min vs competitors' 5+ hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Price point:</strong> 10X cheaper than traditional solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Zero learning curve:</strong> Accessible to 500M+ creators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span><strong>First-mover advantage:</strong> Capturing lofi market before saturation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 7: The Ask */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">07. The Ask</h2>
            <p className="text-xl opacity-90">Raising to launch, prove model, and scale to Series A</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border-2 border-white/20 mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">$1.2M-1.5M</div>
                <div className="text-lg opacity-90">Seed Round</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">$5M-6M</div>
                <div className="text-lg opacity-90">Pre-Money Valuation</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">18-20%</div>
                <div className="text-lg opacity-90">Equity Offered</div>
              </div>
            </div>

            <div className="border-t-2 border-white/20 pt-8">
              <h3 className="text-2xl font-bold mb-6">Use of Funds (18-Month Runway):</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold">Marketing & Growth</span>
                    <span className="text-2xl font-bold">40%</span>
                  </div>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Paid acquisition ($30-50K/month)</li>
                    <li>• Content marketing team (2 people)</li>
                    <li>• Influencer partnerships</li>
                    <li>• Community building & events</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold">Product & Engineering</span>
                    <span className="text-2xl font-bold">35%</span>
                  </div>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• 1-2 senior engineers + contractors</li>
                    <li>• AI model training & API costs</li>
                    <li>• Product iterations & features</li>
                    <li>• Development tools & infrastructure</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold">Operations</span>
                    <span className="text-2xl font-bold">15%</span>
                  </div>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Cloud/server infrastructure</li>
                    <li>• Customer support team</li>
                    <li>• Legal, compliance, accounting</li>
                    <li>• Admin & operations tools</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold">Buffer & Reserves</span>
                    <span className="text-2xl font-bold">10%</span>
                  </div>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Emergency fund</li>
                    <li>• Unexpected opportunities</li>
                    <li>• Contingency buffer</li>
                    <li>• Strategic partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 backdrop-blur-sm p-8 rounded-xl border-2 border-green-400/30 mb-8">
            <h3 className="text-2xl font-bold mb-4">18-Month Milestones:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">25K-30K</div>
                <div className="opacity-90">Paid Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$2M-2.5M</div>
                <div className="opacity-90">Total Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Series A</div>
                <div className="opacity-90">Ready</div>
              </div>
            </div>
            <div className="mt-6 text-center opacity-90">
              <p className="text-sm">Target: $3M ARR run-rate • CAC &lt;$30 • Retention &gt;40% • PMF proven</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:contact@unitar.app"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-purple-900 text-xl font-bold rounded-lg hover:bg-gray-100 transition-all shadow-2xl"
            >
              <Rocket className="w-6 h-6" />
              Schedule Investor Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/logo.png" alt="InfiniteMix Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">InfiniteMix</span>
          </div>
          <p className="text-gray-400 mb-4">Democratizing music production for the creator economy</p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <a href="mailto:contact@unitar.app" className="hover:text-white transition-colors">
              contact@unitar.app
            </a>
            <span>•</span>
            <Link href="/" className="hover:text-white transition-colors">
              infinitemix.com
            </Link>
            <span>•</span>
            <Link href="/business" className="hover:text-white transition-colors">
              Market Opportunity
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
