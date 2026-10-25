import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-lg font-black text-white">
            S
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">SparkLab</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Rwanda</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/ideas">Ideas</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/companies">Partners</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/mentors">Mentors</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 hover:border-slate-300">Login</Link>
          <Link href="/signup" className="rounded-full bg-brand-600 px-4 py-2 text-white shadow-soft hover:bg-brand-700">Join</Link>
        </nav>
      </div>
    </header>
  );
}
