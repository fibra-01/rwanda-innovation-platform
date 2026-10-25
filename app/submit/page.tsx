"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function SubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({
    creatorName: '',
    email: '',
    category: 'Agriculture',
    stage: 'Concept',
    title: '',
    summary: '',
    problem: '',
    solution: ''
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Failed to submit idea');
      }

      setStatus('Idea submitted successfully. It is now in the review queue.');
      setForm({
        creatorName: '',
        email: '',
        category: 'Agriculture',
        stage: 'Concept',
        title: '',
        summary: '',
        problem: '',
        solution: ''
      });
    } catch (error) {
      setStatus('Something went wrong while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Innovation</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Submit your idea</h1>
      </div>

      <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
            <input
              value={form.creatorName}
              onChange={(e) => handleChange('creatorName', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
              placeholder="name@example.com"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Category</span>
            <select
              value={form.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
            >
              <option>Agriculture</option>
              <option>Education</option>
              <option>Health</option>
              <option>Climate</option>
              <option>AI</option>
              <option>Fintech</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Stage</span>
            <select
              value={form.stage}
              onChange={(e) => handleChange('stage', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
            >
              <option>Concept</option>
              <option>Prototype</option>
              <option>Early MVP</option>
              <option>Growth</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Idea title</span>
            <input
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
              placeholder="Smart irrigation for smallholder farmers"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Short summary</span>
            <textarea
              rows={3}
              value={form.summary}
              onChange={(e) => handleChange('summary', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
              placeholder="Briefly explain your idea in one or two sentences."
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Problem statement</span>
            <textarea
              rows={4}
              value={form.problem}
              onChange={(e) => handleChange('problem', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
              placeholder="Describe the problem you are solving and who it affects."
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Solution</span>
            <textarea
              rows={4}
              value={form.solution}
              onChange={(e) => handleChange('solution', e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
              placeholder="Explain your solution, why it matters, and what makes it innovative."
            />
          </label>
        </div>

        {status && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {status}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Submit idea'}
          </button>
          <Link href="/ideas" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
            Browse ideas
          </Link>
        </div>
      </form>
    </main>
  );
}
