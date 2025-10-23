import Link from 'next/link';
import { ArrowLeft, Code, Key, Zap, Shield } from 'lucide-react';

export default function APIPage() {
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            API Reference
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Integrate InfiniteMix into your applications with our powerful REST API.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Quick Start</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">1. Get Your API Key</h3>
                <p className="text-gray-600 mb-3">
                  Log in to your InfiniteMix account and navigate to Settings → API to generate your API key.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  API_KEY=im_live_1234567890abcdef
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">2. Make Your First Request</h3>
                <p className="text-gray-600 mb-3">
                  Use your API key to authenticate requests. Here&apos;s a simple example:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                  curl -X POST https://api.infinitemix.com/v1/mix \<br />
                  &nbsp;&nbsp;-H &quot;Authorization: Bearer YOUR_API_KEY&quot; \<br />
                  &nbsp;&nbsp;-H &quot;Content-Type: application/json&quot; \<br />
                  &nbsp;&nbsp;-d &apos;{`{`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&quot;tracks&quot;: [&quot;https://example.com/track1.mp3&quot;],<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&quot;crossfade&quot;: 8,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&quot;format&quot;: &quot;mp3&quot;<br />
                  &nbsp;&nbsp;{`}`}&apos;
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">3. Get the Result</h3>
                <p className="text-gray-600 mb-3">
                  The API returns a job ID. Poll the status endpoint to get your mix:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  {`{`}<br />
                  &nbsp;&nbsp;&quot;job_id&quot;: &quot;mix_abc123&quot;,<br />
                  &nbsp;&nbsp;&quot;status&quot;: &quot;completed&quot;,<br />
                  &nbsp;&nbsp;&quot;download_url&quot;: &quot;https://cdn.infinitemix.com/abc123.mp3&quot;<br />
                  {`}`}
                </div>
              </div>
            </div>
          </div>

          {/* API Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Key className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Simple Authentication</h3>
              <p className="text-gray-600">
                Bearer token authentication for secure and straightforward API access.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rate Limiting</h3>
              <p className="text-gray-600">
                Fair usage limits: 100 requests/hour for standard accounts. Scales with usage.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">RESTful Design</h3>
              <p className="text-gray-600">
                Clean, predictable REST API following industry best practices and standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Endpoints */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Main Endpoints</h2>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-sm">POST</span>
                <code className="text-lg font-mono text-gray-900">/v1/mix</code>
              </div>
              <p className="text-gray-600 mb-4">Create a new mix from multiple audio tracks.</p>
              <details className="text-sm">
                <summary className="cursor-pointer font-semibold text-purple-600 mb-2">View Parameters</summary>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs">
                  {`{`}<br />
                  &nbsp;&nbsp;&quot;tracks&quot;: [&quot;url1&quot;, &quot;url2&quot;], // Required: Array of track URLs<br />
                  &nbsp;&nbsp;&quot;crossfade&quot;: 8, // Optional: Crossfade duration in seconds (0-20)<br />
                  &nbsp;&nbsp;&quot;format&quot;: &quot;mp3&quot;, // Optional: Output format (mp3, wav, mp4)<br />
                  &nbsp;&nbsp;&quot;normalize&quot;: true // Optional: Enable volume normalization<br />
                  {`}`}
                </div>
              </details>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold text-sm">GET</span>
                <code className="text-lg font-mono text-gray-900">/v1/mix/:job_id</code>
              </div>
              <p className="text-gray-600 mb-4">Get the status and result of a mix job.</p>
              <details className="text-sm">
                <summary className="cursor-pointer font-semibold text-purple-600 mb-2">View Response</summary>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs">
                  {`{`}<br />
                  &nbsp;&nbsp;&quot;job_id&quot;: &quot;mix_abc123&quot;,<br />
                  &nbsp;&nbsp;&quot;status&quot;: &quot;completed&quot;, // pending, processing, completed, failed<br />
                  &nbsp;&nbsp;&quot;progress&quot;: 100,<br />
                  &nbsp;&nbsp;&quot;download_url&quot;: &quot;https://cdn.infinitemix.com/abc123.mp3&quot;,<br />
                  &nbsp;&nbsp;&quot;duration&quot;: 245.6<br />
                  {`}`}
                </div>
              </details>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm">POST</span>
                <code className="text-lg font-mono text-gray-900">/v1/analyze</code>
              </div>
              <p className="text-gray-600 mb-4">Analyze a track to get BPM, key, and energy information.</p>
              <details className="text-sm">
                <summary className="cursor-pointer font-semibold text-purple-600 mb-2">View Parameters</summary>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs">
                  {`{`}<br />
                  &nbsp;&nbsp;&quot;track_url&quot;: &quot;https://example.com/track.mp3&quot; // Required<br />
                  {`}`}
                </div>
              </details>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold text-sm">DELETE</span>
                <code className="text-lg font-mono text-gray-900">/v1/mix/:job_id</code>
              </div>
              <p className="text-gray-600">Cancel a pending or processing mix job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Code Examples</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">JavaScript / Node.js</h3>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 overflow-x-auto">
                const response = await fetch(<br />
                &nbsp;&nbsp;&apos;https://api.infinitemix.com/v1/mix&apos;,<br />
                &nbsp;&nbsp;{`{`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;method: &apos;POST&apos;,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;headers: {`{`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&apos;Authorization&apos;: &apos;Bearer YOUR_API_KEY&apos;,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&apos;Content-Type&apos;: &apos;application/json&apos;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`},<br />
                &nbsp;&nbsp;&nbsp;&nbsp;body: JSON.stringify({`{`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tracks: [&apos;url1.mp3&apos;, &apos;url2.mp3&apos;],<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossfade: 8<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`})<br />
                &nbsp;&nbsp;{`}`}<br />
                );
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Python</h3>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 overflow-x-auto">
                import requests<br />
                <br />
                response = requests.post(<br />
                &nbsp;&nbsp;&apos;https://api.infinitemix.com/v1/mix&apos;,<br />
                &nbsp;&nbsp;headers={`{`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&apos;Authorization&apos;: &apos;Bearer YOUR_API_KEY&apos;<br />
                &nbsp;&nbsp;{`}`},<br />
                &nbsp;&nbsp;json={`{`}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&apos;tracks&apos;: [&apos;url1.mp3&apos;, &apos;url2.mp3&apos;],<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&apos;crossfade&apos;: 8<br />
                &nbsp;&nbsp;{`}`}<br />
                )
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Need Help with the API?</h2>
            <p className="text-xl mb-8 text-white/90">
              Check our full documentation or contact our developer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/documentation" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                Full Documentation
              </Link>
              <Link href="/contact" className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
