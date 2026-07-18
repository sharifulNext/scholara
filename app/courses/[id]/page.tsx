'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await fetch(`/api/courses/${id}`);
      const data = await res.json();
      setCourse(data);
      setLoading(false);
    };
    fetchCourse();
  }, [id]);

  if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-emerald-500 w-10 h-10" /></div>;

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        <main className="p-8 pt-20">
          <Link href="/courses" className="flex items-center gap-2 text-slate-400 mb-6 hover:text-white">
            <ArrowLeft size={20} /> Back to Courses
          </Link>
          
          <div className="glass-card p-8 max-w-2xl">
            <h1 className="text-4xl font-bold mb-2">{course.name}</h1>
            <p className="text-emerald-400 font-semibold mb-6">{course.code}</p>
            
            <div className="space-y-4">
              <p><span className="text-slate-400">Instructor:</span> {course.instructor}</p>
              <p><span className="text-slate-400">Capacity:</span> {course.capacity} Students</p>
              <p><span className="text-slate-400">Status:</span> {course.status}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}