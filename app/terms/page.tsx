import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-10">Last updated: January 2025</p>

          <div className="bg-white rounded-2xl border border-gray-200 p-10 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using InfiniteMix ("Service"), you agree to be bound by these Terms of Service ("Terms").
                If you do not agree to these Terms, do not use the Service. By activating your AppSumo license key,
                you confirm that you have read, understood, and agree to be bound by these Terms, including our Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="mb-3">
                InfiniteMix is an AI-powered music mixing platform that provides two distinct service types:
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Manual Mixing (Unlimited, Lifetime)</p>
                    <p className="text-sm text-gray-700">Upload your own MP3/WAV/M4A files, create professional mixes with crossfades, harmonic sequencing, and video export. No consumption limits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">AI Generation (Credit-Based)</p>
                    <p className="text-sm text-gray-700">Generate unique, royalty-free music using AI. Credits are allocated based on your AppSumo plan tier and consume third-party API resources (Kie.ai, Replicate) when used.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. AppSumo License Tiers & Credits</h2>
              <p className="mb-4">InfiniteMix is available through AppSumo with three lifetime license tiers:</p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4 py-2 bg-purple-50 rounded-r">
                  <p className="font-bold text-gray-900">Plan 1 — Creator ($29)</p>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• AI-generated mixes: ~10–20 mixes (length dependent)</li>
                    <li>• Unlimited manual mixing</li>
                    <li>• All core features included</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded-r">
                  <p className="font-bold text-gray-900">Plan 2 — Pro ($69)</p>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• AI-generated mixes: ~30–50 mixes (length dependent)</li>
                    <li>• Unlimited manual mixing</li>
                    <li>• Priority rendering + advanced features</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r">
                  <p className="font-bold text-gray-900">Plan 3 — Studio ($119)</p>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                    <li>• AI-generated mixes: ~60–90 mixes (length dependent)</li>
                    <li>• Unlimited manual mixing</li>
                    <li>• Batch generation + all pro features</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-900">
                  <strong>Note:</strong> AI generation credits never expire and are allocated once upon license activation.
                  Each AI mix generation consumes credits based on mix length and number of tracks. Manual mixing has no credit consumption.
                </p>
              </div>
            </section>

            <section className="border-2 border-purple-300 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-blue-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                4. Refund Policy (60-Day Money-Back Guarantee)
              </h2>

              <p className="mb-4 text-gray-800">
                InfiniteMix offers a fair and transparent refund policy that accounts for the different resource costs
                of our two service types. This policy complies with AppSumo's 60-day guarantee while protecting against
                abuse and covering actual API costs incurred.
              </p>

              <div className="space-y-4 mb-6">
                {/* Full Refund */}
                <div className="bg-white rounded-lg p-5 border-2 border-green-500">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">✅ FULL REFUND (100%)</h3>
                      <p className="text-sm text-gray-700 mt-1">Available within 60 days of purchase</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2"><strong>Eligibility:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• You have <strong>only used manual mixing features</strong> (uploading your own songs)</li>
                    <li>• AI generation credits remain <strong>100% unused</strong></li>
                    <li>• No AI music generation, AI thumbnails, or AI descriptions created</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    <strong>Why?</strong> Manual mixing has no incremental cost to us. You're simply testing software
                    you paid for, and we're happy to refund if it's not the right fit.
                  </p>
                </div>

                {/* Partial Refund */}
                <div className="bg-white rounded-lg p-5 border-2 border-yellow-500">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">💰 PARTIAL REFUND</h3>
                      <p className="text-sm text-gray-700 mt-1">Available within 60 days with usage deduction</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2"><strong>Eligibility:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• You've used <strong>less than 30% of AI credits</strong></li>
                    <li>• Creator (Plan 1): Less than 6 AI mixes used</li>
                    <li>• Pro (Plan 2): Less than 15 AI mixes used</li>
                    <li>• Studio (Plan 3): Less than 27 AI mixes used</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-800 mt-3">Refund Calculation:</p>
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-200 font-mono">
                    Refund Amount = Original Price - (AI Credits Used × $2.50)
                  </p>
                  <div className="mt-3 space-y-1 text-xs text-gray-600">
                    <p><strong>Examples:</strong></p>
                    <p>• Creator ($29) - 2 AI mixes used = $29 - $5 = <strong>$24 refund</strong></p>
                    <p>• Pro ($69) - 5 AI mixes used = $69 - $12.50 = <strong>$56.50 refund</strong></p>
                    <p>• Studio ($119) - 10 AI mixes used = $119 - $25 = <strong>$94 refund</strong></p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    <strong>Why?</strong> Each AI generation incurs real API costs (Kie.ai, Replicate, compute resources).
                    We deduct only actual costs incurred, not profit margins.
                  </p>
                </div>

                {/* No Refund */}
                <div className="bg-white rounded-lg p-5 border-2 border-red-500">
                  <div className="flex items-start gap-3 mb-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">❌ NO REFUND</h3>
                      <p className="text-sm text-gray-700 mt-1">Not eligible for refund</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2"><strong>Applies when:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• You've consumed <strong>more than 30% of AI credits</strong> (heavy usage)</li>
                    <li>• More than 60 days have passed since purchase</li>
                    <li>• Account flagged for fraudulent activity or abuse</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    <strong>Why?</strong> At 30%+ usage, you've received significant value from the platform and
                    consumed substantial API resources. This prevents abuse while remaining fair to genuine users.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">💡 Pro Tip: Try Risk-Free!</p>
                <p className="text-sm text-blue-800">
                  Start with <strong>manual mixing</strong> (100% refundable, unlimited, lifetime access) to test
                  all features risk-free. Only use AI credits when you're confident the platform meets your needs.
                  This ensures you can fully evaluate InfiniteMix before consuming any non-refundable resources.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <h4 className="font-bold text-gray-900 mb-2">Refund Request Process:</h4>
                <ol className="text-sm text-gray-700 space-y-1 ml-4 list-decimal">
                  <li>Email: <a href="mailto:refunds@infinitemix.com" className="text-purple-600 hover:underline font-semibold">refunds@infinitemix.com</a></li>
                  <li>Include: Your AppSumo order number and account email</li>
                  <li>Response time: 24-48 hours</li>
                  <li>Refund processed through AppSumo within 5-7 business days</li>
                </ol>
              </div>

              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm font-semibold text-red-900 mb-1">🛡️ Fraud Protection</p>
                <p className="text-xs text-red-800">
                  We reserve the right to deny refunds for: multiple refund requests across accounts,
                  downloading all generated content then immediately requesting refund, suspicious usage patterns
                  indicating abuse, or violation of these Terms. This protects legitimate users and our business sustainability.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. License Activation & Account Limits</h2>
              <p className="mb-3">Each AppSumo license key may be activated on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>One user account</strong> (single email address)</li>
                <li><strong>Up to 3 devices</strong> (browsers/computers) per account</li>
                <li>Account sharing is prohibited and may result in termination</li>
                <li>License keys cannot be transferred after activation</li>
                <li>Device resets available upon request for legitimate reasons (e.g., new computer)</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                We use device fingerprinting to prevent license abuse while allowing reasonable multi-device usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Accounts & Responsibilities</h2>
              <p className="mb-3">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials and license key</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information is accurate and current</li>
                <li>Not sharing your license key with others</li>
                <li>Using the Service in compliance with all applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Acceptable Use Policy</h2>
              <p className="mb-3">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Upload content you don't have rights to use</li>
                <li>Violate any copyright, trademark, or intellectual property laws</li>
                <li>Use the Service for illegal purposes or to promote illegal activities</li>
                <li>Attempt to reverse engineer, decompile, or hack the Service</li>
                <li>Share your account credentials or license key with others</li>
                <li>Abuse, harass, or harm other users</li>
                <li>Spam, distribute malware, or engage in fraudulent activity</li>
                <li>Circumvent usage limits or credit systems</li>
                <li>Use automated tools to abuse the Service</li>
                <li>Resell or redistribute AI-generated content as a standalone product</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Content Ownership & Licensing</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">8.1 Your Uploaded Content</h3>
                  <p>
                    You retain all ownership rights to audio files you upload and mixes you create using manual mixing.
                    You are solely responsible for ensuring you have the necessary rights, licenses, and permissions
                    to use any content you upload to the Service.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">8.2 AI-Generated Content</h3>
                  <p className="mb-2">
                    AI-generated music, thumbnails, and descriptions created through InfiniteMix are licensed to you
                    under the following terms:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    <li><strong>Commercial Usage Rights:</strong> You may use AI-generated content for commercial purposes, including monetized YouTube videos, client projects, and paid content</li>
                    <li><strong>Royalty-Free:</strong> No ongoing royalty payments required</li>
                    <li><strong>Attribution:</strong> Not required but appreciated</li>
                    <li><strong>Restrictions:</strong> You may NOT resell AI-generated music as standalone tracks or claim exclusive ownership of AI-generated content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">8.3 License to InfiniteMix</h3>
                  <p>
                    By uploading content, you grant InfiniteMix a limited, worldwide, non-exclusive, royalty-free
                    license to store, process, and display your content solely for the purpose of providing the Service.
                    We do not claim ownership of your content and will not use it for any other purpose.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Services & API Usage</h2>
              <p className="mb-3">
                InfiniteMix uses third-party services for AI generation, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Kie.ai:</strong> AI music generation</li>
                <li><strong>Replicate:</strong> AI image/thumbnail generation</li>
                <li><strong>Cloud infrastructure providers:</strong> Hosting and storage</li>
              </ul>
              <p className="mt-3">
                Your use of these services through InfiniteMix is subject to our Terms. We are not responsible for
                third-party service interruptions, but will make reasonable efforts to provide alternative solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Prohibited Content</h2>
              <p className="mb-3">You may not upload, generate, or distribute content that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Infringes on intellectual property rights</li>
                <li>Contains hate speech, harassment, or discrimination</li>
                <li>Is sexually explicit or pornographic</li>
                <li>Promotes violence, terrorism, or illegal activities</li>
                <li>Contains malware, viruses, or malicious code</li>
                <li>Violates privacy rights or laws</li>
                <li>Is defamatory or fraudulent</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                We reserve the right to remove prohibited content and terminate accounts that violate this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Data Storage & Deletion</h2>
              <p className="mb-3">
                <strong>Temporary Storage:</strong> Uploaded audio files are stored temporarily for processing and
                are automatically deleted after 24 hours. Generated mixes are available for download for 30 days.
              </p>
              <p className="mb-3">
                <strong>Account Data:</strong> Your account information, license details, and credit usage logs are
                retained for the lifetime of your account and for legal/tax purposes after termination.
              </p>
              <p>
                <strong>Data Deletion:</strong> You may request account deletion at any time. Upon deletion, all your
                data will be permanently removed within 30 days, except as required by law or for fraud prevention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Service Availability & Modifications</h2>
              <p className="mb-3">
                We strive to provide 99.9% uptime but cannot guarantee uninterrupted service. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify, suspend, or discontinue any aspect of the Service with reasonable notice</li>
                <li>Perform scheduled maintenance (announced in advance when possible)</li>
                <li>Update features and pricing for new users (existing lifetime licenses unaffected)</li>
                <li>Change third-party API providers if necessary</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Lifetime license holders retain access to core features even if the Service is modified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
              <p className="mb-3">
                We may terminate or suspend your account immediately, without prior notice or refund, for conduct that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violates these Terms or our Acceptable Use Policy</li>
                <li>Is harmful to other users, us, or third parties</li>
                <li>Involves fraudulent activity or abuse of the Service</li>
                <li>Results from an AppSumo refund request (account disabled upon refund)</li>
              </ul>
              <p className="mt-3">
                Upon termination, your right to use the Service will immediately cease. You may not create a new
                account if your previous account was terminated for violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Limitation of Liability</h2>
              <p className="mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, INFINITEMIX AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS,
                PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>ANY LOSS OF PROFITS, REVENUES, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
                <li>DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS</li>
                <li>INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICE</li>
                <li>BUGS, VIRUSES, OR OTHER HARMFUL CODE TRANSMITTED THROUGH THE SERVICE BY THIRD PARTIES</li>
                <li>ERRORS OR INACCURACIES IN CONTENT OR LOSS/DAMAGE FROM USE OF CONTENT POSTED OR TRANSMITTED</li>
              </ul>
              <p className="mt-3">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR YOUR LICENSE OR $100, WHICHEVER IS GREATER.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Warranty Disclaimer</h2>
              <p className="mb-3">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE OPERATION</li>
                <li>ACCURACY OR RELIABILITY OF RESULTS</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless InfiniteMix, its affiliates, officers, directors,
                employees, agents, and licensors from any claims, liabilities, damages, losses, costs, or expenses
                (including reasonable attorneys' fees) arising from your use of the Service, your violation of these
                Terms, or your infringement of any intellectual property or other rights of any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Dispute Resolution & Arbitration</h2>
              <p className="mb-3">
                Any disputes arising from these Terms or the Service shall be resolved through binding arbitration,
                except that either party may seek injunctive relief in court for intellectual property disputes.
              </p>
              <p className="mb-3">
                <strong>Arbitration Rules:</strong> American Arbitration Association (AAA) rules
              </p>
              <p className="mb-3">
                <strong>Location:</strong> Arbitration conducted in Delaware, United States
              </p>
              <p>
                <strong>Class Action Waiver:</strong> You agree to resolve disputes individually, not as part of a
                class action or consolidated proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes via
                email or through prominent notice in the Service at least 30 days before changes take effect. Continued
                use of the Service after changes constitutes acceptance of the new Terms. If you don't agree to changes,
                you may terminate your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Governing Law & Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                United States, without regard to its conflict of law provisions. Any legal action or proceeding
                related to your access to or use of the Service shall be instituted only in state or federal courts
                located in Delaware.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Severability & Waiver</h2>
              <p className="mb-3">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be
                limited or eliminated to the minimum extent necessary so that the remaining Terms remain in full
                force and effect.
              </p>
              <p>
                No waiver of any term shall be deemed a further or continuing waiver of such term or any other term,
                and our failure to assert any right under these Terms shall not constitute a waiver of that right.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any other legal notices published by us on the
                Service, constitute the entire agreement between you and InfiniteMix concerning the Service and
                supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">22. Contact Information</h2>
              <p className="mb-3">
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Legal Inquiries:</strong>{' '}
                  <a href="mailto:legal@infinitemix.com" className="text-purple-600 hover:underline font-semibold">
                    legal@infinitemix.com
                  </a>
                </p>
                <p>
                  <strong>Refund Requests:</strong>{' '}
                  <a href="mailto:refunds@infinitemix.com" className="text-purple-600 hover:underline font-semibold">
                    refunds@infinitemix.com
                  </a>
                </p>
                <p>
                  <strong>General Support:</strong>{' '}
                  <Link href="/contact" className="text-purple-600 hover:underline font-semibold">
                    Contact Support
                  </Link>
                </p>
                <p>
                  <strong>AppSumo Questions:</strong> Contact AppSumo support directly
                </p>
              </div>
            </section>

            <div className="text-center pt-8 text-sm text-gray-500">
              <p>© 2025 InfiniteMix. All rights reserved.</p>
              <p className="mt-2">
                By using InfiniteMix, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
