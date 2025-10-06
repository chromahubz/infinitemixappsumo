import Link from 'next/link';
import { ArrowLeft, Users, MessageCircle, Trophy, Heart } from 'lucide-react';

export default function CommunityPage() {
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
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of creators, share your mixes, get feedback, and learn from others.
          </p>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Discord */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Discord Community</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our active Discord server with 5,000+ members. Get real-time help, share your creations, and participate in weekly challenges.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Live chat with other creators
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Share and get feedback on mixes
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Weekly mixing challenges
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Direct access to the dev team
                </li>
              </ul>
              <a
                href="https://discord.gg/infinitemix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
              >
                Join Discord Server
              </a>
            </div>

            {/* Reddit */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Reddit Community</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join r/InfiniteMix to discuss tips, tricks, showcase your work, and connect with the broader community.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Share your best mixes
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Discussion threads & tutorials
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Feature requests & feedback
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Monthly showcase threads
                </li>
              </ul>
              <a
                href="https://reddit.com/r/infinitemix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
              >
                Join on Reddit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Community Stats</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">8,500+</div>
                <div className="text-white/80 text-lg">Active Members</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-white/80 text-lg">Mixes Created</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">2,000+</div>
                <div className="text-white/80 text-lg">Daily Messages</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/80 text-lg">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Projects */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Community Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Weekly Challenges</h3>
              <p className="text-gray-600">
                Participate in themed mixing challenges with prizes for top creators.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <Heart className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Mix Showcases</h3>
              <p className="text-gray-600">
                Monthly showcase events featuring the best mixes from our community.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Collaboration Hub</h3>
              <p className="text-gray-600">
                Find other creators to collaborate with on joint mixing projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Community Guidelines</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Be Respectful:</strong> Treat all members with kindness and respect. Harassment, hate speech, or discrimination will not be tolerated.
              </p>
              <p className="leading-relaxed">
                <strong>Share Constructively:</strong> When giving feedback, be constructive and helpful. Focus on the work, not the person.
              </p>
              <p className="leading-relaxed">
                <strong>No Spam:</strong> Don't spam links, promotions, or off-topic content. Share relevant content that adds value.
              </p>
              <p className="leading-relaxed">
                <strong>Respect Copyright:</strong> Only share mixes using music you have rights to use. Respect intellectual property.
              </p>
              <p className="leading-relaxed">
                <strong>Help Each Other:</strong> If you see someone asking for help and you know the answer, share your knowledge!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
