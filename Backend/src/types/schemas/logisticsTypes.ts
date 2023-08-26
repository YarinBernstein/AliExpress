import { Document } from "mongoose";

export interface ILogistics extends Document {
	baseName: string;
	baseAddress: string;
	phoneNumber: string;
	managerId: number;
}