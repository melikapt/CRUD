import { NextFunction, Request, Response } from "express";

export function estelam(req:Request,res:Response,next:NextFunction){
    if(req.body.firstName.includes('a') || req.body.firstName.includes('b')){
        if(req.body.lastName.length < req.body.firstName.length){
            return res.status(400).json({message : 'Your lastName character should be more than your firstName'});
        }
        next();
    }
    else{
        return res.status(400).json({message : 'Your firstName not valid'});
    }
}