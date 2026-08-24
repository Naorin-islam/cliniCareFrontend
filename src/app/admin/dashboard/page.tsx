"use client";

import { useState, useEffect } from 'react';
import { Users, UserRound, CalendarCheck, Bed, DollarSign, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockAppointments } from '@/lib/mock-data';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { patientsService } from '@/services/patients.service';
import { doctorsService } from '@/services/doctors.service';

const chartData = [
  { name: 'Jan', patients: 400, revenue: 2400 },
  { name: 'Feb', patients: 300, revenue: 1398 },
  { name: 'Mar', patients: 200, revenue: 9800 },
  { name: 'Apr', patients: 278, revenue: 3908 },
  { name: 'May', patients: 189, revenue: 4800 },
  { name: 'Jun', patients: 239, revenue: 3800 },
  { name: 'Jul', patients: 349, revenue: 4300 },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalDoctors: 0,
    todayAppointments: 0,
    availableBeds: 0,
    pendingAppointments: 0,
    todayRevenue: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const patients = await patientsService.getAll();
        const doctors = await doctorsService.getAll();
        setStats(prev => ({
          ...prev,
          totalPatients: patients.length,
          totalDoctors: doctors.length
        }));
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { title: "Total Patients", value: stats.totalPatients.toLocaleString(), icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Total Doctors", value: stats.totalDoctors, icon: UserRound, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Today's Appointments", value: stats.todayAppointments, icon: CalendarCheck, color: "text-amber-600", bg: "bg-amber-100" },
    { title: "Available Beds", value: stats.availableBeds, icon: Bed, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Pending Appointments", value: stats.pendingAppointments, icon: Activity, color: "text-rose-600", bg: "bg-rose-100" },
    { title: "Today's Revenue", value: `$${stats.todayRevenue.toLocaleString()}`, icon: DollarSign, color: "text-indigo-600", bg: "bg-indigo-100" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h2>
        <p className="text-sm text-slate-500">Welcome back to CliniCare Admin Panel</p>
      </div>
      
      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${stat.bg} opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500`}></div>
            <CardContent className="p-6 flex items-center gap-5 relative z-10">
              <div className={`h-14 w-14 rounded-2xl ${stat.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-1">{stat.title}</p>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts & Tables Area */}
      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4 border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Revenue & Patient Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 border-none shadow-sm flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">Recent Appointments</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-4">
              {mockAppointments.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      PT
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Patient ID: {app.patientId}</p>
                      <p className="text-xs text-slate-500">{app.time} - {app.reason}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
