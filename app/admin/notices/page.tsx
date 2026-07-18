'use client';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function NoticesPage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto pt-20 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Manage Notices</h1>
            
            <div className="glass-card p-6 mb-8 border border-white/10 rounded-xl bg-slate-900">
              <textarea className="w-full p-4 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500" rows={4} placeholder="Write a new notice..."></textarea>
              <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg text-white font-semibold transition-all">Publish Notice</button>
            </div>

            <div className="space-y-4">
               <div className="glass-card p-5 border border-white/5 bg-slate-900/50 rounded-xl text-slate-300">New Exam Schedule announced for CSE-301</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}