import mongoose, { Document, Schema, Model } from 'mongoose';

interface ILogistics extends Document {
	baseName: string;
	baseAddress: string;
	phoneNumber: string;
	managerId: Number;
}

const logisticsSchema: Schema<ILogistics> = new mongoose.Schema({
	baseName: { type: String },
	baseAddress: { type: String },
	phoneNumber: { type: String },
	managerId: { type: Number }
});

const Logistics: Model<ILogistics> = mongoose.model('Logistics', logisticsSchema);
export default Logistics;
