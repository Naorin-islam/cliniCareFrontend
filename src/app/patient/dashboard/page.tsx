"use client";

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { CalendarDays, FileText, Activity, CreditCard, LogOut } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { appointmentsService } from '@/services/appointments.service';
import Link from 'next/link';

export default function PatientDashboard() {
  const { user, logout } = useAuthStore();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await appointmentsService.getAll();
        setAppointments(data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Patient Header */}
      <header className="bg-blue-600 text-white sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">CliniCare Patient Portal</div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium hidden sm:block">Hello, {user?.name || 'Patient'}</span>
            <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white gap-2" onClick={logout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 data-testid="dashboard-header" className="text-3xl font-bold text-slate-900 mb-2">My Dashboard</h1>
          <p className="text-slate-500">Welcome to your personal health portal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Appointments', icon: CalendarDays, href: '/patient/appointments', color: 'text-blue-600', bg: 'bg-blue-100' },
            { title: 'Medical Records', icon: FileText, href: '/patient/records', color: 'text-indigo-600', bg: 'bg-indigo-100' },
            { title: 'Lab Reports', icon: Activity, href: '/patient/labs', color: 'text-emerald-600', bg: 'bg-emerald-100' },
            { title: 'Billing', icon: CreditCard, href: '/patient/billing', color: 'text-amber-600', bg: 'bg-amber-100' },
          ].map((item, idx) => (
            <Link key={idx} href={item.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className={`h-16 w-16 rounded-full ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Upcoming Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-slate-500 py-4">Loading appointment details...</div>
              ) : appointments.length === 0 ? (
                <div className="text-slate-500 py-4">No upcoming appointments.</div>
              ) : (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div>
                    <div className="text-blue-800 font-semibold text-lg">Doctor ID: {appointments[0].doctorId || 'Assigned Doctor'}</div>
                    <div className="text-blue-600/80 text-sm">{appointments[0].reason || 'General Consultation'}</div>
                    <div className="mt-2 text-slate-700 flex items-center gap-2 text-sm">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(appointments[0].appointmentDate).toLocaleString() || 'Scheduled Soon'}
                    </div>
                  </div>
                  <Button>View Details</Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Recent Lab Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                  <div className="text-slate-900 font-semibold">Complete Blood Count (CBC)</div>
                  <div className="text-slate-500 text-sm">Requested on Oct 10, 2023</div>
                  <div className="mt-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                    Completed
                  </div>
                </div>
                <Button variant="outline">View Report</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
