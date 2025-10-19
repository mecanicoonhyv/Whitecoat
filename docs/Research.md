Research and Technology Trade-offs

Framework
- Next.js (App Router) vs. Create React App/Vite
  - Next.js advantages: SSR/SSG for SEO and performance, file-system routing, server components, built-in image optimization, easier protected routes via middleware.
  - CRA/Vite disadvantages: Requires more manual setup for SSR, SEO, and auth flows; good for SPAs but less ideal for content-forward, auth-gated sites.
  - Decision: Next.js 14+ App Router.

Auth Providers
- NextAuth (Auth.js) with Google Provider
  - Mature ecosystem, easy cookie/session management, and pluggable providers.
  - Supports swapping to SAML/OIDC or Credentials for Student ID later.
  - Alternatives: Firebase Auth (tight coupling to Firebase), Auth0 (paid tiers), Supabase Auth (great dev UX, extra DB layer).
  - Decision: NextAuth for flexibility and minimal vendor lock-in.

Media Hosting
- Cloudinary
  - Pros: Best-in-class image/video optimization, secure delivery (authenticated/private), transformations, and streaming.
  - Alternatives: AWS S3 + CloudFront (more setup), Vimeo/YouTube (less control over privacy), ImageKit/Imgix (good images, video support varies).
  - Decision: Cloudinary for lowest ops and high quality.

Database and CMS
- MVP: Avoid DB and use Cloudinary folders/tags to list media; simpler and faster to ship.
- Phase 2+: Add Postgres + Prisma if we need richer metadata, admin roles, and curation states.
- Alternative CMS: Sanity/Contentful/Strapi; good UIs but add vendor complexity. For a focused event site, Cloudinary + simple admin is often enough.

Deployment
- Vercel for immediacy, preview deploys, and seamless Next.js support.
- Alternatives: Netlify (solid), AWS Amplify (more config), self-hosting (ops overhead).

Security/Privacy
- Protect content behind auth and signed media URLs.
- Use domain allowlist to limit access to specific email domains if desired.
- Optional watermarking for images to discourage redistribution.

Performance and Accessibility
- Responsive images (webp/avif), lazy loading, prefetching.
- Semantic HTML, ARIA for lightbox, captions/alt text.

References
- Next.js: https://nextjs.org/docs
- Auth.js (NextAuth): https://authjs.dev
- Google OAuth setup: https://developers.google.com/identity/protocols/oauth2
- Cloudinary: https://cloudinary.com/documentation
- Tailwind CSS: https://tailwindcss.com/docs
