import { Document, Schema } from "mongoose";

export interface IOrder extends Document {
	userId: string;
	orderDate: Date;
	items: Array<{
		productId: string;
		quantity: number;
		size: string;
	}>;
	status: string;
	pickupCode: string;
	logisticsId: Schema.Types.ObjectId;
}