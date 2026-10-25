import fs from 'fs/promises';
import path from 'path';
import { defaultIdeas, type IdeaRecord } from './data';

const filePath = path.join(process.cwd(), 'data', 'ideas.json');

export async function readIdeas(): Promise<IdeaRecord[]> {
  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(file) as IdeaRecord[];
    return parsed.length > 0 ? parsed : defaultIdeas;
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(defaultIdeas, null, 2));
    return defaultIdeas;
  }
}

export async function writeIdeas(ideas: IdeaRecord[]) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(ideas, null, 2));
}

export async function getIdeaById(id: string) {
  const ideas = await readIdeas();
  return ideas.find((idea) => idea.id === id) ?? null;
}

export async function createIdea(input: Partial<IdeaRecord>) {
  const ideas = await readIdeas();
  const newIdea: IdeaRecord = {
    id: input.id ?? `idea-${Date.now()}`,
    title: input.title ?? 'Untitled idea',
    summary: input.summary ?? 'No summary provided.',
    category: input.category ?? 'General',
    status: input.status ?? 'Pending review',
    stage: input.stage ?? 'Concept',
    creatorName: input.creatorName ?? 'Anonymous',
    email: input.email ?? 'no-email@example.com',
    problem: input.problem ?? 'Not specified.',
    solution: input.solution ?? 'Not specified.'
  };

  const nextIdeas = [newIdea, ...ideas];
  await writeIdeas(nextIdeas);
  return newIdea;
}
