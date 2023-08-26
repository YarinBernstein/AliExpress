import { Request, Response } from 'express';
import AppError from '../utils/AppError';
import catchAsync from '../utils/catchAsync';
import {HTTP_STATUS_CREATED, HTTP_STATUS_OK, HTTP_STATUS_NOT_FOUND} from '../constants/status/HttpStatusCodes';
import { STATUS_SUCCESS } from '../constants/status/HttpStatusMessages';
import Order from '../models/order/orderSchema';

export const getAllOrders = catchAsync(async (req: Request, res: Response) => {
    const orders = await Order.find();
    res.status(HTTP_STATUS_OK).json({
        status: STATUS_SUCCESS,
        data: orders,
    });
});

export const getOrderById = catchAsync(async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);

    if (!order) {
        throw new AppError(HTTP_STATUS_NOT_FOUND, 'Order not found.');
    }

    res.status(HTTP_STATUS_OK).json({
        status: STATUS_SUCCESS,
        data: order,
    });
});

export const createOrder = catchAsync(async (req: Request, res: Response) => {
    const newOrder = await Order.create(req.body);

    res.status(HTTP_STATUS_CREATED).json({
        status: STATUS_SUCCESS,
        data: newOrder,
    });
});

export const updateOrder = catchAsync(async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
        new: true,
        runValidators: true,
    });

    if (!updatedOrder) {
        throw new AppError(HTTP_STATUS_NOT_FOUND, 'Order not found.');
    }

    res.status(HTTP_STATUS_OK).json({
        status: STATUS_SUCCESS,
        data: updatedOrder,
    });
});

export const deleteOrder = catchAsync(async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
        throw new AppError(HTTP_STATUS_NOT_FOUND, 'Order not found.');
    }

    res.status(HTTP_STATUS_OK).json({
        status: STATUS_SUCCESS,
        data: null,
    });
});
