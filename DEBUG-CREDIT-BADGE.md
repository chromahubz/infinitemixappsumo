# 🔍 CREDIT BADGE DEBUGGING GUIDE

## How to Debug the Credit Badge

### Step 1: Open Browser DevTools
1. Go to `https://infinitemix.app/software` (or `localhost:3006/software`)
2. Press **F12** to open DevTools
3. Go to **Console** tab

### Step 2: Look for Debug Logs

You should see these logs:

#### When Component Loads:
```
🔍 [CreditBadge] Component mounted
🔍 [CreditBadge] Auth state: { user: false, session: false, authLoading: true }
```

#### When Auth Loads:
```
🔍 [CreditBadge] Auth effect triggered: { authLoading: false, hasUser: false, hasSession: false }
🔍 [CreditBadge] User NOT logged in, will show Activate button
```

#### On Every Render:
```
🔍 [CreditBadge] Render state: { authLoading: false, hasUser: false, loading: false, error: false, hasBalance: false, balance: null }
✅ [CreditBadge] Rendering: Activate License button
```

### Step 3: Check What's Rendering

| Log Message | What It Means | What You Should See |
|-------------|---------------|---------------------|
| `✅ Rendering: Activate License button` | Not logged in | Purple "Activate License" button |
| `⏳ Rendering: Loading state` | Auth is loading | Gray "Loading..." spinner |
| `✅ Rendering: Unlimited Free badge` | Logged in, no license | Green "Unlimited Free" badge |
| `✅ Rendering: Credit badge with balance` | Logged in with credits | Colored badge with credit count |
| `❌ Rendering: Error state (hidden)` | Error occurred | Nothing visible (badge hidden) |
| `❌ Rendering: No balance (hidden)` | No data | Nothing visible (badge hidden) |

### Step 4: Check if Component is Mounted

If you see **NO logs at all**, the component isn't mounting. Check:

1. Is `<CreditBadge />` in the page source?
   - View page source (Ctrl+U)
   - Search for "CreditBadge"

2. Is there a JavaScript error?
   - Check Console for red errors
   - Look for "Module not found" or import errors

### Step 5: Check CSS/Visibility

If logs show the component is rendering but you can't see it:

1. **Check positioning:**
   - Look for element with class `absolute top-0 right-0`
   - Should be in top right corner

2. **Check z-index:**
   - Badge might be behind another element

3. **Check opacity/display:**
   - Badge might be transparent or hidden

4. **Inspect element:**
   - Right-click where badge should be
   - Click "Inspect"
   - Look for the CreditBadge div

### Step 6: Test States

**To test "Not Logged In" state:**
1. Make sure you're logged out
2. Go to /software
3. Should see: `[⚡ Activate License]` button

**To test "Logged In" state:**
1. Go to `/test-appsumo`
2. Create a test license
3. Check email and click magic link
4. Go to /software
5. Should see colored credit badge

### Common Issues

**Issue: "Component mounted" never logs**
- Component isn't rendering at all
- Check if AuthProvider is wrapping the app
- Check if CreditBadge is imported correctly

**Issue: "authLoading" stays true forever**
- Auth context isn't initializing
- Check Supabase env vars
- Check network tab for errors

**Issue: Badge renders but not visible**
- CSS positioning problem
- Check if parent container has `position: relative`
- Check if badge has proper z-index

**Issue: "No balance (hidden)" always shows**
- User is logged in but balance fetch failing
- Check `/api/credits/balance` in Network tab
- Check for 401/500 errors

### Quick Fix: Force Visible Test Badge

If you want to test positioning, temporarily add this to CreditBadge.tsx:

```tsx
// At the very start of component, before any returns
return (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full font-bold">
    🔴 TEST BADGE - I AM HERE!
  </div>
);
```

This will ALWAYS show a red badge, proving the component is rendering and positioned correctly.

### Expected Behavior

**Anonymous User (Not Logged In):**
```
Top Right: [⚡ Activate License] (purple gradient button)
```

**Logged In User (No License):**
```
Top Right: [✓ Unlimited Free] (green badge)
```

**Logged In User (With License - High Credits):**
```
Top Right: [✓ 4500 / 5000 AI credits] (green badge)
```

**Logged In User (With License - Low Credits):**
```
Top Right: [⚠ 500 / 5000 AI credits Low!] (red badge, pulsing)
```

## Quick Test

Run this in browser console when on /software page:

```javascript
// Check if CreditBadge component exists in React tree
document.querySelector('[class*="absolute top-0 right-0"]')?.innerText
```

Should return something like:
- "Activate License" (if not logged in)
- "Unlimited Free" (if logged in without license)
- "4500 / 5000 AI credits" (if logged in with license)
