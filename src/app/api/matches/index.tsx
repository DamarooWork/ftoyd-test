import { NextResponse } from 'next/server'

import matches from '@/lib/data/matches.json'


export async function GET() {
  return NextResponse.json(matches)
}
