# 🎯 How InfiniteMix Credit System Works - Complete Analysis

## 📊 System Overview

The credit system tracks AI usage for AppSumo customers while keeping manual mixing unlimited. Here's how it works:

---

## 🔄 Complete User Flow

### Step 1: Customer Buys on AppSumo
- User purchases InfiniteMix on AppSumo
- AppSumo generates a license key like:
  - `APPSUMO-CREATOR-ABC123` (20 credits, $29)
  - `APPSUMO-PRO-XYZ789` (50 credits, $69)
  - `APPSUMO-STUDIO-DEF456` (90 credits, $119)

### Step 2: License Activation
**User visits:** `https://infinitemix.app/activate`

**What happens:**
1. User enters license key + email
2. System validates format: Must start with `APPSUMO-`
3. System parses plan tier from key: `APPSUMO-{TIER}-{RANDOM}`
4. System checks if key already used (prevents duplicate activation)
5. **If valid:**
   - Creates user account in Supabase Auth
   - Creates license record in `appsumo_licenses` table
   - Allocates credits based on tier:
     - Creator: 20 AI credits
     - Pro: 50 AI credits
     - Studio: 90 AI credits
   - Sends magic link to email

### Step 3: User Logs In
**User receives email with magic link:**
- Email contains link like: `https://infinitemix.app/auth/confirm?token=xxx`
- User clicks link
- Supabase auto-logs them in
- User lands on `/software` page (main app)

### Step 4: Using the App

#### Manual Mixing (FREE - UNLIMITED)
- User uploads songs manually
- Creates mixes without AI
- **NO credits deducted**
- Works forever, unlimited

#### AI Music Generation (CREDIT-BASED)
**User triggers AI generation:**
1. Clicks "Generate AI Music"
2. API endpoint: `POST /api/generate-music-with-credits`
3. **Backend flow:**
   ```
   GET /api/credits/balance
   ├─ Check if user has license
   ├─ Check remaining credits
   └─ Return: { credits: 15, total: 20 }

   POST /api/generate-music-with-credits
   ├─ Verify user has credits (if licensed)
   ├─ Generate AI music via Kie.ai
   ├─ DEDUCT 1 credit (atomic transaction)
   ├─ Log usage in credit_usage table
   └─ Return music + remaining credits
   ```

4. **Credit Deduction (Atomic):**
   ```sql
   UPDATE appsumo_licenses
   SET ai_credits_remaining = ai_credits_remaining - 1
   WHERE id = $license_id
   AND ai_credits_remaining = $current_value  -- Optimistic lock
   ```
   - Prevents race conditions
   - If 2 requests happen at same time, only 1 succeeds
   - The other gets rejected with "insufficient credits"

5. **Usage Logging:**
   ```sql
   INSERT INTO credit_usage (
     user_id,
     license_id,
     action_type,  -- 'ai_music'
     credits_used  -- 1
   )
   ```

---

## 🧪 How to Simulate/Test (Without Changing Code)

### Method 1: Direct SQL in Supabase

**Step 1: Create a test license manually**

Go to Supabase Dashboard → SQL Editor → Run:

```sql
-- First, run the schema from RUN-THIS-SQL.sql if you haven't

-- Create a test user (manually)
-- OR use Supabase Dashboard → Authentication → Add User
-- Email: test@example.com

-- Then insert a test license
INSERT INTO appsumo_licenses (
  user_id,
  license_key,
  plan_tier,
  ai_credits_total,
  ai_credits_remaining,
  status
) VALUES (
  'USER_ID_FROM_AUTH_USERS',  -- Replace with actual user ID
  'APPSUMO-CREATOR-TEST123',
  'creator',
  20,
  20,
  'active'
);
```

**Step 2: Test activation page**

Go to: `https://infinitemix.app/activate`

Try these test keys:
```
License: APPSUMO-CREATOR-TEST456
Email: yourtest@email.com

License: APPSUMO-PRO-TEST789
Email: yourtest2@email.com

License: APPSUMO-STUDIO-TEST999
Email: yourtest3@email.com
```

**Step 3: Check credits**

After logging in, the app should show:
- Credit badge in header: `🟢 20 / 20 AI credits`
- Visit `/api/credits/balance` to see JSON response

**Step 4: Test credit deduction**

Generate AI music → Check credits decrease:
```
Before: 20 / 20
After 1 generation: 19 / 20
After 2 generations: 18 / 20
...
After 20 generations: 0 / 20 (blocked from further AI use)
```

---

### Method 2: Test via Postman/curl

