import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Welcome</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Sign in to SparkLab</h1>

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="you@example.com" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="••••••••" />
          </label>

          <button className="w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            Continue
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Need an account?{' '}
          <Link href="/signup" className="font-semibold text-brand-600">Create one</Link>
        </p>
      </div>
    </main>
  );
}
