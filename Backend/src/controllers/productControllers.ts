import { Request, Response } from 'express';
import AppError from '../utils/AppError';
import catchAsync from '../utils/catchAsync';
import {HTTP_STATUS_CREATED, HTTP_STATUS_OK, HTTP_STATUS_NOT_FOUND,} from '../constants/status/HttpStatusCodes';
import { STATUS_SUCCESS } from '../constants/status/HttpStatusMessages';
import Product from '../models/product/productSchema';


export const getAllProducts = catchAsync(async (req: Request, res: Response) => {
	const products = await Product.find();
	res.status(HTTP_STATUS_OK).json({
		status: STATUS_SUCCESS,
		data: products
	});
});


export const getProductById = catchAsync(async (req: Request, res: Response) => {
	const productId = req.params.productId;
	const product = await Product.findById(productId);

	if (!product) {
		throw new AppError(HTTP_STATUS_NOT_FOUND, 'Product not found.');
	}

	res.status(HTTP_STATUS_OK).json({
		status: STATUS_SUCCESS,
		data: product
	});
});


export const createProduct = catchAsync(async (req: Request, res: Response) => {
	const newProduct = await Product.create(req.body);

	res.status(HTTP_STATUS_CREATED).json({
		status: STATUS_SUCCESS,
		data: newProduct
	});
});


export const updateProduct = catchAsync(async (req: Request, res: Response) => {
	const productId = req.params.productId;
	const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
		new: true,
		runValidators: true
	});

	if (!updatedProduct) {
		throw new AppError(HTTP_STATUS_NOT_FOUND, 'Product not found.');
	}

	res.status(HTTP_STATUS_OK).json({
		status: STATUS_SUCCESS,
		data: updatedProduct
	});
});


export const deleteProduct = catchAsync(async (req: Request, res: Response) => {
	const productId = req.params.productId;
	const deletedProduct = await Product.findByIdAndDelete(productId);

	if (!deletedProduct) {
		throw new AppError(HTTP_STATUS_NOT_FOUND, 'Product not found.');
	}

	res.status(HTTP_STATUS_OK).json({
		status: STATUS_SUCCESS,
		data: null
	});
});
