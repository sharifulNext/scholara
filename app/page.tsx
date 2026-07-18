'use client';

import { useState } from 'react';
import { LogIn, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'admin' | 'student'>('admin');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Route based on user type
    if (userType === 'admin') {
      window.location.href = '/admin/dashboard';
    } else {
      window.location.href = '/student/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Academy Pro</h1>
          <p className="text-slate-400"> Student Management System</p>
        </div>

        {/* Login card */}
        <div className="glass-card p-8 mb-6">
          {/* User type selector */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setUserType('admin')}
              className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 ${
                userType === 'admin'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Admin
            </button>
            <button
              onClick={() => setUserType('student')}
              className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 ${
                userType === 'student'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              Student
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email field */}
            <div>
              <label className="label">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-premium pl-10"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-premium pl-10"
                  required
                />
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400 hover:text-slate-300 cursor-pointer">
                <input type="checkbox" className="rounded border-white/20 w-4 h-4" />
                Remember me
              </label>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button type="submit" className="btn-primary-gradient w-full">
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-slate-500 mb-3 font-medium">Demo Credentials:</p>
            <p className="text-xs text-slate-400 mb-1">
              <span className="text-emerald-400">Email:</span> demo@academy.com
            </p>
            <p className="text-xs text-slate-400">
              <span className="text-emerald-400">Password:</span> demo123
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500">
          © 2024 Academy Pro. All rights reserved.
        </p>
      </div>
    </div>
  );
}
