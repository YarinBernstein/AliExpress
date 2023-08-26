import mongoose, { Schema, Model } from 'mongoose';
import { IOrder } from '../../types/schemas/orderTypes';

const orderSchema: Schema<IOrder> = new mongoose.Schema(
  {
    userId: String,
    orderDate: Date,
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product'
        },
        quantity: Number,
        size: String
      }
    ],
    status: String,
    pickupCode: String,
    logisticsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Logistics'
    }
  },
  {
    toJSON: { virtuals: false },
    id: false
  }
);

const Order: Model<IOrder> = mongoose.model<IOrder>('Order', orderSchema);
export default Order;
