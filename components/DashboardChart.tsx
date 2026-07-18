'use client';

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', attendance: 85, performance: 78 },
  { month: 'Feb', attendance: 88, performance: 82 },
  { month: 'Mar', attendance: 91, performance: 85 },
  { month: 'Apr', attendance: 89, performance: 87 },
  { month: 'May', attendance: 93, performance: 89 },
  { month: 'Jun', attendance: 94, performance: 91 },
];

export default function DashboardChart() {
  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-1">Performance Overview</h3>
        <p className="text-sm text-slate-400">Attendance & Academic Performance</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" />
          <YAxis stroke="rgba(255,255,255,0.3)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="attendance"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorAttendance)"
            name="Attendance %"
          />
          <Area
            type="monotone"
            dataKey="performance"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorPerformance)"
            name="Performance %"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
