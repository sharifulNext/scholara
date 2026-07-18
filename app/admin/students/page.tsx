'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Plus, Filter, Download, X, Loader2 } from 'lucide-react';

// স্টুডেন্ট ইন্টারফেস
interface Student {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', course: '', phone: '', status: 'Active' });

  // ডেটা ফেচ করা
  const fetchStudents = async () => {
    try {
      const res = await fetch('/api/students');
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // স্টুডেন্ট অ্যাড করা
  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, gpa: 3.5, attendance: 90 }),
    });

    if (res.ok) {
      setIsModalOpen(false);
      fetchStudents(); // টেবিল রিফ্রেশ করা
      setFormData({ name: '', email: '', course: '', phone: '', status: 'Active' });
    }
  };

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
                  <Filter className="w-5 h-5" /> Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all font-medium">
                  <Download className="w-5 h-5" /> Export
                </button>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all">
                  <Plus className="w-5 h-5" /> Add Student
                </button>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-slate-900 p-6 rounded-xl w-full max-w-md border border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Add New Student</h2>
                    <button onClick={() => setIsModalOpen(false)}><X className="text-slate-400" /></button>
                  </div>
                  <form onSubmit={handleAddStudent} className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 bg-slate-800 text-white rounded-lg border border-slate-700" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                    <input type="email" placeholder="Email Address" className="w-full p-3 bg-slate-800 text-white rounded-lg border border-slate-700" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                    <input type="text" placeholder="Phone" className="w-full p-3 bg-slate-800 text-white rounded-lg border border-slate-700" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    <input type="text" placeholder="Course" className="w-full p-3 bg-slate-800 text-white rounded-lg border border-slate-700" onChange={(e) => setFormData({...formData, course: e.target.value})} required />
                    <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-bold mt-4">Save Student</button>
                  </form>
                </div>
              </div>
            )}

            {/* Table */}
            <div className="glass-card p-6">
              {loading ? (
                <div className="flex justify-center p-10"><Loader2 className="w-8 h-8 animate-spin text-emerald-500" /></div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Name</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Email</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Course</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student._id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="px-6 py-4 text-white font-medium">{student.name}</td>
                          <td className="px-6 py-4 text-slate-400">{student.email}</td>
                          <td className="px-6 py-4 text-emerald-400">{student.course}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">{student.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}