import mongoose, { Document, Schema, Model } from 'mongoose';

interface IFlight extends Document {
	flightName: string;
}

const flightSchema: Schema<IFlight> = new mongoose.Schema({
	flightName: { type: String, required: true }
});

const Flight: Model<IFlight> = mongoose.model('Flight', flightSchema);
export default Flight;
