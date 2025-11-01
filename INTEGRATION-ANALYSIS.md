# 🔍 Credit System Integration Analysis

## ❌ CRITICAL ISSUES FOUND

### Issue #1: Mix Creation Does NOT Deduct Credits

**Problem:** The main mix creation endpoint `/api/create-mix` has **ZERO credit integration**

**Evidence:**
```typescript
// app/api/create-mix/route.ts
export async function POST(req: NextRequest) {
  const { songs, thumbnail, crossfadeDuration } = await req.json();

  // ❌ NO CREDIT CHECKING AT ALL
  // ❌ NO getUserFromRequest()
  // ❌ NO checkAndDeductCredits()
  // ❌ NO calculateCreditsForMix()

  // Just creates the mix...
  return NextResponse.json({ videoUrl });
}
```

**Impact:** Users can create unlimited AI mixes without using any credits!

---

### Issue #2: Wrong Credit Calculation in AI Music Generation

**Problem:** The AI music generation endpoint deducts credits per SONG, not per MIX DURATION

**Evidence:**
```typescript
// app/api/generate-music-with-credits/route.ts (Line 22)
const { genre, count } = await req.json();

// ❌ WRONG: Deducts "count" (number of songs)
const creditCheck = await checkAndDeductCredits(userId, 'ai_music', count);

// ✅ SHOULD BE: Deduct based on mix duration
const durationMinutes = 30; // from user input
const credits = calculateCreditsForMix(durationMinutes); // 120 credits
const creditCheck = await checkAndDeductCredits(userId, 'ai_music', credits);
```

**Current behavior:**
- Generate 5 songs = 5 credits deducted ❌
- Create 30-min mix = 0 credits deducted ❌

**Correct behavior should be:**
- Generate 5 songs = 0 credits ✅ (songs are raw material)
- Create 30-min mix = 120 credits deducted ✅

---

### Issue #3: calculateCreditsForMix() Function Never Used

**Problem:** Created the function but never called it anywhere

**Evidence:**
```bash
$ grep -r "calculateCreditsForMix" --include="*.ts" --include="*.tsx"

Only found in: lib/credits.ts (definition)
Never imported or used anywhere!
```

---

### Issue #4: CreditBadge Component Not Displayed

**Problem:** UI component exists but is not rendered in the main app

**Evidence:**
```bash
$ grep -r "CreditBadge" app/software/
No matches found
```

**Impact:** Users can't see their credit balance while using the app!

---

### Issue #5: No Mix Duration Input

**Problem:** Users can't specify mix duration, so we can't calculate credits

**Evidence:**
Looking at `/app/software/page.tsx`, there's no input field for:
- Mix duration (15min, 30min, 1hr, etc.)
- Expected mix length

**Impact:** Can't calculate `credits = duration × 4` without knowing duration!

---

## ✅ What IS Working

### 1. License Activation ✅
```typescript
// app/api/license/activate/route.ts
✅ Validates license keys
✅ Creates user account
✅ Allocates correct credits (2000, 5000, 10000, 18000)
✅ Sends magic link
```

### 2. Credit Balance API ✅
```typescript
// app/api/credits/balance/route.ts
✅ Returns user's current credit balance
✅ Works with authentication
```

### 3. Credit History API ✅
```typescript
// app/api/credits/history/route.ts
✅ Shows usage log
✅ Tracks all credit deductions
```

### 4. Refund Eligibility API ✅
```typescript
// app/api/refund/eligibility/route.ts
✅ Calculates refund based on usage
✅ Applies 30% threshold rule
✅ Considers 60-day window
```

### 5. Database Schema ✅
```sql
-- Tables exist and are correct
✅ appsumo_licenses (with 4 tiers)
✅ credit_usage (audit log)
✅ user_devices (3-device limit)
✅ calculate_refund_eligibility() function
✅ check_device_limit() function
```

### 6. Backwards Compatibility ✅
```typescript
// If user has no license, everything works normally
if (!userId) {
  // Allow action - backwards compatible
}
```

---

## 🔧 What Needs To Be Fixed

### Fix #1: Integrate Credits into Mix Creation (CRITICAL!)

**File:** `app/api/create-mix/route.ts`

**Add at the beginning:**
```typescript
import { getUserFromRequest, checkAndDeductCredits, calculateCreditsForMix } from '@/lib/credits';

export async function POST(req: NextRequest) {
  const { songs, durationMinutes, /* ...other params */ } = await req.json();

  // 1. Get user (if authenticated)
  const userId = await getUserFromRequest(req);

  // 2. Check credits (if user has license)
  if (userId && durationMinutes) {
    const creditsNeeded = calculateCreditsForMix(durationMinutes);
    const creditCheck = await checkAndDeductCredits(userId, 'ai_music', creditsNeeded);

    if (!creditCheck.allowed) {
      return NextResponse.json(
        {
          error: `Insufficient credits. Need ${creditsNeeded}, have ${creditCheck.remaining}`,
          needed: creditsNeeded,
          remaining: creditCheck.remaining
        },
        { status: 402 }
      );
    }

    console.log(`[Mix] Deducted ${creditsNeeded} credits. Remaining: ${creditCheck.remaining}`);
  }

  // 3. Create mix (existing code)
  // ...
}
```

