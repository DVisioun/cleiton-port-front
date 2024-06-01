import fetchAndSaveLabels from '@/api/Labels/write-labels-in-files'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  fetchAndSaveLabels()

  return NextResponse.json({ data: 'Dados gerados com sucesso.' })
}
