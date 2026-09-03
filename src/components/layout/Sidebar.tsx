"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, UserRound, Building2, 
  CalendarCheck, FlaskConical, Pill, Receipt, Bed, 
  Settings, LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/authStore';

const adminLinks = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Patients', href: '/admin/patients', icon: Users },
  { name: 'Doctors', href: '/admin/doctors', icon: UserRound },
  { name: 'Departments', href: '/admin/departments', icon: Building2 },
  { name: 'Appointments', href: '/admin/appointments', icon: CalendarCheck },
  { name: 'Laboratory', href: '/admin/laboratory', icon: FlaskConical },
  { name: 'Medicines', href: '/admin/medicines', icon: Pill },
  { name: 'Beds', href: '/admin/beds', icon: Bed },
  { name: 'Billing', href: '/admin/billing', icon: Receipt },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuthStore();
  
  // Note: For Doctor/Patient, you would dynamically change the links based on role
  // Let's assume this is the Admin Sidebar for now
  const links = adminLinks;

  return (
    <aside className="w-64 bg-slate-950 text-slate-300 hidden md:flex flex-col h-screen sticky top-0 shadow-xl shadow-slate-900/20 z-20">
      <div className="h-16 flex items-center px-6 border-b border-white/5 bg-slate-900/50">
        <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <LayoutDashboard className="h-5 w-5 text-white" />
          </div>
          CliniCare
        </span>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.name}
              href={link.href}
              data-testid={`menu-${link.name.toLowerCase().replace(/s$/, '')}`}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                isActive 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-900/20" 
                  : "hover:bg-white/10 hover:text-white"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-white rounded-r-full"></div>
              )}
              <link.icon className={cn("h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110", isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400")} />
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-white/5 bg-slate-900/30">
        <button 
          onClick={logout}
          data-testid="logout-button"
          className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          Logout
        </button>
      </div>
    </aside>
  );
}
