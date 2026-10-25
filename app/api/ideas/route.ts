import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const ideas = await prisma.idea.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json(ideas);
}

export async function POST(req: Request) {
  const body = await req.json();

  const idea = await prisma.idea.create({
    data: {
      title: body.title,
      summary: body.summary,
      category: body.category,
      stage: body.stage,
      creatorName: body.creatorName,
      email: body.email,
      problem: body.problem,
      solution: body.solution
    }
  });

  return NextResponse.json(idea, { status: 201 });
}
