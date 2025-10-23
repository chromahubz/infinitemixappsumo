'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Music, Loader2, CheckCircle, XCircle, Download } from 'lucide-react';

export default function TestPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [genre, setGenre] = useState('Lofi');
  const [polling, setPolling] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioUrl2, setAudioUrl2] = useState<string | null>(null);
  const [songTitle, setSongTitle] = useState<string>('');
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualUrl, setManualUrl] = useState('');
  const [manualUrl2, setManualUrl2] = useState('');

  const genres = ['Lofi', 'Trap', 'Ambient', 'EDM', 'Hip-Hop', 'Jazz', 'Classical'];

  const handleTestGeneration = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTaskId(null);

    try {
      console.log(`Testing generation: 1 ${genre} track`);

      const response = await axios.post('/api/generate-music', {
        genre,
        count: 1, // Always generate just 1 song for testing
      });

      console.log('Response:', response.data);

      if (response.data.success && response.data.songs.length > 0) {
        const song = response.data.songs[0];
        setTaskId(song.taskId);
        setSongTitle(song.title);
        setResult({
          success: true,
          taskId: song.taskId,
          title: song.title,
          message: 'Song queued successfully! Checking status automatically...',
        });
        setPolling(true); // Start auto-polling
        setStatus('pending');
      }
    } catch (err: any) {
      console.error('Test failed:', err);
      setError(err.response?.data?.details || err.message || 'Test failed');
    } finally {
      setLoading(false);
    }
  };

  // Auto-poll for status
  useEffect(() => {
    if (!taskId || !polling) return;

    const pollInterval = setInterval(async () => {
      try {
        const response = await axios.get(`/api/generate-music?taskId=${taskId}`);
        console.log('Status check:', response.data);

        setStatus(response.data.status || 'pending');

        if (response.data.status === 'complete' && response.data.audioUrl) {
          setAudioUrl(response.data.audioUrl);
          setAudioUrl2(response.data.audioUrl2 || null);
          setSongTitle(response.data.title || 'Generated Song');
          setPolling(false);
          console.log('Songs ready!', response.data.audioUrl, response.data.audioUrl2);
        } else if (response.data.status === 'failed') {
          setError('Generation failed. Please try again.');
          setPolling(false);
        }
      } catch (err: any) {
        console.error('Status check failed:', err);
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(pollInterval);
  }, [taskId, polling]);

  const checkStatus = async () => {
    if (!taskId) return;

    try {
      const response = await axios.get(`/api/generate-music?taskId=${taskId}`);
      console.log('Manual status check:', response.data);

      setStatus(response.data.status || 'pending');

      if (response.data.status === 'complete' && response.data.audioUrl) {
        setAudioUrl(response.data.audioUrl);
        setAudioUrl2(response.data.audioUrl2 || null);
        setSongTitle(response.data.title || 'Generated Song');
      }

      alert(`Status: ${response.data.status}\n\n${JSON.stringify(response.data, null, 2)}`);
    } catch (err: any) {
      alert('Failed to check status: ' + err.message);
    }
  };

  const handleManualUrls = () => {
    if (manualUrl) {
      setAudioUrl(manualUrl);
      setAudioUrl2(manualUrl2 || null);
      setShowManualInput(false);
      console.log('Manual URLs set:', manualUrl, manualUrl2);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <Music className="w-10 h-10 text-purple-600" />
            AI Music Test
          </h1>
          <p className="text-gray-600">Generate 1 song for testing (saves credits)</p>
        </div>

        {/* Test Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Genre Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Select Genre
            </label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
              disabled={loading}
            >
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Test Button */}
          <button
            onClick={handleTestGeneration}
            disabled={loading}
            className="w-full py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Testing...
              </>
            ) : (
              <>
                <Music className="w-5 h-5" />
                Test Generate 1 Song
              </>
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-bold text-green-900 mb-2">Success!</h3>
                  <p className="text-sm text-green-800 mb-2">{result.message}</p>
                  <div className="bg-white p-3 rounded border border-green-200 text-xs font-mono mb-3">
                    <div className="mb-1"><strong>Task ID:</strong> {result.taskId}</div>
                    <div className="mb-1"><strong>Title:</strong> {result.title}</div>
                    <div><strong>Status:</strong> <span className="capitalize">{status || 'pending'}</span></div>
                  </div>

                  {/* Polling indicator */}
                  {polling && !audioUrl && (
                    <div className="flex items-center gap-2 text-sm text-green-800 mb-3">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating... This takes 1-3 minutes. Checking status every 5 seconds.</span>
                    </div>
                  )}

                  {/* Audio Players */}
                  {audioUrl && (
                    <div className="mt-4 space-y-4">
                      {/* Song 1 */}
                      <div className="p-4 bg-white rounded-lg border-2 border-green-300">
                        <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                          <Music className="w-5 h-5" />
                          Song 1 - {songTitle}
                        </h4>
                        <audio controls className="w-full mb-3">
                          <source src={audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                        <a
                          href={audioUrl}
                          download={`${songTitle}_v1.mp3`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download Song 1
                        </a>
                      </div>

                      {/* Song 2 */}
                      {audioUrl2 && (
                        <div className="p-4 bg-white rounded-lg border-2 border-blue-300">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <Music className="w-5 h-5" />
                            Song 2 - {songTitle} (Variation)
                          </h4>
                          <audio controls className="w-full mb-3">
                            <source src={audioUrl2} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                          <a
                            href={audioUrl2}
                            download={`${songTitle}_v2.mp3`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download Song 2
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {!audioUrl && (
                    <div className="mt-3 space-y-2">
                      <button
                        onClick={checkStatus}
                        className="w-full px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors"
                      >
                        Check Status Manually
                      </button>
                      <button
                        onClick={() => setShowManualInput(!showManualInput)}
                        className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                      >
                        {showManualInput ? 'Hide' : 'Paste Audio URLs From Kie.ai'}
                      </button>

                      {showManualInput && (
                        <div className="p-4 bg-blue-50 rounded border border-blue-200 space-y-3">
                          <p className="text-xs text-blue-800 mb-2">
                            Visit <a href="https://kie.ai/dashboard" target="_blank" rel="noopener noreferrer" className="underline font-medium">kie.ai/dashboard</a> to find your generated songs, then paste the URLs below:
                          </p>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Audio URL 1:</label>
                            <input
                              type="text"
                              value={manualUrl}
                              onChange={(e) => setManualUrl(e.target.value)}
                              placeholder="https://cdn1.suno.ai/..."
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Audio URL 2 (optional):</label>
                            <input
                              type="text"
                              value={manualUrl2}
                              onChange={(e) => setManualUrl2(e.target.value)}
                              placeholder="https://cdn1.suno.ai/..."
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                          <button
                            onClick={handleManualUrls}
                            disabled={!manualUrl}
                            className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                          >
                            Load Songs
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">Error</h3>
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Info */}
          <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2 text-sm">Test Info:</h3>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Generates 1 request = <strong>2 song variations!</strong> 🎵</li>
              <li>• Uses Model V5 (best quality & fastest)</li>
              <li>• Instrumental only (no vocals)</li>
              <li>• Takes 1-3 minutes to complete</li>
              <li>• For localhost: Click "Paste Audio URLs From Kie.ai" to manually load songs</li>
              <li>• For production: Callbacks work automatically</li>
            </ul>
          </div>

          {/* Links */}
          <div className="mt-6 flex gap-3">
            <a
              href="/app"
              className="flex-1 py-2 text-center border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              Go to Full App
            </a>
            <a
              href="/"
              className="flex-1 py-2 text-center border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Go to Home
            </a>
          </div>
        </div>

        {/* Debug Info */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Server: <span className="font-mono">{typeof window !== 'undefined' ? window.location.origin : 'localhost:3002'}</span></p>
        </div>
      </div>
    </main>
  );
}
