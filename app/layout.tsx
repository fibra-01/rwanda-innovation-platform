import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'SparkLab Rwanda',
  description: 'A platform for Rwanda students and innovators to connect with companies, mentors, and opportunities.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
