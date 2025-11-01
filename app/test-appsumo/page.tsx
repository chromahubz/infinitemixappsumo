'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

export default function TestAppSumoPage() {
  const [email, setEmail] = useState('');
  const [planTier, setPlanTier] = useState<'creator' | 'pro' | 'studio' | 'agency'>('pro');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  async function handleCreateTestLicense() {
    setError('');
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/test/activate-license', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, planTier })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to create test license');
        setLoading(false);
        return;
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🧪 Test AppSumo Purchase
            </h1>
            <p className="text-gray-600">
              Simulate an AppSumo license activation for testing
            </p>
          </div>

          {!result ? (
            <>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="test@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plan Tier
                  </label>
                  <select
                    value={planTier}
                    onChange={(e) => setPlanTier(e.target.value as any)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-gray-900"
                  >
                    <option value="creator">Creator - 2000 credits ($29)</option>
                    <option value="pro">Pro - 5000 credits ($69)</option>
                    <option value="studio">Studio - 10000 credits ($119)</option>
                    <option value="agency">Agency - 18000 credits ($199)</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-700 font-medium">❌ {error}</p>
                </div>
              )}

              <button
                onClick={handleCreateTestLicense}
                disabled={loading || !email}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Test License...' : '🚀 Create Test License'}
              </button>

              <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ Test Mode Only:</strong> This creates a real license in the database.
                  Use a test email address!
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  ✅ Test License Created!
                </h2>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">License Key:</span>
                    <p className="font-mono bg-white p-2 rounded mt-1 text-gray-900">
                      {result.licenseKey}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-700">Email:</span>
                    <p className="text-gray-900">{result.email}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-700">Plan:</span>
                    <p className="text-gray-900 capitalize">{result.planTier}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-700">AI Credits:</span>
                    <p className="text-gray-900">{result.credits}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3">📧 Next Steps:</h3>
                <ol className="space-y-2 text-sm text-blue-800">
                  <li>1. Check your email inbox (and spam folder)</li>
                  <li>2. Click the magic login link</li>
                  <li>3. You'll be redirected to /software</li>
                  <li>4. You should see the credit badge in the top right!</li>
                </ol>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/software"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all text-center"
                >
                  Go to InfiniteMix
                </Link>

                <button
                  onClick={() => setResult(null)}
                  className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-all"
                >
                  Create Another
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            🧪 This is a testing tool. Remove before production launch!
          </p>
        </div>
      </div>
    </div>
  );
}
