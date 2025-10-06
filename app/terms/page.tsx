import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-10">Last updated: January 2024</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using InfiniteMix ("Service"), you agree to be bound by these Terms of Service ("Terms").
                If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p>
                InfiniteMix is an AI-powered music mixing platform that allows users to upload audio files, create automated
                mixes with transitions, and generate video content. The Service is provided on a subscription or one-time
                purchase basis through AppSumo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="mb-3">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information is accurate and current</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="mb-3">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Upload content you don't have rights to use</li>
                <li>Violate any copyright, trademark, or intellectual property laws</li>
                <li>Use the Service for illegal purposes</li>
                <li>Attempt to reverse engineer or hack the Service</li>
                <li>Share your account credentials with others</li>
                <li>Abuse, harass, or harm other users</li>
                <li>Spam or distribute malware</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content Ownership</h2>
              <p className="mb-3">
                <strong>Your Content:</strong> You retain all ownership rights to the audio files you upload and the mixes
                you create. You are solely responsible for ensuring you have the necessary rights to use any content you upload.
              </p>
              <p>
                <strong>License to InfiniteMix:</strong> By uploading content, you grant InfiniteMix a limited, worldwide,
                non-exclusive license to store, process, and display your content solely for the purpose of providing the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p>
                The Service, including its software, design, graphics, and documentation, is owned by InfiniteMix and protected
                by copyright and other intellectual property laws. Your license does not give you any ownership rights to the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Content</h2>
              <p className="mb-3">You may not upload content that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Infringes on intellectual property rights</li>
                <li>Contains hate speech, harassment, or discrimination</li>
                <li>Is sexually explicit or pornographic</li>
                <li>Promotes violence or illegal activities</li>
                <li>Contains malware or viruses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Payment and Billing</h2>
              <p>
                AppSumo purchases are one-time payments for lifetime access. Payment terms are governed by AppSumo's terms.
                We do not process payments directly. All refund requests must go through AppSumo within their 60-day
                money-back guarantee period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Availability</h2>
              <p>
                We strive to provide 99.9% uptime but cannot guarantee uninterrupted service. We reserve the right to
                modify, suspend, or discontinue any aspect of the Service with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, INFINITEMIX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
                OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Warranty Disclaimer</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
                WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice, for conduct that violates
                these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use
                the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of significant changes
                via email or through the Service. Continued use after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> <a href="mailto:legal@infinitemix.com" className="text-purple-600 hover:underline">legal@infinitemix.com</a><br />
                <strong>Support:</strong> <Link href="/contact" className="text-purple-600 hover:underline">Contact Support</Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
