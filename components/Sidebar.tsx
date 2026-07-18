'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  FileText,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard', badge: null },
  { icon: Users, label: 'Students', href: '/admin/students', badge: null },
  { icon: BookOpen, label: 'Courses', href: '/admin/courses', badge: null },
  { icon: Calendar, label: 'Attendance', href: '/admin/attendance', badge: null },
  { icon: FileText, label: 'Results', href: '/admin/results', badge: null },
  { icon: Bell, label: 'Notices', href: '/admin/notices', badge: 3 },
  { icon: BarChart3, label: 'Reports', href: '/admin/reports', badge: null },
  { icon: Settings, label: 'Settings', href: '/admin/settings', badge: null },
];

export default function Sidebar() {
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
            <p className="text-xs text-slate-400">Admin Panel</p>
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
                {item.badge && (
                  <span className="px-2 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                    {item.badge}
                  </span>
                )}
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
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Admin User</p>
              <p className="text-xs text-slate-400 truncate">admin@academy.com</p>
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
