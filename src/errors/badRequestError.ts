import { CustomError, ICustomError } from "./customError";

export class BadRequestError extends CustomError {
    readonly statusCode = 400;
    readonly logging: boolean;
    readonly errors: ICustomError[];

    constructor(params?: { message?: string, logging?: boolean, context?: { [key: string]: any } }) {
        const { message, logging, } = params || {};
        super(message || 'Bad Request');
        this.logging = logging || false;
        this.errors = [{
            message: message || 'Bad Request',
            context: params?.context || {}
        }]

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}