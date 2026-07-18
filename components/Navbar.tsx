'use client';

import { Search, Bell, Settings, User, ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // ১. আপনার অথ টোকেন বা ইউজার ডাটা রিমুভ করুন
    localStorage.removeItem('token'); 
    
    // ২. ড্রপডাউন মেনু বন্ধ করুন
    setIsProfileOpen(false);

    // ৩. পুরো পেজ রিলোড করুন যাতে অ্যাপটি আবার নতুন করে 
    // page.tsx এর লগইন চেক লজিক রান করতে পারে
    window.location.href = '/'; 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 md:left-64 h-16 glass-panel border-b border-white/10 z-30">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search students, courses..."
            className="search-input"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto pt-16 md:pt-0">
          <button className="navbar-icon-btn relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <button className="navbar-icon-btn">
            <Settings className="w-5 h-5" />
          </button>

          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                AD
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 glass-card rounded-xl overflow-hidden shadow-xl border border-white/10">
                <div className="p-4 border-b border-white/10">
                  <p className="text-sm font-semibold text-white">Admin User</p>
                  <p className="text-xs text-slate-400">admin@academy.com</p>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Settings</span>
                  </button>
                  
                  <div className="border-t border-white/10 my-2" />
                  
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}