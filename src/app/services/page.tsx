import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Activity, HeartPulse, ShieldPlus, Stethoscope, Eye, Bone, Baby, Syringe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { title: 'Emergency Care', desc: 'Round-the-clock emergency medical services with rapid response teams.', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50' },
    { title: 'Cardiology', desc: 'Advanced heart care, diagnostics, and surgical interventions.', icon: HeartPulse, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Neurology', desc: 'Expert treatment for brain, spinal cord, and nervous system disorders.', icon: ShieldPlus, color: 'text-purple-500', bg: 'bg-purple-50' },
    { title: 'Dental Care', desc: 'Complete dental services from routine checkups to complex surgeries.', icon: Stethoscope, color: 'text-teal-500', bg: 'bg-teal-50' },
    { title: 'Ophthalmology', desc: 'Comprehensive eye care, vision testing, and corrective surgeries.', icon: Eye, color: 'text-sky-500', bg: 'bg-sky-50' },
    { title: 'Orthopedics', desc: 'Treatment for bone and joint conditions, physical therapy, and joint replacements.', icon: Bone, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Pediatrics', desc: 'Specialized healthcare for infants, children, and adolescents.', icon: Baby, color: 'text-pink-500', bg: 'bg-pink-50' },
    { title: 'Vaccinations', desc: 'Immunization programs and travel vaccinations for all age groups.', icon: Syringe, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Our Medical Services</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              We provide a comprehensive range of medical services with state-of-the-art facilities and a team of highly experienced professionals.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="group border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white cursor-pointer h-full flex flex-col">
                  <CardHeader className="pb-4 flex-none">
                    <div className={`h-14 w-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base text-slate-500 leading-relaxed">{service.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Need specialized care?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">Book an appointment with one of our specialists today and take the first step towards better health.</p>
            <Link href="/appointment">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 hover:-translate-y-1 transition-transform rounded-full px-8 text-lg shadow-xl shadow-blue-900/20">
                Book Appointment Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
