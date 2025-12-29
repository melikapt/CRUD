import { NextFunction, Response, Request } from "express";
import { CustomError } from "../errors/customError";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(`Global error handler caught : ${err}`);

    if(err instanceof CustomError){
        res.status(err.statusCode).json({errors:err.errors})
    }

    const errDetails = {
        message: err.message,
        stack: err.stack,
        route: req.originalUrl,
        method: req.method,
        time: new Date(),
    }
    console.log("🚀 ~ errorHandler ~ errDetails from middleware:", JSON.stringify(errDetails));

    if (res.headersSent) {
        next(err);
    }

    const message = err.message || 'Internal server error';
    const statusCode = 500;

    res.status(statusCode).json({ success: false, message });
}

