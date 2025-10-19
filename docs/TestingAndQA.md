Testing and QA Strategy

Goals
- Ensure reliable auth, media delivery, and smooth UX across devices and browsers.

Test Types
- Unit Tests
  - Components: AuthButton, QuoteRotator, MediaCard, VideoPlayer, Lightbox controls
  - Utilities: Cloudinary URL builder, tag filters
- Integration Tests
  - Auth flow via NextAuth (mocked provider where needed)
  - Protected routes: redirect to sign-in, allow after login
  - API: /api/media/list returns signed URLs and metadata
- End-to-End (Playwright/Cypress)
  - Sign in with Google (stubbed in CI), navigate to programs, open galleries, lightbox
  - Video playback basic checks (poster appears, play triggers)
- Visual Regression
  - Key pages: Landing, Programs, Program Gallery, Memory Detail

Performance
- Lighthouse checks on preview deployments; track LCP/CLS/TTI budgets
- Verify responsive image sizes and lazy loading

Accessibility
- axe checks and manual keyboard testing per AccessibilityChecklist.md

Supported Matrix
- Browsers: Latest 2 versions of Chrome, Safari, Firefox, Edge
- Mobile: iOS 16+, Android 11+

Tooling
- Jest + React Testing Library for unit/integration
- Playwright for E2E + screenshots
- ESLint + Prettier + TypeScript

CI Considerations
- Run unit/integration on PR
- Optional: E2E on main/pre-release only due to OAuth constraints

Release Checklist (QA)
- Auth works with real Google credentials on staging
- Media loads with signed URLs only
- Galleries scroll and lightbox keyboard navigation works
- 404/500 pages render and log errors
- A11y and performance budgets met
