import { NextResponse } from 'next/server';
import { getIdeaById } from '@/lib/idea-store';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const idea = await getIdeaById(params.id);

  if (!idea) {
    return NextResponse.json({ error: 'Idea not found' }, { status: 404 });
  }

  return NextResponse.json(idea);
}
