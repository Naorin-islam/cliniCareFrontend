import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Award, ShieldCheck, Stethoscope, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About CliniCare</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are a leading healthcare provider dedicated to delivering compassionate, high-quality medical services to our community through advanced technology and expert care.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission & Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At CliniCare, our mission is to improve the health and well-being of the communities we serve by providing outstanding and compassionate care to every patient, every time.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our vision is to be the healthcare provider of choice, recognized for our commitment to excellence, innovation, and patient-centered care. We continually strive to integrate digital solutions that make healthcare management seamless for both patients and staff.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transform transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Patient First</h3>
                  <p className="text-sm text-slate-500 mt-2">Your health is our top priority in every decision we make.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transform transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="h-12 w-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 text-teal-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Integrity</h3>
                  <p className="text-sm text-slate-500 mt-2">We uphold the highest ethical standards and transparency.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transform transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="h-12 w-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Excellence</h3>
                  <p className="text-sm text-slate-500 mt-2">We strive for clinical excellence and continuous improvement.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transform transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Innovation</h3>
                  <p className="text-sm text-slate-500 mt-2">Embracing modern technology for smarter healthcare.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">25+</div>
                <div className="text-blue-100 font-medium">Years of Excellence</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">50+</div>
                <div className="text-blue-100 font-medium">Specialist Doctors</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">20k+</div>
                <div className="text-blue-100 font-medium">Patients Treated</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">15+</div>
                <div className="text-blue-100 font-medium">Awards Won</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
