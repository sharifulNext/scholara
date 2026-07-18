'use client';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function ReportsPage() {
  const StatCard = ({ title, value }: any) => (
    <div className="glass-card p-6 rounded-xl bg-slate-900 border border-white/10">
      <h3 className="text-slate-400 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-white mt-2">{value}</p>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto pt-20 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">System Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard title="Total Students" value="1,240" />
              <StatCard title="Active Courses" value="45" />
              <StatCard title="Total Revenue" value="$12,400" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}