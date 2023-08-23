import mongoose, { Document, Schema, Model } from 'mongoose';

interface ICategory extends Document {
	categoryName: string;
}

const categorySchema: Schema<ICategory> = new mongoose.Schema({
	categoryName: { type: String, required: true }
});

const Category: Model<ICategory> = mongoose.model('Category', categorySchema);
export default Category;
