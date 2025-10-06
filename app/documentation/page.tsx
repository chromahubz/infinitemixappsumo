import Link from 'next/link';
import { ArrowLeft, Book, Code, Zap, Settings, FileText, Terminal } from 'lucide-react';

export default function DocumentationPage() {
  const sections = [
    {
      icon: Book,
      title: "Core Concepts",
      items: [
        { name: "How InfiniteMix Works", slug: "how-it-works" },
        { name: "Audio Processing Pipeline", slug: "audio-pipeline" },
        { name: "Video Generation System", slug: "video-system" },
        { name: "AI Analysis Engine", slug: "ai-engine" }
      ]
    },
    {
      icon: Settings,
      title: "Features & Settings",
      items: [
        { name: "Crossfade Settings", slug: "crossfade" },
        { name: "Transition Effects", slug: "transitions" },
        { name: "Volume Normalization", slug: "normalization" },
        { name: "Export Options", slug: "export" }
      ]
    },
    {
      icon: Zap,
      title: "Advanced Features",
      items: [
        { name: "Batch Processing", slug: "batch" },
        { name: "Custom Presets", slug: "presets" },
        { name: "Keyboard Shortcuts", slug: "shortcuts" },
        { name: "Project Management", slug: "projects" }
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      items: [
        { name: "Authentication", slug: "auth" },
        { name: "Endpoints", slug: "endpoints" },
        { name: "Rate Limits", slug: "rate-limits" },
        { name: "Webhooks", slug: "webhooks" }
      ]
    },
    {
      icon: FileText,
      title: "File Formats",
      items: [
        { name: "Supported Audio Formats", slug: "audio-formats" },
        { name: "Video Export Formats", slug: "video-formats" },
        { name: "Quality Settings", slug: "quality" },
        { name: "Compression Options", slug: "compression" }
      ]
    },
    {
      icon: Terminal,
      title: "Integration",
      items: [
        { name: "Web Integration", slug: "web" },
        { name: "Mobile Apps", slug: "mobile" },
        { name: "Third-party Tools", slug: "third-party" },
        { name: "Zapier Integration", slug: "zapier" }
      ]
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
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete technical documentation for InfiniteMix. Learn how everything works under the hood.
          </p>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={`#${item.slug}`}
                        className="text-purple-600 hover:text-purple-800 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                        <span className="ml-2">{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Quick Start</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">1. Upload Tracks</h3>
                <p className="text-gray-600 mb-2">Upload your audio files using the upload button or drag & drop.</p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  Supported formats: MP3, WAV, FLAC, AAC, OGG, M4A
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">2. Configure Settings</h3>
                <p className="text-gray-600 mb-2">Adjust crossfade duration and transition style.</p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  Default crossfade: 8 seconds<br />
                  Transition: Smart (automatic)
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">3. Generate Mix</h3>
                <p className="text-gray-600 mb-2">Click "Generate Mix" and wait for processing to complete.</p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  Processing time: ~30 seconds per track
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Preview */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">API Access</h2>
            <p className="text-xl mb-6 text-white/90">
              Integrate InfiniteMix into your applications with our REST API.
            </p>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 font-mono text-sm mb-6">
              <div className="text-green-300">POST /api/mix</div>
              <div className="text-gray-300 mt-2">
                {`{`}<br />
                &nbsp;&nbsp;"tracks": ["url1", "url2"],<br />
                &nbsp;&nbsp;"crossfade": 8,<br />
                &nbsp;&nbsp;"format": "mp3"<br />
                {`}`}
              </div>
            </div>
            <Link href="/api" className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              View Full API Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
