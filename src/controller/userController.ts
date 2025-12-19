import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";


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
        const {firstName,lastName} = req.body;
        if(!firstName || !lastName){
            throw new Error("enter firstName and lastName!");
        }
         await this.userService.createUser({firstName,lastName});
        res.status(200).json({message:'user created'})
    }
}