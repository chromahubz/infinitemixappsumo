import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is InfiniteMix?",
          a: "InfiniteMix is an AI-powered music mixing platform that automatically creates professional-quality mixes from your audio files. It analyzes your tracks, detects BPM and key, and creates seamless transitions with crossfades."
        },
        {
          q: "Do I need any technical knowledge to use InfiniteMix?",
          a: "No! InfiniteMix is designed for everyone. Simply upload your tracks, and our AI handles all the technical aspects of mixing. Advanced users can customize settings if they want more control."
        },
        {
          q: "How many tracks can I mix?",
          a: "There's no limit! Mix 2 tracks or 100 tracks - create short mashups or hour-long DJ sets."
        },
        {
          q: "Can I use InfiniteMix commercially?",
          a: "Yes, your AppSumo license includes commercial rights. You own the mixes you create and can use them for any purpose, including commercial projects."
        }
      ]
    },
    {
      category: "Features",
      questions: [
        {
          q: "What audio formats are supported?",
          a: "InfiniteMix supports MP3, WAV, FLAC, AAC, OGG, M4A, and most common audio formats. For best results, we recommend high-quality formats like WAV or FLAC."
        },
        {
          q: "Can I create videos from my mixes?",
          a: "Yes! InfiniteMix can generate videos with animated visualizers, album art, and effects. Export in MP4 or WebM format, perfect for YouTube, Instagram, or TikTok."
        },
        {
          q: "How long does it take to process a mix?",
          a: "Processing time depends on the number and length of tracks. Typically, it takes 30-60 seconds per track. A 10-track mix usually processes in 5-10 minutes."
        },
        {
          q: "Can I adjust the transitions between tracks?",
          a: "Absolutely! You can customize crossfade duration (0-20 seconds), transition style, and more. Our AI suggests optimal settings, but you have full control."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "Do I need to install any software?",
          a: "No installation required! InfiniteMix runs entirely in your web browser. All processing happens in the cloud, so it works on any device."
        },
        {
          q: "What's the maximum file size I can upload?",
          a: "Each audio file can be up to 100MB. For larger files, we recommend compressing them first or using a lower quality format."
        },
        {
          q: "Does InfiniteMix work on mobile devices?",
          a: "Yes! InfiniteMix works on mobile browsers. We also have native iOS and Android apps available for download."
        },
        {
          q: "Can I download my mixes?",
          a: "Yes! Download your mixes in MP3 or WAV format (audio) or MP4/WebM (video). Files are stored in your account for 30 days."
        }
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        {
          q: "How do I activate my AppSumo license?",
          a: "After purchasing from AppSumo, you'll receive a license code. Create an account on InfiniteMix, go to Settings → License, and enter your code."
        },
        {
          q: "Is this really a lifetime deal?",
          a: "Yes! Pay once and use InfiniteMix forever. No monthly fees, no hidden costs. You'll also receive all future updates included."
        },
        {
          q: "What's your refund policy?",
          a: "We offer a 60-day money-back guarantee through AppSumo. If you're not satisfied, request a refund within 60 days of purchase."
        },
        {
          q: "Can I upgrade my license?",
          a: "Your AppSumo license includes all features with unlimited usage. There's nothing to upgrade!"
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "My upload is stuck or failing. What should I do?",
          a: "Try refreshing the page and uploading again. If the issue persists, check your internet connection and make sure the file is under 100MB and in a supported format. Contact support if problems continue."
        },
        {
          q: "The quality of my exported mix is poor. How can I fix this?",
          a: "Use high-quality source files (WAV or FLAC recommended). When exporting, choose WAV format for maximum quality. Enable volume normalization to avoid distortion."
        },
        {
          q: "My video export failed. What went wrong?",
          a: "Video exports require more processing power. Try with fewer tracks first, or choose a lower resolution (720p instead of 1080p). Contact support if issues persist."
        },
        {
          q: "Can I cancel processing once it's started?",
          a: "Yes, you can cancel processing at any time by clicking the Cancel button. You can then make adjustments and start again."
        }
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find quick answers to common questions about InfiniteMix.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg group">
                    <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900 flex-1">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-white/90">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                Contact Support
              </Link>
              <Link href="/help" className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
