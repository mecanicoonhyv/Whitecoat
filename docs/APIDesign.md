API Design (Next.js App Router)

All responses are JSON unless otherwise stated. All protected endpoints require a valid session.

Auth
- /api/auth/* — Handled by NextAuth; do not customize unless needed.

Media
- GET /api/media/list?program=morning|afternoon|evening&type=image|video|all&tag=optional
  - Auth: required
  - Query
    - program (required)
    - type (optional; default all)
    - tag (optional; filter by topic tag)
    - page / cursor (optional; for pagination)
  - Response
    {
      "items": [
        {
          "id": string,
          "programId": "morning"|"afternoon"|"evening",
          "type": "image"|"video",
          "title": string,
          "caption": string,
          "tags": string[],
          "takenAt": string,
          "photographer": string,
          "publicId": string,
          "width": number,
          "height": number,
          "duration": number | null,
          "thumbUrl": string,  // signed
          "mediaUrl": string    // signed (image or m3u8)
        }
      ],
      "nextCursor": string | null
    }

- POST /api/media/sign
  - Auth: required
  - Body: { publicId: string, resourceType: "image"|"video", variant: "thumb"|"full" }
  - Response: { url: string, expiresAt: number }

Admin (Phase 3)
- POST /api/admin/upload
  - Auth: admin role required
  - Body: multipart/form-data with fields: program, tags[], caption, file
  - Response: { id, publicId }

Errors
- Use standard error envelope
  {
    "error": { "code": string, "message": string }
  }

Rate Limiting
- Apply IP + user-based limits for media endpoints
