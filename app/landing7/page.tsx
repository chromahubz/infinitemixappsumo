'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Play, Zap, TrendingUp, Clock, Users, Globe, Music, Sparkles, HeartHandshake, BrainCircuit, Search, Star } from 'lucide-react'

export default function Landing7() {
  const [activeTab, setActiveTab] = useState<'ai' | 'manual'>('ai')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const genres = [
    { name: 'Lofi', img: '/homepageimg/lofi.jpg', badge: '🔥 VIRAL' },
    { name: 'Trap', img: '/homepageimg/trap.jpg', badge: '' },
    { name: 'Ambient', img: '/homepageimg/ambient.jpg', badge: '' },
    { name: 'Latin', img: '/homepageimg/latin.jpg', badge: '' },
    { name: 'Synthwave', img: '/homepageimg/synthwave.jpg', badge: '' },
    { name: 'Vaporwave', img: '/homepageimg/vaporwave.jpg', badge: '' },
  ]

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: 'AI-Powered Mixing', desc: 'Our advanced AI analyzes your tracks and creates perfect transitions, beatmatching, and harmonic mixing automatically.' },
    { icon: <Clock className="w-8 h-8" />, title: 'Save Hours of Work', desc: 'What used to take hours now takes minutes. Generate professional mixes in seconds and focus on creativity.' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Grow Your Audience', desc: 'Create more content, reach more listeners, and grow your following with consistent, high-quality mixes.' },
    { icon: <Users className="w-8 h-8" />, title: 'Built for Creators', desc: 'Whether you\'re a DJ, producer, or content creator, InfiniteMix adapts to your workflow and style.' },
    { icon: <Globe className="w-8 h-8" />, title: 'Multi-Platform Export', desc: 'Export your mixes optimized for YouTube, SoundCloud, Mixcloud, and other platforms with one click.' },
    { icon: <Music className="w-8 h-8" />, title: 'Extensive Music Library', desc: 'Access millions of tracks across every genre. From mainstream hits to underground gems.' },
  ]

  const benefits = [
    { title: '10x Faster Content Creation', desc: 'Create in minutes what used to take hours. Our AI handles the technical work while you focus on creativity.' },
    { title: 'Professional Quality, Every Time', desc: 'Consistent, high-quality output that sounds like it was mixed by a professional DJ.' },
    { title: 'No Experience Required', desc: 'Whether you\'re a beginner or a pro, InfiniteMix makes creating amazing mixes accessible to everyone.' },
    { title: 'Scale Your Content Strategy', desc: 'Produce more mixes, grow your audience faster, and monetize your content across multiple platforms.' },
  ]

  const useCases = [
    { title: 'YouTube Creators', desc: 'Generate background music mixes for study, work, or relaxation content. Build a passive income stream with 24/7 livestreams.', icon: <Play className="w-6 h-6" /> },
    { title: 'DJs & Producers', desc: 'Create promotional mixes, test new tracks, and explore creative combinations without spending hours in the studio.', icon: <Music className="w-6 h-6" /> },
    { title: 'Content Creators', desc: 'Produce podcast intros, background music for videos, or curated playlists that match your brand perfectly.', icon: <Sparkles className="w-6 h-6" /> },
    { title: 'Music Enthusiasts', desc: 'Discover new music through AI-generated combinations. Create personalized mixes for any mood or activity.', icon: <HeartHandshake className="w-6 h-6" /> },
  ]

  const testimonials = [
    { name: 'Alex Chen', role: 'YouTube Creator (500K subs)', text: 'InfiniteMix transformed my channel. I went from posting once a week to daily uploads. My lofi streams now run 24/7 and bring in consistent revenue.' },
    { name: 'Sarah Martinez', role: 'Professional DJ', text: 'As a touring DJ, I use InfiniteMix to quickly test track combinations and create promotional content. It\'s like having an AI assistant in the studio.' },
    { name: 'Marcus Johnson', role: 'Music Producer', text: 'The AI mixing quality is impressive. I\'ve used it to create over 100 mixes for my SoundCloud, helping me grow from 0 to 50K followers in 6 months.' },
    { name: 'Emma Wilson', role: 'Podcast Host', text: 'I needed custom background music for my podcast. InfiniteMix lets me create perfectly-timed mixes that match the vibe of each episode.' },
    { name: 'David Kim', role: 'Twitch Streamer', text: 'Copyright-free music that actually sounds good? Game changer. My streams now have professional-quality background music without any DMCA worries.' },
    { name: 'Lisa Thompson', role: 'Content Marketer', text: 'We use InfiniteMix to create branded playlists for our clients. It\'s become an essential tool in our content creation workflow.' },
  ]

  const faqs = [
    { q: 'How does AI mixing work?', a: 'Our AI analyzes the musical characteristics of each track (BPM, key, energy, mood) and creates seamless transitions with beatmatching, harmonic mixing, and EQ adjustments. It\'s trained on thousands of professional DJ mixes.' },
    { q: 'Can I use the mixes commercially?', a: 'Yes! All mixes created with InfiniteMix can be used commercially on YouTube, SoundCloud, podcasts, and other platforms. We handle the music licensing.' },
    { q: 'What genres are supported?', a: 'We support all major genres including Lofi, House, Techno, Trap, Ambient, Jazz, Latin, Synthwave, Vaporwave, and more. Our library includes millions of tracks.' },
    { q: 'How long does it take to create a mix?', a: 'AI-generated mixes are ready in seconds to minutes depending on length. Manual mode gives you real-time control for custom editing.' },
    { q: 'Can I edit the AI-generated mixes?', a: 'Absolutely! Switch to Manual Mode to fine-tune transitions, adjust EQ, modify the track order, or make any changes you want.' },
    { q: 'What formats can I export?', a: 'Export as MP3, WAV, or directly to YouTube, SoundCloud, and Mixcloud. We optimize audio quality for each platform.' },
    { q: 'Is there a free trial?', a: 'Yes! Start with our free plan to create your first mixes and see the quality for yourself. Upgrade anytime for more features.' },
    { q: 'Do I need DJ experience?', a: 'Not at all! InfiniteMix is designed for everyone. Beginners can use AI mode for instant results, while experienced DJs can use manual mode for detailed control.' },
    { q: 'How is this different from regular playlists?', a: 'Unlike playlists, InfiniteMix creates seamless DJ-style mixes with professional transitions, beatmatching, and harmonic mixing. It sounds like a live DJ set, not just songs played back-to-back.' },
    { q: 'What if I need help?', a: 'We offer email support, video tutorials, and a community Discord where creators share tips and techniques. Contact us at contact@unitar.app' },
  ]

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }} className="min-h-screen bg-white">
      {/* Bauhaus Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b-4 border-black z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-full"></div>
              <Link href="/" className="text-2xl font-bold text-black">InfiniteMix</Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/#features" className="text-black hover:text-red-600 transition-colors font-medium">Features</Link>
              <Link href="/#how-it-works" className="text-black hover:text-blue-600 transition-colors font-medium">How It Works</Link>
              <Link href="/#testimonials" className="text-black hover:text-yellow-500 transition-colors font-medium">Testimonials</Link>
              <Link href="/#faq" className="text-black hover:text-red-600 transition-colors font-medium">FAQ</Link>
            </div>
            <Link href="/software" className="px-8 py-3 bg-blue-600 text-white font-bold hover:bg-black transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-red-600 rounded-full"></div>
                <div className="h-1 w-24 bg-black"></div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight">
                Create<br />Professional<br />DJ Mixes
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-24 bg-yellow-400"></div>
                <p className="text-xl text-gray-800 font-medium">
                  AI-POWERED MUSIC MIXING
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                InfiniteMix uses advanced AI to create seamless, professional-quality music mixes. Perfect for YouTube creators, DJs, and music lovers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/software" className="px-10 py-4 bg-red-600 text-white font-bold hover:bg-black transition-all text-center">
                  Start Creating Free
                </Link>
                <Link href="#demo" className="px-10 py-4 border-4 border-black text-black font-bold hover:bg-black hover:text-white transition-all text-center">
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600 rounded-full"></div>
              <div className="absolute top-32 -left-10 w-48 h-48 bg-yellow-400"></div>
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="bg-white border-4 border-black p-6">
                  <div className="text-4xl font-bold text-red-600">10K+</div>
                  <div className="text-gray-700 mt-2 font-medium">Active Users</div>
                </div>
                <div className="bg-black text-white p-6">
                  <div className="text-4xl font-bold text-yellow-400">500K+</div>
                  <div className="mt-2 font-medium">Mixes Created</div>
                </div>
                <div className="bg-yellow-400 p-6">
                  <div className="text-4xl font-bold text-black">50M+</div>
                  <div className="text-black mt-2 font-medium">Total Views</div>
                </div>
                <div className="bg-blue-600 text-white p-6">
                  <div className="text-4xl font-bold">100K+</div>
                  <div className="mt-2 font-medium">Hours Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-red-600 rounded-full"></div>
            <div>
              <h2 className="text-5xl font-bold text-black">Popular Genres</h2>
              <p className="text-xl text-gray-700 mt-2">Create mixes in any style</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {genres.map((genre, i) => (
              <div key={i} className="border-4 border-black overflow-hidden hover:border-red-600 transition-colors">
                <div className="relative h-64">
                  <img src={genre.img} alt={genre.name} className="w-full h-full object-cover" />
                  {genre.badge && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 font-bold border-2 border-black">
                      {genre.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-black">{genre.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Story Section */}
      <section className="py-20 px-4 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="border-8 border-white bg-black p-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                <Music className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-4xl font-bold">From Bedroom to 100K+ Views</h2>
                <p className="text-xl mt-2">One creator's story</p>
              </div>
            </div>
            <div className="space-y-6 text-lg">
              <p>
                "I was throwing a house party and realized I forgot to prepare a playlist. In a panic, I tried InfiniteMix for the first time - just threw in some lofi tracks and let the AI work its magic."
              </p>
              <p>
                "The mix was so good that people kept asking who the DJ was. That's when it hit me: if this could save my party, imagine what it could do for my YouTube channel that was struggling to get views."
              </p>
              <p>
                "I started uploading AI-generated lofi mixes to YouTube. Within 3 months, one mix hit 100K+ views. Now I run a 24/7 livestream that generates passive income while I sleep. InfiniteMix didn't just save my party - it changed my life."
              </p>
              <div className="mt-8 pt-8 border-t-4 border-yellow-400">
                <div className="font-bold text-2xl">Jake Morrison</div>
                <div className="text-xl">YouTube Creator, 200K subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-red-600"></div>
                <span className="text-sm font-bold text-red-600 uppercase">The Problem</span>
              </div>
              <h2 className="text-4xl font-bold text-black mb-8">Creating Quality Mixes Takes Forever</h2>
              <div className="space-y-4 text-lg text-gray-800">
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">✗</span>
                  <span>Hours spent beatmatching</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">✗</span>
                  <span>Expensive software</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">✗</span>
                  <span>Steep learning curve</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">✗</span>
                  <span>Inconsistent quality</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">✗</span>
                  <span>Can't scale content</span>
                </p>
              </div>
              <div className="mt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-1 bg-blue-600"></div>
                  <span className="text-sm font-bold text-blue-600 uppercase">The Solution</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-6">AI-Powered Mixing</h3>
                <div className="space-y-4 text-lg text-gray-800">
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold">✓</span>
                    <span>Professional mixes in seconds</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold">✓</span>
                    <span>No equipment needed</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold">✓</span>
                    <span>Consistent quality</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold">✓</span>
                    <span>Any genre or mood</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold">✓</span>
                    <span>Unlimited scale</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-4 border-black overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                className="w-full aspect-video"
                allow="autoplay"
                title="InfiniteMix Demo"
              />
              <div className="p-6 bg-yellow-400">
                <p className="text-center text-black font-bold text-lg">Watch: Professional mix in under 60 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Mixes Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-yellow-400 rounded-full"></div>
            <div>
              <h2 className="text-5xl font-bold">Real Mixes, Real Results</h2>
              <p className="text-xl mt-2">Listen to what our AI creates</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-white overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/BmnqYrLwbOM?modestbranding=1"
                title="Lofi Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 bg-white text-black">
                <h3 className="font-bold text-lg mb-2">Chill Lofi Hip Hop</h3>
                <p>Perfect for studying</p>
              </div>
            </div>
            <div className="border-4 border-white overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/yz0K_RYGpW8?modestbranding=1"
                title="Electronic Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 bg-white text-black">
                <h3 className="font-bold text-lg mb-2">Deep House Vibes</h3>
                <p>Smooth transitions</p>
              </div>
            </div>
            <div className="border-4 border-white overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/JQAK3iJO05I?modestbranding=1"
                title="Ambient Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 bg-white text-black">
                <h3 className="font-bold text-lg mb-2">Ambient Soundscapes</h3>
                <p>Atmospheric immersion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-blue-600 rounded-full"></div>
            <div>
              <h2 className="text-5xl font-bold text-black">Features</h2>
              <p className="text-xl text-gray-700 mt-2">Everything you need to create</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="border-4 border-black p-8 hover:bg-yellow-400 transition-colors">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-black mb-4">Why InfiniteMix</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white border-4 border-black p-8">
                <h3 className="text-2xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-800 text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-red-600 rounded-full"></div>
            <div>
              <h2 className="text-5xl font-bold text-black">How It Works</h2>
              <p className="text-xl text-gray-700 mt-2">Two modes: AI or Manual</p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex border-4 border-black">
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-10 py-4 font-bold text-lg transition-all ${
                  activeTab === 'ai'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                AI MODE
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-10 py-4 font-bold text-lg transition-all border-l-4 border-black ${
                  activeTab === 'manual'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                MANUAL MODE
              </button>
            </div>
          </div>

          {/* AI Mode Content */}
          {activeTab === 'ai' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-4 border-black p-8">
                <div className="w-16 h-16 bg-red-600 rounded-full text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <h3 className="text-2xl font-bold text-black mb-3">Choose Genre</h3>
                <p className="text-gray-700 font-medium">Select from Lofi, House, Techno, Ambient, and more</p>
              </div>
              <div className="border-4 border-black p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full text-black flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <h3 className="text-2xl font-bold text-black mb-3">Set Preferences</h3>
                <p className="text-gray-700 font-medium">Pick mood, energy, duration. AI handles the rest</p>
              </div>
              <div className="border-4 border-black p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
                <h3 className="text-2xl font-bold text-black mb-3">Download</h3>
                <p className="text-gray-700 font-medium">Get your mix in seconds. Export anywhere</p>
              </div>
            </div>
          )}

          {/* Manual Mode Content */}
          {activeTab === 'manual' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-4 border-black p-8">
                <div className="w-16 h-16 bg-red-600 rounded-full text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <h3 className="text-2xl font-bold text-black mb-3">Search Tracks</h3>
                <p className="text-gray-700 font-medium">Browse millions of tracks. Add to your queue</p>
              </div>
              <div className="border-4 border-black p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full text-black flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <h3 className="text-2xl font-bold text-black mb-3">Customize</h3>
                <p className="text-gray-700 font-medium">Adjust transitions, EQ, effects, timing</p>
              </div>
              <div className="border-4 border-black p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
                <h3 className="text-2xl font-bold text-black mb-3">Perfect & Export</h3>
                <p className="text-gray-700 font-medium">Preview, refine, create your vision</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-yellow-400"></div>
            <div>
              <h2 className="text-5xl font-bold text-black">Who Uses It</h2>
              <p className="text-xl text-gray-700 mt-2">Built for creators</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:border-red-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{useCase.title}</h3>
                    <p className="text-gray-700">{useCase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-red-600 rounded-full"></div>
            <div>
              <h2 className="text-5xl font-bold text-black">Testimonials</h2>
              <p className="text-xl text-gray-700 mt-2">Loved by creators worldwide</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="border-4 border-black p-8 bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 mb-6">"{testimonial.text}"</p>
                <div className="pt-4 border-t-2 border-gray-300">
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">The Numbers</h2>
            <p className="text-2xl">Trusted by creators worldwide</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white text-black p-8 text-center border-4 border-black">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg font-medium">Active Creators</div>
            </div>
            <div className="bg-black text-white p-8 text-center border-4 border-white">
              <div className="text-5xl font-bold mb-2 text-yellow-400">500,000+</div>
              <div className="text-lg font-medium">Mixes Generated</div>
            </div>
            <div className="bg-yellow-400 text-black p-8 text-center border-4 border-black">
              <div className="text-5xl font-bold mb-2">50M+</div>
              <div className="text-lg font-medium">Total Views</div>
            </div>
            <div className="bg-blue-600 text-white p-8 text-center border-4 border-white">
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-lg font-medium">Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-blue-600 rounded-full"></div>
            <div>
              <h2 className="text-5xl font-bold text-black">FAQ</h2>
              <p className="text-xl text-gray-700 mt-2">Everything you need to know</p>
            </div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-4 border-black overflow-hidden bg-white hover:border-red-600 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                >
                  <span className="font-bold text-lg text-black">{faq.q}</span>
                  <span className="text-3xl font-bold flex-shrink-0 ml-4">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-8 pb-6 text-gray-700 border-t-4 border-black pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-8"></div>
          <h2 className="text-6xl font-bold text-black mb-6">Ready to Create?</h2>
          <p className="text-2xl mb-8 text-black">
            Join 10,000+ creators using InfiniteMix
          </p>
          <Link href="/software" className="inline-block px-16 py-6 bg-black text-white font-bold text-xl hover:bg-blue-600 transition-all border-4 border-black">
            Start Creating Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t-8 border-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                <h3 className="font-bold text-xl">InfiniteMix</h3>
              </div>
              <p className="text-sm">AI-powered music mixing</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="hover:text-yellow-400 transition-colors">Features</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-yellow-400 transition-colors">How It Works</Link></li>
                <li><Link href="/software" className="hover:text-yellow-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</Link></li>
                <li><Link href="/#faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:contact@unitar.app" className="hover:text-yellow-400 transition-colors">contact@unitar.app</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 border-yellow-400 pt-8 text-sm text-center">
            <p>&copy; 2024 InfiniteMix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
