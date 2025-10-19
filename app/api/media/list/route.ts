import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { listMediaByProgram } from '@/lib/media'

const Query = z.object({
  program: z.enum(['morning', 'afternoon', 'evening']),
  type: z.enum(['all', 'image', 'video']).default('all').optional(),
})

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const parsed = Query.safeParse({
    program: url.searchParams.get('program'),
    type: (url.searchParams.get('type') || undefined) as any,
  })

  if (!parsed.success) {
    return NextResponse.json({ error: { code: 'BAD_REQUEST', message: 'Invalid query' } }, { status: 400 })
  }

  const { program, type = 'all' } = parsed.data
  const data = await listMediaByProgram({ program, type })
  return NextResponse.json(data)
}
