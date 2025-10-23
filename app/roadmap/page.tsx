import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, Clock } from 'lucide-react';

export default function RoadmapPage() {
  const roadmapItems = [
    {
      status: "completed",
      quarter: "Q4 2023",
      items: [
        "Video generation with visualizers",
        "Drag-and-drop track reordering",
        "Cloud project storage",
        "Real-time collaboration (beta)"
      ]
    },
    {
      status: "completed",
      quarter: "Q1 2024",
      items: [
        "AI-powered key detection",
        "Advanced EQ controls",
        "Batch export functionality",
        "Mobile app (iOS/Android)"
      ]
    },
    {
      status: "in-progress",
      quarter: "Q2 2024",
      items: [
        "Stem separation for remixing",
        "Live streaming integration",
        "Custom visualizer builder",
        "Playlist import from Spotify/Apple Music"
      ]
    },
    {
      status: "planned",
      quarter: "Q3 2024",
      items: [
        "AI voice-over generation",
        "Multi-track editing timeline",
        "Sound effects library (1000+ sounds)",
        "Automatic podcast intro/outro creation"
      ]
    },
    {
      status: "planned",
      quarter: "Q4 2024",
      items: [
        "AI-generated background music",
        "Video templates marketplace",
        "Collaborative playlists",
        "Advanced analytics dashboard"
      ]
    },
    {
      status: "future",
      quarter: "2025 & Beyond",
      items: [
        "Live DJ mode with real-time mixing",
        "Virtual studio with 3D environments",
        "AI music generation from text prompts",
        "NFT integration for music creators",
        "Multi-language support (20+ languages)",
        "White-label solutions for businesses"
      ]
    }
  ];

  const statusConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string; bgColor: string; label: string }> = {
    completed: {
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-100",
      label: "Completed"
    },
    "in-progress": {
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      label: "In Progress"
    },
    planned: {
      icon: Circle,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      label: "Planned"
    },
    future: {
      icon: Circle,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
      label: "Future"
    }
  };

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
            Product Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what we're working on and what's coming next. Your feedback shapes our priorities.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            {roadmapItems.map((phase, index) => {
              const config = statusConfig[phase.status];
              const StatusIcon = config.icon;

              return (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index < roadmapItems.length - 1 && (
                    <div className="absolute left-7 top-20 w-0.5 h-full bg-gray-300 -z-10" />
                  )}

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start gap-6">
                      <div className={`${config.bgColor} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <StatusIcon className={`w-7 h-7 ${config.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">{phase.quarter}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${config.bgColor} ${config.color}`}>
                            {config.label}
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <span className="text-purple-500 mt-1">•</span>
                              <span className="text-gray-700 text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Request CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Have a Feature Request?</h2>
            <p className="text-xl mb-8 text-white/90">
              We'd love to hear your ideas! Your feedback directly influences our roadmap.
            </p>
            <Link href="/contact" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Submit Feature Request
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-100 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This roadmap is subject to change based on user feedback, technical feasibility, and business priorities.
              Planned features and timelines are estimates and not guaranteed deliverables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
