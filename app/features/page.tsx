import Link from 'next/link';
import { ArrowLeft, Music, Video, Wand2, Layers, Clock, Download, Share2, Settings } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Music,
      title: "AI-Powered Music Mixing",
      description: "Advanced algorithms analyze your tracks and create seamless transitions with professional-quality crossfades and beat matching."
    },
    {
      icon: Video,
      title: "Automated Video Generation",
      description: "Transform your mixed audio into engaging videos with customizable visualizers, album art, and effects."
    },
    {
      icon: Wand2,
      title: "Smart Track Analysis",
      description: "Automatic BPM detection, key detection, and energy analysis to ensure perfect track compatibility and flow."
    },
    {
      icon: Layers,
      title: "Unlimited Track Support",
      description: "Mix as many tracks as you want with no restrictions. Create hour-long mixes or quick mashups with ease."
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Cloud-powered processing ensures your mixes are ready in minutes, not hours. Get results quickly without compromising quality."
    },
    {
      icon: Download,
      title: "Multiple Export Formats",
      description: "Export your mixes in MP3, WAV, or video formats (MP4, WebM). Perfect for streaming, downloads, or social media."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your creations directly to social media or download for distribution. Built-in preview player for instant playback."
    },
    {
      icon: Settings,
      title: "Customizable Settings",
      description: "Fine-tune crossfade duration, transition styles, volume normalization, and more to match your creative vision."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/landing" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to create professional music mixes and videos. No experience required.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of creators using InfiniteMix to create amazing music mixes.
            </p>
            <Link href="/landing" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Try InfiniteMix Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
