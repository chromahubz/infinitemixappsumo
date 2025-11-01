# 🧪 COMPLETE APPSUMO TESTING GUIDE

## 🎯 Full User Journey Test

This guide walks you through simulating a complete AppSumo purchase and credit system test.

---

## 📋 OPTION 1: Quick Test (Recommended)

### Step 1: Create Test License

1. **Go to the test page:**
   ```
   http://localhost:3007/test-appsumo
   OR
   https://infinitemix.app/test-appsumo
   ```

2. **Fill in the form:**
   - **Email:** Use your real email (you'll need to click a magic link)
   - **Plan Tier:** Select any plan:
     - **Creator** - 2000 credits ($29)
     - **Pro** - 5000 credits ($69) ⭐ Recommended for testing
     - **Studio** - 10000 credits ($119)
     - **Agency** - 18000 credits ($199)

3. **Click "Create Test License"**

4. **You'll see:**
   ```
   ✅ Test License Created!

   License Key: APPSUMO-PRO-TEST-XYZ123
   Email: your-email@example.com
   Plan: pro
   AI Credits: 5000
   ```

### Step 2: Check Your Email

1. **Open your email inbox**
   - Check spam folder if you don't see it!

2. **Look for email from Supabase:**
   - Subject: "Confirm your signup"
   - Or: "Magic Link Login"

3. **Click the magic link in the email**
   - Opens: `/auth/callback?code=...`
   - Auto-redirects to: `/software`

### Step 3: Verify You're Logged In

**On the `/software` page, check:**

1. **Top right corner:**
   ```
   ✅ You should see: [🟢 5000 / 5000 AI credits]
   ```
   (Green badge with your credits)

2. **Browser console (F12):**
   ```
   🔍 [CreditBadge] User is logged in, fetching balance...
   🔍 [CreditBadge] Balance fetched: { credits: 5000, total: 5000, plan: "pro", ... }
   ✅ [CreditBadge] Rendering: Credit badge with balance
   ```

3. **Top left corner:**
   ```
   [🏠 Home] button should be there
   ```

### Step 4: Test Credit Deduction

1. **Upload some songs** (any MP3 files)

2. **Select AI mode** (not manual)

3. **Choose duration:** Select **30 minutes**
   - Should show: "120 credits" under the button

4. **Create the mix**

5. **What happens:**
   - Backend calculates: 30 min × 4 = 120 credits needed
   - Checks your balance: 5000 credits
   - Deducts 120 credits
   - Creates the mix
   - New balance: 4880 credits

6. **Verify credit deduction:**
   - Badge should update to: `[🟢 4880 / 5000 AI credits]`
   - Wait up to 30 seconds for auto-refresh

### Step 5: Test Different Credit States

**High Credits (Green Badge):**
- You have >50% remaining
- Badge: `[✓ 4880 / 5000 AI credits]` (green)

**Medium Credits (Yellow Badge):**
- Create more mixes until you're at 20-50%
- Badge: `[⚡ 1200 / 5000 AI credits]` (yellow)

**Low Credits (Red Badge):**
- Create more mixes until you're at <20%
- Badge: `[⚠ 500 / 5000 AI credits Low!]` (red, pulsing)

---

## 📋 OPTION 2: Manual AppSumo Flow Test

### Step 1: Go to Activation Page

```
https://infinitemix.app/activate
```

### Step 2: First Create a Test License

You need to create a license key first using the test tool:

1. Go to `/test-appsumo`
2. Create a license
3. Copy the license key that's generated
4. Use it in the activation page

### Step 3: Enter License Details

- **License Key:** `APPSUMO-PRO-TEST-ABC123` (from test tool)
- **Email:** Your email address

### Step 4: Click "Activate License"

### Step 5: Check Email & Login

Same as Option 1, Steps 2-5

---

## 🎨 Visual Test Checklist

### ✅ When NOT Logged In

**Top Right Corner:**
```
[⚡ Activate License]
```
- Purple gradient button
- Hover effect (scale up)
- Clickable → goes to `/activate`

**Top Left Corner:**
```
[🏠 Home]
```
- White button with border
- Hover effect (border turns blue)
- Clickable → goes to `/`

### ✅ When Logged In (High Credits)

**Top Right Corner:**
```
[✓ 5000 / 5000 AI credits]
```
- Green background
- Green border
- Checkmark icon
- Credits display

### ✅ When Logged In (Medium Credits)

**Top Right Corner:**
```
[⚡ 2000 / 5000 AI credits]
```
- Yellow background
- Yellow border
- Zap icon
- Credits display

### ✅ When Logged In (Low Credits)

**Top Right Corner:**
```
[⚠ 800 / 5000 AI credits Low!]
```
- Red background
- Red border
- Alert icon
- "Low!" text pulsing
- Credits display

---

## 🔍 Console Debug Checklist

Open browser console (F12) and verify these logs:

### ✅ Component Mounting
```
🔍 [CreditBadge] Component mounted
🔍 [CreditBadge] Auth state: { user: true, session: true, authLoading: false }
```

### ✅ Auth State
```
🔍 [CreditBadge] Auth effect triggered: { authLoading: false, hasUser: true, hasSession: true }
🔍 [CreditBadge] User is logged in, fetching balance...
```

### ✅ Balance Fetch
```
🔍 [CreditBadge] Balance fetched: {
  credits: 5000,
  total: 5000,
  plan: "pro",
  percentage: 100,
  unlimited: false
}
```

### ✅ Rendering
```
🔍 [CreditBadge] Render state: { authLoading: false, hasUser: true, loading: false, error: false, hasBalance: true, balance: {...} }
✅ [CreditBadge] Rendering: Credit badge with balance
```

---

## 🧪 Credit Deduction Test Script

### Test 1: Verify Credits Deduct Correctly

1. Note starting balance: **5000 credits**
2. Create 30-minute mix (120 credits)
3. Expected result: **4880 credits**
4. Check badge updates
5. **Pass:** Badge shows 4880 ✅

### Test 2: Verify Insufficient Credits Error

1. Use up most credits (create many mixes)
2. Try to create mix requiring more credits than you have
3. Expected result: Error message
4. **Pass:** See "Insufficient AI credits" error ✅

### Test 3: Verify Manual Mode is Free

1. Switch to **Manual** mode
2. Create mix (any duration)
3. Expected result: No credits deducted
4. **Pass:** Credits stay the same ✅

### Test 4: Verify Credit Costs Display

1. Go to duration selector
2. Check each duration shows credits:
   - 15 min → 60 credits
   - 30 min → 120 credits
   - 45 min → 180 credits
   - 1 hr → 240 credits
   - 1.5 hr → 360 credits
   - 2 hr → 480 credits
3. **Pass:** All show correct amounts ✅

---

## 📊 Complete User Flow Diagram

```
1. User buys on AppSumo
   ↓
2. User goes to /activate
   ↓
3. Enters license key + email
   ↓
4. Backend creates:
   - Supabase user account
   - License record with credits
   ↓
5. Magic link sent to email
   ↓
6. User clicks magic link
   ↓
7. Redirected to /auth/callback
   ↓
8. Session created, cookies set
   ↓
9. Redirected to /software
   ↓
10. Credit badge appears (top right)
    ↓
11. User creates mixes
    ↓
12. Credits deducted per mix
    ↓
13. Badge updates in real-time
```

---

## 🎯 Success Criteria

### ✅ Phase 1: License Activation
- [ ] Can access `/activate` page
- [ ] Can enter license key and email
- [ ] Receives magic link email
- [ ] Can click magic link
- [ ] Gets redirected to `/software`

### ✅ Phase 2: Authentication
- [ ] User session persists
- [ ] Can refresh page without logging out
- [ ] Credit badge appears
- [ ] Console shows auth logs

### ✅ Phase 3: Credit Display
- [ ] Badge shows correct plan (Pro, Creator, etc.)
- [ ] Badge shows correct total credits
- [ ] Badge shows correct remaining credits
- [ ] Badge color changes based on percentage
- [ ] "Low!" warning appears when <20%

### ✅ Phase 4: Credit Deduction
- [ ] Credits deduct when creating AI mix
- [ ] Correct formula: duration_minutes × 4
- [ ] Badge updates after deduction
- [ ] Manual mode doesn't deduct credits
- [ ] Error shown when insufficient credits

### ✅ Phase 5: UI/UX
- [ ] Home button appears (top left)
- [ ] Credit badge appears (top right)
- [ ] Duration selector shows credit costs
- [ ] Help text shows "Manual mixing is free"
- [ ] All hover effects work

---

## 🚨 Common Test Issues

### Issue: No Magic Link Email

**Solution:**
1. Check spam/junk folder
2. Wait 2-3 minutes (emails can be delayed)
3. Check Supabase email settings
4. Try a different email provider

### Issue: Magic Link Doesn't Work

**Solution:**
1. Make sure you clicked the latest email
2. Links expire after 1 hour
3. Generate a new license if link expired

### Issue: Badge Doesn't Update After Mix

**Solution:**
1. Wait 30 seconds (auto-refresh interval)
2. Manually refresh the page
3. Check console for fetch errors

### Issue: Credits Don't Deduct

**Solution:**
1. Make sure you're in **AI mode** (not Manual)
2. Check console for API errors
3. Verify user is authenticated
4. Check `/api/create-mix` response in Network tab

---

## 📝 Test Report Template

Use this to document your test:

```
## Test Date: [DATE]
## Tester: [YOUR NAME]

### 1. License Activation
- Created license: [LICENSE KEY]
- Email: [EMAIL]
- Plan tier: [PLAN]
- Result: ✅ PASS / ❌ FAIL
- Notes: [ANY ISSUES]

### 2. Magic Link Login
- Received email: ✅ PASS / ❌ FAIL
- Link worked: ✅ PASS / ❌ FAIL
- Redirected to /software: ✅ PASS / ❌ FAIL
- Notes: [ANY ISSUES]

### 3. Credit Badge Display
- Badge visible: ✅ PASS / ❌ FAIL
- Shows correct credits: ✅ PASS / ❌ FAIL
- Home button visible: ✅ PASS / ❌ FAIL
- Notes: [ANY ISSUES]

### 4. Credit Deduction
- Starting credits: [NUMBER]
- Created mix duration: [MINUTES]
- Expected deduction: [CREDITS]
- Actual deduction: [CREDITS]
- Ending credits: [NUMBER]
- Result: ✅ PASS / ❌ FAIL
- Notes: [ANY ISSUES]

### 5. Overall Result
- All tests passed: ✅ YES / ❌ NO
- Critical issues: [LIST]
- Minor issues: [LIST]
- Ready for launch: ✅ YES / ❌ NO
```

---

## 🎉 You're Ready to Test!

**Quick Start:**
1. Go to `/test-appsumo`
2. Create a Pro license (5000 credits)
3. Click magic link in email
4. Create a 30-min mix
5. Watch credits go from 5000 → 4880
6. See the badge update!

**That's it! The system is working awesomely! 🚀**
