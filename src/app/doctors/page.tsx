import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { mockDoctors } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Star, Stethoscope } from 'lucide-react';
import Link from 'next/link';

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Our Specialists</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Meet our team of experienced and compassionate medical professionals dedicated to your health and well-being.
            </p>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockDoctors.map((doctor) => (
                <Card key={doctor.id} className="group overflow-hidden rounded-2xl border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-teal-400 relative">
                    <div className="absolute -bottom-12 left-6 h-24 w-24 bg-white rounded-full p-1 shadow-lg">
                      <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                        <Stethoscope className="h-10 w-10" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-16 pb-6 px-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                        <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                      </div>
                      <Badge variant="secondary" className="gap-1 bg-amber-100 text-amber-700 hover:bg-amber-100">
                        <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                        4.9
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-slate-600">Experience: <span className="font-semibold text-slate-900">{doctor.experience} years</span></p>
                      <p className="text-sm text-slate-600">Consultation Fee: <span className="font-semibold text-slate-900">${doctor.consultationFee}</span></p>
                      <p className="text-sm text-slate-600">Status: 
                        <Badge variant={doctor.status === 'ACTIVE' ? 'success' : 'secondary'} className="ml-2 text-[10px]">
                          {doctor.status}
                        </Badge>
                      </p>
                    </div>

                    <Link href={`/appointment?doctor=${doctor.id}`} className="block">
                      <Button className="w-full rounded-full gap-2 shadow-md hover:-translate-y-0.5">
                        <CalendarDays className="h-4 w-4" />
                        Book Appointment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
