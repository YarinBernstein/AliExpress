import mongoose, { Schema, Model } from 'mongoose';
import { ILogistics } from '../../types/schemas/logisticsTypes';

const logisticsSchema: Schema<ILogistics> = new mongoose.Schema(
  {
    baseName: String,
    baseAddress: String,
    phoneNumber: String,
    managerId: Number
  },
  {
    toJSON: { virtuals: false },
    id: false
  }
);

const Logistics: Model<ILogistics> = mongoose.model<ILogistics>('Logistics', logisticsSchema);
export default Logistics;
