export type Role = 'ADMIN' | 'DOCTOR' | 'RECEPTIONIST' | 'PATIENT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export type Gender = 'Male' | 'Female' | 'Other';
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface Patient {
  id: string;
  userId: string;
  patientId: string; // e.g., PAT-1001
  fullName: string;
  dateOfBirth: string;
  gender: Gender;
  bloodGroup?: BloodGroup;
  phone: string;
  email: string;
  address: string;
  emergencyContact: string;
  allergies?: string;
  medicalHistory?: string;
  status: 'ACTIVE' | 'DISCHARGED';
  createdAt: string;
}

export interface Doctor {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  departmentId: string;
  qualification: string;
  experience: number; // in years
  consultationFee: number;
  status: 'ACTIVE' | 'ON_LEAVE' | 'INACTIVE';
  avatar?: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  headDoctorId?: string;
  numberOfDoctors: number;
  status: 'ACTIVE' | 'INACTIVE';
}

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  departmentId: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  reason?: string;
  createdAt: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  date: string;
  symptoms: string;
  diagnosis: string;
  bloodPressure?: string;
  temperature?: number; // in Celsius or Fahrenheit
  weight?: number; // in kg
  notes?: string;
  followUpDate?: string;
}

export interface PrescriptionItem {
  id: string;
  medicine: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  date: string;
  medicines: PrescriptionItem[];
}

export type LabReportStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface LabReport {
  id: string;
  patientId: string;
  doctorId: string;
  testName: string;
  requestedDate: string;
  status: LabReportStatus;
  result?: string;
  remarks?: string;
  completedDate?: string;
}

export type PaymentStatus = 'PENDING' | 'PARTIAL' | 'PAID';

export interface Billing {
  id: string;
  invoiceId: string;
  patientId: string;
  date: string;
  doctorFee: number;
  laboratoryFee: number;
  medicineFee: number;
  roomFee: number;
  otherCharges: number;
  discount: number;
  total: number;
  paymentStatus: PaymentStatus;
}

export interface Bed {
  id: string;
  roomNumber: string;
  bedNumber: string;
  type: 'GENERAL' | 'ICU' | 'PRIVATE' | 'VIP';
  status: 'AVAILABLE' | 'OCCUPIED' | 'RESERVED' | 'MAINTENANCE';
  currentPatientId?: string;
}
