import MediaItemCard from '@/components/MediaItemCard'
import { listMediaByProgram } from '@/lib/media'
import type { ProgramId } from '@/lib/constants'

export default async function MediaGrid({ program, type }: { program: ProgramId, type: 'all'|'image'|'video' }) {
  const res = await listMediaByProgram({ program, type })

  if (!res.items.length) {
    return <p className="text-white/70">No media found yet. Please check back soon.</p>
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {res.items.map(item => (
        <MediaItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}
