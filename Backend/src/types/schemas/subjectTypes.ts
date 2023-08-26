import { Document } from "mongoose";

export interface ISubject extends Document {
	subjectName: string;
}