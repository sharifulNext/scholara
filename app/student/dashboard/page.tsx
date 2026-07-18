'use client';

import StudentSidebar from '@/components/StudentSidebar';
import Navbar from '@/components/Navbar';
import { TrendingUp, BookOpen, Calendar, FileText, ArrowUpRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const gpaData = [
  { month: 'Sep', gpa: 3.5 },
  { month: 'Oct', gpa: 3.6 },
  { month: 'Nov', gpa: 3.7 },
  { month: 'Dec', gpa: 3.75 },
  { month: 'Jan', gpa: 3.8 },
  { month: 'Feb', gpa: 3.85 },
];

const courses = [
  { id: 1, name: 'Data Structures', instructor: 'Dr. Smith', progress: 85, grade: 'A' },
  { id: 2, name: 'Web Development', instructor: 'Prof. Johnson', progress: 92, grade: 'A+' },
  { id: 3, name: 'Database Design', instructor: 'Dr. Williams', progress: 78, grade: 'B+' },
  { id: 4, name: 'Algorithms', instructor: 'Prof. Brown', progress: 88, grade: 'A' },
];

const recentNotices = [
  { id: 1, title: 'Mid-semester Exam Schedule', date: '2 days ago', priority: 'high' },
  { id: 2, title: 'New Library Hours', date: '5 days ago', priority: 'low' },
  { id: 3, title: 'Campus Closure Notice', date: '1 week ago', priority: 'high' },
];

export default function StudentDashboard() {
  return (
    <div className="flex h-screen bg-slate-950">
      <StudentSidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 overflow-auto pt-20 md:pt-16">
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Welcome header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome, Alex Johnson</h1>
              <p className="text-slate-400">Here&apos;s your academic overview</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="stat-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="stat-label">Current GPA</p>
                    <p className="stat-value">3.85</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-semibold">+0.15</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="stat-label">Active Courses</p>
                    <p className="stat-value">4</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <p className="text-sm text-slate-400">Current semester</p>
              </div>

              <div className="stat-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="stat-label">Attendance</p>
                    <p className="stat-value">96%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10">
                    <Calendar className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <p className="text-sm text-slate-400">All courses</p>
              </div>

              <div className="stat-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="stat-label">Completed</p>
                    <p className="stat-value">12</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <p className="text-sm text-slate-400">Assignments</p>
              </div>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* GPA Chart */}
              <div className="lg:col-span-2 glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-6">GPA Progress</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={gpaData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" />
                    <YAxis stroke="rgba(255,255,255,0.3)" domain={[3, 4]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="gpa"
                      stroke="#10b981"
                      dot={{ fill: '#10b981', r: 5 }}
                      activeDot={{ r: 7 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Recent Notices */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Notices</h3>
                <div className="space-y-3">
                  {recentNotices.map((notice) => (
                    <div key={notice.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 ${
                          notice.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white line-clamp-2">{notice.title}</p>
                          <p className="text-xs text-slate-400 mt-1">{notice.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Current Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white">{course.name}</h4>
                        <p className="text-sm text-slate-400">{course.instructor}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        course.grade === 'A+' || course.grade === 'A'
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {course.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-white">{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
