import mongoose, { Document, Schema, Model } from 'mongoose';

interface IUser extends Document {
	personalNumber: number;
	fullName: string;
	email: string;
	password: string;
	flight?: string;
	phoneNumber?: string;
	subjectId?: string;
	accessLevel?: number;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
	personalNumber: { type: Number, required: true, unique: true },
	fullName: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
	phoneNumber: { type: String },
	subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
	accessLevel: { type: Number }
});

// Set 'personalNumber' as the primary key
userSchema.set('toJSON', { virtuals: false }); // To avoid including '_id' in JSON output
userSchema.set('id', false); // To disable the virtual 'id' field

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
