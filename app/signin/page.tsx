"use client"

import { signIn } from 'next-auth/react'

export default function SignInPage() {
  return (
    <div className="container py-24">
      <h1 className="text-3xl font-semibold">Sign in</h1>
      <p className="mt-2 text-white/70">Use your Google account to access the memories.</p>
      <button
        onClick={() => signIn('google')}
        className="mt-6 px-5 py-2 rounded bg-brand-primary hover:brightness-110"
      >
        Continue with Google
      </button>
    </div>
  )
}
