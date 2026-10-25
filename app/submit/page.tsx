import Link from 'next/link';

export default function SubmitPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Innovation</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Submit your idea</h1>
      </div>

      <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-brand-500" placeholder="Your name" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-brand-500" placeholder="name@example.com" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Category</span>
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500">
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
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500">
              <option>Concept</option>
              <option>Prototype</option>
              <option>Early MVP</option>
              <option>Growth</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Idea title</span>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Smart irrigation for smallholder farmers" />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Problem statement</span>
            <textarea rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Describe the problem you are solving and who it affects." />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-slate-700">Solution</span>
            <textarea rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Explain your solution, why it matters, and what makes it innovative." />
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button type="submit" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            Submit idea
          </button>
          <Link href="/ideas" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
            Browse ideas
          </Link>
        </div>
      </form>
    </main>
  );
}
