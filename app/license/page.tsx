import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';

export default function LicensePage() {
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
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            License Agreement
          </h1>
          <p className="text-gray-600 mb-10">Last updated: January 2024</p>

          {/* License Summary */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 mb-10 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Your InfiniteMix License Includes:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Lifetime access to InfiniteMix</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Unlimited personal use</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Commercial use permitted</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>All future updates included</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Priority support</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>No monthly fees ever</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Grant of License</h2>
              <p className="mb-3">
                Subject to the terms of this Agreement, InfiniteMix grants you a non-exclusive, non-transferable,
                lifetime license to use the Service for your personal and commercial purposes.
              </p>
              <p>
                This license is granted for a single user account. The account holder is the licensee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What You Can Do</h2>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-3">✓ Permitted Uses:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Create unlimited music mixes for personal use</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Use mixes in commercial projects (videos, podcasts, presentations)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sell or distribute mixes you create (as long as you own the rights to the source audio)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Use for client work (as a DJ, producer, or content creator)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Create videos with generated visualizers for commercial purposes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Use for business purposes (events, marketing, social media)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. What You Cannot Do</h2>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-3">✗ Prohibited Uses:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span>Share your account credentials with others</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span>Resell, sublicense, or redistribute access to InfiniteMix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span>Reverse engineer, decompile, or attempt to extract source code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span>Create a competing music mixing service using InfiniteMix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span>Remove or alter InfiniteMix branding or watermarks (where applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 flex-shrink-0">✗</span>
                    <span>Use the Service for illegal purposes</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Commercial Use Rights</h2>
              <p className="mb-3">
                <strong>You ARE granted commercial usage rights</strong> for the mixes you create with InfiniteMix.
                This means you can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use your mixes in commercial videos, podcasts, or presentations</li>
                <li>Sell your mixes as part of a DJ service or music production business</li>
                <li>Use mixes for client work and charge for your services</li>
                <li>Monetize videos featuring your mixes on YouTube, TikTok, etc.</li>
                <li>Use in advertising and marketing materials</li>
              </ul>
              <p className="mt-4 font-semibold">
                Important: You are responsible for ensuring you have the rights to use the source audio files.
                InfiniteMix does not grant rights to copyrighted music.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Copyright and Ownership</h2>
              <h3 className="text-lg font-semibold mb-2">5.1 Your Content</h3>
              <p className="mb-4">
                You retain full ownership of all audio files you upload and mixes you create. InfiniteMix claims
                no ownership over your content.
              </p>

              <h3 className="text-lg font-semibold mb-2">5.2 InfiniteMix Software</h3>
              <p className="mb-4">
                InfiniteMix retains all rights, title, and interest in the Service, including all software,
                algorithms, designs, and intellectual property.
              </p>

              <h3 className="text-lg font-semibold mb-2">5.3 Your Responsibility</h3>
              <p>
                You are solely responsible for ensuring you have the necessary rights to use any audio files
                you upload. Using copyrighted music without permission may violate copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. License Duration</h2>
              <p className="mb-3">
                <strong>Lifetime License:</strong> Your AppSumo purchase grants you lifetime access to InfiniteMix,
                which includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Perpetual access to the Service (as long as it exists)</li>
                <li>All feature updates and improvements</li>
                <li>No recurring payments or renewal fees</li>
                <li>Priority support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates and Modifications</h2>
              <p>
                We regularly update InfiniteMix with new features, improvements, and bug fixes. Your lifetime
                license includes access to all future updates at no additional cost. We may occasionally need
                to perform maintenance or make changes that temporarily affect the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Account Sharing</h2>
              <p>
                Each license is for one user account only. Sharing your account credentials with others violates
                this license agreement and may result in account termination. If multiple people in your organization
                need access, each person requires their own license.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="mb-3">
                This license may be terminated if:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You violate these license terms</li>
                <li>You violate our Terms of Service</li>
                <li>You engage in fraudulent activity</li>
                <li>You abuse the Service in ways that harm other users</li>
              </ul>
              <p className="mt-4">
                Upon termination, you must cease all use of the Service and delete any copies of content
                created through InfiniteMix.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Warranty Disclaimer</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DO NOT GUARANTEE THAT THE
                SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR MEET YOUR SPECIFIC REQUIREMENTS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p>
                InfiniteMix shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of the Service, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to License</h2>
              <p>
                We reserve the right to modify this license agreement. Significant changes will be communicated
                via email. Continued use of the Service after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
              <p>
                Questions about your license or permitted uses? Contact us:
              </p>
              <div className="mt-4 bg-purple-50 rounded-lg p-4">
                <p><strong>Email:</strong> <a href="mailto:legal@infinitemix.com" className="text-purple-600 hover:underline">legal@infinitemix.com</a></p>
                <p><strong>Support:</strong> <Link href="/contact" className="text-purple-600 hover:underline">Contact Support</Link></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
