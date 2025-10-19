"use client"

import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <span className="text-white/70">…</span>
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn('google')}
        className="px-3 py-1.5 rounded bg-brand-primary hover:brightness-110 text-sm"
      >
        Sign In
      </button>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-white/80 hidden sm:inline">{session.user?.name}</span>
      <button
        onClick={() => signOut()}
        className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-sm"
      >
        Sign Out
      </button>
    </div>
  )
}
