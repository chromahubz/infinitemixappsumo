# 🎯 InfiniteMix Credit System

## Overview

The InfiniteMix credit system implements a **fair, transparent, usage-based** model for AppSumo lifetime licenses:

- ✅ **Manual Mixing:** Unlimited, free forever
- ⚡ **AI Generation:** Credit-based (allocated at purchase)
- 💰 **Refunds:** Tiered based on AI usage

---

## 🏗️ Architecture

### Database (Supabase - FREE)
- PostgreSQL with Row Level Security
- 3 main tables: licenses, usage, devices
- Built-in auth & magic links
- Free tier: 500MB database (~10,000 users)

### API Endpoints
```
POST   /api/license/activate        - Activate AppSumo license
GET    /api/credits/balance         - Get user's credit balance
GET    /api/credits/history         - Get usage history
GET    /api/refund/eligibility      - Check refund status
POST   /api/generate-music-with-credits  - AI generation with credit checks
```

### Components
```
<CreditBadge />           - Compact credit display
<CreditDashboard />       - Full credit dashboard
<RefundChecker />         - Refund eligibility UI
```

---

## 📦 Installation

### 1. Install Dependencies

```bash
npm install @supabase/supabase-js @supabase/ssr @fingerprintjs/fingerprintjs
```

### 2. Set Up Supabase

Follow instructions in `SUPABASE-SETUP.md`:

1. Create Supabase project (free)
2. Run SQL schema
3. Get API keys
4. Add to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Test Connection

```bash
# Test Supabase connection
node -e "const {supabaseAdmin} = require('./lib/supabase'); supabaseAdmin.from('appsumo_licenses').select('count').then(console.log)"
```

---

## 🎮 Usage

### Activate License

User visits `/activate` and enters:
- AppSumo license key
- Email address

System:
1. Validates license key
2. Creates user account
3. Sends magic login link
4. Allocates credits

### Check Credits

```typescript
import { getCreditBalance } from '@/lib/credits';

const balance = await getCreditBalance(userId);
console.log(`User has ${balance.credits} credits`);
```

### Deduct Credits

```typescript
import { checkAndDeductCredits } from '@/lib/credits';

const result = await checkAndDeductCredits(userId, 'ai_music', 1);

if (!result.allowed) {
  return { error: result.warning };
}

// Generate music...
console.log(`Credits remaining: ${result.remaining}`);
```

### Calculate Refund

```typescript
import { calculateRefundEligibility } from '@/lib/credits';

const eligibility = await calculateRefundEligibility(userId);

if (eligibility.eligible) {
  console.log(`Refund amount: $${eligibility.refund_amount}`);
}
```

---

## 🔒 Security Features

