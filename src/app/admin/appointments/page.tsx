"use client";

import { useState } from 'react';
import { Plus, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockAppointments } from '@/lib/mock-data';

export default function AdminAppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = mockAppointments.filter(app => 
    app.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.doctorId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Appointments</h2>
          <p className="text-sm text-slate-500">Manage hospital appointments.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="py-4 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">All Appointments</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              type="search" 
              placeholder="Search appointments..." 
              className="pl-9 h-9" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Doctor ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAppointments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-slate-500">
                    No appointments found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredAppointments.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium text-slate-900">{app.patientId}</TableCell>
                    <TableCell>{app.doctorId}</TableCell>
                    <TableCell>{app.date}</TableCell>
                    <TableCell>{app.time}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={app.status === 'CONFIRMED' ? 'success' : app.status === 'PENDING' ? 'warning' : 'secondary'} 
                        className="text-xs"
                      >
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
