import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
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
            Contact Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help! Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Bug Report</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Email Support</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  For general inquiries and support requests, email us at:
                </p>
                <a href="mailto:support@infinitemix.com" className="text-purple-600 hover:text-purple-800 font-semibold text-lg">
                  support@infinitemix.com
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Average response time: 24 hours
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Live Chat</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  For immediate assistance, use our live chat feature in the app.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                  Open Live Chat
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Available: Mon-Fri, 9AM-6PM EST
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/help" className="block hover:text-white/80 transition-colors">
                    → Help Center
                  </Link>
                  <Link href="/faq" className="block hover:text-white/80 transition-colors">
                    → FAQ
                  </Link>
                  <Link href="/documentation" className="block hover:text-white/80 transition-colors">
                    → Documentation
                  </Link>
                  <Link href="/tutorials" className="block hover:text-white/80 transition-colors">
                    → Video Tutorials
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Contact */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Before contacting support:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Check our <Link href="/faq" className="text-purple-600 hover:underline">FAQ page</Link> for quick answers</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Search the <Link href="/help" className="text-purple-600 hover:underline">Help Center</Link> for detailed guides</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Include your account email and a detailed description of your issue</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Attach screenshots if reporting a bug or technical issue</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
