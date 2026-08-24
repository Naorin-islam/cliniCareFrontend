import Link from 'next/link';
import { Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-blue-600">
          <Stethoscope className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-slate-900">CliniCare</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="relative text-blue-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/doctors" className="hover:text-blue-600 transition-colors">Doctors</Link>
          <Link href="/departments" className="hover:text-blue-600 transition-colors">Departments</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="hidden sm:inline-flex rounded-full px-6 font-semibold hover:bg-slate-100/50">Login</Button>
          </Link>
          <Link href="/appointment">
            <Button className="rounded-full px-6 shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">Book Appointment</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
