import Link from 'next/link';
import { ArrowLeft, Map } from 'lucide-react';

export default function SitemapPage() {
  const links = {
    main: [
      { href: '/landing', label: 'Home' },
    ],
    product: [
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/tutorials', label: 'Video Tutorials' },
      { href: '/guide', label: 'Getting Started Guide' },
      { href: '/changelog', label: 'Changelog' },
      { href: '/roadmap', label: 'Product Roadmap' },
    ],
    support: [
      { href: '/help', label: 'Help Center' },
      { href: '/documentation', label: 'Documentation' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact Support' },
      { href: '/community', label: 'Community' },
      { href: '/api', label: 'API Reference' },
    ],
    legal: [
      { href: '/terms', label: 'Terms of Service' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/refund', label: 'Refund Policy' },
      { href: '/license', label: 'License Agreement' },
      { href: '/cookies', label: 'Cookie Policy' },
      { href: '/gdpr', label: 'GDPR Compliance' },
    ],
    other: [
      { href: '/status', label: 'System Status' },
      { href: '/security', label: 'Security' },
      { href: '/accessibility', label: 'Accessibility' },
      { href: '/sitemap', label: 'Sitemap' },
    ],
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

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Map className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-10">
            Navigate InfiniteMix - find all our pages in one place.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Main</h2>
              <ul className="space-y-3">
                {links.main.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-purple-600 hover:text-purple-800 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      <span className="ml-2">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product</h2>
              <ul className="space-y-3">
                {links.product.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-purple-600 hover:text-purple-800 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      <span className="ml-2">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Support</h2>
              <ul className="space-y-3">
                {links.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-purple-600 hover:text-purple-800 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      <span className="ml-2">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal</h2>
              <ul className="space-y-3">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-purple-600 hover:text-purple-800 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      <span className="ml-2">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Other</h2>
              <ul className="space-y-3">
                {links.other.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-purple-600 hover:text-purple-800 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      <span className="ml-2">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* External */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">External Links</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://appsumo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">AppSumo</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/infinitemix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">Discord Community</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://reddit.com/r/infinitemix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">Reddit Community</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/infinitemix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">Twitter / X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/infinitemix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Search CTA */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8 text-white/90">
              Try searching our help center or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/help" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Search Help Center
              </Link>
              <Link href="/contact" className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
