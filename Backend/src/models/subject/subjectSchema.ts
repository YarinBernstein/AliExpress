import mongoose, { Document, Schema, Model } from 'mongoose';

interface ISubject extends Document {
	subjectName: string;
}

const subjectSchema: Schema<ISubject> = new mongoose.Schema({
	subjectName: { type: String, required: true }
});

const Subject: Model<ISubject> = mongoose.model('Subject', subjectSchema);
export default Subject;
