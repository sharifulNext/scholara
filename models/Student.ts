import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  email: string;
  course: string;
  gpa: number;
  attendance: number;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  gpa: { type: Number, required: true },
  attendance: { type: Number, required: true },
}, { timestamps: true });

// যদি মডেল অলরেডি তৈরি থাকে, সেটিই ব্যবহার করবে, নাহলে নতুন করে তৈরি করবে
const Student: Model<IStudent> = mongoose.models.Student || mongoose.model<IStudent>('Student', StudentSchema);

export default Student;