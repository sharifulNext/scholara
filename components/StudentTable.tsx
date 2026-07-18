'use client';

import { Search, Eye, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

const students = [
  { id: 1, name: 'Alice Johnson', email: 'alice@academy.com', course: 'CS101', gpa: 3.9, attendance: 96 },
  { id: 2, name: 'Bob Smith', email: 'bob@academy.com', course: 'CS102', gpa: 3.7, attendance: 92 },
  { id: 3, name: 'Carol White', email: 'carol@academy.com', course: 'CS101', gpa: 3.8, attendance: 94 },
  { id: 4, name: 'David Brown', email: 'david@academy.com', course: 'CS103', gpa: 3.6, attendance: 88 },
  { id: 5, name: 'Emma Davis', email: 'emma@academy.com', course: 'CS102', gpa: 3.9, attendance: 98 },
];

export default function StudentTable() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Recent Students</h3>
            <p className="text-sm text-slate-400">Latest enrollments and active students</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-premium pl-10"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Name</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Email</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Course</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">GPA</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">Attendance</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="table-row">
                <td className="table-cell">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                      {student.name.charAt(0)}
                    </div>
                    <span className="font-medium text-white">{student.name}</span>
                  </div>
                </td>
                <td className="table-cell text-slate-400">{student.email}</td>
                <td className="table-cell">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                    {student.course}
                  </span>
                </td>
                <td className="table-cell">
                  <span className="font-semibold text-white">{student.gpa.toFixed(1)}</span>
                </td>
                <td className="table-cell">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                        style={{ width: `${student.attendance}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-emerald-400">{student.attendance}%</span>
                  </div>
                </td>
                <td className="table-cell text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="navbar-icon-btn">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="navbar-icon-btn">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="navbar-icon-btn text-red-400 hover:text-red-300 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-8">
          <p className="text-slate-400">No students found matching your search.</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
        <p className="text-sm text-slate-400">Showing {filteredStudents.length} of {students.length} students</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 transition-all">
            Previous
          </button>
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-emerald-500 text-white">1</button>
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 transition-all">2</button>
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 transition-all">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
