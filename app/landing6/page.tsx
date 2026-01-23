'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Play, Zap, TrendingUp, Clock, Users, Globe, Music, Sparkles, HeartHandshake, BrainCircuit, Search, Star } from 'lucide-react'

export default function Landing6() {
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
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }} className="min-h-screen bg-[#e0e5ec]">
      {/* Neumorphic Navigation */}
      <nav className="fixed top-0 w-full bg-[#e0e5ec] z-50" style={{ boxShadow: '0 5px 15px rgba(163, 177, 198, 0.6), 0 -2px 6px rgba(255, 255, 255, 0.5)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold text-gray-700">InfiniteMix</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/#features" className="text-gray-600 hover:text-gray-800 transition-colors font-medium px-4 py-2 rounded-xl" style={{ boxShadow: 'inset 3px 3px 7px rgba(163, 177, 198, 0.4), inset -3px -3px 7px rgba(255, 255, 255, 0.8)' }}>Features</Link>
              <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-800 transition-colors font-medium px-4 py-2 rounded-xl" style={{ boxShadow: 'inset 3px 3px 7px rgba(163, 177, 198, 0.4), inset -3px -3px 7px rgba(255, 255, 255, 0.8)' }}>How It Works</Link>
              <Link href="/#testimonials" className="text-gray-600 hover:text-gray-800 transition-colors font-medium px-4 py-2 rounded-xl" style={{ boxShadow: 'inset 3px 3px 7px rgba(163, 177, 198, 0.4), inset -3px -3px 7px rgba(255, 255, 255, 0.8)' }}>Testimonials</Link>
              <Link href="/#faq" className="text-gray-600 hover:text-gray-800 transition-colors font-medium px-4 py-2 rounded-xl" style={{ boxShadow: 'inset 3px 3px 7px rgba(163, 177, 198, 0.4), inset -3px -3px 7px rgba(255, 255, 255, 0.8)' }}>FAQ</Link>
            </div>
            <Link href="/software" className="px-8 py-3 bg-[#e0e5ec] text-gray-700 font-semibold rounded-2xl transition-all hover:text-gray-900" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-[#e0e5ec] text-gray-600 rounded-full text-sm font-medium mb-8" style={{ boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.9)' }}>
            🚀 Join 10,000+ creators making AI-powered mixes
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Create Professional DJ Mixes<br />in Minutes with AI
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            InfiniteMix uses advanced AI to create seamless, professional-quality music mixes.
            Perfect for YouTube creators, DJs, and music lovers. No experience required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/software" className="px-10 py-4 bg-[#e0e5ec] text-gray-700 font-semibold rounded-2xl transition-all hover:text-gray-900" style={{ boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
              Start Creating Free
            </Link>
            <Link href="#demo" className="px-10 py-4 bg-[#e0e5ec] text-gray-700 font-semibold rounded-2xl transition-all hover:text-gray-900" style={{ boxShadow: 'inset 6px 6px 12px rgba(163, 177, 198, 0.5), inset -6px -6px 12px rgba(255, 255, 255, 0.9)' }}>
              Watch Demo
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
              <div className="text-4xl font-bold text-gray-700">10K+</div>
              <div className="text-gray-600 mt-2">Active Users</div>
            </div>
            <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
              <div className="text-4xl font-bold text-gray-700">500K+</div>
              <div className="text-gray-600 mt-2">Mixes Created</div>
            </div>
            <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
              <div className="text-4xl font-bold text-gray-700">50M+</div>
              <div className="text-gray-600 mt-2">Total Views</div>
            </div>
            <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
              <div className="text-4xl font-bold text-gray-700">100K+</div>
              <div className="text-gray-600 mt-2">Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Genres</h2>
            <p className="text-xl text-gray-600">Create mixes in any style. Trending genres updated daily.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {genres.map((genre, i) => (
              <div key={i} className="bg-[#e0e5ec] rounded-3xl overflow-hidden" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="relative h-64">
                  <img src={genre.img} alt={genre.name} className="w-full h-full object-cover" />
                  {genre.badge && (
                    <div className="absolute top-4 right-4 bg-[#e0e5ec] text-gray-700 px-4 py-2 rounded-full text-sm font-semibold" style={{ boxShadow: '4px 4px 8px rgba(163, 177, 198, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.8)' }}>
                      {genre.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{genre.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#e0e5ec] rounded-3xl p-12" style={{ boxShadow: '15px 15px 30px rgba(163, 177, 198, 0.6), -15px -15px 30px rgba(255, 255, 255, 0.8)' }}>
            <div className="text-center mb-8">
              <div className="inline-block p-6 bg-[#e0e5ec] rounded-full mb-6" style={{ boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
                <Music className="w-12 h-12 text-gray-700" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">From Bedroom to 100K+ Views</h2>
              <p className="text-xl text-gray-600">How one creator turned AI mixes into a full-time income</p>
            </div>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                "I was throwing a house party and realized I forgot to prepare a playlist. In a panic, I tried InfiniteMix for the first time - just threw in some lofi tracks and let the AI work its magic."
              </p>
              <p className="text-lg">
                "The mix was so good that people kept asking who the DJ was. That's when it hit me: if this could save my party, imagine what it could do for my YouTube channel that was struggling to get views."
              </p>
              <p className="text-lg">
                "I started uploading AI-generated lofi mixes to YouTube. Within 3 months, one mix hit 100K+ views. Now I run a 24/7 livestream that generates passive income while I sleep. InfiniteMix didn't just save my party - it changed my life."
              </p>
              <div className="mt-8 pt-8 border-t border-gray-400">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="font-bold text-gray-800">Jake Morrison</div>
                    <div className="text-gray-600">YouTube Creator, 200K subscribers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section with Demo */}
      <section id="demo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-6 py-3 bg-[#e0e5ec] text-gray-600 rounded-full text-sm font-semibold mb-6" style={{ boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.9)' }}>
                The Problem
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Creating Quality Mixes Takes Forever</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">✗ Hours spent beatmatching and finding transitions</p>
                <p className="text-lg">✗ Expensive DJ software and equipment</p>
                <p className="text-lg">✗ Steep learning curve for beginners</p>
                <p className="text-lg">✗ Inconsistent quality, even for pros</p>
                <p className="text-lg">✗ Can't scale content creation</p>
              </div>
              <div className="mt-8">
                <div className="inline-block px-6 py-3 bg-[#e0e5ec] text-gray-600 rounded-full text-sm font-semibold mb-6" style={{ boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.9)' }}>
                  The Solution
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">AI-Powered Mixing in Minutes</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">✓ Professional mixes in seconds</p>
                  <p className="text-lg">✓ No equipment or experience needed</p>
                  <p className="text-lg">✓ Consistent, high-quality results</p>
                  <p className="text-lg">✓ Perfect for any genre or mood</p>
                  <p className="text-lg">✓ Scale to unlimited content</p>
                </div>
              </div>
            </div>
            <div className="bg-[#e0e5ec] rounded-3xl overflow-hidden" style={{ boxShadow: '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.8)' }}>
              <iframe
                src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                className="w-full aspect-video"
                allow="autoplay"
                title="InfiniteMix Demo"
              />
              <div className="p-6">
                <p className="text-center text-gray-700 font-medium">Watch how InfiniteMix creates a professional mix in under 60 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Mixes Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Real Mixes, Real Results</h2>
            <p className="text-xl text-gray-600">Listen to mixes created by our community. These aren't cherry-picked - this is the consistent quality you'll get.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#e0e5ec] rounded-3xl overflow-hidden" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/BmnqYrLwbOM?modestbranding=1"
                title="Lofi Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Chill Lofi Hip Hop Mix</h3>
                <p className="text-gray-600">Perfect for studying and relaxation</p>
              </div>
            </div>
            <div className="bg-[#e0e5ec] rounded-3xl overflow-hidden" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/yz0K_RYGpW8?modestbranding=1"
                title="Electronic Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Deep House Vibes</h3>
                <p className="text-gray-600">Smooth transitions, perfect flow</p>
              </div>
            </div>
            <div className="bg-[#e0e5ec] rounded-3xl overflow-hidden" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/JQAK3iJO05I?modestbranding=1"
                title="Ambient Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Ambient Soundscapes</h3>
                <p className="text-gray-600">Atmospheric and immersive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features for Every Creator</h2>
            <p className="text-xl text-gray-600">Everything you need to create, customize, and share professional mixes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="inline-flex p-4 bg-[#e0e5ec] text-gray-700 rounded-2xl mb-4" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Creators Choose InfiniteMix</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Two powerful modes: AI for speed, Manual for control</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#e0e5ec] rounded-3xl p-2" style={{ boxShadow: 'inset 6px 6px 12px rgba(163, 177, 198, 0.5), inset -6px -6px 12px rgba(255, 255, 255, 0.9)' }}>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
                  activeTab === 'ai'
                    ? 'bg-[#e0e5ec] text-gray-800'
                    : 'text-gray-600'
                }`}
                style={activeTab === 'ai' ? { boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' } : {}}
              >
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5" />
                  AI Mode
                </div>
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
                  activeTab === 'manual'
                    ? 'bg-[#e0e5ec] text-gray-800'
                    : 'text-gray-600'
                }`}
                style={activeTab === 'manual' ? { boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' } : {}}
              >
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5" />
                  Manual Mode
                </div>
              </button>
            </div>
          </div>

          {/* AI Mode Content */}
          {activeTab === 'ai' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="w-14 h-14 bg-[#e0e5ec] text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mb-6" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Choose Your Genre</h3>
                <p className="text-gray-600">Select from Lofi, House, Techno, Ambient, Trap, and dozens more genres.</p>
              </div>
              <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="w-14 h-14 bg-[#e0e5ec] text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mb-6" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Set Your Preferences</h3>
                <p className="text-gray-600">Pick the mood, energy level, and duration. The AI handles the rest.</p>
              </div>
              <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="w-14 h-14 bg-[#e0e5ec] text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mb-6" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Download or Share</h3>
                <p className="text-gray-600">Get your professional mix in seconds. Export to any platform instantly.</p>
              </div>
            </div>
          )}

          {/* Manual Mode Content */}
          {activeTab === 'manual' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="w-14 h-14 bg-[#e0e5ec] text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mb-6" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Search & Add Tracks</h3>
                <p className="text-gray-600">Browse our library of millions of tracks. Add favorites to your mix queue.</p>
              </div>
              <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="w-14 h-14 bg-[#e0e5ec] text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mb-6" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Customize Everything</h3>
                <p className="text-gray-600">Adjust transitions, EQ, effects, and timing. Full creative control at your fingertips.</p>
              </div>
              <div className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="w-14 h-14 bg-[#e0e5ec] text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mb-6" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Perfect & Export</h3>
                <p className="text-gray-600">Preview, refine, and export. Create exactly the mix you envision.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Built for Creators Like You</h2>
            <p className="text-xl text-gray-600">Whatever your goal, InfiniteMix helps you achieve it</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#e0e5ec] text-gray-700 rounded-2xl flex-shrink-0" style={{ boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8)' }}>
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Loved by Creators Worldwide</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied users creating amazing content</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#e0e5ec] rounded-3xl p-8" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gray-700 text-gray-700" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-gray-400">
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#e0e5ec] rounded-3xl p-12" style={{ boxShadow: '15px 15px 30px rgba(163, 177, 198, 0.6), -15px -15px 30px rgba(255, 255, 255, 0.8)' }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">The Numbers Speak for Themselves</h2>
              <p className="text-xl text-gray-600">Trusted by creators worldwide</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-[#e0e5ec] rounded-2xl p-8 text-center" style={{ boxShadow: 'inset 8px 8px 16px rgba(163, 177, 198, 0.5), inset -8px -8px 16px rgba(255, 255, 255, 0.9)' }}>
                <div className="text-5xl font-bold mb-2 text-gray-700">10,000+</div>
                <div className="text-lg text-gray-600">Active Creators</div>
              </div>
              <div className="bg-[#e0e5ec] rounded-2xl p-8 text-center" style={{ boxShadow: 'inset 8px 8px 16px rgba(163, 177, 198, 0.5), inset -8px -8px 16px rgba(255, 255, 255, 0.9)' }}>
                <div className="text-5xl font-bold mb-2 text-gray-700">500,000+</div>
                <div className="text-lg text-gray-600">Mixes Generated</div>
              </div>
              <div className="bg-[#e0e5ec] rounded-2xl p-8 text-center" style={{ boxShadow: 'inset 8px 8px 16px rgba(163, 177, 198, 0.5), inset -8px -8px 16px rgba(255, 255, 255, 0.9)' }}>
                <div className="text-5xl font-bold mb-2 text-gray-700">50M+</div>
                <div className="text-lg text-gray-600">Total Views</div>
              </div>
              <div className="bg-[#e0e5ec] rounded-2xl p-8 text-center" style={{ boxShadow: 'inset 8px 8px 16px rgba(163, 177, 198, 0.5), inset -8px -8px 16px rgba(255, 255, 255, 0.9)' }}>
                <div className="text-5xl font-bold mb-2 text-gray-700">100K+</div>
                <div className="text-lg text-gray-600">Hours Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about InfiniteMix</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#e0e5ec] rounded-2xl overflow-hidden" style={{ boxShadow: '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)' }}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-all"
                >
                  <span className="font-bold text-lg text-gray-800">{faq.q}</span>
                  <span className="text-2xl text-gray-700 flex-shrink-0 ml-4">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-8 pb-6 text-gray-600 border-t border-gray-400 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#e0e5ec] rounded-3xl p-12 text-center" style={{ boxShadow: '15px 15px 30px rgba(163, 177, 198, 0.6), -15px -15px 30px rgba(255, 255, 255, 0.8)' }}>
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Ready to Create Your First Mix?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Join 10,000+ creators using InfiniteMix to make professional music content
            </p>
            <Link href="/software" className="inline-block px-12 py-5 bg-[#e0e5ec] text-gray-700 font-bold text-lg rounded-3xl transition-all hover:text-gray-900" style={{ boxShadow: '10px 10px 20px rgba(163, 177, 198, 0.6), -10px -10px 20px rgba(255, 255, 255, 0.8)' }}>
              Start Creating Free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e0e5ec] text-gray-700 py-12 px-4" style={{ boxShadow: '0 -5px 15px rgba(163, 177, 198, 0.4)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">InfiniteMix</h3>
              <p className="text-sm">AI-powered music mixing for creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="hover:text-gray-900 transition-colors">Features</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</Link></li>
                <li><Link href="/software" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#testimonials" className="hover:text-gray-900 transition-colors">Testimonials</Link></li>
                <li><Link href="/#faq" className="hover:text-gray-900 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:contact@unitar.app" className="hover:text-gray-900 transition-colors">contact@unitar.app</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-400 pt-8 text-sm text-center">
            <p>&copy; 2024 InfiniteMix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
