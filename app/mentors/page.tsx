const mentors = [
  {
    name: 'Aline Uwimana',
    specialty: 'Product strategy',
    focus: 'Helping student founders turn concepts into real products.',
    availability: 'Open for 2 projects'
  },
  {
    name: 'Jean Baptiste Nshuti',
    specialty: 'Startup fundraising',
    focus: 'Grant readiness, pitch coaching, and investment support.',
    availability: 'Available this month'
  },
  {
    name: 'Michele Ndayambaje',
    specialty: 'Climate and agri-tech',
    focus: 'Commercialising climate-smart solutions with rural impact.',
    availability: 'Accepting 3 new matches'
  },
  {
    name: 'Cynthia Mukamana',
    specialty: 'UX and community design',
    focus: 'User research and human-centered design for early products.',
    availability: 'Open for mentorship'
  }
];

export default function MentorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Mentors</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Connect with experienced guides</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">{mentor.name}</h2>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{mentor.specialty}</span>
            </div>
            <p className="mt-4 text-slate-600">{mentor.focus}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-slate-500">{mentor.availability}</span>
              <button className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Request match</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
