import mongoose, { Document, Schema, Model } from 'mongoose';

interface IProduct extends Document {
	name: string;
	categoryId: Schema.Types.ObjectId;
	description: string;
	images: string[];
	inventory: Map<string, number>;
	logisticId: Schema.Types.ObjectId;
}

const productSchema: Schema<IProduct> = new mongoose.Schema({
	name: { type: String },
	categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
	description: { type: String },
	images: { type: [String] },
	inventory: {
		type: Map,
		of: Number // Values will be the available quantities (numbers)
	},
	logisticId: { type: mongoose.Schema.Types.ObjectId, ref: 'Logistics' }
});

const Product: Model<IProduct> = mongoose.model('Product', productSchema);
export default Product;
