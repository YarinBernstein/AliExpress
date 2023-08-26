import { HTTP_STATUS_INTERNAL_SERVER_ERROR } from "../constants/status/HttpStatusCodes";

class AppError extends Error {
    statusCode: number;
    isOperational: boolean;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode || HTTP_STATUS_INTERNAL_SERVER_ERROR;
        this.isOperational = true;
    }
}

export default AppError;

