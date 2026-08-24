"use client";

import { useState } from 'react';
import { Plus, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockDepartments } from '@/lib/mock-data';

export default function AdminDepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDepartments = mockDepartments.filter(dep => 
    dep.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Departments</h2>
          <p className="text-sm text-slate-500">Manage hospital departments.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Department
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="py-4 flex flex-row items-center justify-between">
          <CardTitle className="text-lg">All Departments</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              type="search" 
              placeholder="Search departments..." 
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
                <TableHead>Department Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>No. of Doctors</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDepartments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                    No departments found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredDepartments.map((dep) => (
                  <TableRow key={dep.id}>
                    <TableCell className="font-medium text-slate-900">{dep.name}</TableCell>
                    <TableCell className="text-slate-500 max-w-xs truncate">{dep.description}</TableCell>
                    <TableCell>{dep.numberOfDoctors}</TableCell>
                    <TableCell>
                      <Badge variant={dep.status === 'ACTIVE' ? 'success' : 'secondary'} className="text-xs">
                        {dep.status}
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
