import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { IUser } from '../types/schemas/userTypes';
import User from '../models/user/userSchema';
import { HTTP_STATUS_OK, HTTP_STATUS_UNAUTHORIZED } from '../constants/status/HttpStatusCodes';
import { STATUS_FAIL, STATUS_SUCCESS, USER_NOT_FOUND_MESSAGE } from '../constants/status/HttpStatusMessages';


export const getUser = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
	// Assuming req.user is populated by your authentication middleware
	const user: IUser = req.body.user;

	if (user === null) {
		res.status(HTTP_STATUS_UNAUTHORIZED).json({
			status: STATUS_FAIL,
			message: USER_NOT_FOUND_MESSAGE
		});
		return;
	}

	// Send a response with the retrieved user data
	res.status(HTTP_STATUS_OK).json({
		status: STATUS_SUCCESS,
		data: user
	});
});

export const getUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await User.find();

		res.status(HTTP_STATUS_OK).json({
			status: 'success',
			data: users
		});
	} catch (error) {
		next(error);
	}
});

export const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user: IUser = req.body.user;

		if (user === null) {
			res.status(HTTP_STATUS_UNAUTHORIZED).json({
				status: STATUS_FAIL,
				message: USER_NOT_FOUND_MESSAGE
			});
			return;
		}

		const { fullName, phoneNumber } = req.body;

		if (fullName) user.fullName = fullName;
		if (phoneNumber) user.phoneNumber = phoneNumber;

		// Save the updated user
		await user.save();

		// Send a response with the updated user data
		res.status(HTTP_STATUS_OK).json({
			status: STATUS_SUCCESS,
			data: user
		});
	} catch (error) {
		next(error);
	}
});
