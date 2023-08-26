import { Document } from "mongoose";

export interface IUser extends Document {
	fullName: string;
	personalNumber: number;
	password: string;
	passwordConfirm: string;
	flight?: string;
	phoneNumber?: string;
	subjectId?: string;
	accessLevel?: number;
}