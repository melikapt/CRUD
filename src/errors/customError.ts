interface ICustomError {
    message: string;
    context?: { [key: string]: any }
}

export abstract class CustomError extends Error {
    abstract readonly statusCode: number;
    abstract readonly errors: ICustomError[];
    abstract readonly logging: boolean;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);
    }
}