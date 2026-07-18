'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Download, Filter } from 'lucide-react';

const results = [
  { id: 1, name: 'Alice Johnson', course: 'CS101', midterm: 92, final: 94, assignment: 96, gpa: 3.9 },
  { id: 2, name: 'Bob Smith', course: 'CS102', midterm: 85, final: 87, assignment: 88, gpa: 3.7 },
  { id: 3, name: 'Carol White', course: 'CS101', midterm: 88, final: 90, assignment: 92, gpa: 3.8 },
  { id: 4, name: 'David Brown', course: 'CS103', midterm: 80, final: 82, assignment: 84, gpa: 3.6 },
  { id: 5, name: 'Emma Davis', course: 'CS102', midterm: 94, final: 96, assignment: 98, gpa: 3.9 },
];

export default function ResultsPage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 overflow-auto pt-20 md:pt-16">
          <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Results & Grades</h1>
                <p className="text-slate-400">View and publish student results</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all font-medium">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>
                <button className="btn-primary-gradient">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            {/* Results Table */}
            <div className="glass-card p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Student Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Course</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">Midterm</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">Final</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">Assignment</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">GPA</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result) => {
                      const average = (result.midterm + result.final + result.assignment) / 3;
                      let grade = 'F';
                      let color = 'text-red-400';
                      
                      if (average >= 90) { grade = 'A'; color = 'text-emerald-400'; }
                      else if (average >= 80) { grade = 'B'; color = 'text-blue-400'; }
                      else if (average >= 70) { grade = 'C'; color = 'text-yellow-400'; }

                      return (
                        <tr key={result.id} className="table-row">
                          <td className="table-cell">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                                {result.name.charAt(0)}
                              </div>
                              <span className="font-medium text-white">{result.name}</span>
                            </div>
                          </td>
                          <td className="table-cell text-slate-400">{result.course}</td>
                          <td className="table-cell text-center">
                            <span className="text-white font-medium">{result.midterm}</span>
                          </td>
                          <td className="table-cell text-center">
                            <span className="text-white font-medium">{result.final}</span>
                          </td>
                          <td className="table-cell text-center">
                            <span className="text-white font-medium">{result.assignment}</span>
                          </td>
                          <td className="table-cell text-center">
                            <span className="text-white font-medium">{result.gpa.toFixed(1)}</span>
                          </td>
                          <td className="table-cell text-center">
                            <span className={`${color} font-bold text-lg`}>{grade}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
