import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, HeartPulse, Activity, ShieldPlus, Users, Clock, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-blue-200">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '10s' }}></div>
          </div>

          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="max-w-2xl transform transition-all duration-700 hover:-translate-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Welcome to CliniCare 2.0
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Quality Healthcare, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Smarter Management
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience modern healthcare services powered by an advanced digital hospital management platform. We bring patients and doctors closer than ever.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/appointment">
                  <Button size="lg" className="gap-2 h-14 px-8 rounded-full text-base shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
                    <CalendarDays className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="gap-2 h-14 px-8 rounded-full text-base bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all hover:scale-105 active:scale-95">
                    Explore Services
                    <ArrowRight className="h-5 w-5 text-slate-400" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden md:block perspective-1000">
              <div className="relative glass rounded-3xl p-8 shadow-2xl max-w-md mx-auto transform transition-transform duration-700 hover:rotate-y-2 hover:-translate-y-2 border-white/40 bg-white/60">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-inner">
                    <Stethoscope className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Dr. Sarah Smith</h3>
                    <p className="text-sm font-medium text-slate-500">Senior Cardiologist</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-slate-200/60 rounded-full w-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-400/20 animate-pulse"></div>
                  </div>
                  <div className="h-3 bg-slate-200/60 rounded-full w-4/5"></div>
                  <div className="h-3 bg-slate-200/60 rounded-full w-5/6"></div>
                </div>
                <div className="mt-8 flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-blue-600 uppercase font-bold tracking-wider mb-1">Available Today</span>
                    <span className="text-sm font-semibold text-slate-800">10:00 AM - 02:00 PM</span>
                  </div>
                  <Button size="sm" className="rounded-full px-6 shadow-md shadow-blue-500/20 hover:scale-105 transition-transform">Book</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="relative py-16 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-80"></div>
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { icon: Users, num: "50+", label: "Specialist Doctors", color: "text-blue-400" },
              { icon: Activity, num: "20+", label: "Departments", color: "text-teal-400" },
              { icon: HeartPulse, num: "10k+", label: "Happy Patients", color: "text-rose-400" },
              { icon: Clock, num: "24/7", label: "Emergency Care", color: "text-amber-400" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-3 p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 cursor-default">
                <stat.icon className={`h-10 w-10 mx-auto ${stat.color} mb-4`} />
                <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">{stat.num}</h3>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Medical Services</h2>
              <p className="text-lg text-slate-500 leading-relaxed">Comprehensive healthcare solutions tailored to your needs, delivered by experienced professionals using modern technology.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Emergency Care', desc: 'Round-the-clock emergency medical services with rapid response teams.', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50' },
                { title: 'Cardiology', desc: 'Advanced heart care, diagnostics, and surgical interventions.', icon: HeartPulse, color: 'text-blue-500', bg: 'bg-blue-50' },
                { title: 'Neurology', desc: 'Expert treatment for brain, spinal cord, and nervous system disorders.', icon: ShieldPlus, color: 'text-purple-500', bg: 'bg-purple-50' },
                { title: 'Dental Care', desc: 'Complete dental services from routine checkups to complex surgeries.', icon: Stethoscope, color: 'text-teal-500', bg: 'bg-teal-50' },
                { title: 'Laboratory', desc: 'State-of-the-art pathology and diagnostic testing facilities.', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                { title: 'Pharmacy', desc: '24/7 in-house pharmacy stocked with all essential medicines.', icon: ShieldPlus, color: 'text-amber-500', bg: 'bg-amber-50' },
              ].map((service, i) => (
                <Card key={i} className="group border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className={`h-14 w-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-500 leading-relaxed">{service.desc}</CardDescription>
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
