'use client';

import { CheckCircle, AlertCircle, UserPlus, FileText } from 'lucide-react';

const activities = [
  {
    icon: UserPlus,
    title: 'New Enrollment',
    description: 'Sarah Johnson joined CS101',
    time: '2 hours ago',
    color: 'emerald',
  },
  {
    icon: AlertCircle,
    title: 'Attendance Alert',
    description: 'Mike Wilson low attendance',
    time: '4 hours ago',
    color: 'amber',
  },
  {
    icon: CheckCircle,
    title: 'Results Released',
    description: 'Midterm results published',
    time: '6 hours ago',
    color: 'emerald',
  },
  {
    icon: FileText,
    title: 'Notice Posted',
    description: 'Campus closure notice',
    time: '1 day ago',
    color: 'blue',
  },
];

export default function RecentActivity() {
  const colorMap = {
    emerald: 'bg-emerald-500/10 text-emerald-400',
    amber: 'bg-amber-500/10 text-amber-400',
    blue: 'bg-blue-500/10 text-blue-400',
  };

  return (
    <div className="glass-card p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity, idx) => {
          const Icon = activity.icon;
          const colorClass = colorMap[activity.color as keyof typeof colorMap];

          return (
            <div key={idx} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
              <div className={`flex-shrink-0 p-2 rounded-lg ${colorClass}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{activity.title}</p>
                <p className="text-xs text-slate-400 truncate">{activity.description}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 py-2 px-4 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
        View All Activity
      </button>
    </div>
  );
}
