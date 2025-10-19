import { z } from 'zod'
import { cloudinary, isCloudinaryConfigured } from '@/lib/cloudinary'
import type { ProgramId } from '@/lib/constants'

export const MediaItemSchema = z.object({
  id: z.string(),
  programId: z.enum(['morning', 'afternoon', 'evening']),
  type: z.enum(['image', 'video']),
  title: z.string().optional().default(''),
  caption: z.string().optional().default(''),
  tags: z.array(z.string()).optional().default([]),
  takenAt: z.string().optional().default(''),
  photographer: z.string().optional().default(''),
  publicId: z.string(),
  width: z.number().optional().default(0),
  height: z.number().optional().default(0),
  duration: z.number().nullable().optional(),
  thumbUrl: z.string().optional().default(''),
  mediaUrl: z.string().optional().default(''),
})

export type MediaItem = z.infer<typeof MediaItemSchema>

export async function listMediaByProgram({ program, type }: { program: ProgramId, type: 'all'|'image'|'video' }) {
  if (!isCloudinaryConfigured()) {
    // Return placeholder data for development without Cloudinary creds
    return {
      items: [
        {
          id: `${program}-placeholder-1`,
          programId: program,
          type: 'image' as const,
          title: 'Placeholder Image',
          caption: 'Sample placeholder image',
          publicId: 'sample',
          width: 800,
          height: 600,
          thumbUrl: 'https://res.cloudinary.com/demo/image/upload/c_fill,w_800,h_600,f_auto,q_auto/samples/landscapes/nature-mountains.jpg',
          mediaUrl: 'https://res.cloudinary.com/demo/image/upload/c_fit,w_1600,f_auto,q_auto/samples/landscapes/nature-mountains.jpg',
        },
      ],
      nextCursor: null as string | null,
    }
  }

  const folder = `memories/${program}`

  // Build search expression
  const typeFilter = type === 'all' ? '' : ` AND resource_type:${type === 'image' ? 'image' : 'video'}`
  const expression = `folder:${folder}${typeFilter}`

  const result = await cloudinary.search
    .expression(expression)
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute()

  const items: MediaItem[] = (result.resources || []).map((r: any) => {
    const isVideo = r.resource_type === 'video'
    const publicId: string = r.public_id
    const programId: ProgramId = program

    const thumbUrl = cloudinary.url(publicId, {
      secure: true,
      sign_url: true,
      resource_type: isVideo ? 'video' : 'image',
      transformation: isVideo
        ? [{ format: 'jpg' }, { width: 800, height: 600, crop: 'fill', quality: 'auto', fetch_format: 'auto' }]
        : [{ width: 800, height: 600, crop: 'fill', quality: 'auto', fetch_format: 'auto' }],
    })

    const mediaUrl = isVideo
      ? cloudinary.url(publicId, {
          secure: true,
          sign_url: true,
          resource_type: 'video',
          transformation: [{ streaming_profile: 'full_hd', format: 'm3u8' }],
        })
      : cloudinary.url(publicId, {
          secure: true,
          sign_url: true,
          resource_type: 'image',
          transformation: [{ width: 1600, crop: 'fit', quality: 'auto', fetch_format: 'auto' }],
        })

    return MediaItemSchema.parse({
      id: r.asset_id,
      programId,
      type: isVideo ? 'video' : 'image',
      title: r.context?.custom?.title || r.filename || '',
      caption: r.context?.custom?.caption || '',
      tags: r.tags || [],
      takenAt: r.created_at,
      photographer: r.context?.custom?.photographer || '',
      publicId,
      width: r.width,
      height: r.height,
      duration: isVideo ? r.duration : null,
      thumbUrl,
      mediaUrl,
    })
  })

  return { items, nextCursor: null as string | null }
}
