import { Document, Schema } from "mongoose";

export interface IProduct extends Document {
	name: string;
	categoryId: Schema.Types.ObjectId;
	description: string;
	images: string[];
	inventory: Map<string, number>;
	logisticId: Schema.Types.ObjectId;
}

