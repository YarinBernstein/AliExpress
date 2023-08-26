import mongoose, { Schema, Model } from 'mongoose';
import { IProduct } from '../../types/schemas/productTypes';
import { ProductErrorMessage } from '../../constants/errorMessages/ProductErrorMessage';


const productSchema: Schema<IProduct> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, ProductErrorMessage.ProductNameRequired],
      minLength: [2, ProductErrorMessage.ProductNameMinLength],
      maxLength: [50, ProductErrorMessage.ProductNameMaxLength]
    },
    categoryId: {
      type: Schema.Types.ObjectId, // Change to Schema.Types.ObjectId
      required: [true, ProductErrorMessage.ProductCategoryRequired]
    },
    description: String,
    images: {
      type: [String],
      required: [true, ProductErrorMessage.ProductImagesRequired]
    },
    inventory: {
      type: Map,
      of: Number,
      required: [true, ProductErrorMessage.ProductInventoryRequired]
    },
    logisticId: {
      type: Schema.Types.ObjectId,
      ref: 'Logistics',
      required: [true, ProductErrorMessage.ProductLogisticIdRequired]
    }
    // Add more fields specific to your product model
  },
  {
    toJSON: { virtuals: false },
    id: false
  }
);

const Product: Model<IProduct> = mongoose.model<IProduct>('Product', productSchema);
export default Product;
