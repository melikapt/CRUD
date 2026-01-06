import { NextFunction, Request, Response } from "express";

export function checkTime(req:Request,res:Response,next:NextFunction){
    const now = Date.now();
    console.log("🚀 ~ checkTime ~ now:", now)

    const midnight = new Date();
    midnight.setHours(24,0,0,0);
    console.log("🚀 ~ checkTime ~ midnight:", midnight)
    console.log("🚀 ~ checkTime ~ midnight.time:", midnight.getTime())

    if(now > midnight.getTime()){
        next();
    }
    return res.status(400).json(`You can't delete your account after 12AM`);
}