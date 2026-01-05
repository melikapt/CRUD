import { CustomError, ICustomError } from "./customError";

export class BadRequestError extends CustomError {
    readonly statusCode = 400;
    readonly errors: ICustomError[];

    constructor(params?: { message?: string, context?: { [key: string]: any } }) {
        const { message, } = params || {};
        super(message || 'Bad Request');
        this.errors = [{
            message: message || 'Bad Request',
            context: params?.context || {}
        }]

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}