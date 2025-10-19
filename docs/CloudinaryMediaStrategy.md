Cloudinary Media Strategy

Goals
- Deliver high-quality, fast media while preserving privacy via signed URLs and private/authenticated resources.

Resource Types
- Images: Upload as private or authenticated; transform on the fly with signed URLs.
- Videos: Upload as private/authenticated; deliver as HLS (m3u8).

Transformations (Examples)
- Thumbnails (grid): c_fill,f_auto,q_auto,w_400,h_300 (srcset: 1x, 2x)
- Card large: c_fill,f_auto,q_auto,w_800,h_600
- Detail image: c_fit,f_auto,q_auto,w_1600
- Video poster: so_0,du_1,c_fill,f_auto,q_auto,w_800,h_450
- Format negotiation: Let f_auto choose webp/avif where supported

Signed URL Issuance
- Use Cloudinary Node SDK to generate signed URLs server-side
- TTL: 5–10 minutes default; refresh on gallery interactions as needed
- Avoid caching sensitive URLs in client storage or logs

Video Streaming
- Use m3u8 streaming with controls; hide raw mp4 links
- Optionally use Cloudinary video player or a custom HLS player (hls.js) for broader control
- Subtitles: Upload WebVTT and attach via player when available

Caching and CDN
- Expect Cloudinary CDN caching for transformed assets; short TTL signed URLs prevent long-term reuse
- For Next.js, lean on Image component caching where public; for private URLs, ensure headers reflect short-term caching

Folder and Tagging
- See ContentCurationGuide.md for folder layout and tags
- Use tags for filtering by program, type, and topic

Error and Fallbacks
- Provide a placeholder image for missing or errored media
- For videos, show poster; display a friendly message if playback fails

Observability
- Track media errors and loading times with client-side logging (optional)
