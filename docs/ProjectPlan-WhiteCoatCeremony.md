White Coat Ceremony Memories Website — Product and Technical Plan

1) Vision and Goals
- Create a beautiful, secure website that preserves and showcases memories from the White Coat Ceremony.
- Cover three distinct programs: Morning, Afternoon, and Evening; each with photos and videos.
- Require Google authentication to view content now, with a future path to Student ID authentication.
- Prioritize performance, accessibility, and ease of content management.

2) Audience and Access
- Primary audience: Students, families, faculty, and invited guests.
- Access policy: Authenticated users only for galleries and videos. The landing page remains public.
- Future: Replace or augment Google Sign-In with Student ID–based authentication while keeping the same protected content model.

3) UX Principles and Style
- Warm, celebratory aesthetic; clean and modern typography.
- Landing hero with full-bleed imagery, subtle overlay gradient, and rotating quotes.
- Simple navigation: Home, Programs, Memories, About, Sign In/Out.
- Media galleries use responsive masonry or grid layouts with lazy loading.
- Video items show playable thumbnails and open a lightbox or detail page.

4) Information Architecture and Sitemap
- Public
  - /: Landing page with hero, quotes, CTA to sign in
  - /about: Event purpose, acknowledgments, sponsors (optional)
- Auth required
  - /programs: Overview of Morning, Afternoon, Evening
  - /memories/morning: Gallery (images + videos)
  - /memories/afternoon: Gallery
  - /memories/evening: Gallery
  - /memories/[program]/[id]: Detail view (deep-linkable), related items, share links (optional)
  - /search or /tags/[tag]: Filter memories by tag (e.g., "pinning", "speeches")
  - /admin (optional v2): Uploads, tagging, curation, permissions

5) Core Features
- Auth: Google Sign-In, session management, protected routes. Optional domain allowlist (e.g., school.edu) if needed.
- Galleries: High-quality images and videos, responsive optimization, lightbox viewer, per-program filtering.
- Search/Tags: Filter by program, tags, and media type.
- Share: Social metadata (Open Graph) and optional deep links. Share buttons can be disabled if privacy-sensitive.
- Admin (phase 2): Upload UI, tagging, publish/unpublish, basic roles.

6) Tech Stack (Recommended)
- Framework: Next.js 14+ (App Router, TypeScript) for SSR/SSG, performance, and routing
- UI Layer: Tailwind CSS for rapid, consistent styling; Headless UI/Radix for accessible components
- Auth: NextAuth (Auth.js) Google Provider; route protection via middleware and server components
- Media: Cloudinary for storage, responsive transforms (WebP/AVIF), video transcoding/streaming, and signed delivery
- Data Layer:
  - MVP: Use Cloudinary folders/tags to curate and fetch media by program
  - Phase 2+: Postgres + Prisma for media metadata, curation state, and admin activity
- Deployment: Vercel (production + previews), Cloudinary for media delivery
- Analytics: Vercel Analytics; optional Plausible/Google Analytics
- Error Monitoring: Sentry (optional)

7) Content Model
- Program: { id: morning|afternoon|evening, title, description, heroImage }
- MediaItem: { id, programId, type: image|video, title, caption, tags[], takenAt, photographer, cloudinaryPublicId, width, height, duration? }
- Tag: { slug, label }
- User (auth provider): depends on provider; store minimal profile if needed

8) Authentication and Authorization
- MVP: Google OAuth via NextAuth; store sessions in encrypted cookies. Restrict access to protected routes using Next.js middleware.
- Domain restriction (optional): Only allow users from a specific email domain.
- Roles (phase 2): viewer (default), admin (can upload/manage). Simple role check using DB or allowlist env var (e.g., ADMIN_EMAILS).
- Future: Student ID authentication
  - Option A: Replace Google provider with SAML/OIDC from the institution’s IAM
  - Option B: Custom Student ID verification service, then issue session via NextAuth Credentials provider
  - Keep route guards and roles unchanged so swap affects only the auth provider.

9) Media Storage, Delivery, and Privacy
- Storage: Cloudinary folders per program: memories/morning, memories/afternoon, memories/evening.
- Privacy: Use Cloudinary "authenticated" or "private" resources; generate signed URLs server-side so media isn’t directly public.
- Optimization: Use Cloudinary transformations to deliver responsive images (f_auto,q_auto) and streaming-optimized video (HLS/DASH) with poster frames.
- CDN: Cloudinary CDN + Vercel Edge caching for fast delivery.

10) Performance and Accessibility
- Performance: Static generation where possible, image lazy loading, responsive sizes, prefetching routes, webp/avif.
- Accessibility: Semantic HTML, color contrast, keyboard navigation in galleries/lightbox, captions/alt text for all media.
- SEO: Metadata per page, OG tags, dynamic OG images for programs, proper sitemap and robots as needed.

11) Security
- All secrets stored in environment variables; never committed.
- Signed Cloudinary URLs; avoid exposing permanent public URLs for private media.
- Avoiding over-sharing: Restrict pages and APIs with middleware/session checks.
- Optional: Rate limiting for API routes.

12) Deployment and Environments
- Environments: Local dev, Staging/Preview, Production (Vercel)
- Secrets: NEXTAUTH_SECRET, GOOGLE_CLIENT_ID/SECRET, CLOUDINARY keys, optional DATABASE_URL
- Domain: ceremony.example.edu or a subdomain; set up Vercel project + DNS

13) Analytics and Observability
- Vercel Analytics for traffic
- Optional Plausible/GA for user behavior
- Sentry for error monitoring (optional)

14) Rollout and Content Strategy
- Pre-go-live: Curate the best photos/videos; tag and place into folders
- QA: Cross-device and cross-browser testing; guest accounts to validate access flow
- Post-go-live: Add admin upload tools and more galleries if desired

15) Risks and Mitigations
- Privacy concerns: Keep galleries behind auth; use signed media URLs; consider watermarking if re-posting risk is high
- Video size/quality: Rely on Cloudinary transcoding and adaptive bitrate streaming
- Auth provider changes: Abstract behind NextAuth; swapping to Student ID is low-impact for the rest of the app

Appendix: Example Pages and Components
- Pages
  - Landing: hero (image/video), quotes carousel, highlights, CTA to sign in
  - Programs index: three cards (Morning, Afternoon, Evening)
  - Program gallery: filters (images/videos/tags), grid, infinite scroll or pagination
  - Memory detail: large media, caption, info, related items
  - Admin (optional): upload form, tag editor, publish toggle
- Components
  - AuthButton (Sign In/Out), Protected (wrapper), QuoteRotator
  - MediaGrid, MediaCard, VideoPlayer, Lightbox
  - TagChips, Filters, ProgramHero

Why Next.js + Cloudinary + NextAuth?
- Next.js: Best-in-class SSR/SSG, routing, performance, and developer experience.
- NextAuth: Minimal setup for Google OAuth, flexible for future providers (Student ID SSO).
- Cloudinary: Solves image/video storage, optimization, and secure delivery with minimal ops.
