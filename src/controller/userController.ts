import {Request,Response,NextFunction} from "express";
import {getUsersService} from "../services/userService";

export const getUsers = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = await getUsersService();
        res.status(result.statusCode).json(result)
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        throw new Error(`something failed : ${error}`);
        
    }
}