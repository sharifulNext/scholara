'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { TrendingUp, Users, BookOpen, Percent, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import DashboardChart from '@/components/DashboardChart';
import RecentActivity from '@/components/RecentActivity';
import StudentTable from '@/components/StudentTable';

const stats = [
  {
    label: 'Total Students',
    value: '2,847',
    icon: Users,
    change: '+12.5%',
    positive: true,
  },
  {
    label: 'Active Courses',
    value: '24',
    icon: BookOpen,
    change: '+3',
    positive: true,
  },
  {
    label: 'Attendance Rate',
    value: '94.2%',
    icon: Percent,
    change: '+2.3%',
    positive: true,
  },
  {
    label: 'Avg. GPA',
    value: '3.8',
    icon: TrendingUp,
    change: '+0.15',
    positive: true,
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 overflow-auto pt-20 md:pt-16">
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-slate-400">Welcome back, here&apos;s your academy overview</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="stat-card">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="stat-label">{stat.label}</p>
                        <p className="stat-value">{stat.value}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-500/10">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {stat.positive ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span className="text-sm font-semibold">{stat.change}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <DashboardChart />
              </div>
              <div>
                <RecentActivity />
              </div>
            </div>

            {/* Recent Students */}
            <StudentTable />
          </div>
        </main>
      </div>
    </div>
  );
}
