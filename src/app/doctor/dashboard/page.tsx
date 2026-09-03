"use client";

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { CalendarCheck, Users, Activity, FileText, LogOut } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { appointmentsService } from '@/services/appointments.service';
import Link from 'next/link';

export default function DoctorDashboard() {
  const { user, logout } = useAuthStore();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await appointmentsService.getAll();
        // Since we don't have a specific doctor filtering in API right now, 
        // we'll just show all appointments as a placeholder, or filter if doctorId is present.
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
    <div className="min-h-screen bg-slate-50 flex flex-col" data-testid="doctor-dashboard">
      {/* Doctor Header */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-blue-600">CliniCare <span className="text-slate-700">Doctor</span></div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-700 hidden sm:block">Dr. {user?.name || 'Smith'}</span>
            <Button variant="outline" className="gap-2" onClick={logout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 data-testid="dashboard-header" className="text-3xl font-bold text-slate-900 mb-2">Welcome, Dr. {user?.name?.split(' ')[0] || 'Doctor'}</h1>
            <p className="text-slate-500">Here is your schedule and patient updates for today.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-none shadow-sm bg-blue-600 text-white">
              <CardContent className="p-6">
                <CalendarCheck className="h-8 w-8 mb-4 opacity-80" />
                <h3 className="text-3xl font-bold">{appointments.length}</h3>
                <p className="text-blue-100 text-sm mt-1">Today's Appointments</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <Users className="h-8 w-8 mb-4 text-emerald-500" />
                <h3 className="text-3xl font-bold text-slate-900">45</h3>
                <p className="text-slate-500 text-sm mt-1">Total Patients</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle className="text-lg">Today's Schedule</CardTitle>
              <Button variant="link" className="text-blue-600">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" data-testid="doctor-appointments">
                {isLoading ? (
                  <div className="text-center py-4 text-slate-500">Loading appointments...</div>
                ) : appointments.length === 0 ? (
                  <div className="text-center py-4 text-slate-500">No appointments scheduled for today.</div>
                ) : (
                  appointments.map(app => (
                    <div key={app.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-100 bg-slate-50/50 rounded-xl gap-4 hover:bg-white hover:shadow-md transition-all">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center justify-center h-12 w-12 bg-white rounded-lg border shadow-sm">
                          <span className="text-xs font-medium text-slate-500">{new Date(app.appointmentDate).getHours() || '10'}</span>
                          <span className="text-[10px] text-slate-400">AM</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Patient ID: {app.patientId}</div>
                          <div className="text-sm text-slate-500">{app.reason || 'Checkup'}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={app.status === 'CONFIRMED' ? 'success' : 'secondary'}>{app.status || 'PENDING'}</Badge>
                        <Button size="sm" variant="outline">Consult</Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="md:w-80 space-y-6">
          <Card className="border-none shadow-sm bg-slate-900 text-white">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full justify-start gap-3 bg-white/10 hover:bg-white/20 text-white border-0">
                  <FileText className="h-4 w-4" /> Create Prescription
                </Button>
                <Button variant="secondary" className="w-full justify-start gap-3 bg-white/10 hover:bg-white/20 text-white border-0">
                  <Activity className="h-4 w-4" /> Request Lab Test
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Pending Lab Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-sm text-slate-500">
                No pending lab reports at the moment.
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
}
