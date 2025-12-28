import {ICustomError} from "../errors/customError";

export interface IResult<T>{
    hasError:boolean;
    message:string;
    data:T | null;
    errors?:ICustomError[]
}