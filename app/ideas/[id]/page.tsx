import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ideas } from '@/lib/data';

export default function IdeaDetailPage({ params }: { params: { id: string } }) {
  const idea = ideas.find((item) => item.id === params.id);

  if (!idea) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/ideas" className="text-sm font-medium text-brand-600">
        ← Back to ideas
      </Link>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{idea.category}</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">{idea.status}</span>
        </div>

        <h1 className="mt-5 text-4xl font-black text-slate-900">{idea.title}</h1>

        <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm text-slate-600">
          <div><span className="block font-semibold text-slate-900">Creator</span>{idea.company}</div>
          <div><span className="block font-semibold text-slate-900">Stage</span>{idea.stage}</div>
          <div><span className="block font-semibold text-slate-900">Team</span>{idea.team}</div>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
          <h2 className="text-lg font-bold text-slate-900">Problem statement</h2>
          <p className="mt-3 text-slate-600">{idea.problem}</p>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
          <h2 className="text-lg font-bold text-slate-900">Solution</h2>
          <p className="mt-3 text-slate-600">{idea.solution}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">Support this idea</button>
          <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">Connect with creator</button>
        </div>
      </div>
    </main>
  );
}
