"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { defaultIdeas, type IdeaRecord } from '@/lib/data';

export default function DashboardPage() {
  const [ideas, setIdeas] = useState<IdeaRecord[]>(defaultIdeas);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('/api/ideas');
        const data = await response.json();
        if (Array.isArray(data)) setIdeas(data);
      } catch (error) {
        console.error('Unable to load dashboard ideas', error);
      }
    };

    fetchIdeas();
  }, []);

  const recentIdeas = ideas.slice(0, 4);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Dashboard</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Company and partner overview</h1>
        </div>
        <Link href="/submit" className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft">
          Review new ideas
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {[
          { label: 'New ideas', value: `${recentIdeas.length}` },
          { label: 'Shortlisted', value: '14' },
          { label: 'Matches', value: '9' },
          { label: 'Sponsored', value: '5' }
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="text-sm text-slate-500">{stat.label}</div>
            <div className="mt-4 text-3xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Recent submissions</h2>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            Export report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 pr-6 font-medium">Project</th>
                <th className="pb-3 pr-6 font-medium">Category</th>
                <th className="pb-3 pr-6 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentIdeas.map((idea) => (
                <tr key={idea.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-6 font-medium text-slate-800">{idea.title}</td>
                  <td className="py-4 pr-6 text-slate-600">{idea.category}</td>
                  <td className="py-4 pr-6">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{idea.status}</span>
                  </td>
                  <td className="py-4">
                    <Link href={`/ideas/${idea.id}`} className="text-sm font-semibold text-brand-600">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
