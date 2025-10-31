# 🚂 Railway Deployment Guide - Credit System

## Quick Railway Setup (10 minutes)

### Step 1: Create Supabase Project (5 min)

1. Go to https://supabase.com
2. Sign up (free, no credit card)
3. Create new project: `infinitemix-prod`
4. Go to SQL Editor → New query
5. Copy/paste SQL from `SUPABASE-SETUP.md` → Run
6. Go to Settings → API → Copy keys:
   - Project URL
   - anon/public key
   - service_role key

---

### Step 2: Deploy to Railway

#### Option A: Deploy from GitHub (Recommended)

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose: `chromahubz/infinitemixappsumo`
5. Railway auto-detects Next.js and deploys!

#### Option B: Deploy via Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project (or create new one)
railway link

# Deploy
railway up
```

---

### Step 3: Add Environment Variables to Railway

In Railway dashboard → Your project → Variables:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your-service-role-key

# App URL (use your Railway domain)
NEXT_PUBLIC_APP_URL=https://infinitemixappsumo-production.up.railway.app

# Kie.ai (AI Music Generation)
KIE_API_KEY=your-kie-api-key
KIE_API_BASE_URL=https://api.kie.ai

# Replicate (AI Image Generation)
REPLICATE_API_TOKEN=your-replicate-token

# Callback URL
CALLBACK_BASE_URL=https://infinitemixappsumo-production.up.railway.app

# Node environment
NODE_ENV=production
```

**Important:** Railway will auto-redeploy when you add/change env vars!

---

### Step 4: Install Dependencies (Railway auto-detects)

Railway will automatically run:
```bash
npm install
```

Make sure these are in your `package.json`:

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.39.0",
    "@supabase/ssr": "^0.0.10",
    "@fingerprintjs/fingerprintjs": "^4.2.0"
  }
}
```

---

### Step 5: Verify Deployment

1. Railway gives you a URL: `https://your-app.up.railway.app`
2. Test activation: `https://your-app.up.railway.app/activate`
3. Test API: `https://your-app.up.railway.app/api/health`

---

## 🔧 Railway-Specific Configuration

### Build Command (Auto-detected)
```bash
npm run build
```

### Start Command (Auto-detected)
```bash
npm start
```

### Port (Auto-detected)
Railway automatically sets `PORT` env var. Next.js uses it by default.

---

## 🚀 Railway Features You Get

✅ **Automatic HTTPS** - Railway provides SSL certificates
✅ **Auto-deploy on push** - Connect GitHub, push = deploy
✅ **Environment variables** - Secure storage, per environment
✅ **Logs & Monitoring** - Real-time logs in dashboard
✅ **Zero-downtime deploys** - Gradual rollout
✅ **Custom domains** - Add your own domain

---

## 💰 Railway Pricing

### Free Tier (Hobby Plan)
- **$5/month credit** (free)
- ~500 hours of usage
- Perfect for testing & small scale

### Pro Plan ($20/month)
- $20 usage credit included
- Pay-as-you-go after that
- ~$0.000463/GB-hour for compute

**Estimated Costs:**
- 1,000 users: ~$10-15/month
- 10,000 users: ~$50-75/month
- Includes: Compute + Bandwidth + Builds

---

## 🔍 Monitoring on Railway

### View Logs
```bash
# Via CLI
railway logs

# Or in dashboard: Deployments → View Logs
```

### Check Metrics
Dashboard shows:
- CPU usage
- Memory usage
- Network bandwidth
- Request count

### Health Checks
Railway auto-monitors your `/` endpoint. If down, restarts automatically.

---

## 🐛 Troubleshooting

### Issue: Build fails

**Check:**
```bash
# View build logs in Railway dashboard
# Common issues:
# - Missing dependencies in package.json
# - TypeScript errors
# - Environment variables missing at build time
```

