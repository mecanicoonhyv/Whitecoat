Implementation Plan (Phased)

Phase 0 — Foundations (1–2 days)
- Create Next.js 14 + TypeScript app with Tailwind CSS
- Add NextAuth with Google provider and basic session UI
- Add route guarding via middleware so /memories/* and /programs require auth
- Set up basic layouts, navigation, and a styled landing page with quotes
- Configure Cloudinary SDK and environment variables

Deliverables: Running app with Google login, protected routes, styled landing

Phase 1 — Galleries MVP (2–4 days)
- Content model for Program and MediaItem (in code or simple config)
- Cloudinary integration to list media by folder (morning/afternoon/evening)
- Media grid with responsive images, lazy loading, basic lightbox
- Video support (thumbnails, playback via Cloudinary streaming)
- Program pages with hero, stats, and gallery filters (images/videos)

Deliverables: Functional galleries for all three programs

Phase 2 — Polish and SEO (1–2 days)
- Improve landing hero (carousel/rotator), add quote rotator
- Add Open Graph metadata and share images per program
- Accessibility audit: keyboard/lightbox, alt text, captions
- Performance polish: image sizes, prefetching, code splitting

Deliverables: Polished public experience (behind auth), SEO-ready metadata

Phase 3 — Admin and Search (optional, 3–5 days)
- Simple admin area with Google-based role (ADMIN_EMAILS)
- Upload form to Cloudinary, tagging UI, and publish flags
- Basic search/filtering by tags and media type
- Optional Postgres + Prisma for metadata and admin users

Deliverables: Internal tools for content management and discovery

Phase 4 — Auth Provider Swap (future)
- Replace Google with Student ID–based SSO (SAML/OIDC) or credentials
- Keep route protection and roles identical; swap only the provider

Ways of Working
- Branching: feature branches with preview deployments
- QA: Manual test on Chrome/Safari/Firefox, mobile and desktop
- Tracking: Convert this plan to issues/milestones and tick off tasks

High-level Task List
- Scaffold app and styling
- Add NextAuth and middleware guards
- Implement landing and navigation
- Cloudinary SDK + envs, gallery pages (morning/afternoon/evening)
- Media grid, lightbox, video player
- Polish landing + quotes; SEO
- Admin (optional): upload, tags, role checks
- Testing + launch
