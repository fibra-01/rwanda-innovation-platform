import Link from 'next/link';
import { ideas } from '@/lib/data';

export default function IdeasPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Innovations</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Ideas from Rwanda&apos;s next generation</h1>
        </div>

        <Link href="/submit" className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
          Submit an idea
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
        {['All', 'Agriculture', 'Health', 'Education', 'Climate', 'AI', 'Fintech'].map((filter) => (
          <button key={filter} className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-slate-300 hover:text-slate-900">
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {ideas.map((idea) => (
          <div key={idea.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{idea.category}</span>
              <span className="text-xs font-medium text-emerald-600">{idea.status}</span>
            </div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">{idea.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{idea.summary}</p>

            <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
              <span>{idea.company}</span>
              <span>{idea.stage}</span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-slate-500">{idea.team}</div>
              <Link href={`/ideas/${idea.id}`} className="text-sm font-semibold text-brand-600">
                View details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
