import mongoose, { Document, Schema, Model } from 'mongoose';

interface IOrder extends Document {
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

const orderSchema: Schema<IOrder> = new mongoose.Schema({
	userId: { type: String },
	orderDate: { type: Date },
	items: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
			quantity: { type: Number },
			size: { type: String }
		}
	],
	status: { type: String },
	pickupCode: { type: String },
	logisticsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Logistics' }
});

const Order: Model<IOrder> = mongoose.model('Order', orderSchema);
export default Order;
