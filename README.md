White Coat Ceremony Memories Website

Overview
- Goal: Build a beautiful, secure website that captures every memory from the White Coat Ceremony across three programs: Morning, Afternoon, and Evening. Each program includes curated photo and video galleries.
- Access control: Require Google Sign-In before accessing the memories. Design the system so it can later switch to a Student ID–based authentication without re-architecting.
- Experience: A compelling landing page with full-bleed background imagery, inspiring quotes, and a clear call to action.

What’s in this repo
- docs/ProjectPlan-WhiteCoatCeremony.md: Detailed product/tech plan and architecture
- docs/ImplementationPlan.md: Phased build plan with tasks, estimates, and milestones
- docs/Env.md: Environment variables and secrets needed (with .env.example)
- docs/Sitemap.md: Intended pages and URL structure
- docs/Wireframes.md: Text wireframes for key pages
- docs/Research.md: Technology research and trade-offs

High-level tech approach (recommended)
- Framework: Next.js (App Router, TypeScript) for fast, secure, SEO-friendly pages and protected routes
- Auth: NextAuth (Auth.js) with Google provider; designed to allow swapping to Student ID later
- UI: Tailwind CSS + Headless UI/Radix where needed
- Media: Cloudinary for image/video storage, optimization, and signed/secure delivery
- DB (optional for MVP): Start without a DB by curating Cloudinary folders and tags; add Postgres/Prisma for admin uploads and metadata later
- Deployment: Vercel (fast edge/CDN, simple environment management)
- Analytics/Monitoring: Vercel Analytics, optional Plausible or Sentry

Quick start (once implementation begins)
1) Ensure Node.js 18+ (preferably 20+) is installed.
2) Copy .env.example to .env and fill in values (Google OAuth, Cloudinary, etc.).
3) Install dependencies and run the dev server.
   - npm: npm install && npm run dev
   - pnpm: pnpm install && pnpm dev
4) Visit http://localhost:3000

Until code is scaffolded, see docs for the complete plan.

Links
- Full plan and architecture: docs/ProjectPlan-WhiteCoatCeremony.md
- Build phases and milestones: docs/ImplementationPlan.md
- Sitemap and routes: docs/Sitemap.md
- Wireframes: docs/Wireframes.md
- Environment setup: docs/Env.md
- Research notes: docs/Research.md
- Plan review and gap analysis: docs/PlanReview-GapsAndEnhancements.md
- Security and privacy: docs/SecurityAndPrivacy.md
- Cloudinary media strategy: docs/CloudinaryMediaStrategy.md
- Content curation guide: docs/ContentCurationGuide.md
- Accessibility checklist: docs/AccessibilityChecklist.md
- Testing and QA: docs/TestingAndQA.md
- Deployment guide: DEPLOYMENT.md
- Deployment checklist: docs/DeploymentChecklist.md
- Architecture and directory structure: docs/ArchitectureAndDirectoryStructure.md
- API design: docs/APIDesign.md
- Student ID migration plan: docs/StudentIDMigration.md
