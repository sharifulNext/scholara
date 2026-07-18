import connectDB from '@/lib/mongodb';
import Student from '@/models/Student';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const { status } = await req.json();
    const updatedStudent = await Student.findByIdAndUpdate(params.id, { status }, { new: true });
    return NextResponse.json(updatedStudent);
  } catch (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}