### 1. Fail-Open Strategy
If credit check fails, allow the action anyway (don't break user experience).

```typescript
try {
  const result = await checkAndDeductCredits(userId, 'ai_music', 1);
} catch (error) {
  // FAIL OPEN: Allow action if anything breaks
  return { allowed: true, remaining: -1 };
}
```

### 2. Atomic Credit Deduction
Prevents race conditions using optimistic locking:

```sql
UPDATE appsumo_licenses
SET ai_credits_remaining = ai_credits_remaining - 1
WHERE id = $1 AND ai_credits_remaining = $2;  -- Optimistic lock
```

### 3. Row Level Security (RLS)
Users can only read their own data:

```sql
CREATE POLICY "Users can read own license"
  ON appsumo_licenses FOR SELECT
  USING (auth.uid() = user_id);
```

### 4. Device Fingerprinting
Enforces 3-device limit per license:

```typescript
const deviceCheck = await checkDeviceLimit(userId, fingerprint);
if (!deviceCheck.allowed) {
  return { error: 'Device limit reached (3 max)' };
}
```

---

## 💸 Plan Tiers & Credits

| Plan | Price | AI Credits | Mixes |
|------|-------|-----------|-------|
| Creator | $29 | 20 | ~10-20 mixes |
| Pro | $69 | 50 | ~30-50 mixes |
| Studio | $119 | 90 | ~60-90 mixes |

**Note:** Credits never expire. Manual mixing is unlimited.

---

## 🔄 Refund Policy Implementation

### Full Refund (100%)
- User only used manual mixing
- AI credits 100% unused
- Within 60 days

### Partial Refund
- Used <30% of AI credits
- Formula: `Original Price - (Credits Used × $2.50)`
- Within 60 days

### No Refund
- Used >30% of AI credits
- Outside 60-day window
- Account flagged for fraud

### Calculation Example

```
Creator Plan ($29):
- Total Credits: 20
- Used: 5 credits (25%)
- Deduction: 5 × $2.50 = $12.50
- Refund: $29 - $12.50 = $16.50 ✅

Pro Plan ($69):
- Total Credits: 50
- Used: 40 credits (80%)
- Refund: $0 (>30% usage) ❌
```

---

## 🎨 UI Components

### Credit Badge (Compact)

```tsx
import { CreditBadge } from '@/components/CreditBadge';

export default function Header() {
  return (
    <header>
      <CreditBadge />  {/* Shows: 🟢 15 / 20 AI credits */}
    </header>
  );
}
```

### Credit Dashboard (Full)

```tsx
import { CreditDashboard } from '@/components/CreditBadge';

export default function AccountPage() {
  return (
    <div>
      <CreditDashboard />  {/* Shows full credit info + progress bar */}
    </div>
  );
}
```

### Refund Checker

```tsx
import { RefundChecker } from '@/components/RefundChecker';

export default function SettingsPage() {
  return (
    <div>
      <RefundChecker />  {/* Shows refund eligibility + amount */}
    </div>
  );
}
```

---

## 🧪 Testing

### Test License Activation

```bash
curl -X POST http://localhost:3000/api/license/activate \
  -H "Content-Type: application/json" \
  -d '{
    "licenseKey": "APPSUMO-CREATOR-TEST123",
    "email": "test@example.com"
  }'
```

### Test Credit Balance

```bash
curl -X GET http://localhost:3000/api/credits/balance \
  -H "Authorization: Bearer your-jwt-token"
```

### Test Credit Deduction

```bash
curl -X POST http://localhost:3000/api/generate-music-with-credits \
  -H "Authorization: Bearer your-jwt-token" \
  -H "Content-Type: application/json" \
  -d '{
    "genre": "lofi",
    "count": 2
  }'
```

### Test Refund Eligibility

```bash
curl -X GET http://localhost:3000/api/refund/eligibility \
  -H "Authorization: Bearer your-jwt-token"
```

---

## 📊 Monitoring & Analytics

### View License Usage

```sql
SELECT
  plan_tier,
  COUNT(*) as users,
  SUM(ai_credits_total - ai_credits_remaining) as total_used,
  AVG(ai_credits_total - ai_credits_remaining) as avg_per_user
FROM appsumo_licenses
WHERE status = 'active'
GROUP BY plan_tier;
```

### Track Refund Rates

```sql
SELECT
  COUNT(*) FILTER (WHERE status = 'refunded') as refunded,
  COUNT(*) FILTER (WHERE status = 'active') as active,
  ROUND(
    100.0 * COUNT(*) FILTER (WHERE status = 'refunded') / COUNT(*),
    2
  ) as refund_rate
FROM appsumo_licenses;
```

### Popular Actions

```sql
SELECT
  action_type,
  COUNT(*) as count,
  SUM(credits_used) as total_credits
FROM credit_usage
GROUP BY action_type
ORDER BY count DESC;
```

---

## 🚨 Troubleshooting

### Issue: "Insufficient credits" but user has credits

**Cause:** Race condition or stale balance

**Fix:**
```sql
-- Check actual balance
SELECT ai_credits_remaining FROM appsumo_licenses WHERE user_id = 'xxx';

-- Refresh client-side cache
// Force re-fetch balance in UI
```

### Issue: License activation fails

**Cause:** Invalid license key format or already used

**Fix:**
- Verify format: `APPSUMO-{TIER}-{RANDOM}`
- Check if already activated:
  ```sql
  SELECT * FROM appsumo_licenses WHERE license_key = 'APPSUMO-XXX';
  ```

### Issue: Device limit reached

**Cause:** User trying to use on 4th device

**Fix:**
```sql
-- Reset devices for user
DELETE FROM user_devices WHERE user_id = 'xxx';
```

---

## 🎯 Best Practices

### 1. Always Use Fail-Open
```typescript
try {
  const result = await checkAndDeductCredits(userId, action, credits);
  if (!result.allowed) {
    return { error: result.warning };
  }
} catch (error) {
  // FAIL OPEN: Allow action
  console.error('Credit check failed, allowing action:', error);
}
```

### 2. Log All Credit Actions
```typescript
await supabaseAdmin.from('credit_usage').insert({
  user_id: userId,
  action_type: 'ai_music',
  credits_used: 1
});
```

### 3. Display Credits Prominently
- Show badge in header
- Warning when <20% remaining
- Block action before API call (better UX)

### 4. Handle Edge Cases
- User deletes account → cascade delete credits
- Refund processed → disable account immediately
- API error → allow action, log error

---

## 📈 Scaling

### Free Tier Limits
- 500 MB database = ~10,000 users
- 50,000 monthly active users
- 2 GB bandwidth/month

### When to Upgrade ($25/month)
- Database > 400 MB (~8,000 users)
- Need production features (daily backups, custom domains)
- Need more bandwidth

### Cost at Scale
- 1,000 users: $0/month (free tier)
- 10,000 users: $25/month (0.25% of revenue if $29/user)
- 100,000 users: $599/month (0.02% of revenue)

---

## 🤝 Support

For questions:
- Technical: Check `SUPABASE-SETUP.md`
- Refunds: `refunds@infinitemix.com`
- General: `/contact` page

---

## ✅ Deployment Checklist

- [ ] Supabase project created
- [ ] SQL schema run successfully
- [ ] Environment variables set
- [ ] License activation tested
- [ ] Credit deduction tested
- [ ] Refund calculator tested
- [ ] UI components integrated
- [ ] Device fingerprinting enabled
- [ ] Monitoring dashboards set up
- [ ] Backup strategy in place

---

🎉 **System Complete!** Credits are now live and ready for AppSumo launch!
