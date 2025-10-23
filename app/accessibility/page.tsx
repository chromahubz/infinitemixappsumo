import Link from 'next/link';
import { ArrowLeft, Eye, Ear, Hand, Heart } from 'lucide-react';

export default function AccessibilityPage() {
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Accessibility
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-10">
            InfiniteMix is committed to making our service accessible to everyone, regardless of ability.
          </p>

          {/* Commitment */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 mb-10 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-lg text-white/90">
              We believe everyone should be able to create amazing music mixes. We&apos;re committed to meeting WCAG 2.1
              Level AA standards and continuously improving accessibility across our platform.
            </p>
          </div>

          {/* Accessibility Features */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Features</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Visual Accessibility</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Screen Reader Support:</strong> Full compatibility with NVDA, JAWS, and VoiceOver</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>High Contrast Mode:</strong> Enhanced color contrast for better visibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Text Scaling:</strong> Support for browser zoom up to 200% without loss of functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Color Blind Friendly:</strong> Designs tested with color blindness simulators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Focus Indicators:</strong> Clear visual indicators for keyboard navigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Alt Text:</strong> Descriptive alternative text for all images and icons</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Hand className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Keyboard & Motor Accessibility</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Full Keyboard Navigation:</strong> All features accessible without a mouse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Keyboard Shortcuts:</strong> Customizable shortcuts for common actions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Skip Links:</strong> Quick navigation to main content areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Large Click Targets:</strong> Buttons and controls meet 44x44px minimum size</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Voice Control:</strong> Compatible with voice navigation software</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Ear className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Auditory Accessibility</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Visual Waveforms:</strong> See your audio represented visually</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Text Notifications:</strong> All audio alerts have visual equivalents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Volume Controls:</strong> Independent volume adjustment for preview playback</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span><strong>Captions:</strong> Video tutorials include accurate captions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Standards Compliance */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Standards Compliance</h2>
            <p className="text-gray-700 mb-6">
              InfiniteMix strives to meet the following accessibility standards:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">WCAG 2.1 Level AA</h3>
                <p className="text-gray-700 text-sm">
                  Web Content Accessibility Guidelines - the international standard for web accessibility.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-purple-900 mb-2">Section 508</h3>
                <p className="text-gray-700 text-sm">
                  US federal accessibility standards for electronic and information technology.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-green-900 mb-2">ADA Compliant</h3>
                <p className="text-gray-700 text-sm">
                  Americans with Disabilities Act - ensuring equal access for all users.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-yellow-900 mb-2">EN 301 549</h3>
                <p className="text-gray-700 text-sm">
                  European accessibility standard for ICT products and services.
                </p>
              </div>
            </div>
          </div>

          {/* Known Issues */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Known Accessibility Issues</h2>
            <p className="text-gray-700 mb-4">
              We&apos;re actively working to resolve the following accessibility issues:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 font-bold">→</span>
                <span>Some drag-and-drop interactions may be difficult with keyboard-only navigation (workaround: use up/down arrow buttons)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 font-bold">→</span>
                <span>Video visualizers may not be accessible to screen readers (alternative: audio-only export available)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 font-bold">→</span>
                <span>Some third-party integrations may not meet full WCAG 2.1 standards</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Expected resolution:</strong> Q2 2024
            </p>
          </div>

          {/* Assistive Technologies */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Supported Assistive Technologies</h2>
            <p className="text-gray-700 mb-4">
              InfiniteMix has been tested with the following assistive technologies:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Screen Readers</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NVDA (Windows)</li>
                  <li>• JAWS (Windows)</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Voice Control</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dragon NaturallySpeaking</li>
                  <li>• Windows Speech Recognition</li>
                  <li>• Voice Control (macOS)</li>
                  <li>• Voice Access (Android)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Magnification</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ZoomText</li>
                  <li>• Windows Magnifier</li>
                  <li>• macOS Zoom</li>
                  <li>• Browser zoom (all)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Accessibility Feedback</h2>
            <p className="text-xl mb-6 text-white/90">
              Encountered an accessibility issue? We want to hear from you so we can fix it.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 text-left">
              <p className="mb-2"><strong>Accessibility Team:</strong> accessibility@infinitemix.com</p>
              <p className="mb-2"><strong>Response Time:</strong> Within 48 hours</p>
              <p className="text-sm text-white/80">
                Please include: device, browser, assistive technology used, and description of the issue.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:accessibility@infinitemix.com"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Report Accessibility Issue
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                General Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
