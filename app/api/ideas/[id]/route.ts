import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const idea = await prisma.idea.findUnique({
    where: { id: params.id }
  });

  if (!idea) {
    return NextResponse.json({ error: 'Idea not found' }, { status: 404 });
  }

  return NextResponse.json(idea);
}
