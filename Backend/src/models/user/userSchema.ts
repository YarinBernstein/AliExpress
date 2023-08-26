import mongoose, { Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../../types/schemas/userTypes';
import { UserErrorMessage } from '../../constants/errorMessages/UserErrorMessage';

const userSchemaOptions = {
	toJSON: { virtuals: false }, // To avoid including '_id' in JSON output
	id: false // To disable the virtual 'id' field
};

const userSchema: Schema<IUser> = new mongoose.Schema(
	{
		fullName: {
			type: String,
			minLength: [2, UserErrorMessage.FullnameMinLength],
			maxLength: [35, UserErrorMessage.FullnameMaxLength],
			required: [true, UserErrorMessage.FullnameRequired]
		},
		personalNumber: {
			type: Number,
			required: [true, UserErrorMessage.PersonalNumberRequired],
			unique: true
		},
		password: {
			type: String,
			required: [true, UserErrorMessage.PasswordRequired],
			minLength: [8, UserErrorMessage.PasswordMinLength],
			select: false
		},
		accessLevel: {
			type: Number,
			required: [true, UserErrorMessage.AccessLevelRequired]
		},
		passwordConfirm: {
			type: String,
			required: [true, UserErrorMessage.PasswordConfirmRequired],
			validate: {
				validator: function (this: IUser, el: string) {
					return el === this.password;
				},
				message: UserErrorMessage.PasswordConfirmValidation
			}
		},
		flight: String,
		phoneNumber: String,
		subjectId: String
	},
	userSchemaOptions
);

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

userSchema.methods.comparePassword = async function (stringPass: string): Promise<boolean> {
	return await bcrypt.compare(stringPass, this.password);
};

const UserModel: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default UserModel;
