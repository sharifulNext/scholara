'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Plus, Users } from 'lucide-react';

const courses = [
  { id: 1, name: 'Data Structures', code: 'CS101', instructor: 'Dr. Smith', students: 45, capacity: 50, status: 'Active' },
  { id: 2, name: 'Web Development', code: 'CS102', instructor: 'Prof. Johnson', students: 38, capacity: 40, status: 'Active' },
  { id: 3, name: 'Database Design', code: 'CS103', instructor: 'Dr. Williams', students: 35, capacity: 40, status: 'Active' },
  { id: 4, name: 'Algorithms', code: 'CS104', instructor: 'Prof. Brown', students: 42, capacity: 50, status: 'Active' },
  { id: 5, name: 'Machine Learning', code: 'CS105', instructor: 'Dr. Davis', students: 28, capacity: 35, status: 'Upcoming' },
];

export default function CoursesPage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 overflow-auto pt-20 md:pt-16">
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Course Management</h1>
                <p className="text-slate-400">Manage all active courses</p>
              </div>
              <button className="btn-primary-gradient">
                <Plus className="w-5 h-5" />
                Add Course
              </button>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="glass-card p-6 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{course.name}</h3>
                      <p className="text-sm text-slate-400">{course.code}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.status === 'Active'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      {course.status}
                    </span>
                  </div>

                  <div className="space-y-4 mb-4">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Instructor</p>
                      <p className="font-medium text-white">{course.instructor}</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-400 mb-2">Enrollment</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                            style={{ width: `${(course.students / course.capacity) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-white">{course.students}/{course.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-2 px-4 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all font-medium text-sm flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
