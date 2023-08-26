import mongoose, { Schema, Model } from 'mongoose';
import { ICategory } from '../../types/schemas/categoryTypes';

const categorySchema: Schema<ICategory> = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true
    }
  },
  {
    toJSON: { virtuals: false },
    id: false
  }
);

const Category: Model<ICategory> = mongoose.model<ICategory>('Category', categorySchema);
export default Category;
