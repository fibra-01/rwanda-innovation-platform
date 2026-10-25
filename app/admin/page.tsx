const adminMetrics = [
  { label: 'Total ideas', value: '236' },
  { label: 'Pending review', value: '18' },
  { label: 'Approved', value: '94' },
  { label: 'Active partnerships', value: '27' }
];

const moderationQueue = [
  { title: 'AI Learning Coach', team: '3 creators', category: 'Education', status: 'Needs review' },
  { title: 'Village Solar Tracker', team: '2 creators', category: 'Energy', status: 'Approved' },
  { title: 'Community Waste Map', team: '4 creators', category: 'Climate', status: 'Pending sponsor' }
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Admin</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Platform oversight</h1>
        </div>
        <button className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft">
          Publish opportunity
        </button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {adminMetrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="text-sm text-slate-500">{metric.label}</div>
            <div className="mt-4 text-3xl font-black text-slate-900">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-slate-900">Moderation queue</h2>

        <div className="mt-6 space-y-4">
          {moderationQueue.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold text-slate-900">{item.title}</div>
                <div className="text-sm text-slate-500">{item.team} • {item.category}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{item.status}</span>
                <button className="text-sm font-semibold text-brand-600">Open</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
