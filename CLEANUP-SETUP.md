# Auto-Cleanup Setup Guide

InfiniteMix automatically cleans up temporary files to prevent storage bloat.

## What Gets Cleaned Up

- **Location**: `public/temp/` directory
- **Files**: Uploaded audio files and temporary processing files
- **Age Threshold**: Files older than **24 hours** (1 day)

## Cleanup Methods

### 1. **Automatic Cleanup on Upload** ✅ Already Active!

Every time a user uploads files, the system automatically cleans up old files in the background. This happens without blocking the upload process.

**No setup needed** - this is already working!

### 2. **Manual Cleanup Endpoint**

You can manually trigger cleanup by visiting:

```
http://localhost:3000/api/cleanup
```

Or in production:
```
https://yourdomain.com/api/cleanup
```

This will return JSON with cleanup statistics:
```json
{
  "success": true,
  "message": "Cleanup completed. Deleted 15 files.",
  "totalDeleted": 15,
  "results": {
    "temp": {
      "deletedCount": 15,
      "deletedFiles": ["1234567890_song1.mp3", ...],
      "errors": []
    }
  },
  "timestamp": "2025-10-23T12:00:00.000Z"
}
```

### 3. **Scheduled Cleanup (Recommended for Production)**

For production, set up a cron job or scheduled task to run cleanup daily.

#### Option A: **Using Vercel Cron** (if deployed on Vercel)

Create `vercel.json` in project root:

```json
{
  "crons": [{
    "path": "/api/cleanup",
    "schedule": "0 3 * * *"
  }]
}
```

This runs cleanup every day at 3 AM UTC.

#### Option B: **Using GitHub Actions** (works with any host)

Create `.github/workflows/cleanup.yml`:

```yaml
name: Daily Cleanup
on:
  schedule:
    - cron: '0 3 * * *'  # 3 AM UTC daily

jobs:
  cleanup:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger cleanup
        run: curl https://yourdomain.com/api/cleanup
```

#### Option C: **Using External Cron Service**

Use services like:
- **cron-job.org** (free)
- **EasyCron.com**
- **UptimeRobot** (monitoring + cron)

Setup:
1. Create account
2. Add new cron job
3. URL: `https://yourdomain.com/api/cleanup`
4. Schedule: Daily at 3 AM
5. Method: GET

#### Option D: **Windows Task Scheduler** (for localhost/Windows server)

1. Open Task Scheduler
2. Create Basic Task
3. Name: "InfiniteMix Cleanup"
4. Trigger: Daily at 3:00 AM
5. Action: Start a program
6. Program: `curl`
7. Arguments: `http://localhost:3000/api/cleanup`

#### Option E: **Linux Crontab** (for Linux server)

Add to crontab:
```bash
0 3 * * * curl http://localhost:3000/api/cleanup
```

## Customizing Cleanup Settings

To change the cleanup age threshold, edit `lib/cleanup.ts`:

```typescript
// Change this value (in milliseconds)
const MAX_FILE_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

// Examples:
// 12 hours: 12 * 60 * 60 * 1000
// 2 days: 2 * 24 * 60 * 60 * 1000
// 1 week: 7 * 24 * 60 * 60 * 1000
```

## Monitoring

Check cleanup logs in your console/server logs. You'll see:

```
[Cleanup] Deleted old file: 1234567890_song1.mp3 (age: 1440 minutes)
[Cleanup] Completed. Deleted 15 files from temp/
```

## Testing

Test the cleanup system:

1. Upload some files via the app
2. Wait a few seconds
3. Visit `http://localhost:3000/api/cleanup`
4. Check the response - should show 0 deleted (files are too new)
5. Manually change a file's modified time (advanced) to test deletion

## Storage Recommendations

- **Development**: Automatic cleanup on upload is sufficient
- **Production with <100 users/day**: Automatic + daily cron
- **Production with >100 users/day**: Automatic + cron every 6 hours
- **High traffic**: Consider using S3/cloud storage with TTL policies

## Troubleshooting

**Files not being deleted?**
- Check console logs for errors
- Verify `public/temp/` directory exists
- Check file permissions
- Ensure files are actually older than 24 hours

**Cleanup endpoint returns 500 error?**
- Check server logs
- Verify `lib/cleanup.ts` exists
- Check filesystem permissions

---

**Current Status**: ✅ Auto-cleanup on upload is ACTIVE. No additional setup needed for basic usage!
