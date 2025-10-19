import Image from 'next/image'
import Link from 'next/link'

export type MediaCardItem = {
  id: string
  programId: 'morning' | 'afternoon' | 'evening'
  type: 'image' | 'video'
  title: string
  caption: string
  thumbUrl: string
  mediaUrl: string
  width: number
  height: number
  duration?: number | null
}

export default function MediaItemCard({ item }: { item: MediaCardItem }) {
  const isVideo = item.type === 'video'
  return (
    <Link href={`#`} className="block group rounded-lg overflow-hidden border border-white/10 hover:border-brand-accent">
      <div className="relative aspect-[4/3] bg-white/5">
        {isVideo ? (
          // For videos, show poster image via thumbUrl as well
          <Image src={item.thumbUrl} alt={item.title} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
        ) : (
          <Image src={item.thumbUrl} alt={item.title} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
        )}
        {isVideo ? (
          <span className="absolute bottom-2 right-2 text-xs bg-black/60 rounded px-2 py-0.5">Video</span>
        ) : null}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium truncate">{item.title}</h3>
        <p className="text-xs text-white/60 truncate">{item.caption}</p>
      </div>
    </Link>
  )
}
