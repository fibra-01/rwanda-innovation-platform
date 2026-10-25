import Link from 'next/link';
import { featuredIdeas, opportunities, stats } from '@/lib/data';

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              Building the next generation of Rwandan innovation
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Spark ideas into impact across Rwanda.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              SparkLab Rwanda helps students, young innovators, companies, mentors, and partners turn bold ideas into actionable opportunities, projects, and real-world support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/ideas" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
                Explore ideas
              </Link>
              <Link href="/submit" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                Submit your idea
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Innovation pipeline</span>
                <span>Live</span>
              </div>
              <div className="mt-8 space-y-4">
                {featuredIdeas.slice(0, 3).map((idea) => (
                  <div key={idea.id} className="rounded-2xl bg-slate-800 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">{idea.title}</h3>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">
                        {idea.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{idea.summary}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>{idea.category}</span>
                      <span>{idea.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">How it works</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">From idea to support in one platform</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: '1. Submit an idea',
              description: 'Students and young innovators share their vision, needs, and goals in a simple application flow.'
            },
            {
              title: '2. Discover and review',
              description: 'Companies, mentors, and partners evaluate ideas based on impact, feasibility, and fit.'
            },
            {
              title: '3. Get support',
              description: 'Projects can unlock mentoring, collaboration, sponsorship, funding, competitions, and internships.'
            }
          ].map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-lg font-bold text-brand-700">
                {step.title.split('.')[0]}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Featured opportunities</p>
              <h2 className="mt-3 text-3xl font-black text-white">Open calls and support programs</h2>
            </div>
            <Link href="/ideas" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
              View all
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {opportunities.map((opportunity) => (
              <div key={opportunity.title} className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <div className="text-sm font-medium text-brand-300">{opportunity.type}</div>
                <h3 className="mt-3 text-xl font-bold text-white">{opportunity.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{opportunity.description}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                  <span>{opportunity.deadline}</span>
                  <span>{opportunity.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
