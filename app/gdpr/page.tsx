import Link from 'next/link';
import { ArrowLeft, Shield, Check } from 'lucide-react';

export default function GDPRPage() {
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
            <Shield className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              GDPR Compliance
            </h1>
          </div>
          <p className="text-gray-600 mb-10">General Data Protection Regulation Compliance Statement</p>

          {/* GDPR Commitment */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 mb-10 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Our GDPR Commitment</h2>
            <p className="mb-4">
              InfiniteMix is fully committed to complying with the General Data Protection Regulation (GDPR) and
              protecting the privacy rights of individuals in the European Economic Area (EEA).
            </p>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Certified GDPR Compliant</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Legal Basis for Processing</h2>
              <p className="mb-3">
                We process your personal data under the following legal bases:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 mb-2">Contract Performance (Art. 6(1)(b) GDPR)</h3>
                  <p className="text-blue-800">
                    Processing necessary to provide the Service you purchased (account management, file processing, support).
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 mb-2">Consent (Art. 6(1)(a) GDPR)</h3>
                  <p className="text-purple-800">
                    For marketing communications and optional cookies (you can withdraw consent at any time).
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-green-900 mb-2">Legitimate Interests (Art. 6(1)(f) GDPR)</h3>
                  <p className="text-green-800">
                    For analytics, fraud prevention, and service improvements (balanced against your rights).
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-bold text-yellow-900 mb-2">Legal Obligation (Art. 6(1)(c) GDPR)</h3>
                  <p className="text-yellow-800">
                    To comply with legal requirements (tax records, law enforcement requests).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Your GDPR Rights</h2>
              <p className="mb-4">
                Under the GDPR, you have the following rights regarding your personal data:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Access (Art. 15)</h3>
                    <p>Request a copy of all personal data we hold about you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Rectification (Art. 16)</h3>
                    <p>Correct any inaccurate or incomplete personal data.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Erasure / "Right to be Forgotten" (Art. 17)</h3>
                    <p>Request deletion of your personal data when no longer necessary or if you withdraw consent.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Restriction of Processing (Art. 18)</h3>
                    <p>Limit how we process your data in certain circumstances.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Data Portability (Art. 20)</h3>
                    <p>Receive your data in a structured, machine-readable format and transfer it to another service.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Object (Art. 21)</h3>
                    <p>Object to processing based on legitimate interests or for direct marketing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Withdraw Consent (Art. 7(3))</h3>
                    <p>Withdraw consent at any time for processing based on consent.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Right to Lodge a Complaint (Art. 77)</h3>
                    <p>File a complaint with your local data protection authority.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Exercise Your Rights</h2>
              <p className="mb-4">
                To exercise any of your GDPR rights, contact us through any of these methods:
              </p>

              <div className="bg-purple-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:gdpr@infinitemix.com" className="text-purple-600 hover:underline">
                      gdpr@infinitemix.com
                    </a>
                  </li>
                  <li>
                    <strong>Data Protection Officer:</strong>{' '}
                    <a href="mailto:dpo@infinitemix.com" className="text-purple-600 hover:underline">
                      dpo@infinitemix.com
                    </a>
                  </li>
                  <li>
                    <strong>In-App:</strong> Settings → Privacy → Data Rights
                  </li>
                  <li>
                    <strong>Contact Form:</strong>{' '}
                    <Link href="/contact" className="text-purple-600 hover:underline">
                      Contact Support
                    </Link>
                  </li>
                </ul>

                <p className="mt-4 text-sm text-purple-900">
                  <strong>Response Time:</strong> We will respond to your request within 30 days (extendable by 2 months
                  for complex requests, with notification).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security Measures</h2>
              <p className="mb-3">
                We implement appropriate technical and organizational measures to protect your data:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Encryption:</strong> TLS 1.3 for data in transit, AES-256 for data at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Access Controls:</strong> Role-based access, two-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Audits:</strong> Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Staff Training:</strong> Regular GDPR and security training for all employees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Incident Response:</strong> Documented breach notification procedures</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. International Data Transfers</h2>
              <p className="mb-3">
                Your data may be transferred outside the EEA. We ensure adequate protection through:
              </p>

              <ul className="space-y-3">
                <li>
                  <strong>Standard Contractual Clauses (SCCs):</strong> Approved by the European Commission
                </li>
                <li>
                  <strong>Adequacy Decisions:</strong> Transfers to countries with adequate data protection levels
                </li>
                <li>
                  <strong>Binding Corporate Rules:</strong> For transfers within corporate groups
                </li>
              </ul>

              <p className="mt-4">
                Primary data storage locations: EU (Frankfurt), with backups in EU data centers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="mb-3">
                We retain personal data only as long as necessary:
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li><strong>Account Data:</strong> Until account deletion + 30 days</li>
                  <li><strong>Uploaded Files:</strong> 30 days after upload</li>
                  <li><strong>Transaction Records:</strong> 7 years (legal requirement)</li>
                  <li><strong>Support Communications:</strong> 3 years</li>
                  <li><strong>Analytics Logs:</strong> 90 days (anonymized after 30 days)</li>
                  <li><strong>Marketing Consent:</strong> Until withdrawn + 30 days</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Processing Agreement (DPA)</h2>
              <p>
                If you're a business user processing personal data through InfiniteMix, we can provide a Data Processing
                Agreement (DPA) that complies with GDPR Art. 28. Contact our legal team at{' '}
                <a href="mailto:legal@infinitemix.com" className="text-purple-600 hover:underline">
                  legal@infinitemix.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Breach Notification</h2>
              <p className="mb-3">
                In the event of a data breach that poses a risk to your rights and freedoms:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>We will notify the relevant supervisory authority within 72 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>We will notify affected individuals without undue delay if there is a high risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Notifications will include the nature of the breach and remedial actions</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Data</h2>
              <p>
                We do not knowingly process data of children under 16 without parental consent. If we discover we have
                collected data from a child without proper consent, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Automated Decision-Making</h2>
              <p>
                We do not use automated decision-making or profiling that produces legal effects or similarly
                significantly affects you. Our AI features (BPM detection, key detection) are purely technical
                and do not affect your rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Supervisory Authority</h2>
              <p className="mb-3">
                Our lead supervisory authority is the Irish Data Protection Commission:
              </p>

              <div className="bg-blue-50 rounded-lg p-4">
                <p><strong>Data Protection Commission</strong></p>
                <p>21 Fitzwilliam Square South</p>
                <p>Dublin 2, D02 RD28</p>
                <p>Ireland</p>
                <p className="mt-2">
                  Website:{' '}
                  <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.dataprotection.ie
                  </a>
                </p>
              </div>

              <p className="mt-4">
                You have the right to lodge a complaint with your local data protection authority if you're not
                satisfied with how we handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Updates to GDPR Compliance</h2>
              <p>
                We continuously review and update our GDPR compliance measures. This page was last updated in
                January 2024. Check back regularly for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="mb-2"><strong>Data Controller:</strong> InfiniteMix, Inc.</p>
                <p className="mb-2"><strong>GDPR Representative (EU):</strong> InfiniteMix EU Services Ltd.</p>
                <p className="mb-4"><strong>Data Protection Officer:</strong> John Smith</p>

                <div className="border-t border-purple-200 pt-4 mt-4">
                  <p><strong>Email:</strong> <a href="mailto:gdpr@infinitemix.com" className="text-purple-600 hover:underline">gdpr@infinitemix.com</a></p>
                  <p><strong>DPO:</strong> <a href="mailto:dpo@infinitemix.com" className="text-purple-600 hover:underline">dpo@infinitemix.com</a></p>
                  <p><strong>Legal:</strong> <a href="mailto:legal@infinitemix.com" className="text-purple-600 hover:underline">legal@infinitemix.com</a></p>
                  <p><strong>Support:</strong> <Link href="/contact" className="text-purple-600 hover:underline">Contact Form</Link></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
