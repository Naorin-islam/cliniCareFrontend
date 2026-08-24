"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to the backend
    alert("Message sent successfully!");
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              We're here to help. Reach out to us for any inquiries, support, or feedback. Our team is available 24/7.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                  <p className="text-slate-600">
                    If you have any questions about our services or need immediate medical assistance, please don't hesitate to contact us using the details below.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                        <p className="text-slate-600 font-medium">+1 (555) 123-4567</p>
                        <p className="text-slate-500 text-sm">Mon-Fri 8am to 8pm</p>
                        <p className="text-rose-500 font-semibold text-sm mt-1">Emergency: 911</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600 font-medium">contact@clinicare.com</p>
                        <p className="text-slate-500 text-sm">We reply within 24 hours</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                        <p className="text-slate-600 font-medium">123 Health Avenue</p>
                        <p className="text-slate-500 text-sm">Medical District, NY 10001</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden h-full">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-400 w-full"></div>
                  <CardContent className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">First Name</label>
                          <Input placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Last Name</label>
                          <Input placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                        <Input type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Subject</label>
                        <Input placeholder="How can we help?" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Message</label>
                        <textarea 
                          className="flex min-h-[150px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:border-blue-500 resize-none" 
                          placeholder="Write your message here..."
                          required
                        ></textarea>
                      </div>
                      <Button type="submit" size="lg" className="w-full h-12 rounded-xl text-base shadow-lg shadow-blue-500/20 gap-2">
                        Send Message
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
