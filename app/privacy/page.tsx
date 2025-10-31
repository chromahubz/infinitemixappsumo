import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-10">Last updated: January 2025</p>

          <div className="bg-white rounded-2xl border border-gray-200 p-10 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                InfiniteMix ("we," "us," or "our") respects your privacy and is committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                our Service, including our handling of AppSumo license activations, AI credit tracking, and refund-related data.
              </p>
              <p className="mt-3">
                By using InfiniteMix, you consent to the data practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-purple-600" />
                2.1 Information You Provide
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Information:</strong> Name, email address, password</li>
                <li><strong>AppSumo License Data:</strong> License key, purchase date, plan tier (Creator/Pro/Studio)</li>
                <li><strong>Payment Information:</strong> Processed by AppSumo (we don't store payment details directly)</li>
                <li><strong>Profile Information:</strong> Optional profile picture, bio, preferences</li>
                <li><strong>Content:</strong> Audio files you upload, mixes you create, AI generation prompts</li>
                <li><strong>Communications:</strong> Messages you send to our support team, refund requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 flex items-center gap-2">
                <Database className="w-6 h-6 text-blue-600" />
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Usage Data:</strong> Features used, AI credits consumed, manual mixing activity, time spent, video exports</li>
                <li><strong>Device Information:</strong> Browser type, IP address, operating system, screen resolution</li>
                <li><strong>Device Fingerprint:</strong> Unique identifier generated from browser/device characteristics (for license enforcement and fraud prevention)</li>
                <li><strong>Cookies:</strong> Session cookies for authentication, preferences, and analytics</li>
                <li><strong>Analytics:</strong> Aggregated usage statistics for improving the Service</li>
                <li><strong>API Usage Logs:</strong> AI generation requests (Kie.ai, Replicate), timestamps, success/failure status</li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm"><strong className="text-blue-900">Why We Collect Device Fingerprints:</strong></p>
                <p className="text-sm text-blue-800 mt-1">
                  Device fingerprinting helps us enforce the 3-device limit per license, prevent account sharing abuse,
                  detect fraudulent refund requests, and protect legitimate users from unauthorized access. This data
                  cannot personally identify you but helps us maintain service integrity.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Credit Usage & Refund Tracking</h3>
              <p className="mb-2">We collect and store data about your service usage for refund eligibility determination:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li><strong>AI Credits Allocated:</strong> Total credits granted based on your AppSumo plan</li>
                <li><strong>AI Credits Remaining:</strong> Current balance after AI generations</li>
                <li><strong>Credit Usage History:</strong> Timestamps of each AI generation, type (music/thumbnail/description), credits consumed</li>
                <li><strong>Manual Mixing Activity:</strong> Number of manual mixes created (does not affect refund eligibility)</li>
                <li><strong>First AI Usage Date:</strong> Timestamp when you first used AI generation (affects refund calculation)</li>
                <li><strong>Refund Eligibility Status:</strong> Calculated automatically based on usage percentage</li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-7 h-7 text-purple-600" />
                3. How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to:</p>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Service Operation:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Provide, operate, and maintain the Service</li>
                <li>Process your audio files and create mixes using AI and manual tools</li>
                <li>Authenticate your account and validate AppSumo license keys</li>
                <li>Track AI credit consumption and enforce usage limits</li>
                <li>Prevent fraud, license sharing, and abuse</li>
              </ul>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Communication:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Send service-related notifications (credit low balance, expiring downloads)</li>
                <li>Respond to support requests and refund inquiries</li>
                <li>Notify you of policy changes or service updates</li>
              </ul>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Refund Processing:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Calculate refund eligibility based on AI credit usage percentage</li>
                <li>Determine refund amount using our tiered policy (full/partial/none)</li>
                <li>Detect suspicious refund patterns or abuse</li>
                <li>Coordinate with AppSumo for refund processing</li>
              </ul>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Security & Compliance:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Detect and prevent unauthorized access or fraudulent activity</li>
                <li>Enforce device limits (3 devices per license)</li>
                <li>Comply with legal obligations and respond to legal requests</li>
                <li>Conduct security audits and investigations</li>
              </ul>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Improvement & Analytics:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Analyze usage patterns to improve features</li>
                <li>Monitor AI API performance and quality</li>
                <li>Optimize user experience and interface</li>
                <li>Generate anonymized statistics and reports</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-7 h-7 text-green-600" />
                4. Data Storage and Security
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">4.1 Storage Locations & Duration</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Data (Permanent):</strong> Email, license key, credits, device fingerprints – stored in secure database (Supabase/PostgreSQL)</li>
                <li><strong>Uploaded Audio Files (Temporary):</strong> Stored on AWS S3, automatically deleted after 24 hours</li>
                <li><strong>Generated Mixes (Temporary):</strong> Available for download for 30 days, then automatically deleted</li>
                <li><strong>AI-Generated Content:</strong> Music, thumbnails stored temporarily; you must download within 30 days</li>
                <li><strong>Usage Logs:</strong> Credit consumption logs retained for 2 years (for refund/dispute resolution)</li>
                <li><strong>Analytics Data:</strong> Aggregated usage statistics retained indefinitely (anonymized)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Security Measures</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Encryption in Transit:</strong> All data transmitted over HTTPS/TLS 1.3</li>
                <li><strong>Encryption at Rest:</strong> Files encrypted using AES-256, database encrypted</li>
                <li><strong>Password Security:</strong> Passwords hashed using bcrypt (never stored in plaintext)</li>
                <li><strong>Access Controls:</strong> Role-based access, principle of least privilege</li>
                <li><strong>Regular Audits:</strong> Security assessments, penetration testing, vulnerability scans</li>
                <li><strong>API Security:</strong> Rate limiting, authentication tokens, request validation</li>
                <li><strong>Backup & Recovery:</strong> Daily encrypted backups, disaster recovery plan</li>
              </ul>

              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-900">
                  <strong>Important:</strong> No security system is 100% foolproof. While we implement industry best practices,
                  we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your password.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="mb-4 font-semibold text-gray-900">
                <strong>WE DO NOT SELL YOUR PERSONAL DATA.</strong> We will never sell, rent, or trade your personal information to third parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.1 Service Providers (Third Parties We Work With)</h3>
              <p className="text-sm mb-2">We share data with trusted third-party services that help us operate:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li><strong>AppSumo:</strong> License validation, payment processing, refund coordination</li>
                <li><strong>Kie.ai:</strong> AI music generation (your prompts, generation requests)</li>
                <li><strong>Replicate:</strong> AI image/thumbnail generation (your prompts, image data)</li>
                <li><strong>AWS (Amazon Web Services):</strong> File storage (S3), cloud hosting, compute</li>
                <li><strong>Supabase/PostgreSQL:</strong> Database hosting for account and credit data</li>
                <li><strong>Vercel/Railway:</strong> Application hosting and deployment</li>
                <li><strong>Google Analytics:</strong> Website usage analytics (anonymized, IP anonymization enabled)</li>
                <li><strong>Email Service (SendGrid/AWS SES):</strong> Transactional emails (account notifications, refund communications)</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2 italic">
                All third-party providers are contractually obligated to protect your data and use it only for the services we've engaged them for.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Legal Requirements & Law Enforcement</h3>
              <p className="mb-2">We may disclose your information if required to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Comply with legal obligations (subpoenas, court orders, warrants)</li>
                <li>Enforce our Terms of Service or investigate violations</li>
                <li>Protect the rights, property, or safety of InfiniteMix, our users, or the public</li>
                <li>Prevent fraud, security threats, or illegal activities</li>
                <li>Respond to government requests in accordance with applicable law</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.3 Business Transfers</h3>
              <p className="text-sm">
                If InfiniteMix is involved in a merger, acquisition, or sale of assets, your information may be transferred
                as part of that transaction. We will notify you via email and/or prominent notice on our Service of any
                change in ownership or uses of your personal information.
              </p>
            </section>

            <section className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-7 h-7 text-blue-600" />
                6. Your Rights and Choices
              </h2>
              <p className="mb-4">You have the following rights regarding your personal data:</p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900">✓ Right to Access</h4>
                  <p className="text-sm text-gray-700">Request a copy of all personal data we hold about you, including credit usage history</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">✓ Right to Correction</h4>
                  <p className="text-sm text-gray-700">Update inaccurate or incomplete information in your account</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">✓ Right to Deletion ("Right to be Forgotten")</h4>
                  <p className="text-sm text-gray-700">Request deletion of your account and all associated data (subject to legal retention requirements)</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">✓ Right to Data Portability</h4>
                  <p className="text-sm text-gray-700">Export your data in JSON or CSV format (mixes, usage logs, account info)</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">✓ Right to Opt-Out</h4>
                  <p className="text-sm text-gray-700">Unsubscribe from marketing emails (transactional emails required for service operation cannot be opted out)</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">✓ Right to Restrict Processing</h4>
                  <p className="text-sm text-gray-700">Limit how we process your data while disputes are resolved</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">✓ Right to Object</h4>
                  <p className="text-sm text-gray-700">Object to processing based on legitimate interests (subject to legal grounds)</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded border border-blue-300">
                <p className="font-semibold text-gray-900 mb-2">How to Exercise Your Rights:</p>
                <p className="text-sm text-gray-700">Email: <a href="mailto:privacy@infinitemix.com" className="text-purple-600 hover:underline font-semibold">privacy@infinitemix.com</a></p>
                <p className="text-xs text-gray-600 mt-2">We will respond within 30 days. Some rights may be limited by legal obligations or legitimate business interests.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="mb-3">We use the following types of cookies and similar technologies:</p>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Essential Cookies (Required)</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Authentication tokens (keep you logged in)</li>
                <li>Session management (remember your current work)</li>
                <li>Security measures (CSRF protection)</li>
              </ul>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Preference Cookies (Optional)</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Language preferences</li>
                <li>Theme settings (light/dark mode)</li>
                <li>UI customizations</li>
              </ul>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Analytics Cookies (Optional)</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Google Analytics (anonymized, IP anonymization enabled)</li>
                <li>Usage statistics (feature adoption, error rates)</li>
                <li>Performance monitoring</li>
              </ul>

              <p className="mt-4 text-sm">
                You can control cookies through your browser settings. Disabling essential cookies may impact service functionality.
                See our <Link href="/cookies" className="text-purple-600 hover:underline font-semibold">Cookie Policy</Link> for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="mb-3">We retain different types of data for varying periods:</p>

              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">Data Type</th>
                    <th className="border border-gray-300 p-2 text-left">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Account Information</td>
                    <td className="border border-gray-300 p-2">Until account deletion</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Uploaded Audio Files</td>
                    <td className="border border-gray-300 p-2">24 hours (auto-delete)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Generated Mixes & Videos</td>
                    <td className="border border-gray-300 p-2">30 days (auto-delete)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">AI Generation Logs</td>
                    <td className="border border-gray-300 p-2">2 years (refund disputes)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Credit Usage History</td>
                    <td className="border border-gray-300 p-2">2 years (refund eligibility)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Device Fingerprints</td>
                    <td className="border border-gray-300 p-2">Until account deletion</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Support Communications</td>
                    <td className="border border-gray-300 p-2">3 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Analytics Data (Anonymized)</td>
                    <td className="border border-gray-300 p-2">Indefinitely</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Refund Request Records</td>
                    <td className="border border-gray-300 p-2">7 years (tax/legal)</td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-4 text-sm text-gray-600">
                After account deletion, some data may be retained for legal, tax, or fraud prevention purposes as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="mb-3">
                InfiniteMix is based in the United States. Your data may be transferred to and processed in countries
                outside your country of residence, including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>United States (primary hosting, company headquarters)</li>
                <li>European Union (data centers for EU users)</li>
                <li>Singapore (AWS Asia-Pacific region)</li>
              </ul>
              <p className="mt-3 text-sm">
                We ensure appropriate safeguards are in place, including <strong>Standard Contractual Clauses (SCCs)</strong>
                approved by the European Commission for EU data transfers. Your data is protected regardless of where it's processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy (COPPA Compliance)</h2>
              <p>
                The Service is not intended for users under <strong>13 years old</strong>. We do not knowingly collect
                personal information from children under 13. If you believe we have collected information from a child,
                please contact us immediately at <a href="mailto:privacy@infinitemix.com" className="text-purple-600 hover:underline">privacy@infinitemix.com</a>,
                and we will delete it within 30 days.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Parents/guardians: If you discover your child has provided us with personal information without consent,
                please reach out so we can take appropriate action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. California Privacy Rights (CCPA)</h2>
              <p className="mb-3">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <div>
                    <strong>Right to Know:</strong> What personal information is collected, used, shared, or sold
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <div>
                    <strong>Right to Delete:</strong> Request deletion of your personal information
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <div>
                    <strong>Right to Opt-Out:</strong> We <strong>DO NOT SELL</strong> personal information (nothing to opt out of)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <div>
                    <strong>Right to Non-Discrimination:</strong> We won't discriminate against you for exercising your rights
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm font-semibold text-blue-900">To Exercise CCPA Rights:</p>
                <p className="text-sm text-blue-800">Email <a href="mailto:privacy@infinitemix.com" className="underline">privacy@infinitemix.com</a> with "CCPA Request" in subject line</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. GDPR Compliance (European Users)</h2>
              <p className="mb-3">
                For users in the European Economic Area (EEA), United Kingdom, and Switzerland, we comply with the
                <strong> General Data Protection Regulation (GDPR)</strong>.
              </p>

              <h4 className="font-bold text-gray-900 mt-4 mb-2">Legal Basis for Processing:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li><strong>Contract Performance:</strong> Processing necessary to provide the Service you purchased</li>
                <li><strong>Legitimate Interests:</strong> Fraud prevention, security, service improvement</li>
                <li><strong>Consent:</strong> Marketing communications (you can withdraw consent anytime)</li>
                <li><strong>Legal Obligations:</strong> Compliance with EU law, tax requirements</li>
              </ul>

              <p className="mt-4 text-sm">
                For more details, see our <Link href="/gdpr" className="text-purple-600 hover:underline font-semibold">GDPR Compliance</Link> page.
                EU users can also contact our Data Protection Officer at <a href="mailto:dpo@infinitemix.com" className="text-purple-600 hover:underline">dpo@infinitemix.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors. We will notify you of material changes via:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm mt-2">
                <li>Email notification (sent to your registered email address)</li>
                <li>Prominent notice in the Service (banner or modal)</li>
                <li>Updated "Last updated" date at the top of this page</li>
              </ul>
              <p className="mt-3 text-sm">
                Your continued use of the Service after changes take effect constitutes acceptance of the updated policy.
                If you don't agree to changes, you may delete your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Data Breach Notification</h2>
              <p className="text-sm">
                In the event of a data breach that affects your personal information, we will:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm mt-2">
                <li>Notify affected users within <strong>72 hours</strong> of discovering the breach</li>
                <li>Provide details about what data was compromised</li>
                <li>Explain steps we're taking to address the breach</li>
                <li>Offer guidance on protecting your account</li>
                <li>Report to relevant authorities as required by law (GDPR, CCPA)</li>
              </ul>
            </section>

            <section className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
              <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
              </p>

              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900">Privacy Inquiries</p>
                  <p className="text-sm"><a href="mailto:privacy@infinitemix.com" className="text-purple-600 hover:underline">privacy@infinitemix.com</a></p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900">Data Protection Officer (GDPR)</p>
                  <p className="text-sm"><a href="mailto:dpo@infinitemix.com" className="text-purple-600 hover:underline">dpo@infinitemix.com</a></p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900">General Support</p>
                  <p className="text-sm"><Link href="/contact" className="text-purple-600 hover:underline">Contact Support</Link></p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900">Refund-Related Data Requests</p>
                  <p className="text-sm"><a href="mailto:refunds@infinitemix.com" className="text-purple-600 hover:underline">refunds@infinitemix.com</a></p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900">Mailing Address</p>
                  <p className="text-sm text-gray-700">
                    InfiniteMix<br/>
                    [Your Company Address]<br/>
                    [City, State, ZIP]<br/>
                    United States
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-4 italic">
                We aim to respond to all privacy-related requests within 30 days. For urgent security concerns, please mark your email as "URGENT" in the subject line.
              </p>
            </section>

            <div className="text-center pt-8 text-sm text-gray-500">
              <p>© 2025 InfiniteMix. All rights reserved.</p>
              <p className="mt-2">
                By using InfiniteMix, you acknowledge that you have read, understood, and agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
