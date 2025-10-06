import Link from 'next/link';
import { ArrowLeft, Upload, ListOrdered, Play, Download, Wand2, Settings } from 'lucide-react';

export default function GuidePage() {
  const steps = [
    {
      icon: Upload,
      title: "1. Upload Your Tracks",
      description: "Click the upload button and select your audio files. Supports MP3, WAV, FLAC, and more.",
      tips: ["Maximum file size: 100MB per track", "Recommended: At least 2 tracks for mixing", "Drag & drop also supported"]
    },
    {
      icon: ListOrdered,
      title: "2. Arrange Track Order",
      description: "Drag and drop tracks to reorder them. The mix will play tracks in the order shown.",
      tips: ["Consider energy flow (build-up to climax)", "Match similar BPMs for smoother transitions", "Group tracks by genre or mood"]
    },
    {
      icon: Wand2,
      title: "3. Let AI Analyze",
      description: "Our AI automatically detects BPM, key, and energy levels for each track.",
      tips: ["Analysis takes 5-15 seconds per track", "You can override AI suggestions manually", "Check compatibility warnings"]
    },
    {
      icon: Settings,
      title: "4. Customize Settings",
      description: "Adjust crossfade duration, transition style, and output format to your preference.",
      tips: ["Default crossfade: 8 seconds (recommended)", "Try different transition styles", "Enable volume normalization"]
    },
    {
      icon: Play,
      title: "5. Preview Your Mix",
      description: "Listen to a preview of your mix before final export. Fine-tune if needed.",
      tips: ["Preview focuses on transitions", "Use headphones for best quality check", "Adjust settings and re-preview anytime"]
    },
    {
      icon: Download,
      title: "6. Export & Download",
      description: "Generate your final mix in audio or video format and download to your device.",
      tips: ["Audio: MP3 (smaller) or WAV (highest quality)", "Video: Choose visualizer style", "Processing takes 1-5 minutes"]
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
            Getting Started Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create your first professional music mix in 6 easy steps. No experience required.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <p className="text-sm font-semibold text-purple-900 mb-2">💡 Pro Tips:</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-700 flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Quick Tips for Better Mixes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">🎵 Track Selection</h3>
                <p className="text-white/90">Choose tracks with similar BPM (±10) and compatible keys for the smoothest transitions.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">⏱️ Timing Matters</h3>
                <p className="text-white/90">Longer crossfades (10-12s) work better for ambient music, shorter (4-6s) for electronic/dance.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">🔊 Volume Levels</h3>
                <p className="text-white/90">Always enable volume normalization to avoid jarring volume changes between tracks.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">🎬 Video Format</h3>
                <p className="text-white/90">For social media, use MP4 format with 1080p resolution for best quality and compatibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Create Your First Mix?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow these steps and you'll have a professional mix in minutes.
          </p>
          <Link href="/landing" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Mixing Now
          </Link>
        </div>
      </section>
    </div>
  );
}
