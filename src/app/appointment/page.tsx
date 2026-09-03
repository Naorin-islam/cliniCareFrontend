"use client";

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays, Clock, User, Phone, CheckCircle2 } from 'lucide-react';

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Book an Appointment</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Schedule your visit with our expert doctors. Fast, easy, and secure.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            {submitted ? (
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl text-center py-16">
                <CardContent>
                  <div className="h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 data-testid="appointment-success" className="text-3xl font-bold text-slate-900 mb-4">Appointment Requested!</h2>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    We have received your appointment request. Our team will contact you shortly to confirm the exact time.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">Book Another</Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-400 w-full"></div>
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Personal Details */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-500" />
                        Patient Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Full Name</label>
                          <Input placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Phone Number</label>
                          <Input type="tel" placeholder="+1 (555) 000-0000" required />
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-100 w-full"></div>

                    {/* Appointment Details */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-blue-500" />
                        Appointment Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Department</label>
                          <select data-testid="appointment-department" className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500" required>
                            <option value="">Select Department</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="neurology">Neurology</option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="dental">Dental Care</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Doctor (Optional)</label>
                          <select data-testid="appointment-doctor" className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500">
                            <option value="">Any Available Doctor</option>
                            <option value="1">Dr. Sarah Smith</option>
                            <option value="2">Dr. Michael Chen</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Preferred Date</label>
                          <Input type="date" data-testid="appointment-date" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Preferred Time</label>
                          <select data-testid="appointment-time" className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500" required>
                            <option value="">Select Time</option>
                            <option value="morning">Morning (9AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 4PM)</option>
                            <option value="evening">Evening (4PM - 7PM)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mt-6">
                        <label className="text-sm font-medium text-slate-700">Reason for Visit</label>
                        <textarea data-testid="appointment-reason" className="flex min-h-[80px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500" placeholder="Briefly describe your symptoms or reason for visit"></textarea>
                      </div>
                    </div>

                    <Button type="submit" data-testid="appointment-submit" size="lg" className="w-full h-14 rounded-xl text-lg font-semibold shadow-xl shadow-blue-500/20 mt-4">
                      Request Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
