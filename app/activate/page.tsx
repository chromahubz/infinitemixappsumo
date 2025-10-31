'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Key, Mail, Zap, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ActivatePage() {
  const [licenseKey, setLicenseKey] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [activatedPlan, setActivatedPlan] = useState<{
    plan_tier: string;
    ai_credits_total: number;
  } | null>(null);

  async function handleActivate(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/license/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ licenseKey, email })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to activate license');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setActivatedPlan(data.license);

    } catch (err: any) {
      setError(err.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              License Activated! 🎉
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              Check your email at <strong>{email}</strong> for a magic login link.
            </p>

            {activatedPlan && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Plan:</h2>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-gray-600">Plan Tier</p>
                    <p className="text-2xl font-bold text-purple-600 capitalize">{activatedPlan.plan_tier}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">AI Credits</p>
                    <p className="text-2xl font-bold text-blue-600">{activatedPlan.ai_credits_total}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">
                    <Zap className="w-4 h-4 inline mr-1 text-yellow-500" />
                    <strong>Manual Mixing:</strong> Unlimited (Forever!)
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div className="text-sm text-gray-600 bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-2">📧 Next Steps:</p>
                <ol className="text-left space-y-1">
                  <li>1. Check your email inbox (and spam folder)</li>
                  <li>2. Click the magic login link</li>
                  <li>3. Start creating amazing mixes!</li>
                </ol>
              </div>

              <Link
                href="/software"
                className="inline-block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Go to InfiniteMix
              </Link>

              <Link
                href="/"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
              <Key className="w-4 h-4" />
              AppSumo License Activation
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Activate Your License
            </h1>
            <p className="text-xl text-gray-600">
              Enter your AppSumo license key to get started with InfiniteMix
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <form onSubmit={handleActivate} className="space-y-6">
              {/* License Key Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  AppSumo License Key
                </label>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={licenseKey}
                    onChange={(e) => setLicenseKey(e.target.value.toUpperCase())}
                    placeholder="APPSUMO-XXXX-XXXX-XXXX"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-lg font-mono"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Found in your AppSumo purchase confirmation email
                </p>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-lg"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We'll send you a magic login link (no password needed!)
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">Activation Failed</p>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Activating...
                  </>
                ) : (
                  <>
                    <Zap className="w-6 h-6" />
                    Activate License
                  </>
                )}
              </button>
            </form>

            {/* Info Box */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <p>Your license is validated with AppSumo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <p>Account created with your AI credits allocated</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <p>Magic login link sent to your email (no password needed)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <p>Start creating professional mixes immediately!</p>
                </div>
              </div>
            </div>

            {/* Help Link */}
            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="text-sm text-purple-600 hover:underline"
              >
                Need help? Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
