'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Play, Zap, TrendingUp, Clock, Users, Globe, Music, Sparkles, HeartHandshake, BrainCircuit, Search, Star } from 'lucide-react'

export default function Landing9() {
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
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }} className="min-h-screen bg-white">
      {/* Swiss Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="text-2xl tracking-tight text-black">InfiniteMix</Link>
            <div className="hidden md:flex space-x-12 items-center">
              <Link href="/#features" className="text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors">Features</Link>
              <Link href="/#how-it-works" className="text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors">How It Works</Link>
              <Link href="/#testimonials" className="text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors">Testimonials</Link>
              <Link href="/#faq" className="text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors">FAQ</Link>
            </div>
            <Link href="/software" className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-7">
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-8">Join 10,000+ creators</div>
              <h1 className="text-7xl md:text-8xl leading-none font-light text-black mb-12">
                Create<br />Professional<br />DJ Mixes
              </h1>
              <div className="max-w-lg">
                <p className="text-xl leading-relaxed text-gray-700 mb-12">
                  InfiniteMix uses advanced AI to create seamless, professional-quality music mixes. Perfect for YouTube creators, DJs, and music lovers. No experience required.
                </p>
              </div>
              <div className="flex gap-6">
                <Link href="/software" className="px-10 py-4 bg-black text-white text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
                  Start Creating Free
                </Link>
                <Link href="#demo" className="px-10 py-4 border border-black text-black text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-all">
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 p-8">
                  <div className="text-5xl font-light mb-2">10K+</div>
                  <div className="text-sm uppercase tracking-wide text-gray-600">Active Users</div>
                </div>
                <div className="border border-gray-200 p-8">
                  <div className="text-5xl font-light mb-2">500K+</div>
                  <div className="text-sm uppercase tracking-wide text-gray-600">Mixes Created</div>
                </div>
                <div className="border border-gray-200 p-8">
                  <div className="text-5xl font-light mb-2">50M+</div>
                  <div className="text-sm uppercase tracking-wide text-gray-600">Total Views</div>
                </div>
                <div className="border border-gray-200 p-8">
                  <div className="text-5xl font-light mb-2">100K+</div>
                  <div className="text-sm uppercase tracking-wide text-gray-600">Hours Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Showcase */}
      <section className="py-32 px-8 sm:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Trending genres updated daily</div>
            <h2 className="text-6xl font-light text-black">Popular Genres</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {genres.map((genre, i) => (
              <div key={i} className="border border-gray-200 overflow-hidden hover:border-black transition-colors">
                <div className="relative h-80">
                  <img src={genre.img} alt={genre.name} className="w-full h-full object-cover" />
                  {genre.badge && (
                    <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 text-xs uppercase tracking-wide">
                      {genre.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-light text-black">{genre.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Story Section */}
      <section className="py-32 px-8 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="border border-gray-200 p-16">
            <div className="mb-12">
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Case Study</div>
              <h2 className="text-5xl font-light text-black mb-4">From Bedroom to 100K+ Views</h2>
              <p className="text-xl text-gray-600">How one creator turned AI mixes into a full-time income</p>
            </div>
            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
              <p>
                "I was throwing a house party and realized I forgot to prepare a playlist. In a panic, I tried InfiniteMix for the first time - just threw in some lofi tracks and let the AI work its magic."
              </p>
              <p>
                "The mix was so good that people kept asking who the DJ was. That's when it hit me: if this could save my party, imagine what it could do for my YouTube channel that was struggling to get views."
              </p>
              <p>
                "I started uploading AI-generated lofi mixes to YouTube. Within 3 months, one mix hit 100K+ views. Now I run a 24/7 livestream that generates passive income while I sleep. InfiniteMix didn't just save my party - it changed my life."
              </p>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="font-medium text-black">Jake Morrison</div>
                <div className="text-gray-600">YouTube Creator, 200K subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="demo" className="py-32 px-8 sm:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <div className="mb-12">
                <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">The Problem</div>
                <h2 className="text-5xl font-light text-black mb-8">Creating Quality Mixes Takes Forever</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 mb-16">
                <p>— Hours spent beatmatching and finding transitions</p>
                <p>— Expensive DJ software and equipment</p>
                <p>— Steep learning curve for beginners</p>
                <p>— Inconsistent quality, even for pros</p>
                <p>— Can't scale content creation</p>
              </div>
              <div className="mb-12">
                <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">The Solution</div>
                <h3 className="text-4xl font-light text-black mb-8">AI-Powered Mixing in Minutes</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p>+ Professional mixes in seconds</p>
                <p>+ No equipment or experience needed</p>
                <p>+ Consistent, high-quality results</p>
                <p>+ Perfect for any genre or mood</p>
                <p>+ Scale to unlimited content</p>
              </div>
            </div>
            <div className="border border-gray-200 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                className="w-full aspect-video"
                allow="autoplay"
                title="InfiniteMix Demo"
              />
              <div className="p-6 bg-white">
                <p className="text-center text-gray-700">Watch how InfiniteMix creates a professional mix in under 60 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Mixes Section */}
      <section className="py-32 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Listen to what our AI creates</div>
            <h2 className="text-6xl font-light text-black">Real Mixes, Real Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 overflow-hidden hover:border-black transition-colors">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/BmnqYrLwbOM?modestbranding=1"
                title="Lofi Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 bg-white">
                <h3 className="font-medium text-lg text-black mb-2">Chill Lofi Hip Hop Mix</h3>
                <p className="text-gray-600">Perfect for studying and relaxation</p>
              </div>
            </div>
            <div className="border border-gray-200 overflow-hidden hover:border-black transition-colors">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/yz0K_RYGpW8?modestbranding=1"
                title="Electronic Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 bg-white">
                <h3 className="font-medium text-lg text-black mb-2">Deep House Vibes</h3>
                <p className="text-gray-600">Smooth transitions, perfect flow</p>
              </div>
            </div>
            <div className="border border-gray-200 overflow-hidden hover:border-black transition-colors">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/JQAK3iJO05I?modestbranding=1"
                title="Ambient Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 bg-white">
                <h3 className="font-medium text-lg text-black mb-2">Ambient Soundscapes</h3>
                <p className="text-gray-600">Atmospheric and immersive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-32 px-8 sm:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Everything you need to create</div>
            <h2 className="text-6xl font-light text-black">Powerful Features</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            {features.map((feature, i) => (
              <div key={i}>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Why creators choose us</div>
            <h2 className="text-6xl font-light text-black">Key Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="border-l-2 border-black pl-8">
                <h3 className="text-2xl font-medium text-black mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-8 sm:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Two powerful modes</div>
            <h2 className="text-6xl font-light text-black">How It Works</h2>
          </div>

          {/* Tab Switcher */}
          <div className="mb-16">
            <div className="inline-flex border border-gray-200">
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-10 py-4 text-sm uppercase tracking-wide transition-colors ${
                  activeTab === 'ai'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-50'
                }`}
              >
                AI Mode
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-10 py-4 text-sm uppercase tracking-wide transition-colors border-l border-gray-200 ${
                  activeTab === 'manual'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-50'
                }`}
              >
                Manual Mode
              </button>
            </div>
          </div>

          {/* AI Mode Content */}
          {activeTab === 'ai' && (
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-6xl font-light mb-8">01</div>
                <h3 className="text-2xl font-medium text-black mb-4">Choose Your Genre</h3>
                <p className="text-gray-600 leading-relaxed">Select from Lofi, House, Techno, Ambient, Trap, and dozens more genres.</p>
              </div>
              <div>
                <div className="text-6xl font-light mb-8">02</div>
                <h3 className="text-2xl font-medium text-black mb-4">Set Your Preferences</h3>
                <p className="text-gray-600 leading-relaxed">Pick the mood, energy level, and duration. The AI handles the rest.</p>
              </div>
              <div>
                <div className="text-6xl font-light mb-8">03</div>
                <h3 className="text-2xl font-medium text-black mb-4">Download or Share</h3>
                <p className="text-gray-600 leading-relaxed">Get your professional mix in seconds. Export to any platform instantly.</p>
              </div>
            </div>
          )}

          {/* Manual Mode Content */}
          {activeTab === 'manual' && (
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-6xl font-light mb-8">01</div>
                <h3 className="text-2xl font-medium text-black mb-4">Search & Add Tracks</h3>
                <p className="text-gray-600 leading-relaxed">Browse our library of millions of tracks. Add favorites to your mix queue.</p>
              </div>
              <div>
                <div className="text-6xl font-light mb-8">02</div>
                <h3 className="text-2xl font-medium text-black mb-4">Customize Everything</h3>
                <p className="text-gray-600 leading-relaxed">Adjust transitions, EQ, effects, and timing. Full creative control at your fingertips.</p>
              </div>
              <div>
                <div className="text-6xl font-light mb-8">03</div>
                <h3 className="text-2xl font-medium text-black mb-4">Perfect & Export</h3>
                <p className="text-gray-600 leading-relaxed">Preview, refine, and export. Create exactly the mix you envision.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Built for creators</div>
            <h2 className="text-6xl font-light text-black">Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {useCases.map((useCase, i) => (
              <div key={i} className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-medium text-black mb-4">{useCase.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-8 sm:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">What creators say</div>
            <h2 className="text-6xl font-light text-black">Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="border border-gray-200 p-8 bg-white">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="pt-6 border-t border-gray-200">
                  <div className="font-medium text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 sm:px-12 lg:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-400 mb-4">Trusted by creators worldwide</div>
            <h2 className="text-6xl font-light">The Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t border-white pt-8">
              <div className="text-6xl font-light mb-4">10,000+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">Active Creators</div>
            </div>
            <div className="border-t border-white pt-8">
              <div className="text-6xl font-light mb-4">500,000+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">Mixes Generated</div>
            </div>
            <div className="border-t border-white pt-8">
              <div className="text-6xl font-light mb-4">50M+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">Total Views</div>
            </div>
            <div className="border-t border-white pt-8">
              <div className="text-6xl font-light mb-4">100K+</div>
              <div className="text-sm uppercase tracking-wide text-gray-400">Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-8 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 mb-4">Everything you need to know</div>
            <h2 className="text-6xl font-light text-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full py-8 text-left flex justify-between items-start hover:opacity-70 transition-opacity"
                >
                  <span className="font-medium text-xl text-black pr-8">{faq.q}</span>
                  <span className="text-2xl flex-shrink-0">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="pb-8 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 sm:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-sm uppercase tracking-wide text-gray-500 mb-8">Ready to start</div>
          <h2 className="text-6xl md:text-7xl font-light text-black mb-12">
            Create Your First Mix
          </h2>
          <p className="text-2xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Join 10,000+ creators using InfiniteMix to make professional music content
          </p>
          <Link href="/software" className="inline-block px-12 py-5 bg-black text-white text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
            Start Creating Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-16 px-8 sm:px-12 lg:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-black font-medium text-lg mb-6">InfiniteMix</h3>
              <p className="text-sm leading-relaxed">AI-powered music mixing for creators worldwide.</p>
            </div>
            <div>
              <h4 className="text-black font-medium mb-6">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/#features" className="hover:text-black transition-colors">Features</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-black transition-colors">How It Works</Link></li>
                <li><Link href="/software" className="hover:text-black transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-medium mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/#testimonials" className="hover:text-black transition-colors">Testimonials</Link></li>
                <li><Link href="/#faq" className="hover:text-black transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-medium mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="mailto:contact@unitar.app" className="hover:text-black transition-colors">contact@unitar.app</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-sm">
            <p>&copy; 2024 InfiniteMix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
