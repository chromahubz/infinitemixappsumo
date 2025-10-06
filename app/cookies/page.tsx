import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';

export default function CookiesPage() {
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
          </div>
          <p className="text-gray-600 mb-10">Last updated: January 2024</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They help the
                website remember your preferences, keep you logged in, and understand how you use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Essential Cookies (Required)</h3>
                  <p className="mb-3">
                    These cookies are necessary for the Service to function. You cannot opt-out of these cookies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Authentication:</strong> Keeps you logged in to your account
                        <div className="text-sm text-blue-800 mt-1">Cookie: session_token (expires after 7 days)</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Security:</strong> Prevents cross-site request forgery (CSRF) attacks
                        <div className="text-sm text-blue-800 mt-1">Cookie: csrf_token (session)</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Load Balancing:</strong> Routes your requests to the correct server
                        <div className="text-sm text-blue-800 mt-1">Cookie: lb_session (session)</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Preference Cookies (Optional)</h3>
                  <p className="mb-3">
                    These cookies remember your settings and preferences.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Theme Preferences:</strong> Remembers if you prefer light or dark mode
                        <div className="text-sm text-purple-800 mt-1">Cookie: theme_preference (1 year)</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Language:</strong> Stores your language preference
                        <div className="text-sm text-purple-800 mt-1">Cookie: language (1 year)</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Settings:</strong> Remembers your default export format and other settings
                        <div className="text-sm text-purple-800 mt-1">Cookie: user_settings (1 year)</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Analytics Cookies (Optional)</h3>
                  <p className="mb-3">
                    These cookies help us understand how you use the Service so we can improve it.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Google Analytics:</strong> Tracks page views, session duration, and user behavior (anonymized)
                        <div className="text-sm text-green-800 mt-1">Cookies: _ga, _gid, _gat (2 years)</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Usage Tracking:</strong> Helps us understand which features are most popular
                        <div className="text-sm text-green-800 mt-1">Cookie: usage_stats (90 days)</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3">Marketing Cookies (Optional)</h3>
                  <p className="mb-3">
                    These cookies track your visits to help us show relevant content.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <div>
                        <strong>Referral Source:</strong> Tracks how you found InfiniteMix (e.g., AppSumo, Google)
                        <div className="text-sm text-yellow-800 mt-1">Cookie: referral_source (30 days)</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
              <p className="mb-3">
                Some third-party services we use may set their own cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> For website analytics (can be opted out)</li>
                <li><strong>AppSumo:</strong> For purchase tracking and license management</li>
                <li><strong>CDN Providers:</strong> For faster content delivery</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies, which we encourage you to review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Control Cookies</h2>

              <h3 className="text-xl font-semibold mb-3">4.1 Browser Settings</h3>
              <p className="mb-3">
                Most browsers allow you to control cookies through their settings:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Opt-Out Tools</h3>
              <p className="mb-3">You can opt-out of specific types of cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics:</strong>{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    Browser Add-on
                  </a>
                </li>
                <li>
                  <strong>In-App Settings:</strong> Go to Settings → Privacy → Manage Cookie Preferences
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 What Happens If You Block Cookies?</h3>
              <p className="mb-3">
                <strong>Essential cookies:</strong> The Service will not function properly without these. You won't
                be able to log in or use core features.
              </p>
              <p>
                <strong>Optional cookies:</strong> You can block these without affecting functionality, but we won't
                be able to remember your preferences or improve the Service based on usage data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How Long Do Cookies Last?</h2>
              <ul className="space-y-3">
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain until they expire or you delete them
                  <ul className="list-disc list-inside ml-6 mt-2 text-sm space-y-1">
                    <li>Authentication: 7 days</li>
                    <li>Preferences: 1 year</li>
                    <li>Analytics: Up to 2 years</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Mobile App</h2>
              <p>
                Our mobile apps use similar technologies (local storage, device IDs) for the same purposes as cookies.
                You can manage these through your device settings under our app's permissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track</h2>
              <p>
                Some browsers support "Do Not Track" (DNT) signals. Currently, there is no industry standard for
                how to respond to DNT signals. We will update this policy if such standards are established.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We'll notify you of significant changes via
                email or through the Service. Check this page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. More Information</h2>
              <p className="mb-3">
                For more details about how we handle your data:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-purple-600 hover:underline font-semibold">
                    Privacy Policy →
                  </Link>
                </li>
                <li>
                  <Link href="/gdpr" className="text-purple-600 hover:underline font-semibold">
                    GDPR Compliance →
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p>
                Questions about our use of cookies?
              </p>
              <div className="mt-4 bg-purple-50 rounded-lg p-4">
                <p><strong>Email:</strong> <a href="mailto:privacy@infinitemix.com" className="text-purple-600 hover:underline">privacy@infinitemix.com</a></p>
                <p><strong>Support:</strong> <Link href="/contact" className="text-purple-600 hover:underline">Contact Support</Link></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
