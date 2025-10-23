import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, Bug, Shield } from 'lucide-react';

export default function ChangelogPage() {
  const updates = [
    {
      version: "2.1.0",
      date: "March 2024",
      type: "feature",
      icon: Sparkles,
      changes: [
        "New AI-powered key detection for perfect harmonic mixing",
        "Added 5 new visualizer styles for video exports",
        "Improved crossfade algorithm for smoother transitions",
        "Support for FLAC and ALAC high-resolution audio formats"
      ]
    },
    {
      version: "2.0.5",
      date: "February 2024",
      type: "improvement",
      icon: Zap,
      changes: [
        "40% faster video rendering with optimized encoding",
        "Enhanced BPM detection accuracy",
        "Reduced memory usage for large file uploads",
        "Better mobile browser compatibility"
      ]
    },
    {
      version: "2.0.2",
      date: "January 2024",
      type: "bugfix",
      icon: Bug,
      changes: [
        "Fixed issue with long track names in playlist view",
        "Resolved audio clipping on high-volume tracks",
        "Fixed video export progress not updating correctly",
        "Corrected time display in preview player"
      ]
    },
    {
      version: "2.0.0",
      date: "December 2023",
      type: "feature",
      icon: Sparkles,
      changes: [
        "Complete UI redesign with modern interface",
        "Introduced video generation feature",
        "Added drag-and-drop track reordering",
        "New preset system for quick settings",
        "Cloud storage for project saves",
        "Real-time collaboration (beta)"
      ]
    },
    {
      version: "1.8.3",
      date: "November 2023",
      type: "security",
      icon: Shield,
      changes: [
        "Enhanced file upload security checks",
        "Updated SSL certificate handling",
        "Improved user authentication system",
        "Added rate limiting for API endpoints"
      ]
    },
    {
      version: "1.8.0",
      date: "October 2023",
      type: "feature",
      icon: Sparkles,
      changes: [
        "Added batch export functionality",
        "New EQ controls for advanced mixing",
        "Support for M4A audio format",
        "Keyboard shortcuts for faster workflow"
      ]
    },
    {
      version: "1.7.5",
      date: "September 2023",
      type: "improvement",
      icon: Zap,
      changes: [
        "Improved upload speed for large files",
        "Better error messages and user feedback",
        "Enhanced preview quality",
        "Optimized database queries for faster loading"
      ]
    }
  ];

  const typeColors: Record<string, string> = {
    feature: "from-purple-500 to-pink-500",
    improvement: "from-blue-500 to-cyan-500",
    bugfix: "from-orange-500 to-red-500",
    security: "from-green-500 to-emerald-500"
  };

  const typeBadges: Record<string, string> = {
    feature: "bg-purple-100 text-purple-800",
    improvement: "bg-blue-100 text-blue-800",
    bugfix: "bg-orange-100 text-orange-800",
    security: "bg-green-100 text-green-800"
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
            Changelog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Track all updates, improvements, and fixes to InfiniteMix.
          </p>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className={`bg-gradient-to-br ${typeColors[update.type]} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <update.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">Version {update.version}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${typeBadges[update.type]}`}>
                        {update.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{update.date}</p>
                    <ul className="space-y-2">
                      {update.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="text-gray-700 flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span>{change}</span>
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

      {/* Newsletter CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-6 text-white/90">
              Get notified about new features, updates, and improvements.
            </p>
            <Link href="/contact" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
