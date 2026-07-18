import mongoose, { Schema, model, models } from 'mongoose';

const CourseSchema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Course name is required'] 
  },
  code: { 
    type: String, 
    required: [true, 'Course code is required'],
    unique: true 
  },
  instructor: { 
    type: String, 
    required: [true, 'Instructor name is required'] 
  },
  capacity: { 
    type: Number, 
    default: 40 
  },
  students: { 
    type: Number, 
    default: 0 
  },
  status: { 
    type: String, 
    enum: ['Active', 'Upcoming', 'Completed'], 
    default: 'Active' 
  },
}, { 
  timestamps: true 
});

const Course = models.Course || model('Course', CourseSchema);

export default Course;