import mongoose, { Schema, Model } from 'mongoose';
import { IFlight } from '../../types/schemas/flightTypes';

const flightSchema: Schema<IFlight> = new mongoose.Schema(
  {
    flightName: {
      type: String,
      required: true
    }
  },
  {
    toJSON: { virtuals: false },
    id: false
  }
);

const Flight: Model<IFlight> = mongoose.model<IFlight>('Flight', flightSchema);
export default Flight;
