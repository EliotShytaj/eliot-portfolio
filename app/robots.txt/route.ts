import { NextResponse } from 'next/server'

export function GET() {
  const base = process.env.SITE_URL || 'http://localhost:3000'
  const body = `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`
  return new NextResponse(body, { headers: { 'Content-Type': 'text/plain' } })
}
