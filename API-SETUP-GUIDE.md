# API Setup Guide for InfiniteMix

## 🔑 API Keys You Need

### 1. Google Gemini API (for Description & Prompt Generation)
**Status:** ⚠️ REQUIRED - Currently not configured

**What it does:**
- Generates YouTube descriptions for your mixes
- Creates AI image prompts for thumbnails

**How to get it:**
1. Go to https://ai.google.dev/
2. Click "Get API Key" or "Get Started"
3. Sign in with your Google account
4. Go to https://makersuite.google.com/app/apikey
5. Click "Create API Key"
6. Copy the key (starts with `AIza...`)

**Add to Vercel:**
- Variable name: `NEXT_PUBLIC_GOOGLE_API_KEY`
- Value: Your API key (e.g., `AIzaSyD...`)

---

### 2. Kie.ai API (for AI Music Generation)
**Status:** ✅ CONFIGURED - `ba7a0e07bde6409f448866db4a291daa`

**What it does:**
- Generates AI music tracks
- Creates instrumental beats

**Already configured! Add to Vercel:**
- Variable name: `KIE_API_KEY`
- Value: `ba7a0e07bde6409f448866db4a291daa`
- Variable name: `KIE_API_BASE_URL`
- Value: `https://api.kie.ai`

**Check balance:** https://kie.ai/dashboard

---

### 3. Fireworks AI API (for Thumbnail Generation)
**Status:** ✅ CONFIGURED - `fw_3ZMLwprQ7PjXK1j9a8MmrsgU`

**What it does:**
- Generates AI thumbnail images for your mixes

**Already configured! Add to Vercel:**
- Variable name: `NEXT_PUBLIC_FIREWORKS_API_KEY`
- Value: `fw_3ZMLwprQ7PjXK1j9a8MmrsgU`

---

### 4. Callback URL (for Kie.ai webhooks)
**Status:** ⚠️ NEEDS UPDATE after deployment

**What it does:**
- Allows Kie.ai to send music generation status updates

**Before deployment (testing):**
- Variable name: `CALLBACK_BASE_URL`
- Value: `http://localhost:3000`

**After deployment to Vercel:**
- Update to your Vercel URL: `https://your-app-name.vercel.app`
- Or custom domain if you have one

---

## 🚀 Adding to Vercel - Two Methods

### Method A: During First Deployment (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `chromahubz/infinitemixappsumo`
4. **BEFORE clicking Deploy**, scroll down to "Environment Variables"
5. Click "Add" and enter each variable:

```
Name: NEXT_PUBLIC_GOOGLE_API_KEY
Value: AIzaSy... (your key from step 1)

Name: KIE_API_KEY
Value: ba7a0e07bde6409f448866db4a291daa

Name: KIE_API_BASE_URL
Value: https://api.kie.ai

Name: NEXT_PUBLIC_FIREWORKS_API_KEY
Value: fw_3ZMLwprQ7PjXK1j9a8MmrsgU

Name: CALLBACK_BASE_URL
Value: http://localhost:3000
```

6. Click "Deploy"
7. **After deployment succeeds**, go back and update `CALLBACK_BASE_URL` to your actual Vercel URL

---

### Method B: After Deployment

1. Go to your Vercel dashboard
2. Select your project
3. Click "Settings" tab
4. Click "Environment Variables" in the left sidebar
5. For each variable:
   - Click "Add"
   - Enter Name and Value
   - Select all environments (Production, Preview, Development)
   - Click "Save"
6. Go to "Deployments" tab
7. Click "..." menu on latest deployment
8. Click "Redeploy" → "Use existing Build Cache" → "Redeploy"

---

## 🧪 Testing Your APIs

### Test Locally First:

1. Update your local `.env.local` with the Google API key:
```bash
cd infinitemixappserver/infinitemixappserver
```

2. Edit `.env.local` and replace:
```
NEXT_PUBLIC_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY_HERE
```
with your actual key:
```
NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSy...
```

3. Restart your dev server:
```bash
npm run dev
```

4. Test each feature:
   - ✅ Upload songs → Should analyze BPM/key
   - ✅ Generate mix → Should create audio
   - ✅ Generate thumbnail → Should create image (Fireworks AI)
   - ✅ Generate description → Should create text (Google Gemini)
   - ✅ Generate music → Should queue AI tracks (Kie.ai)

---

## 🔍 Troubleshooting

### Google API Not Working?
- Check quota: https://console.cloud.google.com/apis/dashboard
- Enable Generative Language API
- Make sure API key has correct permissions

### Kie.ai Not Working?
- Check credit balance: https://kie.ai/dashboard
- Verify API key is active
- Check callback URL is accessible (use ngrok for local testing)

### Fireworks AI Not Working?
- Check account at https://fireworks.ai/
- Verify API key is valid
- Check if you have credits remaining

---

## 💰 API Costs

### Free Tiers:
- **Google Gemini**: 60 requests/minute free
- **Fireworks AI**: Free credits to start
- **Kie.ai**: Pay per generation (check pricing)

### Production Recommendations:
- Monitor usage in each dashboard
- Set up billing alerts
- Consider API rate limiting in your code

---

## 🔒 Security Best Practices

✅ **DO:**
- Keep API keys in environment variables only
- Never commit `.env.local` to git
- Rotate keys if exposed
- Use different keys for dev/production

❌ **DON'T:**
- Hardcode API keys in source code
- Share API keys in screenshots
- Commit `.env` files to GitHub
- Use production keys in development

---

## 📝 Quick Reference

**Current API Status:**
- Kie.ai: ✅ Active
- Fireworks AI: ✅ Active
- Google Gemini: ⚠️ Need to configure
- Callback URL: ⚠️ Need to update after deployment

**Next Steps:**
1. Get Google API key
2. Add all keys to Vercel
3. Deploy
4. Update CALLBACK_BASE_URL
5. Test all features
