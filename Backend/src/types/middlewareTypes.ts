import { NextFunction, Request, Response } from "express";

// Define types for your middleware functions
export type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;