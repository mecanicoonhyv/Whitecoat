Environment and Secrets

Copy .env.example to .env and fill these values. Never commit real secrets.

Core (MVP)
- NEXTAUTH_URL: e.g., http://localhost:3000 for local, https://your-domain for prod
- NEXTAUTH_SECRET: OpenSSL random string (e.g., `openssl rand -base64 32`)
- GOOGLE_CLIENT_ID: From Google Cloud Console OAuth credentials
- GOOGLE_CLIENT_SECRET: From Google Cloud Console OAuth credentials

Media (Cloudinary)
- CLOUDINARY_CLOUD_NAME: Your Cloudinary cloud name
- CLOUDINARY_API_KEY: Cloudinary API key
- CLOUDINARY_API_SECRET: Cloudinary API secret
- Optional: CLOUDINARY_SECURE_DELIVERY=true and use authenticated/private resources

Database (optional Phase 2)
- DATABASE_URL: e.g., postgres://user:pass@host:5432/dbname
- ADMIN_EMAILS: Comma-separated allowlist for admin access (optional)

Notes
- For production, set Google OAuth authorized redirect URI to https://your-domain/api/auth/callback/google
- For staging/preview, add the preview domain as an additional redirect URI
- Cloudinary folder structure (recommended):
  - memories/morning
  - memories/afternoon
  - memories/evening

See .env.example in repo root for a template.
