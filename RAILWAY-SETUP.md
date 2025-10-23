# Railway Deployment Guide

## ✅ What You've Done:
- ✅ Connected GitHub repo to Railway

## 🚀 Next Steps:

### Step 1: Configure Environment Variables

In Railway dashboard, go to your project → **Variables** tab and add:

```bash
# Required for API functionality
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
KIE_API_KEY=ba7a0e07bde6409f448866db4a291daa
KIE_API_BASE_URL=https://api.kie.ai
NEXT_PUBLIC_FIREWORKS_API_KEY=fw_3ZMLwprQ7PjXK1j9a8MmrsgU

# Will update after deployment
CALLBACK_BASE_URL=http://localhost:3000
```

### Step 2: Generate Domain

1. In Railway dashboard, go to **Settings** tab
2. Scroll to **Networking** section
3. Click **Generate Domain**
4. Copy your domain (e.g., `your-app-production.up.railway.app`)

### Step 3: Update Callback URL

1. Go back to **Variables** tab
2. Edit `CALLBACK_BASE_URL`
3. Change to your Railway domain: `https://your-app-production.up.railway.app`

### Step 4: Deploy

1. Click **Deploy** button (top right)
2. Or push to GitHub (auto-deploys)

---

## 🎯 Quick Access Guide

### Railway Dashboard:
```
Project → Your App
├── Deployments (see build logs)
├── Variables (environment variables)
├── Settings (domain, resources)
├── Metrics (usage stats)
└── Logs (runtime logs)
```

### After Deployment:
- **View App**: Click domain in dashboard or visit generated URL
- **View Logs**: Click "Logs" tab to see server output
- **Check Build**: Click "Deployments" to see build status

---

## 🔧 Configuration Files Added

### `railway.json`
- Tells Railway how to build and start your app
- Uses nixpacks builder (auto-detects Node.js)
- Configures restart policy

### `nixpacks.toml`
- Installs FFmpeg (needed for audio processing)
- Configures Node.js 20
- Sets up build commands

---

## 🐛 Troubleshooting

### Build Fails?
1. Check **Deployments** tab for error logs
2. Common issues:
   - Missing environment variables
   - Build command failed (check `npm run build` locally)

### App Not Loading?
1. Check **Logs** tab for runtime errors
2. Verify all environment variables are set
3. Check domain is accessible

### FFmpeg Not Working?
- nixpacks.toml installs it automatically
- If issues persist, add to railway.json:
  ```json
  "build": {
    "nixpacksPlan": {
      "phases": {
        "setup": {
          "nixPkgs": ["ffmpeg-full"]
        }
      }
    }
  }
  ```

---

## 💡 Railway vs Vercel Differences

| Feature | Vercel | Railway |
|---------|--------|---------|
| **Deploy** | Auto on push | Auto on push ✅ |
| **Domain** | Auto generated | Must click "Generate" |
| **Logs** | Functions tab | Logs tab |
| **Env Vars** | Settings → Env | Variables tab |
| **Build Time** | ~2 min | ~3-5 min (FFmpeg install) |
| **FFmpeg** | ❌ Not available | ✅ Works perfectly |

---

## 📊 Expected First Deploy

1. **Build Phase** (3-5 minutes):
   - Install Node.js 20
   - Install FFmpeg
   - `npm install`
   - `npm run build`

2. **Deploy Phase** (30 seconds):
   - Start Next.js server
   - Health check
   - Generate domain (if created)

3. **Running**:
   - App accessible at your domain
   - Logs show "Ready on port 3000"

---

## ✅ Checklist

Before testing your app:
- [ ] All environment variables added
- [ ] Domain generated
- [ ] CALLBACK_BASE_URL updated to Railway domain
- [ ] Deployment shows "Success"
- [ ] Domain loads the app

---

## 🚀 Next After Deployment

1. **Test Upload**: Upload audio files
2. **Test Mix**: Create a mix (FFmpeg should work!)
3. **Test Thumbnails**: Generate thumbnails
4. **Monitor Logs**: Watch for any errors

---

## 💰 Costs

- **Free Trial**: $5 credit (deploys for ~5-7 days)
- **Hobby Plan**: $5/month (recommended)
- **Resources**: Scales automatically, pay for what you use

---

## 🔗 Useful Links

- Railway Dashboard: https://railway.app/dashboard
- Railway Docs: https://docs.railway.app
- Your Variables: https://railway.app/project/[your-project-id]/service/[service-id]/variables
