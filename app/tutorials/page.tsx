import Link from 'next/link';
import { ArrowLeft, Play, Clock } from 'lucide-react';

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with InfiniteMix",
      duration: "5 min",
      description: "Learn the basics of creating your first music mix from start to finish.",
      topics: ["Uploading tracks", "Arranging order", "Preview playback", "Exporting"]
    },
    {
      title: "Creating Professional Transitions",
      duration: "8 min",
      description: "Master the art of seamless transitions and crossfades for radio-quality mixes.",
      topics: ["Crossfade settings", "Beat matching", "EQ transitions", "Volume automation"]
    },
    {
      title: "Generating Music Videos",
      duration: "6 min",
      description: "Turn your audio mixes into engaging videos with visualizers and effects.",
      topics: ["Video export options", "Visualizer styles", "Custom backgrounds", "Resolution settings"]
    },
    {
      title: "Advanced Track Analysis",
      duration: "10 min",
      description: "Deep dive into BPM detection, key detection, and energy curve analysis.",
      topics: ["Manual BPM adjustment", "Key compatibility", "Energy matching", "Genre detection"]
    },
    {
      title: "Optimizing Export Quality",
      duration: "7 min",
      description: "Choose the right format and settings for different platforms and uses.",
      topics: ["MP3 vs WAV", "Bitrate selection", "Video codecs", "File size optimization"]
    },
    {
      title: "Batch Processing & Workflows",
      duration: "9 min",
      description: "Save time by creating templates and reusing settings across projects.",
      topics: ["Saving presets", "Quick export", "Organizing projects", "Keyboard shortcuts"]
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
            Video Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step-by-step video guides to help you master InfiniteMix and create amazing mixes.
          </p>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48 flex items-center justify-center relative group cursor-pointer">
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{tutorial.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{tutorial.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tutorial.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</p>
                    <ul className="space-y-1">
                      {tutorial.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">More Tutorials Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're constantly creating new content to help you get the most out of InfiniteMix.
            </p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
              Request a Tutorial Topic
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