**Test 1: Activate License**
```bash
curl -X POST https://infinitemix.app/api/license/activate \
  -H "Content-Type: application/json" \
  -d '{
    "licenseKey": "APPSUMO-CREATOR-TEST123",
    "email": "test@example.com"
  }'

# Expected Response:
{
  "success": true,
  "message": "License activated! Check your email for login link.",
  "license": {
    "plan_tier": "creator",
    "ai_credits_total": 20,
    "ai_credits_remaining": 20
  }
}
```

**Test 2: Check Credit Balance**
```bash
# First, get auth token from magic link login
# Then:

curl https://infinitemix.app/api/credits/balance \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Expected Response:
{
  "credits": 20,
  "total": 20,
  "percentage": 100,
  "plan_tier": "creator"
}
```

**Test 3: Deduct Credits**
```bash
curl -X POST https://infinitemix.app/api/generate-music-with-credits \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "genre": "lofi",
    "count": 1
  }'

# Expected Response:
{
  "success": true,
  "creditsRemaining": 19,
  "music": [...]
}
```

**Test 4: Check Refund Eligibility**
```bash
curl https://infinitemix.app/api/refund/eligibility \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Expected Response (if 0 AI credits used):
{
  "eligible": true,
  "reason": "Manual mixing only - full refund",
  "refund_amount": 29,
  "refund_percentage": 100,
  "credits_used": 0
}

# Expected Response (if 5 credits used - 25%):
{
  "eligible": true,
  "reason": "Light AI usage - partial refund",
  "refund_amount": 16.50,
  "refund_percentage": 57,
  "credits_used": 5,
  "deduction": 12.50,  // 5 credits × $2.50
  "usage_percentage": 25
}

# Expected Response (if 8+ credits used - >30%):
{
  "eligible": false,
  "reason": "Heavy usage (40% of AI credits consumed)",
  "refund_amount": 0,
  "credits_used": 8,
  "usage_percentage": 40
}
```

---

### Method 3: Test via Browser (Real User Flow)

**Step 1: Activate**
1. Open: `https://infinitemix.app/activate`
2. Enter: `APPSUMO-CREATOR-TEST123`
3. Email: `yourtest@example.com`
4. Click "Activate License"
5. Check email for magic link

**Step 2: Login**
1. Click magic link in email
2. Lands on `/software` page
3. See credit badge in header: `🟢 20 / 20 AI credits`

**Step 3: Test Manual Mixing (FREE)**
1. Upload songs manually
2. Create mix
3. Download
4. **Credits stay at 20 / 20** ✅

**Step 4: Test AI Generation (CREDITS)**
1. Click "Generate AI Music"
2. Select genre (lofi, etc.)
3. Generate
4. **Credits decrease to 19 / 20** ✅
5. Generate again
6. **Credits: 18 / 20** ✅

**Step 5: Test Credit Exhaustion**
1. Generate AI music 20 times
2. Credits reach: `🔴 0 / 20 AI credits`
3. Try generating again
4. **Should see error:** "Insufficient AI credits. You have 0 credits remaining."
5. Manual mixing still works ✅

**Step 6: Check Refund Status**
1. Visit: `https://infinitemix.app/activate` or dashboard
2. See RefundChecker component
3. Shows:
   - If 0 AI used: "Full refund: $29"
   - If 5 AI used: "Partial refund: $16.50"
   - If 8+ AI used: "No refund (30% threshold exceeded)"

---

## 🎯 Key Behaviors

### 1. Backwards Compatibility (CRITICAL!)
**If user has NO license:**
- All features work normally
- No credit checks
- "Fail open" strategy = never break existing users

**Code:**
```typescript
const result = await checkAndDeductCredits(userId, 'ai_music', 1);

// No license? Allow anyway!
if (!license) {
  return { allowed: true, remaining: -1 };
}
```

### 2. Credit Costs

| Action | Credits | Notes |
|--------|---------|-------|
| Manual mixing | 0 | Unlimited forever |
| AI music generation | 1 per song | Via Kie.ai |
| AI thumbnail | 0 | Currently free |
| AI description | 0 | Currently free |

**Future:** Can charge for thumbnails/descriptions too.

### 3. Refund Tiers

| Usage | Refund | Formula |
|-------|--------|---------|
| 0% (manual only) | 100% | Full price |
| 1-30% AI usage | Partial | Price - (credits_used × $2.50) |
| >30% AI usage | 0% | No refund |

**Examples:**
- Creator ($29), 0 credits used: **$29 refund**
- Creator ($29), 5 credits used (25%): **$16.50 refund** ($29 - $12.50)
- Creator ($29), 7 credits used (35%): **$0 refund** (>30% threshold)

