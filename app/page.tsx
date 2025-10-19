import Link from 'next/link'
import QuoteRotator from '@/components/QuoteRotator'

export default function LandingPage() {
  return (
    <section className="relative min-h-[75vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/40 via-indigo-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/demo/image/upload/w_1600,f_auto,q_auto/v1700000000/samples/landscapes/nature-mountains.jpg')] bg-cover bg-center mix-blend-overlay opacity-40" />
      </div>
      <div className="container py-20">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">White Coat Ceremony</h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl">A celebration of dedication and compassion. Explore memories from the Morning, Afternoon, and Evening programs.</p>
        <div className="mt-8">
          <Link href="/programs" className="px-6 py-3 rounded bg-brand-primary hover:brightness-110">View Memories</Link>
        </div>
        <div className="mt-12 max-w-2xl">
          <QuoteRotator />
        </div>
      </div>
    </section>
  )
}
