import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";
import {BadRequestError} from "../errors/badRequestError";


export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }
    getUser = async (req: Request, res: Response) => {

        const userId = req.params.id
        if (!userId) {
            throw new Error('send userId');
        };
        const result = await this.userService.getUserById(userId);
        res.status(200).json(result)
    }
    createUser = async (req: Request, res: Response) => {
        const { firstName, lastName, password } = req.body;
        if (!firstName || !lastName || !password) {
            throw new BadRequestError({message:'Enter firstName & lastName & password'})
        }
        await this.userService.createUser({ firstName, lastName},password);
        res.status(200).json({ message: 'user created' })
    }
    getUsers = async (req:Request,res: Response) => {
        const result = await this.userService.getUsers();
        res.status(200).json(result);
    }
    deleteUser = async (req: Request, res: Response) => {
        const userId = req.params.id;
        if (!userId) {
            throw new Error("please enter userId");
        }
        await this.userService.deleteUser(userId);
        res.status(200).json({ message: 'user deleted' });
    }
    updateUser = async (req:Request,res:Response)=>{
        const userId = req.params.id;
        if(!userId){
            throw new Error('please enter userId');
        }
        const {firstName,lastName}=req.body;
        await this.userService.updateUser({firstName,lastName,userId});
        res.status(200).json({message:'user updated'});
    }
}