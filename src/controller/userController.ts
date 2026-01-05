import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { BadRequestError } from "../errors/badRequestError";
import { IResult } from "../common/interfaces";
import { IUserInfo } from "../services/userService";
import { ICustomResponse } from "../middleware/sendRequest";


export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }
    getUser = async (req: Request, res: ICustomResponse) => {

        const userId = req.params.id
        if (!userId) {
            const response: IResult<void> = {
                hasError: true,
                message: 'send userId',
                data: null,
                errors: [{ message: 'send userId' }]
            }
            throw new BadRequestError(response);
            // throw new BadRequestError({ message: 'send userId' });
        };
        const result = await this.userService.getUserById(userId);

        const response: IResult<IUserInfo> = {
            hasError: false,
            message: 'user found',
            data: result,
        }
        res.sendResponse({...response,status:200});
    }
    createUser = async (req: Request, res: ICustomResponse) => {
        const { firstName, lastName, password } = req.body;
        if (!firstName || !lastName || !password) {
            const response: IResult<void> = {
                hasError: true,
                message: 'Enter firstName & lastName & password',
                data: null,
                errors: [{ message: 'Enter firstName & lastName & password' }]
            }
            throw new BadRequestError(response);
        }
        await this.userService.createUser({ firstName, lastName }, password);

        const response: IResult<void> = {
            hasError: false,
            message: 'user created',
            data: null
        }
        res.sendResponse({...response,status:200});
        // res.status(200).json(response);
    }
    getUsers = async (req: Request, res: Response) => {
        const result = await this.userService.getUsers();
        const response: IResult<IUserInfo[]> = {
            hasError: false,
            message: 'users found',
            data: result
        }
        res.status(200).json(response);
    }
    deleteUser = async (req: Request, res: Response) => {
        const userId = req.params.id;
        if (!userId) {
            const response: IResult<void> = {
                hasError: true,
                message: 'please enter userId',
                data: null,
                errors: [{ message: 'please enter userId' }]
            }
            throw new BadRequestError(response);
        }
        await this.userService.deleteUser(userId);
        const response: IResult<void> = {
            hasError: false,
            message: 'user deleted',
            data: null
        }
        res.status(200).json(response);
    }
    updateUser = async (req: Request, res: Response) => {
        const userId = req.params.id;
        if (!userId) {
            const response: IResult<IUserInfo> = {
                hasError: true,
                message: 'please enter userId',
                data: null,
                errors: [{ message: 'please enter userId' }]
            }
            throw new BadRequestError(response);
        }
        const { firstName, lastName } = req.body;
        await this.userService.updateUser({ firstName, lastName, userId });
        const response: IResult<void> = {
            hasError: false,
            message: 'user updated',
            data: null
        }
        res.status(200).json(response);
    }
}