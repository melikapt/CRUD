import {Request,Response,NextFunction} from "express";

export const getUsers = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = await getUsers();
        res.status(200).json(result)
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        throw new Error(`something failed : ${error}`);
        
    }
}