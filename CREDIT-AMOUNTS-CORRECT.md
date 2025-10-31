# ✅ CORRECT Credit System - InfiniteMix AppSumo

## 🎯 Correct Plan Tiers & Credits

| Tier    | Price | AI Mix Credits | Approx Mixes | Hours of Music (30-min avg) | Use Case |
|---------|-------|----------------|--------------|----------------------------|----------|
| **Creator** | $29 | **2,000** | ~10–20 mixes | 5–10 hours | Entry-level for small creators |
| **Pro** | $69 | **5,000** | ~30–50 mixes | 15–25 hours | Ideal for YouTubers/podcasters |
| **Studio** | $119 | **10,000** | ~60–90 mixes | 30–45 hours | Power users and channel owners |
| **Agency+** | $199* | **18,000** | ~120–160 mixes | 60–80 hours | Agencies and professionals |

*Price TBD - confirm with user

---

## 💰 Credit Cost by Mix Duration

Credits are charged based on **mix length**, not per song:

| Mix Duration | Credits Used | Formula |
|--------------|--------------|---------|
| 15 minutes | 60 credits | 15 × 4 |
| 30 minutes | 120 credits | 30 × 4 |
| 45 minutes | 180 credits | 45 × 4 |
| 1 hour (60 min) | 240 credits | 60 × 4 |
| 1.5 hours (90 min) | 360 credits | 90 × 4 |
| 2 hours (120 min) | 480 credits | 120 × 4 |

**Formula:** `credits = duration_in_minutes × 4`

---

## 📊 Real Examples

### Creator Plan (2,000 credits)
- **Option A:** 16 mixes @ 30 min each = 1,920 credits
- **Option B:** 8 mixes @ 1 hour each = 1,920 credits
- **Option C:** 33 mixes @ 15 min each = 1,980 credits
- **Option D:** 4 mixes @ 2 hours each = 1,920 credits

### Pro Plan (5,000 credits)
- **Option A:** 41 mixes @ 30 min each = 4,920 credits
- **Option B:** 20 mixes @ 1 hour each = 4,800 credits
- **Option C:** 83 mixes @ 15 min each = 4,980 credits

### Studio Plan (10,000 credits)
- **Option A:** 83 mixes @ 30 min each = 9,960 credits
- **Option B:** 41 mixes @ 1 hour each = 9,840 credits
- **Option C:** 166 mixes @ 15 min each = 9,960 credits

### Agency+ Plan (18,000 credits)
- **Option A:** 150 mixes @ 30 min each = 18,000 credits
- **Option B:** 75 mixes @ 1 hour each = 18,000 credits
- **Option C:** 300 mixes @ 15 min each = 18,000 credits

---

## 🆓 What's FREE (Unlimited)

**Manual Mixing:**
- Upload your own songs
- Create unlimited mixes
- No credits used
- Works forever
- No time limits

**ONLY AI-Generated Mixes use credits!**

---

## 🔧 How It Works in Code

```typescript
// Calculate credits for a mix
import { calculateCreditsForMix } from '@/lib/credits';

const duration = 30; // minutes
const credits = calculateCreditsForMix(duration);
// Result: 120 credits

// Check if user has enough credits
const result = await checkAndDeductCredits(userId, 'ai_music', credits);

if (!result.allowed) {
  return { error: `Insufficient credits. Need ${credits}, have ${result.remaining}` };
}

// Generate mix...
// Credits are deducted automatically
```

---

## 📝 License Key Format

```
APPSUMO-CREATOR-ABC123   → 2,000 credits
APPSUMO-PRO-XYZ789       → 5,000 credits
APPSUMO-STUDIO-DEF456    → 10,000 credits
APPSUMO-AGENCY-GHI789    → 18,000 credits
```

---

## 🧪 Test Scenarios

### Scenario 1: Creator Plan User
- **Initial credits:** 2,000
- **Generate 15-min mix:** -60 credits → 1,940 remaining
- **Generate 30-min mix:** -120 credits → 1,820 remaining
- **Generate 1-hour mix:** -240 credits → 1,580 remaining
- **Remaining:** Can make ~13 more 30-min mixes

### Scenario 2: Pro Plan User (Heavy Usage)
- **Initial credits:** 5,000
- **Create 10 × 2-hour mixes:** -4,800 credits → 200 remaining
- **Remaining:** Can make 1 more 30-min mix or 3 × 15-min mixes

### Scenario 3: Studio Plan User (Mixed Usage)
- **Initial credits:** 10,000
- **Create 20 × 30-min mixes:** -2,400 credits → 7,600 remaining
- **Create 10 × 1-hour mixes:** -2,400 credits → 5,200 remaining
- **Create 5 × 2-hour mixes:** -2,400 credits → 2,800 remaining
- **Remaining:** Can make 23 more 30-min mixes

---

## ⚠️ Important Notes

1. **Credits never expire** - Use them whenever you want
2. **Manual mixing is ALWAYS free** - No credit cost
3. **Credits are per mix, not per song** - A 30-min mix with 10 songs = 120 credits (not 10)
4. **Refunds based on usage:**
   - 0% AI usage = 100% refund
   - 1-30% AI usage = Partial refund
   - >30% AI usage = No refund
5. **Within 60 days** - Refunds only available first 60 days

---

## 🎯 Summary

**What was WRONG:**
- Creator: 20 credits ❌
- Pro: 50 credits ❌
- Studio: 90 credits ❌
- Only 3 tiers ❌

**What is CORRECT:**
- Creator: 2,000 credits ✅
- Pro: 5,000 credits ✅
- Studio: 10,000 credits ✅
- Agency+: 18,000 credits ✅
- Credits charged by mix duration (4 credits/min) ✅

---

## 🚀 Next Steps

1. Run SQL schema from `RUN-THIS-SQL.sql` in Supabase
2. Test activation at `https://infinitemix.app/activate`
3. Create test mixes of different durations
4. Verify credits deduct correctly (e.g., 30-min mix = 120 credits)
5. Confirm Agency+ pricing with user

**All code has been updated and deployed to Railway!** 🎉
