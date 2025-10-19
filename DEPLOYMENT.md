Deployment Guide

Recommended platform: Vercel
This project is a Next.js 14 (App Router) app with NextAuth (Google) and optional Cloudinary media integration. Below are step-by-step instructions to deploy to Vercel, plus an alternative Node server deployment.

Prerequisites
- Node.js 18+ (preferably 20+)
- A Vercel account and access to the Git repository
- Google Cloud Console project with OAuth credentials
- Cloudinary account (for media hosting)

1) Environment Variables
Create a copy of .env.example as a reference. You will set these in Vercel for each environment (Preview/Production):
- NEXTAUTH_URL: e.g., https://your-domain.com for production, Vercel preview URL for previews
- NEXTAUTH_SECRET: a random secret (generate below)
- GOOGLE_CLIENT_ID: from Google OAuth credentials
- GOOGLE_CLIENT_SECRET: from Google OAuth credentials
- CLOUDINARY_CLOUD_NAME: your Cloudinary cloud name
- CLOUDINARY_API_KEY: Cloudinary API key
- CLOUDINARY_API_SECRET: Cloudinary API secret
- CLOUDINARY_SECURE_DELIVERY=true
- Optional: DATABASE_URL, ADMIN_EMAILS

Generate NEXTAUTH_SECRET
- macOS/Linux: openssl rand -base64 32
- Node: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

2) Google OAuth Setup
1. Go to Google Cloud Console > APIs & Services > Credentials
2. Create OAuth 2.0 Client ID (type: Web application)
3. Authorized redirect URIs (add one per environment):
   - Production: https://your-domain.com/api/auth/callback/google
   - Vercel Preview: https://your-preview-url.vercel.app/api/auth/callback/google
   - Local (for dev): http://localhost:3000/api/auth/callback/google
4. Copy the Client ID and Client Secret to the environment variables
5. Ensure the OAuth consent screen is configured and published

3) Cloudinary Setup
1. Create a Cloudinary account
2. Note your Cloud Name, API Key, and API Secret
3. Recommended folder structure:
   - memories/morning
   - memories/afternoon
   - memories/evening
4. Privacy: Prefer private or authenticated resources for images and videos
5. Upload a few assets into the above folders to validate the flow

4) Local Verification (optional but recommended)
1. Create .env in the project root using .env.example values
2. Install dependencies and run:
   - npm install
   - npm run dev
3. Visit http://localhost:3000
4. Test Sign In (Google). If not configured locally, the app will still render; protected routes will redirect to /signin
5. If Cloudinary is not configured, the galleries will show a placeholder sample item

5) Deploy to Vercel (Dashboard)
1. Push your branch to GitHub/GitLab/Bitbucket
2. In Vercel, Import Project and select this repository
3. Framework Preset: Next.js (auto-detected)
4. Build command: next build (default)
5. Output: default for Next.js
6. Environment Variables: add the values from step 1 for Production and Preview
7. Deploy

6) Domains and Redirect URIs
- Add your production domain to the Vercel project
- Update NEXTAUTH_URL to your production domain
- Ensure Google OAuth has the matching production redirect URI
- For previews, ensure the preview URL is also added to Google OAuth Redirect URIs (or temporarily use a shared preview value)

7) Protect Preview Deployments (optional)
- If galleries contain private content, consider enabling Vercel Password Protection for preview deployments
- Alternatively, only share previews internally and keep content private in Cloudinary

8) Post-Deployment Checks
- Visit the production URL
- Sign in with Google
- Navigate to /programs and a program gallery (e.g., /memories/morning)
- Verify images/videos load; ensure Cloudinary URLs are signed and not public
- Check the landing page hero and quote rotator

9) Backups and Monitoring
- Configure Cloudinary backups/exports (weekly or monthly)
- If using a database later, enable DB backups per provider
- Optional: Enable Sentry or Vercel monitoring/analytics

10) Troubleshooting
- 403/redirect loops on sign-in: Ensure NEXTAUTH_URL matches the current site URL exactly and your Google OAuth redirect URI is configured
- Sign-in fails: Verify NEXTAUTH_SECRET is set in Vercel and consistent per environment
- Blank galleries: Check Cloudinary variables and that media exists in the recommended folders. Without Cloudinary configured, the site shows a demo placeholder
- Mixed content or image errors: Ensure next.config.js includes Cloudinary host (remotePatterns) and URLs are HTTPS

11) Alternative: Self-hosted Node Server
1. Build the app locally or in CI: npm install && npm run build
2. Start the server: npm start (defaults to port 3000)
3. Put a reverse proxy (NGINX/Caddy) in front with HTTPS
4. Set all environment variables on the server (same as Vercel)
5. Ensure Google OAuth redirect URI points to https://your-domain.com/api/auth/callback/google

12) Staging/Preview Strategy
- Use Vercel previews for each PR; set PREVIEW env vars
- Add the preview domain to Google OAuth redirect URIs (or use a shared staging domain)
- Consider password protection on previews to limit access

13) Notes on Auth Guarding
- This app uses middleware to protect:
  - /programs/**
  - /memories/**
  - /api/media/**
- Public pages remain accessible: / and /about

Reference Documents
- docs/DeploymentChecklist.md (high-level checklist)
- docs/SecurityAndPrivacy.md (security posture and policies)
- docs/CloudinaryMediaStrategy.md (signed URLs and transforms)
- docs/StudentIDMigration.md (future auth provider swap)
