import Link from 'next/link'
import { PROGRAMS } from '@/lib/constants'

export const dynamic = 'force-static'

export default function ProgramsPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-semibold">Programs</h1>
      <p className="text-white/70 mt-2">Browse memories from each program.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {PROGRAMS.map((p) => (
          <Link key={p.id} href={`/memories/${p.id}`} className="block rounded-lg border border-white/10 overflow-hidden group hover:border-brand-accent">
            <div className="h-40 bg-gradient-to-br from-brand-primary/40 to-black" />
            <div className="p-4">
              <h2 className="text-xl font-medium">{p.title}</h2>
              <p className="text-white/70 text-sm mt-1">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
