Sitemap and Routing

Public
- / — Landing page with hero images/video, rotating quotes, CTA to sign in
- /about — Optional: event info, acknowledgments

Auth Required
- /programs — Overview of Morning, Afternoon, Evening
- /memories/morning — Gallery (images + videos)
- /memories/afternoon — Gallery
- /memories/evening — Gallery
- /memories/[program]/[id] — Memory detail (deep-linkable)
- /search?query=&tag= — Optional: search and filters
- /tags/[tag] — Optional: browse by tag
- /admin — Optional (Phase 3): Upload and curation tools

API routes (Next.js)
- /api/auth/* — NextAuth handlers
- /api/media/list — List media by program (server-side call to Cloudinary)
- /api/media/sign — Create signed/expiring URLs for private media
- /api/admin/upload — Admin-only upload endpoint (Phase 3)

Guards and Middleware
- Public routes remain accessible without login
- Protected routes check session in middleware and redirect to /signin (or modal) if not authenticated
