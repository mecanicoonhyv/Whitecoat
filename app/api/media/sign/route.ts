import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { cloudinary, isCloudinaryConfigured } from '@/lib/cloudinary'

const Body = z.object({
  publicId: z.string(),
  resourceType: z.enum(['image', 'video']).default('image'),
  variant: z.enum(['thumb', 'full']).default('full'),
})

export async function POST(req: NextRequest) {
  if (!isCloudinaryConfigured()) {
    return NextResponse.json({ error: { code: 'SERVICE_UNAVAILABLE', message: 'Cloudinary not configured' } }, { status: 503 })
  }

  const json = await req.json().catch(() => null)
  const parsed = Body.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: { code: 'BAD_REQUEST', message: 'Invalid body' } }, { status: 400 })
  }

  const { publicId, resourceType, variant } = parsed.data

  const isVideo = resourceType === 'video'

  const url = isVideo
    ? cloudinary.url(publicId, {
        secure: true,
        sign_url: true,
        resource_type: 'video',
        transformation: variant === 'thumb'
          ? [{ format: 'jpg' }, { width: 800, height: 600, crop: 'fill', quality: 'auto', fetch_format: 'auto' }]
          : [{ streaming_profile: 'full_hd', format: 'm3u8' }],
      })
    : cloudinary.url(publicId, {
        secure: true,
        sign_url: true,
        resource_type: 'image',
        transformation: variant === 'thumb'
          ? [{ width: 800, height: 600, crop: 'fill', quality: 'auto', fetch_format: 'auto' }]
          : [{ width: 1600, crop: 'fit', quality: 'auto', fetch_format: 'auto' }],
      })

  // Cloudinary signed URLs include the signature; we use a nominal TTL client-side if desired
  const expiresAt = Date.now() + 10 * 60 * 1000

  return NextResponse.json({ url, expiresAt })
}
