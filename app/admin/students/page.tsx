'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Plus, Filter, Download } from 'lucide-react';

const allStudents = [
  { id: 1, name: 'Alice Johnson', email: 'alice@academy.com', phone: '+1 234-567-8900', course: 'CS101', status: 'Active', joinDate: 'Jan 15, 2024' },
  { id: 2, name: 'Bob Smith', email: 'bob@academy.com', phone: '+1 234-567-8901', course: 'CS102', status: 'Active', joinDate: 'Jan 18, 2024' },
  { id: 3, name: 'Carol White', email: 'carol@academy.com', phone: '+1 234-567-8902', course: 'CS101', status: 'Active', joinDate: 'Jan 20, 2024' },
  { id: 4, name: 'David Brown', email: 'david@academy.com', phone: '+1 234-567-8903', course: 'CS103', status: 'Inactive', joinDate: 'Feb 01, 2024' },
  { id: 5, name: 'Emma Davis', email: 'emma@academy.com', phone: '+1 234-567-8904', course: 'CS102', status: 'Active', joinDate: 'Feb 05, 2024' },
  { id: 6, name: 'Frank Miller', email: 'frank@academy.com', phone: '+1 234-567-8905', course: 'CS101', status: 'Active', joinDate: 'Feb 10, 2024' },
  { id: 7, name: 'Grace Lee', email: 'grace@academy.com', phone: '+1 234-567-8906', course: 'CS104', status: 'Active', joinDate: 'Feb 12, 2024' },
  { id: 8, name: 'Henry Wilson', email: 'henry@academy.com', phone: '+1 234-567-8907', course: 'CS102', status: 'Active', joinDate: 'Feb 15, 2024' },
];

export default function StudentsPage() {
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
                <h1 className="text-3xl font-bold text-white mb-2">Student Management</h1>
                <p className="text-slate-400">Manage and track all students</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all font-medium">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all font-medium">
                  <Download className="w-5 h-5" />
                  Export
                </button>
                <button className="btn-primary-gradient">
                  <Plus className="w-5 h-5" />
                  Add Student
                </button>
              </div>
            </div>

            {/* Student cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {allStudents.slice(0, 6).map((student) => (
                <div key={student.id} className="glass-card p-6 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                      {student.name.charAt(0)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === 'Active'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-slate-500/10 text-slate-400'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{student.name}</h3>
                  <p className="text-sm text-slate-400 mb-3">{student.email}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{student.course}</span>
                    <span className="text-slate-500">{student.joinDate}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Full table */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-6">All Students</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Email</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Phone</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Course</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Join Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStudents.map((student) => (
                      <tr key={student.id} className="table-row hover:cursor-pointer">
                        <td className="table-cell">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                              {student.name.charAt(0)}
                            </div>
                            <span className="font-medium text-white">{student.name}</span>
                          </div>
                        </td>
                        <td className="table-cell text-slate-400">{student.email}</td>
                        <td className="table-cell text-slate-400">{student.phone}</td>
                        <td className="table-cell">
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                            {student.course}
                          </span>
                        </td>
                        <td className="table-cell">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            student.status === 'Active'
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : 'bg-slate-500/10 text-slate-400'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="table-cell text-slate-400">{student.joinDate}</td>
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
