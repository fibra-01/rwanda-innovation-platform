import { NextResponse } from 'next/server';
import { createIdea, readIdeas } from '@/lib/idea-store';

export async function GET() {
  const ideas = await readIdeas();
  return NextResponse.json(ideas);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload.title || !payload.problem || !payload.solution) {
      return NextResponse.json({ error: 'Title, problem, and solution are required.' }, { status: 400 });
    }

    const createdIdea = await createIdea({
      title: payload.title,
      summary: payload.summary ?? payload.title,
      category: payload.category ?? 'General',
      stage: payload.stage ?? 'Concept',
      creatorName: payload.creatorName ?? 'Anonymous',
      email: payload.email ?? 'unknown@example.com',
      problem: payload.problem,
      solution: payload.solution,
      status: 'Pending review'
    });

    return NextResponse.json({ success: true, idea: createdIdea }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to submit idea right now.' }, { status: 500 });
  }
}
