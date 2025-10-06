import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-10">Last updated: January 2024</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                InfiniteMix ("we," "us," or "our") respects your privacy and is committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Information:</strong> Name, email address, password</li>
                <li><strong>Payment Information:</strong> Processed by AppSumo (we don't store payment details)</li>
                <li><strong>Profile Information:</strong> Optional profile picture, bio, preferences</li>
                <li><strong>Content:</strong> Audio files you upload and mixes you create</li>
                <li><strong>Communications:</strong> Messages you send to our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Usage Data:</strong> How you interact with the Service, features used, time spent</li>
                <li><strong>Device Information:</strong> Browser type, IP address, operating system</li>
                <li><strong>Cookies:</strong> Session cookies for authentication and preferences</li>
                <li><strong>Analytics:</strong> Aggregated usage statistics for improving the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain the Service</li>
                <li>Process your audio files and create mixes</li>
                <li>Authenticate your account and prevent fraud</li>
                <li>Send you service-related notifications</li>
                <li>Respond to your support requests</li>
                <li>Improve and optimize the Service</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.1 Storage</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your audio files are stored on secure cloud servers (AWS S3)</li>
                <li>Files are encrypted at rest using AES-256 encryption</li>
                <li>Uploaded files are automatically deleted after 30 days</li>
                <li>You can manually delete files at any time from your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.2 Security</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All data transmitted over HTTPS/TLS encryption</li>
                <li>Passwords hashed using bcrypt</li>
                <li>Regular security audits and penetration testing</li>
                <li>Two-factor authentication available (optional)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="mb-3">We do NOT sell your personal data. We may share your information with:</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.1 Service Providers</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cloud Hosting:</strong> AWS for file storage and processing</li>
                <li><strong>Analytics:</strong> Google Analytics for usage statistics (anonymized)</li>
                <li><strong>Email Services:</strong> SendGrid for transactional emails</li>
                <li><strong>Support Tools:</strong> Zendesk for customer support</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.2 Legal Requirements</h3>
              <p>We may disclose your information if required by law, court order, or legal process.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing emails (we rarely send any)</li>
                <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@infinitemix.com" className="text-purple-600 hover:underline">privacy@infinitemix.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <p className="mb-3">We use the following types of cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for authentication and core functionality</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use the Service (anonymized)</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. See our <Link href="/cookies" className="text-purple-600 hover:underline">Cookie Policy</Link> for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Data:</strong> Retained until you delete your account</li>
                <li><strong>Uploaded Files:</strong> Automatically deleted after 30 days</li>
                <li><strong>Processed Mixes:</strong> Stored for 30 days, then automatically deleted</li>
                <li><strong>Logs and Analytics:</strong> Retained for 90 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries outside your country of residence. We ensure
                appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p>
                The Service is not intended for users under 13 years old. We do not knowingly collect personal information
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. California Privacy Rights (CCPA)</h2>
              <p className="mb-3">If you are a California resident, you have additional rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of the sale of personal information (we don't sell data)</li>
                <li>Right to deletion of personal information</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. GDPR Compliance</h2>
              <p>
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR).
                See our <Link href="/gdpr" className="text-purple-600 hover:underline">GDPR Compliance</Link> page for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes via email
                or through the Service. Your continued use after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, contact us at:
              </p>
              <div className="mt-4 bg-purple-50 rounded-lg p-4">
                <p><strong>Email:</strong> <a href="mailto:privacy@infinitemix.com" className="text-purple-600 hover:underline">privacy@infinitemix.com</a></p>
                <p><strong>Support:</strong> <Link href="/contact" className="text-purple-600 hover:underline">Contact Support</Link></p>
                <p><strong>Data Protection Officer:</strong> <a href="mailto:dpo@infinitemix.com" className="text-purple-600 hover:underline">dpo@infinitemix.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
