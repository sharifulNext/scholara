import connectDB from '@/lib/mongodb';
import Course from '@/models/Course';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const courses = await Course.find({});
  return NextResponse.json(courses);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const newCourse = await Course.create(data);
  return NextResponse.json(newCourse, { status: 201 });
}