# 🚂 Railway Quick Start - Do This Now!

## 📍 Current Status
✅ GitHub connected to Railway
✅ Configuration files pushed
⏳ **Waiting for you to configure Railway dashboard**

---

## 🎯 Follow These Steps (5 minutes)

### Step 1: Go to Railway Dashboard
👉 Open: https://railway.app/dashboard

You should see your project: **infinitemixappsumo**

---

### Step 2: Add Environment Variables

1. **Click on your project**
2. **Click "Variables" tab** (left sidebar)
3. **Click "New Variable"** button
4. **Add these 5 variables** (one at a time):

```bash
# Copy and paste these:

Name: NEXT_PUBLIC_GOOGLE_API_KEY
Value: YOUR_GOOGLE_API_KEY_HERE
(Get from: https://makersuite.google.com/app/apikey)

Name: KIE_API_KEY
Value: ba7a0e07bde6409f448866db4a291daa

Name: KIE_API_BASE_URL
Value: https://api.kie.ai

Name: NEXT_PUBLIC_FIREWORKS_API_KEY
Value: fw_3ZMLwprQ7PjXK1j9a8MmrsgU

Name: CALLBACK_BASE_URL
Value: http://localhost:3000
(Will update after getting domain)
```

**IMPORTANT:** Don't click "Deploy" yet! Wait until you add the domain.

---

### Step 3: Generate Domain

1. **Click "Settings" tab** (left sidebar)
2. **Scroll down to "Networking" section**
3. **Click "Generate Domain"** button
4. **Copy your domain** (looks like: `infinitemixappsumo-production.up.railway.app`)

---

### Step 4: Update CALLBACK_BASE_URL

1. **Go back to "Variables" tab**
2. **Find CALLBACK_BASE_URL**
3. **Click the pencil icon** (edit)
4. **Change to**: `https://your-domain-from-step-3.up.railway.app`
5. **Click Save**

---

### Step 5: Deploy!

Railway should auto-deploy when you push to GitHub, but if not:

1. **Click "Deployments" tab**
2. **Click "Deploy"** button (top right)
3. **Wait 3-5 minutes** (it's installing FFmpeg!)

---

## 🔍 What to Watch For

### During Build (3-5 min):
You'll see logs like:
```
→ Installing nixpkgs: nodejs_20, ffmpeg-full
→ Running npm install
→ Running npm run build
✓ Build complete
```

### After Deploy:
```
✓ Deployment successful
→ Starting server...
✓ Ready on http://0.0.0.0:3000
```

---

## ✅ How to Know It Worked

### Check Deployment Status:
1. Go to **Deployments** tab
2. Latest deployment shows **"Success"** ✅
3. Status shows **"Active"** 🟢

### Test Your App:
1. Click your domain (or visit it in browser)
2. You should see your InfiniteMix app!
3. Try uploading a song
4. Try creating a mix (FFmpeg will work now!)

---

## 🐛 Troubleshooting

### Build Failed?
- **Check Logs**: Click on failed deployment → "View Logs"
- **Common issue**: Environment variables not set
- **Fix**: Add all 5 variables, then click "Redeploy"

### App Not Loading?
- **Check Runtime Logs**: Click "Logs" tab (live logs)
- **Look for**: "Ready on port 3000" or errors
- **Try**: Hard refresh browser (Ctrl+Shift+R)

### Still Issues?
- **Verify**: All 5 environment variables are set
- **Verify**: Domain is generated
- **Verify**: CALLBACK_BASE_URL uses https:// not http://

---

## 📊 Expected Timeline

| Step | Time | Status |
|------|------|--------|
| Push to GitHub | Done ✅ | Complete |
| Add variables | 2 min | **← DO NOW** |
| Generate domain | 30 sec | **← DO NOW** |
| Auto-deploy | 3-5 min | Automatic |
| Test app | 2 min | After deploy |

---

## 🎉 What Works on Railway (vs Vercel)

| Feature | Vercel | Railway |
|---------|--------|---------|
| FFmpeg | ❌ Broken | ✅ **WORKS!** |
| Audio mixing | ❌ Timeout | ✅ **WORKS!** |
| Long processes | ❌ 60s limit | ✅ **No limit!** |
| File storage | ❌ Limited | ✅ **512MB /tmp** |
| Video generation | ❌ Fails | ✅ **WORKS!** |

---

## 💰 Pricing

- **Free Trial**: $5 credit (good for ~5-7 days)
- **After trial**: $5/month (Hobby plan)
- **What you get**:
  - 512MB RAM
  - 1GB disk
  - Unlimited deploys
  - Custom domain
  - 99.9% uptime

---

## 🔗 Quick Links

**Your Railway Dashboard:**
- Main: https://railway.app/dashboard
- Deployments: Click your project → "Deployments"
- Variables: Click your project → "Variables"
- Logs: Click your project → "Logs"
- Settings: Click your project → "Settings"

**Documentation:**
- Railway Docs: https://docs.railway.app
- Troubleshooting: https://docs.railway.app/troubleshoot/fixing-common-errors

---

## ⚡ TL;DR - Just Do This

1. Go to Railway dashboard
2. Click "Variables" → Add 5 environment variables (see Step 2)
3. Click "Settings" → Generate domain
4. Go back to "Variables" → Update CALLBACK_BASE_URL with new domain
5. Wait 3-5 minutes for auto-deploy
6. Visit your domain → App should work!

**Your app will be at**: `https://[your-domain].up.railway.app`

---

Need help? Check the logs or let me know what error you're seeing!
