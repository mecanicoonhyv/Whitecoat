Deployment Checklist (Vercel + Cloudinary)

Pre-Deployment
- Verify domain and DNS entries for production and staging
- Create Vercel project; connect repository
- Configure environment variables for preview, staging, production
  - NEXTAUTH_URL, NEXTAUTH_SECRET
  - GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
  - CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_SECURE_DELIVERY=true
  - Optional: DATABASE_URL, ADMIN_EMAILS
- Configure Google OAuth redirect URLs for all environments

Build and Settings
- Node 18/20 runtime
- Install command: npm install / pnpm install
- Build command: next build (once code exists)
- Output: default for Next.js
- Set preview protection if needed (password on previews)

Cloudinary
- Ensure folder structure and uploads are present
- Set resource privacy (authenticated/private) per design
- Create transformation presets if using named transforms

Post-Deployment
- Validate Google login
- Verify route guards and API auth
- Check images/videos load with signed URLs (not public links)
- Lighthouse on production URL; review budgets
- Configure analytics (Vercel Analytics/Plausible) and cookie banner if required

Backups and Monitoring
- Schedule Cloudinary backup/export
- Configure DB backups (if used)
- Enable Sentry (optional) with DSN in env var

Rollbacks
- Use Vercel deploy history; document rollback steps
- Restoring Cloudinary resources from backup if required
