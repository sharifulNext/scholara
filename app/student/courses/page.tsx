'use client';

import StudentSidebar from '@/components/StudentSidebar';
import Navbar from '@/components/Navbar';
import { Clock, Users, FileText, Calendar } from 'lucide-react';

const enrolledCourses = [
  {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    instructor: 'Dr. Smith',
    schedule: 'Mon/Wed/Fri 10:00 AM',
    credits: 3,
    students: 45,
    description: 'Comprehensive study of fundamental data structures and their applications',
  },
  {
    id: 2,
    name: 'Web Development',
    code: 'CS102',
    instructor: 'Prof. Johnson',
    schedule: 'Tue/Thu 02:00 PM',
    credits: 4,
    students: 38,
    description: 'Modern web development practices using HTML, CSS, JavaScript, and frameworks',
  },
  {
    id: 3,
    name: 'Database Design',
    code: 'CS103',
    instructor: 'Dr. Williams',
    schedule: 'Mon/Wed 01:00 PM',
    credits: 3,
    students: 35,
    description: 'Database design principles, SQL, and relational database management',
  },
  {
    id: 4,
    name: 'Algorithms',
    code: 'CS104',
    instructor: 'Prof. Brown',
    schedule: 'Tue/Thu 10:00 AM',
    credits: 3,
    students: 42,
    description: 'Algorithm design, analysis, and complexity theory',
  },
];

export default function StudentCoursesPage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <StudentSidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 overflow-auto pt-20 md:pt-16">
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
              <p className="text-slate-400">View your enrolled courses for this semester</p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="glass-card p-6 hover:shadow-2xl transition-all duration-300 flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{course.name}</h3>
                        <p className="text-sm text-emerald-400 font-medium">{course.code}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                        {course.credits} Credits
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">{course.description}</p>
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-4 space-y-3 flex-1">
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <div>
                        <p className="text-slate-400">Instructor</p>
                        <p className="text-white font-medium">{course.instructor}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <div>
                        <p className="text-slate-400">Schedule</p>
                        <p className="text-white font-medium">{course.schedule}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <div>
                        <p className="text-slate-400">Enrolled Students</p>
                        <p className="text-white font-medium">{course.students} students</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-2 px-3 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all font-medium text-sm flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      Materials
                    </button>
                    <button className="py-2 px-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all font-medium text-sm flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      Assignments
                    </button>
                    <button className="py-2 px-3 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-all font-medium text-sm flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="stat-card">
                <p className="stat-label">Total Credits</p>
                <p className="stat-value">13</p>
                <p className="text-sm text-slate-400 mt-2">This semester</p>
              </div>

              <div className="stat-card">
                <p className="stat-label">Enrolled Courses</p>
                <p className="stat-value">4</p>
                <p className="text-sm text-slate-400 mt-2">Active courses</p>
              </div>

              <div className="stat-card">
                <p className="stat-label">Average GPA</p>
                <p className="stat-value">3.85</p>
                <p className="text-sm text-emerald-400 mt-2">↑ Excellent</p>
              </div>

              <div className="stat-card">
                <p className="stat-label">Completion Rate</p>
                <p className="stat-value">87%</p>
                <p className="text-sm text-slate-400 mt-2">Overall</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
