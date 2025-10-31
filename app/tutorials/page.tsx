import Link from 'next/link';
import { ArrowLeft, Music, Upload, Wand2, Sliders, Image, Video, Download, CheckCircle, Sparkles, Zap, Headphones, Play, Settings, ListMusic } from 'lucide-react';

export default function TutorialsPage() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Complete Written Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            How to Create Amazing Mixes with <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">InfiniteMix</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step-by-step written tutorials with real examples. No videos, just clear instructions to get you creating professional music content in minutes.
          </p>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Start: Your First Mix in 5 Minutes</h2>
            <p className="text-lg text-gray-600">Follow this simple guide to create your first professional music mix</p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <Music className="w-7 h-7 text-purple-600" />
                    Choose Your Mode
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    InfiniteMix offers two powerful ways to create music content:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-5 border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Wand2 className="w-5 h-5 text-purple-600" />
                        <h4 className="font-bold text-gray-900">AI Generation Mode</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">Perfect for creating unique, royalty-free music from scratch</p>
                      <p className="text-sm font-semibold text-purple-600">Best for:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• YouTube channels & content creators</li>
                        <li>• Lofi beats & study music</li>
                        <li>• Background music for videos</li>
                        <li>• Copyright-free content</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-5 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Upload className="w-5 h-5 text-blue-600" />
                        <h4 className="font-bold text-gray-900">Manual Upload Mode</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">Upload your own MP3/WAV files for professional mixing</p>
                      <p className="text-sm font-semibold text-blue-600">Best for:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• DJs creating mixes & sets</li>
                        <li>• Party playlists with crossfades</li>
                        <li>• Mixing your music library</li>
                        <li>• Demo creation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - AI Mode */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2A
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <Wand2 className="w-7 h-7 text-purple-600" />
                    AI Generation: Configure Your Mix
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Set up your AI-generated music mix with these simple settings:
                  </p>

                  <div className="bg-white rounded-lg p-6 border border-purple-200 mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Example: Creating a Lofi Study Mix</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Settings className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Genre Selection</p>
                          <p className="text-sm text-gray-600">Choose "Lofi" from the dropdown menu. Other options: EDM, Hip-Hop, Jazz, Classical, Ambient, Trap, Synthwave, Vaporwave, and more.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sliders className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Total Duration</p>
                          <p className="text-sm text-gray-600">Set to 60 minutes for a full study session mix. The AI will generate enough tracks to fill this duration.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Crossfade Duration</p>
                          <p className="text-sm text-gray-600">Set to 5 seconds for smooth, seamless transitions between tracks. Range: 0-10 seconds (0 = instant switch, 10 = long blend)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Music className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Number of Songs</p>
                          <p className="text-sm text-gray-600">Choose how many unique AI tracks to generate (e.g., 15 tracks for variety in your mix)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">💡 Pro Tip:</p>
                    <p className="text-sm text-blue-800">For viral lofi content, use 3-5 second crossfades and aim for 30-60 minute mixes. This sweet spot keeps listeners engaged and boosts watch time!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2B - Manual Mode */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2B
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <Upload className="w-7 h-7 text-blue-600" />
                    Manual Upload: Add Your Music Files
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Upload your own songs and let InfiniteMix analyze and sequence them perfectly:
                  </p>

                  <div className="bg-white rounded-lg p-6 border border-blue-200 mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Example: Creating a Party Mix</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Step 1: Upload Your Tracks</p>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Drag and drop MP3, WAV, or M4A files into the upload zone</li>
                          <li>• Or click "Browse Files" to select from your computer</li>
                          <li>• Upload as many tracks as you want (no limit!)</li>
                          <li>• Typical party mix: 20-50 songs for 2-4 hours</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded p-4 border-l-4 border-blue-600">
                        <p className="font-semibold text-gray-900 mb-2">Real Example:</p>
                        <p className="text-sm text-gray-700 mb-2">You're hosting a house party tonight. You have 35 songs in your "Party Bangers" folder:</p>
                        <code className="text-xs bg-gray-800 text-green-400 px-2 py-1 rounded block">
                          1. Daft Punk - One More Time.mp3<br/>
                          2. Calvin Harris - Summer.mp3<br/>
                          3. Mark Ronson - Uptown Funk.mp3<br/>
                          ... (32 more tracks)
                        </code>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Step 2: AI Analyzes Your Music</p>
                        <p className="text-sm text-gray-600 mb-2">InfiniteMix automatically detects:</p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded border border-blue-100">
                            <p className="font-semibold text-sm text-gray-900">🎵 BPM (Beats Per Minute)</p>
                            <p className="text-xs text-gray-600">Tempo of each track (e.g., 128 BPM for house music)</p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded border border-blue-100">
                            <p className="font-semibold text-sm text-gray-900">🎹 Musical Key</p>
                            <p className="text-xs text-gray-600">Harmonic key (e.g., C major, A minor) for compatible mixing</p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded border border-blue-100">
                            <p className="font-semibold text-sm text-gray-900">⚡ Energy Level</p>
                            <p className="text-xs text-gray-600">Track intensity for smart sequencing</p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded border border-blue-100">
                            <p className="font-semibold text-sm text-gray-900">🔊 Audio Quality</p>
                            <p className="text-xs text-gray-600">Analyzes frequency spectrum and dynamics</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Step 3: Smart Auto-Sequencing</p>
                        <p className="text-sm text-gray-600 mb-2">InfiniteMix automatically reorders your tracks for perfect flow using:</p>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• <strong>Harmonic Mixing:</strong> Places compatible keys together (e.g., C major → G major → D major)</li>
                          <li>• <strong>Energy Progression:</strong> Builds energy throughout the mix for dancefloor magic</li>
                          <li>• <strong>BPM Matching:</strong> Groups similar tempos to avoid jarring tempo changes</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Step 4: Manual Adjustments (Optional)</p>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• Drag and drop to reorder tracks manually if desired</li>
                          <li>• Remove tracks you don't want in the final mix</li>
                          <li>• Adjust crossfade duration (0-10 seconds per transition)</li>
                          <li>• Toggle "Skip Analysis" if you just want simple stitching</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-yellow-900 mb-2">⚡ Pro DJ Tip:</p>
                    <p className="text-sm text-yellow-800">Use 7-10 second crossfades for party mixes. This creates smooth, DJ-style transitions that professional mixers would charge hundreds for!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border-2 border-pink-200">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-pink-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <Image className="w-7 h-7 text-pink-600" />
                    Generate AI Thumbnails
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Create eye-catching visuals for your music mix that drive clicks and views:
                  </p>

                  <div className="bg-white rounded-lg p-6 border border-pink-200 mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Two Thumbnail Options:</h4>

                    <div className="space-y-4">
                      <div className="border-l-4 border-pink-600 pl-4">
                        <p className="font-semibold text-gray-900 mb-2">Option 1: Single Static Thumbnail</p>
                        <p className="text-sm text-gray-700 mb-2">Best for: Simple, clean look with one image throughout the video</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Enter your prompt: "Cozy lofi coffee shop with warm lighting and vinyl records"</li>
                          <li>• AI generates a high-quality image in seconds</li>
                          <li>• Perfect for study music, ambient tracks, single-mood mixes</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-pink-600 pl-4">
                        <p className="font-semibold text-gray-900 mb-2">Option 2: Multiple Thumbnails with Transitions</p>
                        <p className="text-sm text-gray-700 mb-2">Best for: Dynamic videos that keep viewers engaged with changing visuals</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Generate multiple images (e.g., 4-8 different scenes)</li>
                          <li>• InfiniteMix automatically syncs image changes to your music</li>
                          <li>• Smooth fade transitions between each visual</li>
                          <li>• Perfect for music channels, compilations, party mixes</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-pink-50 rounded">
                      <p className="font-semibold text-gray-900 mb-2">🎨 Example Prompts:</p>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Lofi Study Mix:</strong> "Aesthetic bedroom setup with plants, LED lights, gaming PC, rainy window view, cozy vibes"</p>
                        <p><strong>Trap/Hip-Hop:</strong> "Urban cityscape at night with neon lights, luxury cars, downtown skyscrapers"</p>
                        <p><strong>Ambient/Meditation:</strong> "Peaceful zen garden with cherry blossoms, koi pond, soft morning light"</p>
                        <p><strong>EDM/Party:</strong> "Energetic festival crowd, colorful laser lights, DJ stage, euphoric atmosphere"</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-pink-900 mb-2">📈 YouTube Growth Tip:</p>
                    <p className="text-sm text-pink-800">Multiple thumbnails with transitions increase watch time by keeping videos visually interesting. Channels using this technique see 30-50% better retention!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-green-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <ListMusic className="w-7 h-7 text-green-600" />
                    Auto-Generate YouTube Description
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Get SEO-optimized descriptions with perfect timestamps automatically:
                  </p>

                  <div className="bg-white rounded-lg p-6 border border-green-200 mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">What InfiniteMix Creates for You:</h4>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Engaging Title & Introduction</p>
                          <p className="text-sm text-gray-600">Hook viewers with compelling description text optimized for search</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Accurate Timestamps</p>
                          <p className="text-sm text-gray-600">Every track gets a timestamp so viewers can jump to their favorites</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">SEO Keywords</p>
                          <p className="text-sm text-gray-600">Relevant tags and keywords to help your video rank in search</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Call-to-Action</p>
                          <p className="text-sm text-gray-600">Encourages likes, subscribes, and engagement</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded p-4 border-l-4 border-green-600">
                      <p className="font-semibold text-gray-900 mb-2">📝 Example Output:</p>
                      <div className="text-xs bg-gray-800 text-green-400 p-3 rounded font-mono">
                        🎵 Lofi Beats to Study/Relax To - 1 Hour Chill Mix<br/><br/>

                        Perfect background music for studying, working, or relaxing.<br/>
                        This 60-minute lofi hip hop mix features smooth beats and jazzy vibes.<br/><br/>

                        📚 TIMESTAMPS:<br/>
                        00:00 - Chill Lofi Beat 1<br/>
                        03:45 - Relaxing Study Track<br/>
                        07:20 - Coffee Shop Vibes<br/>
                        11:15 - Late Night Focus<br/>
                        ...<br/><br/>

                        🎧 Subscribe for more lofi mixes!<br/>
                        💜 Like if this helps you study/work<br/>
                        💬 Comment your favorite track!
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-900 mb-2">🚀 Algorithm Hack:</p>
                    <p className="text-sm text-green-800">Timestamps make your videos more likely to appear in YouTube's "Key Moments" feature, dramatically increasing click-through rates and visibility!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border-2 border-indigo-200">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <Video className="w-7 h-7 text-indigo-600" />
                    Generate & Preview Your Video
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Watch your creation come to life before downloading:
                  </p>

                  <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Click "Generate Mix"</p>
                        <p className="text-sm text-gray-600">InfiniteMix processes everything:</p>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4 mt-2">
                          <li>• Applies crossfades between all tracks</li>
                          <li>• Syncs thumbnails with audio timing</li>
                          <li>• Encodes high-quality video (MP4 format)</li>
                          <li>• Embeds all metadata and timestamps</li>
                        </ul>
                      </div>

                      <div className="bg-indigo-50 rounded p-4">
                        <p className="font-semibold text-gray-900 mb-2">⏱️ Processing Time:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>10-minute mix:</strong> ~1-2 minutes</li>
                          <li>• <strong>30-minute mix:</strong> ~2-3 minutes</li>
                          <li>• <strong>60-minute mix:</strong> ~3-5 minutes</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-2 italic">Processing speed depends on mix length and number of tracks</p>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Preview Before Download</p>
                        <p className="text-sm text-gray-600">Watch/listen to your mix in the browser to ensure everything sounds perfect. Check:</p>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4 mt-2">
                          <li>✓ Crossfade transitions are smooth</li>
                          <li>✓ Thumbnail changes sync with music</li>
                          <li>✓ Volume levels are consistent</li>
                          <li>✓ Track order flows well</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <Download className="w-7 h-7 text-purple-600" />
                    Download & Upload to YouTube
                  </h3>
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    Your professional mix is ready! Here's how to publish:
                  </p>

                  <div className="bg-white rounded-lg p-6 border border-purple-200 mb-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">📥 Download Your Video</p>
                        <p className="text-sm text-gray-600 mb-2">Click "Download" to save your MP4 file. You get:</p>
                        <ul className="text-sm text-gray-600 space-y-1 ml-4">
                          <li>• High-quality MP4 video file (1080p)</li>
                          <li>• Professional audio mix with perfect crossfades</li>
                          <li>• AI-generated thumbnail(s) embedded</li>
                          <li>• Ready to upload immediately</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">📺 Upload to YouTube</p>
                        <ol className="text-sm text-gray-600 space-y-2 ml-4 list-decimal">
                          <li>Go to YouTube Studio → Create → Upload videos</li>
                          <li>Select your InfiniteMix video file</li>
                          <li>Copy-paste the auto-generated description (with timestamps!)</li>
                          <li>Add relevant tags: lofi, study music, chill beats, etc.</li>
                          <li>Choose a custom thumbnail or use InfiniteMix's generated one</li>
                          <li>Set visibility to Public → Publish!</li>
                        </ol>
                      </div>

                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded p-4">
                        <p className="font-semibold text-gray-900 mb-2">🎉 You're Done!</p>
                        <p className="text-sm text-gray-700">What took professional DJs hours to create, you just did in under 5 minutes. Share your mix and watch the views roll in!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Tips & Techniques</h2>
            <p className="text-xl text-gray-600">Take your mixes to the next level with these pro strategies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Headphones className="w-6 h-6 text-purple-600" />
                Harmonic Mixing Secrets
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                InfiniteMix uses the <strong>Camelot Wheel</strong> for harmonic mixing. Compatible keys create smooth, musical transitions:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Perfect Match:</strong> Same key (8A → 8A)</li>
                <li>• <strong>Energy Boost:</strong> +1 position (8A → 9A)</li>
                <li>• <strong>Energy Drop:</strong> -1 position (8A → 7A)</li>
                <li>• <strong>Mood Shift:</strong> Same number, opposite letter (8A → 8B)</li>
              </ul>
              <div className="mt-3 p-3 bg-purple-50 rounded text-xs text-gray-700">
                <strong>Example:</strong> A track in C major (8B) mixes perfectly with G major (9B) or A minor (8A)
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-600" />
                Crossfade Duration Guide
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Choose the right crossfade length for your mix style:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>0-2 seconds:</strong> Quick cuts, radio-style transitions</li>
                <li>• <strong>3-5 seconds:</strong> Smooth blends, lofi/study music</li>
                <li>• <strong>6-8 seconds:</strong> DJ-style mixes, party playlists</li>
                <li>• <strong>9-10 seconds:</strong> Long ambient blends, meditation music</li>
              </ul>
              <div className="mt-3 p-3 bg-yellow-50 rounded text-xs text-gray-700">
                <strong>Pro Tip:</strong> Longer crossfades work best when tracks have compatible keys and similar BPMs
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Play className="w-6 h-6 text-green-600" />
                YouTube Optimization
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Maximize views and engagement:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Length:</strong> 30-60 min mixes perform best (sweet spot for watch time)</li>
                <li>• <strong>Title Format:</strong> "[Genre] to Study/Relax To - [Duration] Mix"</li>
                <li>• <strong>Upload Time:</strong> 2-4 PM EST for maximum initial engagement</li>
                <li>• <strong>Thumbnails:</strong> Use text overlays like "1 HOUR", "CHILL VIBES", "2024"</li>
              </ul>
              <div className="mt-3 p-3 bg-green-50 rounded text-xs text-gray-700">
                <strong>Growth Hack:</strong> Create a series with consistent branding for better channel recognition
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Music className="w-6 h-6 text-blue-600" />
                Genre-Specific Tips
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Optimize settings by genre:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Lofi:</strong> 70-90 BPM, 4-6 sec crossfades, cozy thumbnails</li>
                <li>• <strong>EDM/House:</strong> 120-130 BPM, 8-10 sec crossfades, energetic visuals</li>
                <li>• <strong>Hip-Hop:</strong> 85-115 BPM, 3-5 sec crossfades, urban aesthetic</li>
                <li>• <strong>Ambient:</strong> 60-80 BPM, 10 sec crossfades, nature/space themes</li>
              </ul>
              <div className="mt-3 p-3 bg-blue-50 rounded text-xs text-gray-700">
                <strong>Mix It Up:</strong> Combine similar BPM ranges for best results (within ±10 BPM)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
            <p className="text-xl text-gray-600">See what creators are making with InfiniteMix</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  MK
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Marcus - Lofi YouTube Channel</p>
                  <p className="text-sm text-purple-600 mb-3">150K subscribers</p>
                  <p className="text-gray-700 mb-3">
                    "I create three 1-hour lofi mixes per week using AI generation mode. Each mix: 15 AI tracks, 5-second crossfades, 3 rotating thumbnails. My channel hit 100K subs in 3 months."
                  </p>
                  <div className="bg-white rounded p-3 border border-purple-200">
                    <p className="text-xs font-semibold text-gray-900 mb-1">Marcus's Settings:</p>
                    <p className="text-xs text-gray-600">Genre: Lofi | Duration: 60 min | Crossfade: 5 sec | Thumbnails: 3 with transitions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  DJ
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">David - Professional DJ</p>
                  <p className="text-sm text-blue-600 mb-3">12 years experience</p>
                  <p className="text-gray-700 mb-3">
                    "I upload 40-50 personal tracks for house parties and events. Manual upload mode with 8-second crossfades creates seamless 3-hour sets. Saves me hours compared to Traktor or Ableton."
                  </p>
                  <div className="bg-white rounded p-3 border border-blue-200">
                    <p className="text-xs font-semibold text-gray-900 mb-1">David's Settings:</p>
                    <p className="text-xs text-gray-600">Mode: Manual Upload | Tracks: 40-50 | Crossfade: 8 sec | Auto-sequence: ON</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  AC
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Amanda - Content Creator</p>
                  <p className="text-sm text-green-600 mb-3">Started 2 months ago</p>
                  <p className="text-gray-700 mb-3">
                    "Zero music experience. First viral mix hit 50K views in 48 hours! I use AI generation for ambient study music. Multiple thumbnails keep viewers watching longer."
                  </p>
                  <div className="bg-white rounded p-3 border border-green-200">
                    <p className="text-xs font-semibold text-gray-900 mb-1">Amanda's Settings:</p>
                    <p className="text-xs text-gray-600">Genre: Ambient | Duration: 30 min | Crossfade: 6 sec | Thumbnails: 5 with transitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your First Mix?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Follow these tutorials and start producing professional music content in minutes
          </p>
          <Link
            href="/software"
            className="inline-flex items-center gap-2 px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
          >
            <Play className="w-6 h-6" />
            Launch InfiniteMix Now
          </Link>
        </div>
      </section>
    </div>
  );
}
