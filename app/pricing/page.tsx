import Link from 'next/link';
import { ArrowLeft, Check, Zap } from 'lucide-react';

export default function PricingPage() {
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            One-time purchase. Lifetime access. No monthly fees.
          </p>
        </div>
      </section>

      {/* AppSumo Deal */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-500">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-2">
                <Zap className="w-4 h-4" />
                APPSUMO LIFETIME DEAL
              </div>
              <h2 className="text-3xl font-bold">Exclusive AppSumo Offer</h2>
            </div>

            <div className="p-12">
              <div className="text-center mb-10">
                <div className="text-6xl font-bold text-gray-900 mb-2">
                  $69
                  <span className="text-2xl text-gray-500 line-through ml-4">$299</span>
                </div>
                <p className="text-xl text-gray-600">One-time payment • Lifetime access</p>
              </div>

              <div className="space-y-4 mb-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Everything included:</h3>
                {[
                  "Unlimited music mixes",
                  "Unlimited video generation",
                  "AI-powered track analysis",
                  "Professional crossfading & transitions",
                  "Multiple export formats (MP3, WAV, MP4)",
                  "Cloud processing (no software installation)",
                  "Priority support",
                  "All future updates included",
                  "60-day money-back guarantee",
                  "Commercial license included"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://appsumo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Get Lifetime Access Now
                </a>
                <p className="text-sm text-gray-500 mt-4">Available exclusively on AppSumo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is this really a lifetime deal?",
                a: "Yes! Pay once and use InfiniteMix forever. No monthly fees, no hidden costs."
              },
              {
                q: "What happens after I purchase?",
                a: "You'll receive instant access to your InfiniteMix account. Start creating mixes immediately."
              },
              {
                q: "Can I get a refund?",
                a: "Absolutely. We offer a 60-day money-back guarantee. If you're not satisfied, we'll refund your purchase, no questions asked."
              },
              {
                q: "Are there any limitations?",
                a: "No limitations! Create unlimited mixes, unlimited videos, and export in any format you need."
              },
              {
                q: "Do I need to install software?",
                a: "No installation required. InfiniteMix runs entirely in your browser with cloud processing."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
