"use client"

import { useEffect, useState } from 'react'
import { QUOTES } from '@/lib/constants'

export default function QuoteRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 5000)
    return () => clearInterval(id)
  }, [])

  const q = QUOTES[index]

  return (
    <blockquote className="text-white/90 text-lg leading-relaxed border-l-4 border-brand-accent pl-4">
      <p>“{q.text}”</p>
      {q.author ? <footer className="mt-2 text-white/60">— {q.author}</footer> : null}
    </blockquote>
  )
}
