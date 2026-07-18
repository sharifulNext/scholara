'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Calendar } from 'lucide-react';

const attendanceData = [
  { id: 1, name: 'Alice Johnson', course: 'CS101', present: 42, absent: 2, percentage: 95 },
  { id: 2, name: 'Bob Smith', course: 'CS102', present: 38, absent: 5, percentage: 88 },
  { id: 3, name: 'Carol White', course: 'CS101', present: 43, absent: 1, percentage: 98 },
  { id: 4, name: 'David Brown', course: 'CS103', present: 36, absent: 8, percentage: 82 },
  { id: 5, name: 'Emma Davis', course: 'CS102', present: 42, absent: 2, percentage: 95 },
];

export default function AttendancePage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 overflow-auto pt-20 md:pt-16">
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Attendance Management</h1>
              <p className="text-slate-400">Track student attendance records</p>
            </div>

            {/* Calendar and Filter */}
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <label className="label">Select Course</label>
                  <select className="input-premium w-full">
                    <option>All Courses</option>
                    <option>CS101 - Data Structures</option>
                    <option>CS102 - Web Development</option>
                    <option>CS103 - Database Design</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="label">Date Range</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                    <input type="date" className="input-premium pl-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="glass-card p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Student Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Course</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">Present</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">Absent</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">Attendance %</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((record) => (
                      <tr key={record.id} className="table-row">
                        <td className="table-cell">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                              {record.name.charAt(0)}
                            </div>
                            <span className="font-medium text-white">{record.name}</span>
                          </div>
                        </td>
                        <td className="table-cell text-slate-400">{record.course}</td>
                        <td className="table-cell text-center">
                          <span className="text-emerald-400 font-medium">{record.present}</span>
                        </td>
                        <td className="table-cell text-center">
                          <span className="text-red-400 font-medium">{record.absent}</span>
                        </td>
                        <td className="table-cell">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                                style={{ width: `${record.percentage}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium text-white w-12">{record.percentage}%</span>
                          </div>
                        </td>
                        <td className="table-cell">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            record.percentage >= 90
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : record.percentage >= 80
                              ? 'bg-blue-500/10 text-blue-400'
                              : 'bg-red-500/10 text-red-400'
                          }`}>
                            {record.percentage >= 90 ? 'Good' : record.percentage >= 80 ? 'Warning' : 'Critical'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
