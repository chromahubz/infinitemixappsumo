import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, FileCheck, Server } from 'lucide-react';

export default function SecurityPage() {
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

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Security
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-10">
            Your data security and privacy are our top priorities. Learn how we protect your information.
          </p>

          {/* Security Badges */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 mb-10 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Shield className="w-12 h-12 mx-auto mb-2" />
                <div className="font-bold text-lg">SOC 2 Type II</div>
                <div className="text-sm text-white/80">Certified</div>
              </div>
              <div>
                <Lock className="w-12 h-12 mx-auto mb-2" />
                <div className="font-bold text-lg">GDPR</div>
                <div className="text-sm text-white/80">Compliant</div>
              </div>
              <div>
                <FileCheck className="w-12 h-12 mx-auto mb-2" />
                <div className="font-bold text-lg">ISO 27001</div>
                <div className="text-sm text-white/80">Certified</div>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security Measures</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Encryption</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• TLS 1.3 for all data in transit</li>
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• Encrypted database backups</li>
                      <li>• End-to-end encryption for file uploads</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Access Control</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Two-factor authentication (2FA)</li>
                      <li>• Role-based access control (RBAC)</li>
                      <li>• Single Sign-On (SSO) support</li>
                      <li>• Automatic session timeout</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Infrastructure</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• AWS cloud infrastructure</li>
                      <li>• Multi-region redundancy</li>
                      <li>• DDoS protection via CloudFlare</li>
                      <li>• Regular security patches</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• 24/7 security monitoring</li>
                      <li>• Intrusion detection systems</li>
                      <li>• Automated threat response</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Protection</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Files</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Files are encrypted immediately upon upload</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Stored in secure AWS S3 buckets with restricted access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Automatically deleted after 30 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Only accessible by you and authorized processing systems</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Account</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Passwords hashed with bcrypt (industry standard)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Optional two-factor authentication for extra security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Email notifications for login from new devices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Ability to revoke access from individual devices</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Backups</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Daily encrypted backups to multiple locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Point-in-time recovery capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Backups stored in geographically separate regions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance & Certifications</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-purple-900 mb-2">GDPR Compliant</h3>
                <p className="text-gray-700 text-sm">
                  Fully compliant with EU General Data Protection Regulation for user privacy and data rights.
                </p>
                <Link href="/gdpr" className="text-purple-600 hover:underline text-sm mt-2 inline-block">
                  Learn more →
                </Link>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">SOC 2 Type II</h3>
                <p className="text-gray-700 text-sm">
                  Audited and certified for security, availability, processing integrity, confidentiality, and privacy.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-green-900 mb-2">ISO 27001</h3>
                <p className="text-gray-700 text-sm">
                  International standard for information security management systems (ISMS).
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-yellow-900 mb-2">CCPA Compliant</h3>
                <p className="text-gray-700 text-sm">
                  Compliant with California Consumer Privacy Act for California residents' data rights.
                </p>
              </div>
            </div>
          </div>

          {/* Security Practices */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Practices</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Regular Security Audits</h3>
                  <p className="text-gray-600 text-sm">Annual third-party penetration testing and security assessments</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Employee Training</h3>
                  <p className="text-gray-600 text-sm">All staff undergo security awareness training and background checks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Incident Response Plan</h3>
                  <p className="text-gray-600 text-sm">Documented procedures for detecting, responding to, and recovering from security incidents</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Vulnerability Management</h3>
                  <p className="text-gray-600 text-sm">Continuous scanning and patching of software vulnerabilities</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Secure Development</h3>
                  <p className="text-gray-600 text-sm">Security built into our development lifecycle with code reviews and automated testing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Report Vulnerability */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Found a Security Issue?</h2>
            <p className="text-xl mb-6 text-white/90">
              We take security seriously. If you've discovered a vulnerability, please report it responsibly.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="mb-2"><strong>Security Team Email:</strong> security@infinitemix.com</p>
              <p className="mb-2"><strong>PGP Key:</strong> Available upon request</p>
              <p className="text-sm text-white/80">
                We'll acknowledge your report within 24 hours and provide updates as we investigate.
              </p>
            </div>
            <a
              href="mailto:security@infinitemix.com"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Report Vulnerability
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
