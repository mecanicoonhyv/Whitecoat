Architecture and Directory Structure (Proposed)

Framework: Next.js (App Router) + TypeScript + Tailwind CSS

High-level
- app/
  - layout.tsx — root layout
  - page.tsx — landing (public)
  - about/page.tsx — public
  - signin/page.tsx — sign-in UI (if not using modal)
  - programs/page.tsx — protected
  - memories/
    - morning/page.tsx — protected gallery
    - afternoon/page.tsx — protected gallery
    - evening/page.tsx — protected gallery
    - [program]/[id]/page.tsx — protected detail
  - api/
    - auth/[...nextauth]/route.ts — NextAuth handlers
    - media/list/route.ts — list media by program
    - media/sign/route.ts — sign URLs for private media
  - middleware.ts — route guards for protected segments
- components/
  - AuthButton.tsx
  - Protected.tsx (wrapper or server-side session check)
  - QuoteRotator.tsx
  - MediaGrid.tsx, MediaCard.tsx
  - VideoPlayer.tsx, Lightbox.tsx
  - ProgramHero.tsx, TagChips.tsx, Filters.tsx
  - Skeletons/: grid and card skeletons
- lib/
  - auth.ts — NextAuth config
  - cloudinary.ts — SDK init + helpers
  - media.ts — list/filter helpers
  - constants.ts — programs, quotes, routes
- styles/
  - globals.css — Tailwind setup
- public/
  - icons, favicons, og-images (public pages only)

State and Data
- Start without DB; fetch from Cloudinary by folder and tags
- Later: add Prisma + Postgres for admin metadata and curation states

Testing
- __tests__/
  - unit/, integration/, e2e/ (Playwright)

CI and Quality
- ESLint + Prettier + TypeScript configs
- Optional Husky pre-commit hooks for lint/test

Notes
- Keep public content minimal; most media behind auth
- Noindex for protected routes via headers
