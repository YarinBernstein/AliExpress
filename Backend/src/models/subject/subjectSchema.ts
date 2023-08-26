import mongoose, { Schema, Model } from 'mongoose';
import { ISubject } from '../../types/schemas/subjectTypes';

const subjectSchema: Schema<ISubject> = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true
    }
  },
  {
    toJSON: { virtuals: false },
    id: false
  }
);

const Subject: Model<ISubject> = mongoose.model<ISubject>('Subject', subjectSchema);
export default Subject;
