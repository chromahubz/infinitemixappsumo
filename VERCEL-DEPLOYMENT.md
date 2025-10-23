# Vercel Deployment Guide for InfiniteMix

## Quick Deploy to Vercel

### 1. Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import: `chromahubz/infinitemixappsumo`
5. Select the repository

### 2. Configure Project

**Framework Preset:** Next.js
**Root Directory:** `infinitemixappserver/infinitemixappserver` (or leave as root if deploying from the inner folder)
**Build Command:** `npm run build`
**Output Directory:** `.next`

### 3. Add Environment Variables

Click **"Environment Variables"** and add these:

#### Required Variables:

```
KIE_API_KEY=ba7a0e07bde6409f448866db4a291daa
```

```
KIE_API_BASE_URL=https://api.kie.ai
```

```
NEXT_PUBLIC_FIREWORKS_API_KEY=fw_3ZMLwprQ7PjXK1j9a8MmrsgU
```

#### Optional (if using these features):

```
NEXT_PUBLIC_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY_HERE
```

#### After First Deploy:

After your first deployment, Vercel will give you a URL like `https://your-app.vercel.app`. Then add:

```
CALLBACK_BASE_URL=https://your-app.vercel.app
```

**Important:** Update this environment variable with your actual Vercel URL and redeploy!

### 4. Deploy

Click **"Deploy"** and wait 2-3 minutes.

## Post-Deployment Setup

### 1. Update Callback URL

Once deployed:

1. Copy your Vercel URL (e.g., `https://infinitemix.vercel.app`)
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Update `CALLBACK_BASE_URL` to your actual URL
4. Click **"Redeploy"** in Deployments tab

### 2. Verify Deployment

Visit your URLs:

- **Landing Page:** `https://your-app.vercel.app/`
- **Main App:** `https://your-app.vercel.app/app`
- **Test Page:** `https://your-app.vercel.app/apptest`
- **Health Check:** `https://your-app.vercel.app/api/cleanup` (should return JSON)

### 3. Test AI Generation

1. Go to `/apptest`
2. Generate 1 song
3. Wait 1-3 minutes
4. **Callbacks will work automatically on Vercel!**
5. Audio players should appear with both song variations

## Features on Vercel

### ✅ What Works Automatically:

- AI music generation (2 songs per request)
- Automatic callbacks from Kie.ai
- Auto-cleanup of temp files
- File upload with validation
- Landing page routing
- All API endpoints

### ⚡ Performance:

- **Edge Functions:** Fast worldwide
- **Turbopack:** Fast builds
- **Auto-scaling:** Handles traffic spikes
- **CDN:** Static assets cached globally

## Troubleshooting

### Callbacks Not Working?

1. Check `CALLBACK_BASE_URL` is set correctly
2. Make sure it's your **production URL**, not localhost
3. Verify Kie.ai can reach your domain
4. Check Vercel Function logs for callback attempts

### Build Failing?

1. Check all dependencies are in `package.json`
2. Verify Node version is compatible (18+)
3. Check build logs for specific errors
4. Make sure root directory is set correctly

### Songs Not Generating?

1. Check `KIE_API_KEY` is set
2. Verify key has credits at [kie.ai/dashboard](https://kie.ai/dashboard)
3. Check Vercel function logs for errors
4. Test the `/api/generate-music` endpoint directly

### 500 Errors?

1. Check all environment variables are set
2. View Function logs in Vercel dashboard
3. Make sure `.env.local` values are added to Vercel
4. Check for missing dependencies

## Optional: Custom Domain

### Add Your Domain:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `infinitemix.com`)
3. Follow DNS configuration steps
4. Update `CALLBACK_BASE_URL` to your custom domain
5. Redeploy

## Monitoring

### Vercel Dashboard:

- **Analytics:** View usage and performance
- **Logs:** Debug issues in real-time
- **Deployments:** Roll back if needed
- **Usage:** Monitor function invocations

### Recommended Monitoring:

1. Set up Vercel Analytics
2. Monitor Kie.ai credit usage
3. Check cleanup endpoint periodically: `/api/cleanup`
4. Review function execution times

## Cost Optimization

### Vercel Free Tier Limits:

- 100GB bandwidth/month
- Unlimited requests
- 100 hours serverless function execution
- Unlimited edge function requests

### Kie.ai Credits:

- Each generation = ~1-2 credits
- Monitor usage at [kie.ai/dashboard](https://kie.ai/dashboard)
- Set up alerts for low credits

### File Cleanup:

- Auto-cleanup runs on every upload
- Manual cleanup: `GET /api/cleanup`
- Files deleted after 24 hours
- Recommended: Set up daily cron job

## Production Checklist

- [ ] All environment variables set in Vercel
- [ ] `CALLBACK_BASE_URL` updated with production URL
- [ ] Tested music generation end-to-end
- [ ] Verified both song variations load
- [ ] Checked file upload limits working
- [ ] Tested auto-cleanup
- [ ] Landing page loads correctly
- [ ] Main app accessible at `/app`
- [ ] Test page works at `/apptest`
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled
- [ ] Error monitoring set up

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Kie.ai Docs:** https://kie.ai/docs
- **GitHub Issues:** https://github.com/chromahubz/infinitemixappsumo/issues

---

**Ready to deploy!** Your app is production-ready with AI music generation, auto-cleanup, and full callback support on Vercel! 🚀
