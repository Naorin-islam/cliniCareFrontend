import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { mockDepartments } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Building2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DepartmentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Departments</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our specialized medical departments equipped with modern technology and expert healthcare professionals.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockDepartments.map((dept) => (
                <Card key={dept.id} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white cursor-default">
                  <CardHeader className="pb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500">
                      <Building2 className="h-32 w-32" />
                    </div>
                    <div className="h-14 w-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110">
                      <Activity className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 relative z-10">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-base text-slate-500 leading-relaxed mb-6">{dept.description}</p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-slate-900">{dept.numberOfDoctors}</span>
                        <span className="text-sm font-medium text-slate-500 leading-tight">Specialist<br/>Doctors</span>
                      </div>
                      <Link href="/doctors">
                        <Button variant="outline" size="sm" className="rounded-full">View Doctors</Button>
                      </Link>
                    </div>
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
