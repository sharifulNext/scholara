'use client';

import StudentSidebar from '@/components/StudentSidebar';
import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Calendar, Edit2 } from 'lucide-react';

export default function StudentProfile() {
  return (
    <div className="flex h-screen bg-slate-950">
      <StudentSidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 overflow-auto pt-20 md:pt-16">
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
                <p className="text-slate-400">View and manage your profile information</p>
              </div>
              <button className="btn-primary-gradient">
                <Edit2 className="w-5 h-5" />
                Edit Profile
              </button>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Main profile card */}
              <div className="lg:col-span-2 glass-card p-8">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                    AJ
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-1">Alex Johnson</h2>
                    <p className="text-slate-400 mb-4">Student ID: STU001234</p>
                    <p className="text-slate-300">Computer Science Major • 3rd Year</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-white font-medium">alex.johnson@academy.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="text-white font-medium">+1 (234) 567-8900</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-slate-400">Location</p>
                        <p className="text-white font-medium">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Calendar className="w-6 h-6 text-orange-400 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-slate-400">Enrollment Date</p>
                        <p className="text-white font-medium">January 15, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats sidebar */}
              <div className="space-y-6">
                <div className="stat-card">
                  <p className="stat-label">Current GPA</p>
                  <p className="stat-value">3.85</p>
                  <p className="text-sm text-emerald-400 mt-2">↑ 0.15 from last semester</p>
                </div>

                <div className="stat-card">
                  <p className="stat-label">Academic Standing</p>
                  <p className="text-2xl font-bold text-emerald-400 mt-2">Good</p>
                  <p className="text-sm text-slate-400 mt-2">Maintain excellence</p>
                </div>

                <div className="stat-card">
                  <p className="stat-label">Semesters Completed</p>
                  <p className="stat-value">5</p>
                  <p className="text-sm text-slate-400 mt-2">Of 8 required</p>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Total Credits Completed</p>
                  <p className="text-3xl font-bold text-white">96</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Credits Required</p>
                  <p className="text-3xl font-bold text-slate-400">120</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Average Grade</p>
                  <p className="text-3xl font-bold text-emerald-400">A</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Degree Progress</p>
                  <p className="text-3xl font-bold text-white">80%</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
