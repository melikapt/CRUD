import {Request,Response,NextFunction} from "express";
import {getUsersService,getUserService,createUserService} from "../services/userService";

export const getUsers = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = await getUsersService();
        res.status(result.statusCode).json(result)
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        throw new Error(`something failed : ${error}`);
        
    }
}

export const getUser = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userId=req.params.id !!;
        const result = await getUserService(userId);
        res.status(result.statusCode).json(result)
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error)
        throw new Error(`something failed : ${error}`);
    }
}

export const createUser  =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = await createUserService(req.body);
        res.status(result.statusCode).json(result)
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        throw new Error(`something failed : ${error}`);
    }
}