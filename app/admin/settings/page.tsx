'use client';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto pt-20 p-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">System Settings</h1>
            <div className="glass-card p-8 rounded-xl bg-slate-900 border border-white/10 space-y-6">
              <div>
                <label className="text-white block mb-2">Platform Name</label>
                <input type="text" className="w-full p-3 bg-slate-800 text-white rounded-lg border border-slate-700" defaultValue="SkillArena" />
              </div>
              <button className="w-full bg-emerald-500 py-3 rounded-lg text-white font-bold hover:bg-emerald-600 transition-all">Save Changes</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}