**Fix:**
```bash
# Add dependencies
npm install @supabase/supabase-js @supabase/ssr

# Commit and push
git add package.json package-lock.json
git commit -m "Add Supabase dependencies"
git push
```

### Issue: App crashes on startup

**Check Railway logs:**
```bash
railway logs --tail
```

**Common causes:**
- Missing environment variables
- Database connection failed
- Port binding issue

**Fix:**
- Verify all env vars in Railway dashboard
- Test Supabase connection
- Ensure app listens on `process.env.PORT`

### Issue: Supabase connection fails

**Test connection:**
```bash
# Add debug endpoint
# /api/test-supabase/route.ts
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('appsumo_licenses')
    .select('count');

  return Response.json({
    success: !error,
    error: error?.message
  });
}
```

**Visit:** `https://your-app.railway.app/api/test-supabase`

---

## 📊 Database on Railway (Alternative to Supabase)

If you want everything on Railway:

### Option 1: Railway PostgreSQL Plugin

```bash
# In Railway dashboard
# Add New → Database → PostgreSQL
```

**Pros:**
- Everything in one place
- No Supabase needed

**Cons:**
- No built-in auth (you'd need to add NextAuth or similar)
- No Row Level Security out of the box
- Manual setup for magic links

**Recommendation:** Stick with Supabase for now (easier, free, built-in auth)

---

## 🔐 Security on Railway

### Environment Variables
- ✅ Encrypted at rest
- ✅ Never exposed in logs
- ✅ Injected at runtime

### Network
- ✅ Auto HTTPS
- ✅ DDoS protection
- ✅ Rate limiting available

### Database
- ✅ Use Supabase RLS (Row Level Security)
- ✅ Service role key only on server
- ✅ Never expose in client code

---

## 🚀 Deployment Workflow

```bash
# 1. Make changes locally
npm run dev

# 2. Test thoroughly
npm run build
npm start

# 3. Commit changes
git add .
git commit -m "Add new feature"

# 4. Push to GitHub
git push origin master

# 5. Railway auto-deploys! 🎉
# Watch progress: https://railway.app/dashboard
```

---

## 📈 Scaling on Railway

### When App Grows:

**1,000 users:**
- Hobby plan works fine
- ~$10/month

**10,000 users:**
- Upgrade to Pro
- ~$50-75/month
- Consider caching (Redis plugin)

**100,000 users:**
- Add horizontal scaling
- Use Railway's load balancing
- ~$500/month
- Still way cheaper than AWS!

---

## 🎯 Quick Commands

```bash
# View logs
railway logs --tail

# Open app in browser
railway open

# Check status
railway status

# Restart service
railway restart

# Add environment variable
railway variables set KEY=value

# Deploy manually
railway up
```

---

## ✅ Pre-Deploy Checklist

- [ ] Supabase project created
- [ ] SQL schema run successfully
- [ ] Environment variables added to Railway
- [ ] Dependencies in package.json:
  - [ ] @supabase/supabase-js
  - [ ] @supabase/ssr
  - [ ] @fingerprintjs/fingerprintjs
- [ ] GitHub repo connected to Railway
- [ ] Test deployment URL works
- [ ] `/activate` page accessible
- [ ] API endpoints responding
- [ ] Credit system tested

---

## 🆘 Need Help?

**Railway Issues:**
- Docs: https://docs.railway.app
- Discord: https://discord.gg/railway

**Supabase Issues:**
- Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com

**InfiniteMix Credit System:**
- Read: `CREDIT-SYSTEM-README.md`
- Check: `SUPABASE-SETUP.md`

---

## 🎉 You're Ready!

Railway + Supabase = Perfect combo for InfiniteMix!

- ✅ Railway: App hosting + auto-deploy
- ✅ Supabase: Database + auth (free!)
- ✅ Total cost: ~$10-20/month for first 1000 users
- ✅ Scales to millions

Push to GitHub → Railway deploys → You're live! 🚀
