'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  User,
  BookOpen,
  Calendar,
  FileText,
  Bell,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/student/dashboard' },
  { icon: User, label: 'Profile', href: '/student/profile' },
  { icon: BookOpen, label: 'Courses', href: '/student/courses' },
  { icon: Calendar, label: 'Attendance', href: '/student/attendance' },
  { icon: FileText, label: 'Results', href: '/student/results' },
  { icon: Bell, label: 'Notices', href: '/student/notices' },
];

export default function StudentSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 glass-panel border-r border-white/10 p-6 overflow-y-auto z-40 transform transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 pt-4 md:pt-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold">
            AP
          </div>
          <div>
            <h2 className="font-bold text-white text-lg">Academy Pro</h2>
            <p className="text-xs text-slate-400">Student Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`sidebar-item group ${isActive ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="flex-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="border-t border-white/10 my-4" />

        {/* User profile section */}
        <div className="glass-card p-4 mb-4 bg-white/[0.02]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
              AJ
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Alex Johnson</p>
              <p className="text-xs text-slate-400 truncate">STU001234</p>
            </div>
          </div>
        </div>

        {/* Logout button */}
        <button className="sidebar-item w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
}
