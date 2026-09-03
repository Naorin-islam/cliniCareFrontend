"use client";

import { useState, useEffect } from 'react';
import { Plus, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { patientsService } from '@/services/patients.service';

export default function AdminPatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await patientsService.getAll();
        setPatients(data);
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient => 
    patient.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.patientCode?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Patients</h2>
          <p className="text-sm text-slate-500">Manage hospital patients and records.</p>
        </div>
        <Button className="gap-2" data-testid="add-patient-button">
          <Plus className="h-4 w-4" />
          Add Patient
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="py-4 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">All Patients</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              type="search" 
              placeholder="Search patients..." 
              className="pl-9 h-9" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table data-testid="patient-list">
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Gender & Age</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Blood Group</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-slate-500">
                    Loading patients...
                  </TableCell>
                </TableRow>
              ) : filteredPatients.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-slate-500">
                    No patients found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium text-slate-900">{patient.patientCode}</TableCell>
                    <TableCell>{patient.user?.name || 'Unknown'}</TableCell>
                    <TableCell>{patient.gender || 'Unknown'}</TableCell>
                    <TableCell>{patient.user?.phone || 'N/A'}</TableCell>
                    <TableCell>
                      {patient.bloodGroup ? (
                        <Badge variant="secondary" className="text-xs bg-red-50 text-red-700">{patient.bloodGroup}</Badge>
                      ) : '-'}
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                        Active
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
