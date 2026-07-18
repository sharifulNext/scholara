'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Plus, Users, X, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', code: '', instructor: '', capacity: 40, students: 0, status: 'Active' });

  const fetchCourses = async () => {
    const res = await fetch('/api/courses');
    const data = await res.json();
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleAddCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setIsModalOpen(false);
    fetchCourses();
  };

  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto pt-20 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white">Course Management</h1>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary-gradient flex items-center gap-2">
                <Plus className="w-5 h-5" /> Add Course
              </button>
            </div>

            {loading ? <Loader2 className="animate-spin text-emerald-500 mx-auto" /> : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course: any) => (
                  <div key={course._id} className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-white">{course.name}</h3>
                    <p className="text-sm text-slate-400 mb-4">{course.code}</p>
                    <div className="flex-1 h-2 bg-white/10 rounded-full mb-4">
                      <div className="h-full bg-emerald-400" style={{ width: `${(course.students / course.capacity) * 100}%` }} />
                    </div>
                    <Link href={`/courses/${course._id}`} className="w-full py-2 border border-white/20 rounded text-white text-sm hover:bg-white/5">
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Add Course Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <form onSubmit={handleAddCourse} className="bg-slate-900 p-6 rounded-xl w-full max-w-md border border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Add New Course</h2>
              <X className="cursor-pointer text-white" onClick={() => setIsModalOpen(false)} />
            </div>
            <input type="text" placeholder="Course Name" className="w-full p-2 bg-slate-800 text-white rounded" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <input type="text" placeholder="Course Code" className="w-full p-2 bg-slate-800 text-white rounded" onChange={(e) => setFormData({...formData, code: e.target.value})} required />
            <input type="text" placeholder="Instructor" className="w-full p-2 bg-slate-800 text-white rounded" onChange={(e) => setFormData({...formData, instructor: e.target.value})} required />
            <button className="w-full bg-emerald-500 py-2 rounded text-white">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}