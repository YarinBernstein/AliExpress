import { Request, Response, NextFunction } from 'express';
import { MiddlewareFunction } from '../types/middlewareTypes';

/**
 * Wraps an asynchronous function to catch any errors and pass them to the express 'next' function.
 * @param asyncFunc The asynchronous function to be wrapped.
 * @returns A middleware function that handles async errors.
 */
const catchAsync = (asyncFunc: MiddlewareFunction) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await asyncFunc(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export default catchAsync;
