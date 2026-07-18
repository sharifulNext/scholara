import connectDB from '@/lib/mongodb';
import Course from '@/models/Course';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const course = await Course.findById(params.id);
  if (!course) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(course);
}