---

### Fix #2: Add Mix Duration Input to Frontend

**File:** `app/software/page.tsx`

**Add before "Generate & Preview Video" button:**
```tsx
{/* Mix Duration Selection */}
<div className="mb-4">
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Mix Duration
  </label>
  <select
    value={mixDuration}
    onChange={(e) => setMixDuration(Number(e.target.value))}
    className="w-full px-4 py-2 border rounded-lg"
  >
    <option value={15}>15 minutes (60 credits)</option>
    <option value={30}>30 minutes (120 credits)</option>
    <option value={45}>45 minutes (180 credits)</option>
    <option value={60}>1 hour (240 credits)</option>
    <option value={90}>1.5 hours (360 credits)</option>
    <option value={120}>2 hours (480 credits)</option>
  </select>
  <p className="text-xs text-gray-500 mt-1">
    Credits are only used for AI-generated mixes. Manual mixing is free!
  </p>
</div>
```

**Add state:**
```tsx
const [mixDuration, setMixDuration] = useState(30); // default 30 min
```

**Pass to API:**
```tsx
const mixResponse = await axios.post('/api/create-mix', {
  songs,
  durationMinutes: mixDuration, // ← Add this
  // ...other params
});
```

---

### Fix #3: Display CreditBadge in UI

**File:** `app/software/page.tsx`

**Add at the top of the component:**
```tsx
import { CreditBadge } from '@/components/CreditBadge';

export default function SoftwarePage() {
  return (
    <div>
      {/* Show credit badge in header */}
      <div className="flex justify-between items-center mb-6">
        <h1>InfiniteMix</h1>
        <CreditBadge /> {/* ← Shows: "🟢 1,840 / 2,000 AI credits" */}
      </div>

      {/* Rest of UI */}
    </div>
  );
}
```

---

### Fix #4: Remove Wrong Credit Check from AI Music Generation

**File:** `app/api/generate-music-with-credits/route.ts`

**Current (WRONG):**
```typescript
// Line 22 - Deducts credits per song
const creditCheck = await checkAndDeductCredits(userId, 'ai_music', count);
```

**Should be (CORRECT):**
```typescript
// Songs are raw materials - don't deduct credits here
// Credits are deducted when creating the MIX
console.log(`[Generate Music] Generating ${count} songs (no credits deducted - credits deducted at mix creation)`);

// Just generate songs, no credit check
```

**OR** if you want to charge for AI song generation:
```typescript
// Charge 1 credit per 30 seconds of generated audio
const creditsPerSong = 4; // assuming each song is ~1 minute
const totalCredits = count * creditsPerSong;
const creditCheck = await checkAndDeductCredits(userId, 'ai_music', totalCredits);
```

---

## 🎯 Recommended Credit Model

### Option A: Charge for MIXES (Recommended)

**Pros:**
- Simpler to understand
- Matches your pricing table (~10-20 mixes per tier)
- Manual mixing is free, AI mixing costs credits

**How it works:**
1. User uploads/generates songs (no credits)
2. User creates 30-min mix (120 credits deducted)
3. User downloads video (no additional credits)

**Implementation:**
- ✅ Add credit check to `/api/create-mix`
- ✅ Add duration input to frontend
- ❌ Remove credit check from AI song generation

---

### Option B: Charge for AI SONGS + MIXES

**Pros:**
- Users pay for AI generation separately from mixing
- More granular control

**Cons:**
- More confusing
- Credit math is harder

**How it works:**
1. User generates 5 AI songs (5 credits deducted)
2. User creates 30-min mix (120 credits deducted)
3. Total: 125 credits for one AI-generated mix

**Implementation:**
- ✅ Keep credit check in `/api/generate-music-with-credits`
- ✅ Add credit check to `/api/create-mix`
- ✅ Add duration input to frontend

---

## 📊 Current State Summary

| Feature | Status | Notes |
|---------|--------|-------|
| License activation | ✅ Working | Allocates correct credits |
| Credit balance API | ✅ Working | Returns current credits |
| Refund calculation | ✅ Working | Tiered refund system |
| Database schema | ✅ Working | All tables correct |
| **Mix creation credit check** | ❌ MISSING | **CRITICAL FIX NEEDED** |
| **Duration input (frontend)** | ❌ MISSING | **CRITICAL FIX NEEDED** |
| **Credit badge (UI)** | ❌ MISSING | Users can't see balance |
| **calculateCreditsForMix() usage** | ❌ MISSING | Function defined but never called |
| AI song generation | ⚠️ PARTIAL | Wrong calculation (per song, not duration) |

---

## 🚨 Bottom Line

**The credit system is 80% built but NOT integrated into the actual mix creation flow.**

**Critical path to fix:**
1. Add `durationMinutes` input to frontend
2. Add credit check to `/api/create-mix` endpoint
3. Display `<CreditBadge />` in UI
4. Test: Create 30-min mix → should deduct 120 credits

**Without these fixes, users can:**
- ❌ Create unlimited mixes without using credits
- ❌ Bypass the credit system entirely
- ❌ Get full refunds even after heavy usage (because usage is not tracked)

---

## ✅ Next Steps

See `INTEGRATION-FIXES.md` for exact code changes needed to fix all issues.
