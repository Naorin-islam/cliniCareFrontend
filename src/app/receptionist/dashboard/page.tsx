"use client";

import { useAuthStore } from '@/store/authStore';
import { CalendarCheck, Users, LogOut } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockAppointments, mockPatients } from '@/lib/mock-data';

export default function ReceptionistDashboard() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-blue-600">CliniCare <span className="text-slate-700">Reception</span></div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-700 hidden sm:block">{user?.name || 'Receptionist'}</span>
            <Button variant="outline" className="gap-2" onClick={logout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Front Desk Dashboard</h1>
          <p className="text-slate-500">Manage patient registrations and daily appointments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="border-none shadow-sm bg-blue-600 text-white">
            <CardContent className="p-6">
              <CalendarCheck className="h-8 w-8 mb-4 opacity-80" />
              <h3 className="text-3xl font-bold">{mockAppointments.length}</h3>
              <p className="text-blue-100 text-sm mt-1">Today's Appointments</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <Users className="h-8 w-8 mb-4 text-emerald-500" />
              <h3 className="text-3xl font-bold text-slate-900">{mockPatients.length}</h3>
              <p className="text-slate-500 text-sm mt-1">Registered Patients</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle className="text-lg">Recent Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAppointments.map(app => (
                  <div key={app.id} className="flex items-center justify-between p-3 border rounded-xl hover:bg-slate-50 transition-colors">
                    <div>
                      <div className="font-semibold text-slate-900">Patient: {app.patientId}</div>
                      <div className="text-sm text-slate-500">Doctor: {app.doctorId} | {app.time}</div>
                    </div>
                    <Badge variant={app.status === 'CONFIRMED' ? 'success' : 'secondary'}>{app.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
