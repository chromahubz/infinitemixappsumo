import Link from 'next/link';
import { ArrowLeft, Search, Book, HelpCircle, MessageSquare, Video, FileText } from 'lucide-react';

export default function HelpCenterPage() {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of InfiniteMix",
      articles: [
        "How to create your first mix",
        "Understanding the interface",
        "Uploading and organizing tracks",
        "Basic settings and preferences"
      ]
    },
    {
      icon: Video,
      title: "Mixing & Editing",
      description: "Master the art of mixing",
      articles: [
        "Adjusting crossfade duration",
        "Using transition effects",
        "Volume normalization guide",
        "Track analysis and BPM detection"
      ]
    },
    {
      icon: FileText,
      title: "Export & Formats",
      description: "Understanding output options",
      articles: [
        "Choosing the right audio format",
        "Video export settings explained",
        "Bitrate and quality settings",
        "Troubleshooting export issues"
      ]
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      articles: [
        "Upload failed or stuck",
        "Audio quality problems",
        "Video generation errors",
        "Browser compatibility issues"
      ]
    },
    {
      icon: MessageSquare,
      title: "Account & Billing",
      description: "Manage your account",
      articles: [
        "Activating your AppSumo code",
        "Resetting your password",
        "Updating account information",
        "Understanding your license"
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

      {/* Hero Section with Search */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Find answers to your questions and learn how to get the most out of InfiniteMix.
          </p>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-purple-600 hover:text-purple-800 text-sm flex items-start">
                        <span className="mr-2">→</span>
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Popular Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/guide" className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
              <Book className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Getting Started Guide</h3>
              <p className="text-gray-600 text-sm">Step-by-step guide to your first mix</p>
            </Link>
            <Link href="/tutorials" className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
              <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">Video Tutorials</h3>
              <p className="text-gray-600 text-sm">Watch and learn from experts</p>
            </Link>
            <Link href="/faq" className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
              <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">FAQ</h3>
              <p className="text-gray-600 text-sm">Quick answers to common questions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 text-white/90">
              Our support team is here to assist you with any questions.
            </p>
            <Link href="/contact" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
