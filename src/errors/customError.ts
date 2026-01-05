export interface ICustomError {
    message: string;
    context?: { [key: string]: any }
}

export abstract class CustomError extends Error {
    abstract readonly statusCode: number;
    abstract readonly errors: ICustomError[];
    readonly logging: boolean = process.env.ERROR_LOGGING_FLAG === 'false' ? false : true;

    constructor(message: string) {
        super(message);
    }
}