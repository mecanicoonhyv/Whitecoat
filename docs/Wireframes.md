Wireframes (Text)

Landing (/)
- Header: Logo | Programs | About | Sign In
- Hero: Full-bleed background image/video with overlay + headline
  - Headline: "White Coat Ceremony"
  - Subheadline: "A celebration of dedication and compassion"
  - Quotes rotator showing 1-2 lines, auto-advancing
  - CTA: [View Memories] (prompts sign-in if not authenticated)
- Highlights: 3 cards (Morning, Afternoon, Evening) with hero thumbnails
- Footer: Copyright, links, social (optional)

Programs (/programs)
- Three cards in a responsive grid
  - Morning — short blurb, [View Gallery]
  - Afternoon — short blurb, [View Gallery]
  - Evening — short blurb, [View Gallery]

Program Gallery (/memories/:program)
- Header: Program title + time
- Filters: [All] [Images] [Videos] [Tags v]
- Grid: Masonry or evenly-spaced responsive cards; lazy loaded
- Card: media thumbnail, title/caption on hover, duration badge for video
- Interaction: Clicking opens a lightbox; [Open Detail] for permalink

Memory Detail (/memories/:program/:id)
- Large media viewer (image or video player)
- Title, caption, metadata (takenAt, photographer)
- Tags and [Back to gallery]
- Related items grid (optional)

Admin (optional /admin)
- Upload form: choose program, tags, caption, selects file
- Upload to Cloudinary with progress, displays transformation and poster
- Manage table: list, publish toggle, delete
