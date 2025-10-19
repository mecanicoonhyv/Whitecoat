Content Curation Guide (Cloudinary + Metadata)

Purpose
Define how to organize, name, and tag media so the site can reliably discover and present content.

Folder Structure (Cloudinary)
- memories/
  - morning/
  - afternoon/
  - evening/

File Naming Convention
- YYYYMMDD_program_shortslug_description_optional.ext
  - 20250115_morning_ceremony-group-photo_001.jpg
  - 20250115_evening_keynote-address_clip01.mp4

Tags (Examples)
- program: morning | afternoon | evening (optional if folder already encodes this)
- type: image | video
- topic: speeches, oath, pinning, group-photos, candids, faculty, procession, reception
- people (optional): dean, keynote, class-of-2025

Metadata Mapping
- title: Short human-friendly title
- caption: One-line description; can be the first sentence of a longer description
- takenAt: From EXIF if present, else approximate from folder/date
- photographer/videographer: Free text
- tags[]: topic + type + program

Hero Assets
- Select 1–3 signature images per program for hero backgrounds.
- Use high-resolution sources; site will deliver responsive variants.

Quality and Moderation
- Avoid blurry or underexposed images for hero and highlights.
- Remove duplicates; keep the best version.
- Ensure faces are appropriate to publish or have consent.

Bulk Import Tips
- Upload in batches per program folder to avoid misplacement.
- Apply tags at upload time via Cloudinary CLI or UI.
- Consider using structured metadata for photographer and takenAt if consistent.

Review Workflow
- Stage folder (memories/staging) for new imports
- Curation checklist: quality, tags, captions, hero candidates
- Move curated items to program folders once ready

Admin Notes (Phase 2)
- Build an admin UI for upload + tagging.
- Use a small DB to track publish/unpublish and override captions when needed.
