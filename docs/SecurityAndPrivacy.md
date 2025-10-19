Security and Privacy Plan

Goals
- Protect media and user data with minimal friction.
- Keep galleries behind authentication and use secure media delivery.

Authentication and Sessions
- Provider: NextAuth (Auth.js) Google provider initially.
- Session storage: Encrypted cookies (default). Configure:
  - cookies.secure=true in production
  - cookies.httpOnly=true
  - cookies.sameSite=lax (or strict if compatible)
  - set NEXTAUTH_URL for each environment
- Domain allowlist (optional): Restrict by email domain (e.g., school.edu). Reject non-allowed domains during sign-in callback.
- Roles: viewer (default), admin via ADMIN_EMAILS allowlist (Phase 2).

CSRF and Route Protection
- NextAuth includes anti-CSRF for auth routes.
- Add Next.js middleware to protect /programs and /memories/*.
- API handlers must validate session on each request.

Media Security
- Store Cloudinary media as private or authenticated resources.
- Generate signed URLs server-side with short TTL (e.g., 5–10 minutes) to reduce re-sharing risk.
- Avoid embedding permanent public URLs.
- Consider watermarks for images if re-posting to social is a significant concern.

Rate Limiting and Abuse Prevention
- Apply rate limiting to /api/media/* and /api/admin/* (IP + user). E.g., upstash/redis-ratelimit or lightweight in-memory for MVP.
- Limit file size and type for uploads (admin).

Privacy and Compliance
- Publish Privacy Policy and Terms pages with takedown instructions and contact.
- Data retention policy: define how long media is stored and how to request removal.
- Avoid storing sensitive personal data beyond what is necessary for access control.

Logging and Monitoring
- Log errors and key events server-side (auth success/failure, API errors) without storing PII.
- Consider Sentry for error monitoring. Redact tokens and secrets from logs.

Backups
- Schedule Cloudinary exports and (when introduced) DB backups. Document restore procedure.

Checklist
- [ ] NEXTAUTH_URL and NEXTAUTH_SECRET set in each environment
- [ ] Google OAuth consent screen configured and verified
- [ ] Domain allowlist enforced (if required)
- [ ] Middleware guards active for protected routes
- [ ] Signed URL issuance with TTL
- [ ] Rate limiting in place for APIs
- [ ] Privacy Policy and Terms published
- [ ] Backups configured and tested
