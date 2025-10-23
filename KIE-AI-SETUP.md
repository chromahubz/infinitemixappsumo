# Kie.ai Music Generation Setup Guide

InfiniteMix now supports AI music generation using Kie.ai's powerful music generation API!

## Features

✅ **AI Mode Music Generation**
- Generate instrumentals in any genre
- Model V5 for superior quality
- Automatic genre-specific styling
- Custom titles and metadata

## Setup Instructions

### 1. Get Your Kie.ai API Key

1. Visit [https://kie.ai/api-key](https://kie.ai/api-key)
2. Sign up or log in
3. Generate your API key
4. Copy the API key

### 2. Configure Environment Variables

Open `.env.local` and add your Kie.ai API key:

```env
KIE_API_KEY=your_actual_api_key_here
```

**IMPORTANT**: Replace `your_kie_api_key_here` with your actual API key!

### 3. Setup Callback URL (For Production)

For local development, the callback URL is already configured to `http://localhost:3000`.

**For production deployment:**

1. Update `.env.local`:
   ```env
   CALLBACK_BASE_URL=https://yourdomain.com
   ```

2. Make sure your production server can receive POST requests at `/api/music-callback`

**For local testing with callbacks:**

You'll need a public URL for Kie.ai to send callbacks to your local machine:

#### Option A: Use ngrok (Recommended)
```bash
# Install ngrok: https://ngrok.com/
ngrok http 3000
```

Then update `.env.local`:
```env
CALLBACK_BASE_URL=https://your-ngrok-url.ngrok.io
```

#### Option B: Use localtunnel
```bash
npm install -g localtunnel
lt --port 3000
```

## How It Works

### 1. User Selects AI Mode

User clicks "AI Mode" and selects:
- Genre (Lofi, Trap, Ambient, EDM, etc.)
- Duration (determines number of tracks)

### 2. Generation Request

App sends request to `/api/generate-music`:
```json
{
  "genre": "Lofi",
  "count": 10
}
```

### 3. Kie.ai Processing

- Each track is queued with Kie.ai
- Returns task IDs for tracking
- Uses Model V5 with custom mode
- Generates instrumentals only

### 4. Callback Updates

Kie.ai sends callbacks to `/api/music-callback` with:
- **Stage "text"**: Lyrics/text generation complete (if applicable)
- **Stage "first"**: First variation complete
- **Stage "complete"**: Both variations ready, includes audio URLs

### 5. Polling for Status

Frontend polls `/api/generate-music?taskId=xxx` to check status:
- `pending`: Queued, waiting
- `text`: Text stage complete
- `first`: First track ready
- `complete`: All done, audio URLs available
- `failed`: Generation failed

### 6. Download & Use

Once complete:
- Audio URLs are available
- Frontend downloads the tracks
- Tracks are added to the mix playlist
- Continue with normal mix creation flow

## API Endpoints

### POST `/api/generate-music`
Generate music tracks

**Request:**
```json
{
  "genre": "Lofi",
  "count": 5
}
```

**Response:**
```json
{
  "success": true,
  "songs": [
    {
      "taskId": "abc123...",
      "index": 0,
      "title": "Lofi Vibes 1"
    }
  ],
  "message": "5 tracks queued for generation"
}
```

### GET `/api/generate-music?taskId=xxx`
Check generation status

**Response:**
```json
{
  "success": true,
  "taskId": "abc123...",
  "status": "complete",
  "audioUrl": "https://cdn.kie.ai/...",
  "audioUrl2": "https://cdn.kie.ai/...",
  "title": "Lofi Vibes 1",
  "duration": 180
}
```

### POST `/api/music-callback`
Receives callbacks from Kie.ai (automatic)

### GET `/api/music-callback`
Debug endpoint to see all tracked tasks

## Supported Genres

The system includes pre-configured styles for:
- **Lofi**: Chill beats, jazzy, mellow
- **Trap**: Heavy bass, 808s, energetic
- **Ambient**: Ethereal, peaceful, cinematic
- **EDM**: Progressive house, future bass, big room
- **Hip-Hop**: Boom bap, modern, underground
- **Jazz**: Smooth, bebop, cool jazz
- **Classical**: Orchestral, piano, string quartet

Add more in `lib/kie-api.ts` → `generateMusicMetadata()`

## Customization

### Change AI Model

Edit `app/api/generate-music/route.ts`:
```typescript
const response = await generateMusic({
  customMode: true,
  instrumental: true,
  model: 'V5', // Change to: V3_5, V4, V4_5, V4_5PLUS, V5
  style,
  title,
});
```

**Model Options:**
- `V5`: Latest, best quality, faster (Recommended ✅)
- `V4_5PLUS`: Rich sound, up to 8 min
- `V4_5`: Fast, up to 8 min
- `V4`: Improved vocals, up to 4 min
- `V3_5`: Good structure, up to 4 min

### Add New Genres

Edit `lib/kie-api.ts` → `generateMusicMetadata()`:
```typescript
'YourGenre': {
  styles: [
    'Style 1, Mood, Tempo',
    'Style 2, Mood, Tempo',
  ],
  titlePrefix: 'Your Title Prefix'
},
```

### Adjust Audio Characteristics

In `lib/kie-api.ts`, you can add optional parameters:
```typescript
await generateMusic({
  customMode: true,
  instrumental: true,
  model: 'V5',
  style,
  title,
  // Optional parameters:
  styleWeight: 0.8,        // 0-1, how strictly to follow style
  weirdnessConstraint: 0.3, // 0-1, creative deviation
  audioWeight: 0.7,         // 0-1, audio feature balance
});
```

## Testing

### 1. Test API Key
```bash
curl http://localhost:3000/api/generate-music \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"genre":"Lofi","count":1}'
```

Should return task IDs if API key is valid.

### 2. Check Task Status
```bash
curl "http://localhost:3000/api/generate-music?taskId=YOUR_TASK_ID"
```

### 3. View All Tasks
```bash
curl http://localhost:3000/api/music-callback
```

### 4. Test in App
1. Go to http://localhost:3000/app
2. Select "AI Mode"
3. Choose genre and duration
4. Click "Generate AI Music"
5. Wait for generation (check console logs)

## Troubleshooting

### "API key not configured"
- Check `.env.local` has `KIE_API_KEY=your_actual_key`
- Make sure you replaced the placeholder
- Restart the dev server after changing .env.local

### "Callback not received"
- For local dev, you need ngrok or localtunnel
- Check console for callback logs: `[Music Callback]`
- Verify `CALLBACK_BASE_URL` is publicly accessible

### "Generation stuck on pending"
- Check Kie.ai dashboard for quota/limits
- Verify API key is valid and has credits
- Check console logs for errors

### "Audio URLs not available"
- Wait for "complete" status (can take 1-3 minutes per track)
- Check `/api/music-callback` to see task status
- Look for `audioUrl` in the response

## Pricing & Limits

Check [Kie.ai Pricing](https://kie.ai/pricing) for:
- Generation credits
- API rate limits
- Track duration limits per model

**Note**: V5 model generates faster and uses fewer credits!

## Production Deployment

1. Set production environment variables in your hosting platform
2. Make sure `/api/music-callback` is publicly accessible
3. Update `CALLBACK_BASE_URL` to your production domain
4. Monitor Kie.ai dashboard for usage
5. Consider implementing task cleanup (delete old completed tasks)

## Support

- Kie.ai Docs: https://kie.ai/docs
- Kie.ai API Reference: https://kie.ai/docs/api
- InfiniteMix Issues: Create an issue in your repo

---

**Status**: ✅ AI Music Generation is READY! Just add your API key and start generating!
