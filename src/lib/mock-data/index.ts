import { User, Patient, Doctor, Department, Appointment, MedicalRecord, Prescription, LabReport, Billing, Bed } from '@/types';

export const mockUsers: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@clinicare.com', role: 'ADMIN' },
  { id: '2', name: 'Dr. Sarah Smith', email: 'sarah@clinicare.com', role: 'DOCTOR' },
  { id: '3', name: 'John Doe', email: 'john@clinicare.com', role: 'PATIENT' },
  { id: '4', name: 'Receptionist Jane', email: 'jane@clinicare.com', role: 'RECEPTIONIST' },
];

export const mockDoctors: Doctor[] = [
  {
    id: 'doc-1',
    userId: '2',
    name: 'Dr. Sarah Smith',
    email: 'sarah@clinicare.com',
    phone: '555-0101',
    specialization: 'Cardiology',
    departmentId: 'dep-1',
    qualification: 'MD, FACC',
    experience: 12,
    consultationFee: 150,
    status: 'ACTIVE',
  },
  {
    id: 'doc-2',
    userId: '5',
    name: 'Dr. Michael Chen',
    email: 'michael@clinicare.com',
    phone: '555-0102',
    specialization: 'Neurology',
    departmentId: 'dep-2',
    qualification: 'MD, PhD',
    experience: 8,
    consultationFee: 180,
    status: 'ACTIVE',
  }
];

export const mockPatients: Patient[] = [
  {
    id: 'pat-1',
    userId: '3',
    patientId: 'PAT-1001',
    fullName: 'John Doe',
    dateOfBirth: '1985-05-15',
    gender: 'Male',
    bloodGroup: 'O+',
    phone: '555-0201',
    email: 'john@clinicare.com',
    address: '123 Main St, City',
    emergencyContact: 'Jane Doe (555-0202)',
    status: 'ACTIVE',
    createdAt: '2023-01-10T10:00:00Z',
  },
];

export const mockDepartments: Department[] = [
  { id: 'dep-1', name: 'Cardiology', description: 'Heart and blood vessel diseases', numberOfDoctors: 5, status: 'ACTIVE' },
  { id: 'dep-2', name: 'Neurology', description: 'Brain and nervous system disorders', numberOfDoctors: 3, status: 'ACTIVE' },
  { id: 'dep-3', name: 'Emergency', description: '24/7 Emergency care', numberOfDoctors: 10, status: 'ACTIVE' },
];

export const mockAppointments: Appointment[] = [
  {
    id: 'app-1',
    patientId: 'pat-1',
    doctorId: 'doc-1',
    departmentId: 'dep-1',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    status: 'CONFIRMED',
    reason: 'Routine checkup',
    createdAt: '2023-10-01T09:00:00Z',
  }
];

export const mockStats = {
  totalPatients: 10245,
  totalDoctors: 54,
  todayAppointments: 128,
  availableBeds: 45,
  pendingAppointments: 12,
  todayRevenue: 15400,
};
