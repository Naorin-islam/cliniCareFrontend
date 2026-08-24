import Link from 'next/link';
import { Stethoscope, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 text-blue-400 mb-4">
            <Stethoscope className="h-8 w-8" />
            <span className="text-xl font-bold text-white">CliniCare</span>
          </Link>
          <p className="text-sm text-slate-400 mb-4">
            Quality Healthcare, Smarter Management. Providing comprehensive medical services with modern technology.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/doctors" className="hover:text-blue-400">Find a Doctor</Link></li>
            <li><Link href="/appointment" className="hover:text-blue-400">Book Appointment</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Departments</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/departments" className="hover:text-blue-400">Cardiology</Link></li>
            <li><Link href="/departments" className="hover:text-blue-400">Neurology</Link></li>
            <li><Link href="/departments" className="hover:text-blue-400">Orthopedics</Link></li>
            <li><Link href="/departments" className="hover:text-blue-400">Emergency</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
              <span>123 Health Avenue, Medical District, City 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-400 shrink-0" />
              <span>Emergency: (555) 911-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-400 shrink-0" />
              <span>contact@clinicare.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} CliniCare Hospital Management System. All rights reserved.</p>
      </div>
    </footer>
  );
}
