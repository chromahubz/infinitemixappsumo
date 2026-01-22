# Adding the Lofi Girl Screenshot

## Quick Setup

1. **Save the screenshot:**
   - Save your Lofi Girl YouTube channel screenshot
   - Name it: `lofi-girl-channel.png` (or `.jpg`)
   - Place it in: `/public/lofi-girl-channel.png`

2. **Enable the image:**
   - Open: `/app/business/page.tsx`
   - Find line with: `{/* <img src="/lofi-girl-channel.png" ... */}`
   - Remove the `{/*` and `*/}` to uncomment it
   - Save the file

3. **Result:**
   - The screenshot will display on the `/business` page
   - Shows real proof of Lofi Girl's 15.6M subscribers
   - Displays viral videos with 128M, 56M, 51M views

## Alternative: Use a different image name

If your file has a different name:

```tsx
// Change this line:
<img src="/lofi-girl-channel.png" alt="Lofi Girl YouTube Channel" className="w-full rounded-lg mt-4" />

// To match your filename:
<img src="/your-filename-here.png" alt="Lofi Girl YouTube Channel" className="w-full rounded-lg mt-4" />
```

## Image Requirements

- **Format:** PNG, JPG, or WebP
- **Recommended size:** 1200px+ width for clarity
- **What to capture:**
  - Channel header with subscriber count
  - Top videos with view counts visible
  - Clear, high-resolution screenshot

## Location in Code

File: `/app/business/page.tsx`
Section: "Real Numbers: What Lofi Girl Makes"
Line: Search for `lofi-girl-channel.png`

That's it! The image will automatically display once added to `/public/` and uncommented.
