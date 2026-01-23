'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Play, Zap, TrendingUp, Clock, Users, Globe, Music, Sparkles, HeartHandshake, BrainCircuit, Search, Star } from 'lucide-react'

export default function Landing5() {
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
    <div style={{ fontFamily: 'Courier New, Courier, monospace' }} className="min-h-screen bg-white text-black">
      {/* Brutalist Navigation */}
      <nav className="fixed top-0 w-full bg-black text-white z-50 border-b-8 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-black tracking-tighter">INFINITEMIX</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/#features" className="text-white hover:bg-white hover:text-black px-3 py-2 font-bold transition-all">FEATURES</Link>
              <Link href="/#how-it-works" className="text-white hover:bg-white hover:text-black px-3 py-2 font-bold transition-all">HOW</Link>
              <Link href="/#testimonials" className="text-white hover:bg-white hover:text-black px-3 py-2 font-bold transition-all">TESTIMONIALS</Link>
              <Link href="/#faq" className="text-white hover:bg-white hover:text-black px-3 py-2 font-bold transition-all">FAQ</Link>
            </div>
            <Link href="/software" className="px-6 py-3 bg-red-600 text-white font-black hover:bg-white hover:text-black border-4 border-white transition-all">
              START
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white p-2 inline-block mb-6 font-black text-sm">
            ⚡ 10,000+ CREATORS • 500,000+ MIXES
          </div>
          <h1 className="text-7xl md:text-9xl font-black leading-none mb-8 tracking-tighter">
            AI<br/>MUSIC<br/>MIXING
          </h1>
          <div className="max-w-2xl">
            <p className="text-2xl font-bold mb-8 leading-tight">
              CREATE PROFESSIONAL DJ MIXES IN MINUTES. NO SKILLS NEEDED. JUST RAW POWER.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/software" className="inline-block px-12 py-5 bg-black text-white text-xl font-black hover:bg-red-600 transition-all border-4 border-black">
              START NOW
            </Link>
            <Link href="#demo" className="inline-block px-12 py-5 bg-white text-black text-xl font-black hover:bg-black hover:text-white transition-all border-4 border-black">
              SEE DEMO
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black text-white p-6 border-4 border-black">
              <div className="text-5xl font-black text-red-600">10K+</div>
              <div className="font-bold mt-2">USERS</div>
            </div>
            <div className="bg-black text-white p-6 border-4 border-black">
              <div className="text-5xl font-black text-blue-500">500K+</div>
              <div className="font-bold mt-2">MIXES</div>
            </div>
            <div className="bg-black text-white p-6 border-4 border-black">
              <div className="text-5xl font-black text-yellow-400">50M+</div>
              <div className="font-bold mt-2">VIEWS</div>
            </div>
            <div className="bg-black text-white p-6 border-4 border-black">
              <div className="text-5xl font-black text-red-600">100K+</div>
              <div className="font-bold mt-2">HOURS SAVED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">POPULAR GENRES</h2>
            <p className="text-xl font-bold">CREATE MIXES IN ANY STYLE</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {genres.map((genre, i) => (
              <div key={i} className="border-8 border-black overflow-hidden hover:border-red-600 transition-colors">
                <div className="relative h-80">
                  <img src={genre.img} alt={genre.name} className="w-full h-full object-cover" />
                  {genre.badge && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 font-black border-4 border-black">
                      {genre.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 bg-black text-white">
                  <h3 className="text-3xl font-black">{genre.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Story Section */}
      <section className="py-20 px-4 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="border-8 border-white bg-black p-12">
            <div className="text-center mb-8">
              <Music className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-5xl font-black mb-4 tracking-tighter">FROM BEDROOM TO 100K+ VIEWS</h2>
              <p className="text-2xl font-bold">ONE CREATOR'S STORY</p>
            </div>
            <div className="space-y-6 text-xl font-bold">
              <p>
                "I WAS THROWING A HOUSE PARTY AND REALIZED I FORGOT TO PREPARE A PLAYLIST. IN A PANIC, I TRIED INFINITEMIX FOR THE FIRST TIME - JUST THREW IN SOME LOFI TRACKS AND LET THE AI WORK ITS MAGIC."
              </p>
              <p>
                "THE MIX WAS SO GOOD THAT PEOPLE KEPT ASKING WHO THE DJ WAS. THAT'S WHEN IT HIT ME: IF THIS COULD SAVE MY PARTY, IMAGINE WHAT IT COULD DO FOR MY YOUTUBE CHANNEL THAT WAS STRUGGLING TO GET VIEWS."
              </p>
              <p>
                "I STARTED UPLOADING AI-GENERATED LOFI MIXES TO YOUTUBE. WITHIN 3 MONTHS, ONE MIX HIT 100K+ VIEWS. NOW I RUN A 24/7 LIVESTREAM THAT GENERATES PASSIVE INCOME WHILE I SLEEP. INFINITEMIX DIDN'T JUST SAVE MY PARTY - IT CHANGED MY LIFE."
              </p>
              <div className="mt-8 pt-8 border-t-4 border-white">
                <div className="font-black text-2xl">JAKE MORRISON</div>
                <div className="text-xl">YOUTUBE CREATOR, 200K SUBSCRIBERS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-black text-white p-3 inline-block mb-6 font-black">
                ⚠ THE PROBLEM
              </div>
              <h2 className="text-5xl font-black mb-8 tracking-tighter leading-none">
                CREATING<br/>QUALITY MIXES<br/>TAKES FOREVER
              </h2>
              <div className="space-y-4 text-xl font-bold mb-12">
                <p className="flex items-start gap-3">
                  <span className="text-red-600 text-3xl">✗</span>
                  <span>HOURS SPENT BEATMATCHING</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 text-3xl">✗</span>
                  <span>EXPENSIVE SOFTWARE</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 text-3xl">✗</span>
                  <span>STEEP LEARNING CURVE</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 text-3xl">✗</span>
                  <span>INCONSISTENT QUALITY</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-600 text-3xl">✗</span>
                  <span>CAN'T SCALE CONTENT</span>
                </p>
              </div>
              <div className="bg-yellow-400 p-3 inline-block mb-6 font-black border-4 border-black">
                ⚡ THE SOLUTION
              </div>
              <h3 className="text-4xl font-black mb-6 tracking-tighter">AI-POWERED MIXING</h3>
              <div className="space-y-4 text-xl font-bold">
                <p className="flex items-start gap-3">
                  <span className="text-blue-600 text-3xl">✓</span>
                  <span>PROFESSIONAL MIXES IN SECONDS</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-blue-600 text-3xl">✓</span>
                  <span>NO EQUIPMENT NEEDED</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-blue-600 text-3xl">✓</span>
                  <span>CONSISTENT HIGH QUALITY</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-blue-600 text-3xl">✓</span>
                  <span>ANY GENRE OR MOOD</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-blue-600 text-3xl">✓</span>
                  <span>UNLIMITED CONTENT SCALE</span>
                </p>
              </div>
            </div>
            <div className="border-8 border-black overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1LdBOMMWwrSrNA9m02sb13tzD7Fdkk_BP/preview"
                className="w-full aspect-video"
                allow="autoplay"
                title="InfiniteMix Demo"
              />
              <div className="p-6 bg-black text-white">
                <p className="text-center font-black text-xl">WATCH: PROFESSIONAL MIX IN UNDER 60 SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Mixes Section */}
      <section className="py-20 px-4 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">REAL MIXES</h2>
            <p className="text-2xl font-bold">LISTEN TO WHAT OUR AI CREATES</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-8 border-white overflow-hidden bg-black">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/BmnqYrLwbOM?modestbranding=1"
                title="Lofi Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 text-white">
                <h3 className="font-black text-xl mb-2">CHILL LOFI HIP HOP</h3>
                <p className="font-bold">PERFECT FOR STUDY</p>
              </div>
            </div>
            <div className="border-8 border-white overflow-hidden bg-black">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/yz0K_RYGpW8?modestbranding=1"
                title="Electronic Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 text-white">
                <h3 className="font-black text-xl mb-2">DEEP HOUSE VIBES</h3>
                <p className="font-bold">SMOOTH TRANSITIONS</p>
              </div>
            </div>
            <div className="border-8 border-white overflow-hidden bg-black">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/JQAK3iJO05I?modestbranding=1"
                title="Ambient Mix"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 text-white">
                <h3 className="font-black text-xl mb-2">AMBIENT SOUNDSCAPES</h3>
                <p className="font-bold">ATMOSPHERIC IMMERSION</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">FEATURES</h2>
            <p className="text-2xl font-bold">EVERYTHING YOU NEED TO CREATE</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="border-8 border-black p-8 hover:bg-yellow-400 hover:border-red-600 transition-all">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
                <p className="font-bold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">WHY INFINITEMIX</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="border-l-8 border-yellow-400 bg-white text-black p-8">
                <h3 className="text-3xl font-black mb-3">{benefit.title}</h3>
                <p className="text-lg font-bold">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">HOW IT WORKS</h2>
            <p className="text-2xl font-bold">TWO MODES: AI OR MANUAL</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex border-8 border-black">
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-10 py-5 font-black text-xl transition-all ${
                  activeTab === 'ai'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-yellow-400'
                }`}
              >
                AI MODE
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-10 py-5 font-black text-xl transition-all border-l-8 border-black ${
                  activeTab === 'manual'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-yellow-400'
                }`}
              >
                MANUAL MODE
              </button>
            </div>
          </div>

          {/* AI Mode Content */}
          {activeTab === 'ai' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-8 border-black p-8">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl font-black mb-6">1</div>
                <h3 className="text-2xl font-black mb-3">CHOOSE GENRE</h3>
                <p className="font-bold">SELECT FROM LOFI, HOUSE, TECHNO, AMBIENT, TRAP, AND MORE</p>
              </div>
              <div className="border-8 border-black p-8">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl font-black mb-6">2</div>
                <h3 className="text-2xl font-black mb-3">SET PREFERENCES</h3>
                <p className="font-bold">PICK MOOD, ENERGY, DURATION. AI HANDLES THE REST</p>
              </div>
              <div className="border-8 border-black p-8">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl font-black mb-6">3</div>
                <h3 className="text-2xl font-black mb-3">DOWNLOAD</h3>
                <p className="font-bold">GET YOUR MIX IN SECONDS. EXPORT ANYWHERE</p>
              </div>
            </div>
          )}

          {/* Manual Mode Content */}
          {activeTab === 'manual' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-8 border-black p-8">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl font-black mb-6">1</div>
                <h3 className="text-2xl font-black mb-3">SEARCH TRACKS</h3>
                <p className="font-bold">BROWSE MILLIONS OF TRACKS. ADD TO YOUR QUEUE</p>
              </div>
              <div className="border-8 border-black p-8">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl font-black mb-6">2</div>
                <h3 className="text-2xl font-black mb-3">CUSTOMIZE</h3>
                <p className="font-bold">ADJUST TRANSITIONS, EQ, EFFECTS, TIMING</p>
              </div>
              <div className="border-8 border-black p-8">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl font-black mb-6">3</div>
                <h3 className="text-2xl font-black mb-3">PERFECT & EXPORT</h3>
                <p className="font-bold">PREVIEW, REFINE, CREATE YOUR VISION</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">WHO USES IT</h2>
            <p className="text-2xl font-bold">BUILT FOR CREATORS</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-white border-8 border-black p-8 hover:bg-black hover:text-white transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">{useCase.title}</h3>
                    <p className="font-bold">{useCase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">TESTIMONIALS</h2>
            <p className="text-2xl font-bold">LOVED BY CREATORS WORLDWIDE</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="border-8 border-black p-8 bg-white hover:bg-yellow-400 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="font-bold mb-6">"{testimonial.text}"</p>
                <div className="pt-4 border-t-4 border-black">
                  <div className="font-black">{testimonial.name}</div>
                  <div className="text-sm font-bold">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">THE NUMBERS</h2>
            <p className="text-2xl font-bold">TRUSTED BY CREATORS WORLDWIDE</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-black border-8 border-white p-8 text-center">
              <div className="text-6xl font-black mb-2">10K+</div>
              <div className="text-xl font-bold">ACTIVE CREATORS</div>
            </div>
            <div className="bg-black border-8 border-white p-8 text-center">
              <div className="text-6xl font-black mb-2">500K+</div>
              <div className="text-xl font-bold">MIXES GENERATED</div>
            </div>
            <div className="bg-black border-8 border-white p-8 text-center">
              <div className="text-6xl font-black mb-2">50M+</div>
              <div className="text-xl font-bold">TOTAL VIEWS</div>
            </div>
            <div className="bg-black border-8 border-white p-8 text-center">
              <div className="text-6xl font-black mb-2">100K+</div>
              <div className="text-xl font-bold">HOURS SAVED</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4 tracking-tighter">FAQ</h2>
            <p className="text-2xl font-bold">EVERYTHING YOU NEED TO KNOW</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-8 border-black overflow-hidden bg-white hover:border-red-600 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-yellow-400 transition-colors"
                >
                  <span className="font-black text-xl">{faq.q}</span>
                  <span className="text-4xl font-black flex-shrink-0 ml-4">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div className="px-8 pb-6 font-bold border-t-4 border-black pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-7xl font-black mb-6 tracking-tighter leading-none">
            READY TO<br/>CREATE?
          </h2>
          <p className="text-2xl mb-8 font-bold">
            JOIN 10,000+ CREATORS USING AI TO MAKE PROFESSIONAL MUSIC
          </p>
          <Link href="/software" className="inline-block px-16 py-6 bg-red-600 text-white font-black text-2xl hover:bg-yellow-400 hover:text-black transition-all border-8 border-white">
            START NOW
          </Link>
          <p className="mt-6 font-bold text-xl">NO CREDIT CARD • 5 FREE MIXES</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-12 px-4 border-t-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black text-2xl mb-4">INFINITEMIX</h3>
              <p className="font-bold text-sm">AI-POWERED MUSIC MIXING</p>
            </div>
            <div>
              <h4 className="font-black mb-4">PRODUCT</h4>
              <ul className="space-y-2 font-bold text-sm">
                <li><Link href="/#features" className="hover:underline">FEATURES</Link></li>
                <li><Link href="/#how-it-works" className="hover:underline">HOW IT WORKS</Link></li>
                <li><Link href="/software" className="hover:underline">PRICING</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">COMPANY</h4>
              <ul className="space-y-2 font-bold text-sm">
                <li><Link href="/#testimonials" className="hover:underline">TESTIMONIALS</Link></li>
                <li><Link href="/#faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4">CONTACT</h4>
              <ul className="space-y-2 font-bold text-sm">
                <li><a href="mailto:contact@unitar.app" className="hover:underline">CONTACT@UNITAR.APP</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 border-black pt-8 font-bold text-sm text-center">
            <p>© 2024 INFINITEMIX. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
