"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Stethoscope, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/store/authStore';
import { mockUsers } from '@/lib/mock-data';
import { authService } from '@/services/auth.service';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["PATIENT", "DOCTOR", "RECEPTIONIST", "ADMIN"], {
    message: "Please select a valid role"
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError("");

    try {
      // Real API call
      const response = await authService.login(data);
      
      if (response && response.user) {
        login(response.user, response.access_token);
        
        // Redirect based on role
        switch(response.role) {
          case 'ADMIN': router.push('/admin/dashboard'); break;
          case 'DOCTOR': router.push('/doctor/dashboard'); break;
          case 'RECEPTIONIST': router.push('/receptionist/dashboard'); break;
          case 'PATIENT': router.push('/patient/dashboard'); break;
          default: router.push('/dashboard'); break;
        }
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 flex justify-center">
        <Link href="/" className="flex items-center gap-2 text-blue-600">
          <Stethoscope className="h-10 w-10" />
          <span className="text-3xl font-bold tracking-tight text-slate-900">CliniCare</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="border-none shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in to your account</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password below to login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {error && (
                <div data-testid="login-error" className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input 
                  type="email" 
                  data-testid="login-email"
                  placeholder="admin@clinicare.com" 
                  {...register("email")} 
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  type="password" 
                  data-testid="login-password"
                  placeholder="••••••••" 
                  {...register("password")}
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Role
                </label>
                <select 
                  {...register("role")}
                  data-testid="login-role"
                  className={`flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.role ? "border-red-500" : ""}`}
                >
                  <option value="">Select your role</option>
                  <option value="PATIENT">Patient</option>
                  <option value="DOCTOR">Doctor</option>
                  <option value="RECEPTIONIST">Receptionist</option>
                  <option value="ADMIN">Admin</option>
                </select>
                {errors.role && <p className="text-xs text-red-500">{errors.role.message}</p>}
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </label>
              </div>

              <Button type="submit" data-testid="login-button" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Sign in
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline font-medium">
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center text-sm text-slate-500 space-y-2">
          <p>Demo Accounts:</p>
          <p>admin@clinicare.com (ADMIN)</p>
          <p>sarah@clinicare.com (DOCTOR)</p>
          <p>john@clinicare.com (PATIENT)</p>
        </div>
      </div>
    </div>
  );
}
