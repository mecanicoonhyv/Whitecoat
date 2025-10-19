import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import AuthButton from '@/components/AuthButton'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'White Coat Ceremony Memories',
  description: 'Memories from Morning, Afternoon, and Evening programs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <header className="sticky top-0 z-30 backdrop-blur bg-black/30 border-b border-white/10">
            <nav className="container flex items-center justify-between py-3">
              <Link href="/" className="text-lg font-semibold">White Coat Ceremony</Link>
              <div className="flex gap-4 items-center text-sm">
                <Link href="/programs" className="hover:text-brand-accent">Programs</Link>
                <Link href="/about" className="hover:text-brand-accent">About</Link>
                <AuthButton />
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 py-8 text-center text-xs text-white/70">
            © {new Date().getFullYear()} White Coat Ceremony. All rights reserved.
          </footer>
        </Providers>
      </body>
    </html>
  )
}