### 4. Device Limit
- Max 3 devices per license
- Tracked via fingerprinting
- Prevents account sharing

### 5. Time Limit
- Refunds only within 60 days of activation
- After 60 days: No refund regardless of usage

---

## 📊 Database Tables

### appsumo_licenses
```
id: UUID
user_id: UUID (FK to auth.users)
license_key: TEXT (e.g., APPSUMO-CREATOR-ABC123)
plan_tier: 'creator' | 'pro' | 'studio'
ai_credits_total: INT (20, 50, or 90)
ai_credits_remaining: INT (decreases on use)
status: 'active' | 'refunded' | 'suspended'
first_ai_usage_at: TIMESTAMP (NULL if never used AI)
activated_at: TIMESTAMP
created_at: TIMESTAMP
```

### credit_usage (Audit Log)
```
id: UUID
user_id: UUID
license_id: UUID
action_type: 'ai_music' | 'ai_thumbnail' | 'ai_description'
credits_used: INT (usually 1)
created_at: TIMESTAMP
```

### user_devices (3-Device Limit)
```
id: UUID
user_id: UUID
device_fingerprint: TEXT
device_info: JSONB (browser, OS, etc.)
first_seen_at: TIMESTAMP
last_seen_at: TIMESTAMP
UNIQUE(user_id, device_fingerprint)
```

---

## 🔍 How to Monitor

### Check License Usage
```sql
-- See all active licenses
SELECT
  plan_tier,
  COUNT(*) as total_licenses,
  SUM(ai_credits_total - ai_credits_remaining) as total_credits_used,
  AVG(ai_credits_total - ai_credits_remaining) as avg_credits_per_user
FROM appsumo_licenses
WHERE status = 'active'
GROUP BY plan_tier;
```

### Check Refund Eligibility Stats
```sql
-- Count how many users are eligible for refunds
SELECT
  COUNT(*) FILTER (
    WHERE (ai_credits_total - ai_credits_remaining)::NUMERIC / ai_credits_total <= 0.30
    AND activated_at > NOW() - INTERVAL '60 days'
  ) as refund_eligible,
  COUNT(*) FILTER (
    WHERE (ai_credits_total - ai_credits_remaining)::NUMERIC / ai_credits_total > 0.30
  ) as no_refund,
  COUNT(*) as total
FROM appsumo_licenses
WHERE status = 'active';
```

### Check Top Users (Heavy AI Users)
```sql
-- Who's using the most AI credits?
SELECT
  u.email,
  l.plan_tier,
  l.ai_credits_total - l.ai_credits_remaining as credits_used,
  ROUND((l.ai_credits_total - l.ai_credits_remaining)::NUMERIC / l.ai_credits_total * 100, 2) as usage_percent
FROM appsumo_licenses l
JOIN auth.users u ON u.id = l.user_id
WHERE l.status = 'active'
ORDER BY credits_used DESC
LIMIT 20;
```

---

## 🚨 What Happens When...

### User runs out of credits?
- Manual mixing: Still works ✅
- AI generation: Blocked with error message ❌
- Message: "Insufficient AI credits. You have 0 credits remaining."

### User tries to activate same key twice?
- Error: "License key already activated"
- They can't create duplicate accounts

### User has no license (old user)?
- All features work normally
- No credit checks
- Backwards compatible ✅

### User wants refund?
- Check `/api/refund/eligibility`
- If eligible, email: `refunds@infinitemix.com`
- AppSumo processes refund (5-7 days)

### User uses 3 devices then tries 4th?
- Error: "Device limit reached (3 devices max)"
- They can contact support to reset devices

---

## 🎯 Summary

**What's tracked:**
- ✅ AI music generation (1 credit per song)
- ✅ Device count (max 3)
- ✅ Refund eligibility (usage % + time)

**What's FREE:**
- ✅ Manual mixing (unlimited)
- ✅ AI thumbnails (for now)
- ✅ AI descriptions (for now)

**How to test:**
1. Run SQL schema from `RUN-THIS-SQL.sql`
2. Create test license in Supabase
3. Test activation at `/activate`
4. Generate AI music to deduct credits
5. Check balance at `/api/credits/balance`
6. Check refund at `/api/refund/eligibility`

**Next step for production:**
- Add environment variables to Railway (from `RAILWAY-ENV-VARS.txt`)
- Test with real AppSumo license keys
- Monitor usage in Supabase dashboard

🎉 **System is ready to go live!**
