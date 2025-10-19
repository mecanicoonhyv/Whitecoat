import { notFound } from 'next/navigation'
import { PROGRAMS, type ProgramId } from '@/lib/constants'
import MediaGrid from '@/components/MediaGrid'

export const dynamic = 'force-dynamic'

export default async function ProgramGalleryPage({ params, searchParams }: { params: { program: string }, searchParams: Record<string, string | string[] | undefined> }) {
  const program = params.program as ProgramId
  const found = PROGRAMS.find(p => p.id === program)
  if (!found) return notFound()

  const type = (searchParams.type as string) || 'all'

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold">{found.title}</h1>
      <p className="text-white/70">{found.description}</p>
      <div className="mt-6">
        <div className="flex gap-3 text-sm">
          <a href={`?type=all`} className={`px-3 py-1.5 rounded border border-white/10 ${type==='all' ? 'bg-white/10' : ''}`}>All</a>
          <a href={`?type=image`} className={`px-3 py-1.5 rounded border border-white/10 ${type==='image' ? 'bg-white/10' : ''}`}>Images</a>
          <a href={`?type=video`} className={`px-3 py-1.5 rounded border border-white/10 ${type==='video' ? 'bg-white/10' : ''}`}>Videos</a>
        </div>
      </div>
      <div className="mt-8">
        <MediaGrid program={program} type={type as 'all'|'image'|'video'} />
      </div>
    </section>
  )
}
