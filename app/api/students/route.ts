import connectDB from '@/lib/mongodb';
import Student from '@/models/Student';
import { NextResponse } from 'next/server';

// Fetch all students (GET)
export async function GET() {
  try {
    await connectDB();
    const students = await Student.find({}).sort({ createdAt: -1 }); 
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}

// Add a new student (POST)
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newStudent = await Student.create(body);
    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}