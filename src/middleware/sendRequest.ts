import { NextFunction, Request, Response } from "express";

export function sendResponse(req: Request, res: Response, next: NextFunction) {
    //@ts-ignore
    res.sendResponse = <T>(data: IResult<T>) => {
        const { status, ...others } = data;
        return res.status(data.status).json(others);
    }
    next();
}

import { ICustomError } from "../errors/customError";

export interface IResult<T> {
    hasError: boolean;
    message: string;
    data: T | null;
    errors?: ICustomError[];
    status: number;
}

export interface ICustomResponse extends Response {
    sendResponse: <T>(data: IResult<T>) => Response<any, Record<string, any>>
}
