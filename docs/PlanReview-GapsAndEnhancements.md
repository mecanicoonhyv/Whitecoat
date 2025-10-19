Plan Review — Gaps and Enhancements

Summary
The existing plan is strong. Below are targeted gaps and concrete enhancements to de-risk delivery, improve privacy and accessibility, and streamline content operations. Each gap includes recommended actions and where they fit in the phases.

1) Legal, Privacy, and Consent
Gaps
- No explicit policies or consent model documented for publishing faces/videos.
- No stated takedown/DMCA-like process.
Actions
- Add Privacy Policy and Terms pages (public). Include takedown instructions/contact.
- Confirm event media consent with organizers. If uncertain, watermark and require authenticated access only.
- Define data retention (how long media is kept) and backup policy.
Phases: Phase 0 (draft pages), Phase 2 (polish), ongoing compliance review.

2) Security Hardening Beyond Auth
Gaps
- Session cookie settings, CSRF, rate limiting, and domain allowlist are not fully specified.
Actions
- NextAuth: secure cookie attributes (secure, httpOnly, sameSite=lax/strict), configured NEXTAUTH_URL.
- Optional domain allowlist (e.g., @school.edu); otherwise use invite list.
- Add API rate limiting for /api/media/* and /api/admin/*.
- Threat model: signed URLs with short TTL; avoid long-lived URLs.
Phases: Phase 0 (baseline), Phase 2 (rate limiting + final pass).

3) Cloudinary Media Strategy Details
Gaps
- No explicit transformation presets, delivery strategy, and cache/TTL guidance.
- No caption/subtitle strategy for videos.
Actions
- Images: f_auto,q_auto,c_fill,w/h presets for grid and detail; DPR-aware srcset.
- Video: HLS (m3u8), poster frames (so_0,du_1), optional subtitles (WebVTT) via Cloudinary or manual.
- Security: use authenticated/private resources; sign URLs server-side with short TTL.
- Caching: document headers and expected CDN behavior.
Phases: Phase 1 (MVP transforms), Phase 2 (optimize streaming and captions).

4) Content Curation Workflow and Taxonomy
Gaps
- No explicit naming conventions, tags taxonomy, or metadata mapping.
Actions
- Define Cloudinary folder structure, filename convention, and tags (e.g., speeches, oath, pinning, group-photos, candids).
- Map EXIF/timestamps to takenAt; add captions and photographer where available.
- Curate hero images per program.
Phases: Phase 0 (taxonomy), Phase 1 (apply during ingestion).

5) Accessibility (A11y) Specifics
Gaps
- Checklist not formalized; video captions/subtitles unclear.
Actions
- A11y checklist: keyboard access for lightbox, focus ring visibility, color contrast AA, skip links, alt text/captions, reduced-motion support for carousels.
- Provide captions or transcripts for significant videos if possible.
Phases: Phase 2.

6) Performance Budgets and Monitoring
Gaps
- No explicit budgets or measurement plan.
Actions
- Budgets: LCP < 2.5s, CLS < 0.1, TTI < 3s on mid-range mobile (authenticated context considered).
- Use Next.js Image optimization, lazy load, prefetch key routes. Lighthouse CI on previews.
- Define revalidate/ISR strategy for static segments.
Phases: Phase 1 (basics), Phase 2 (budgets + CI checks).

7) Testing and QA Strategy
Gaps
- No test strategy defined.
Actions
- Unit tests: key components (MediaGrid, Lightbox, AuthButton).
- Integration: auth flow, protected routes.
- E2E: Playwright/Cypress for sign-in, browse galleries, open lightbox.
- Visual regression: Storybook or Playwright screenshots for key pages.
Phases: Phase 0/1 (smoke), Phase 2 (coverage + regression).

8) Internationalization and Formatting
Gaps
- i18n and locale/timezone formatting unspecified.
Actions
- Decide default locale (en-US). Add hooks for i18n (next-intl optional). Format dates consistently.
Phases: Optional; reserve in architecture.

9) UX Details: Loading, Empty, and Error States
Gaps
- Skeletons, empty states, and error boundaries not described.
Actions
- Add skeleton loaders for grids, empty-state messaging per program, and friendly error pages (404/500) with support contact.
Phases: Phase 1.

10) Branding and Design System
Gaps
- Palette, typography, and imagery tone not concretely defined.
Actions
- Define brand tokens (colors, spacing, radii), fonts (e.g., Playfair Display + Inter), and component patterns.
- Establish consistent elevation, shadows, and motion.
Phases: Phase 0 (tokens), Phase 2 (polish).

11) SEO, Metadata, and Sharing Constraints (Auth-Gated)
Gaps
- Behind-auth content impacts SEO/sharing.
Actions
- Public landing and about can be indexed; galleries behind auth should set noindex.
- OG metadata for public pages only; for protected pages, use generic OG images or omit.
Phases: Phase 2.

12) Deployment, Ops, and Backups
Gaps
- No explicit deployment checklist, backups, rollback plan.
Actions
- Add deployment checklist (Vercel project, envs, domains, preview protection).
- Nightly/weekly backup of Cloudinary (export) and DB (when added). Document restore test.
Phases: Phase 0/1.

13) Student ID Migration Plan
Gaps
- High-level only.
Actions
- Document migration pathways: OIDC/SAML vs Credentials provider. Email mapping strategy, dual-run/brownout, rollback.
Phases: Future doc (addendum) + tracking ticket.

14) Analytics and Privacy
Gaps
- Cookie consent banner and privacy mode not specified.
Actions
- If using GA/Plausible, decide on cookie consent. Consider privacy-first analytics. Respect DNT.
Phases: Phase 2.

15) Browser/Device Support Matrix
Gaps
- Not stated.
Actions
- Official support: latest 2 of Chrome, Safari, Edge, Firefox; iOS 16+, Android 11+.
- Test plan reflects this matrix.
Phases: Phase 0/2 (declare + validate).

References to new docs added in this repo
- docs/SecurityAndPrivacy.md
- docs/ContentCurationGuide.md
- docs/AccessibilityChecklist.md
- docs/TestingAndQA.md
- docs/DeploymentChecklist.md
- docs/CloudinaryMediaStrategy.md
- docs/ArchitectureAndDirectoryStructure.md
- docs/APIDesign.md
- docs/StudentIDMigration.md
