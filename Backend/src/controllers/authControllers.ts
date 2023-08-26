import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/user/userSchema';
import AppError from '../utils/AppError';
import { MiddlewareFunction } from '../types/middlewareTypes';
import catchAsync from '../utils/catchAsync';
import {
	HTTP_STATUS_BAD_REQUEST,
	HTTP_STATUS_CREATED,
	HTTP_STATUS_FORBIDDEN,
	HTTP_STATUS_NOT_FOUND
} from '../constants/status/HttpStatusCodes';
import {
	AUTHENTICATION_REQUIRED_MESSAGE,
	INCORRECT_PASSWORD_MESSAGE,
	INVALID_TOKEN_LOG_IN_MESSAGE,
	PERSONAL_NUMBER_AND_PASSWORD_REQUIRED_MESSAGE,
	STATUS_SUCCESS,
	USER_CREATED_SUCCESSFULY_MESSAGE,
	USER_NOT_FOUND_MESSAGE
} from '../constants/status/HttpStatusMessages';
import assert from 'assert';
import { IUser } from '../types/schemas/userTypes';

export const signUp: MiddlewareFunction = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newUser = await User.create(req.body);

			res.status(HTTP_STATUS_CREATED).json({
				status: STATUS_SUCCESS,
				data: newUser,
				message: USER_CREATED_SUCCESSFULY_MESSAGE
			});
		} catch (error) {
			next(error);
		}
	}
);


const authenticateUser = async (personalNumber: string, password: string): Promise<IUser> => {
	if (!personalNumber || !password) {
		throw new AppError(HTTP_STATUS_BAD_REQUEST, PERSONAL_NUMBER_AND_PASSWORD_REQUIRED_MESSAGE);
	}

	const user = await User.findOne({ personalNumber }).select('+password');

	if (!user) {
		throw new AppError(HTTP_STATUS_NOT_FOUND, USER_NOT_FOUND_MESSAGE);
	}

	const isPasswordCorrect = await user.schema.methods.comparePassword(password);

	if (!isPasswordCorrect) {
		throw new AppError(HTTP_STATUS_BAD_REQUEST, INCORRECT_PASSWORD_MESSAGE);
	}

	return user;
};

const generateAuthToken = (userId: string): string => {
	assert(process.env.JWT_SECRET, 'JWT secret must be defined');
	return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN || '1d'
	});
};

export const login: MiddlewareFunction = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const { personalNumber, password } = req.body;

		const user = await authenticateUser(personalNumber, password);
		const token = generateAuthToken(user._id);

		res.cookie('token', token, { httpOnly: true });

		res.status(HTTP_STATUS_CREATED).json({
			status: STATUS_SUCCESS,
			token,
			message: 'User logged in'
		});
		next();
	}
);

const verifyAuthToken = (token: string): string => {
	assert(process.env.JWT_SECRET, 'JWT secret must be defined');
	const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string } | null;

	if (!decoded) {
		throw new AppError(HTTP_STATUS_FORBIDDEN, INVALID_TOKEN_LOG_IN_MESSAGE);
	}

	return decoded.id;
};

const getUserById = async (userId: string): Promise<IUser | null> => {
	const user = await User.findById(userId);
	if (!user) {
		throw new AppError(HTTP_STATUS_FORBIDDEN, USER_NOT_FOUND_MESSAGE);
	}
	return user;
};

export const protect: MiddlewareFunction = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const token = req.cookies.token;

		if (!token) {
			throw new AppError(HTTP_STATUS_FORBIDDEN, AUTHENTICATION_REQUIRED_MESSAGE);
		}

		const userId = verifyAuthToken(token);
		const user = await getUserById(userId);

		(req as any).user = user;

		next();
	}
);
