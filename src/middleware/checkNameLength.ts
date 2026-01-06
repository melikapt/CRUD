import { Request, Response, NextFunction } from "express";

export function checkNameLength(req: Request, res: Response, next: NextFunction){
    const {firstName,password}=req.body;
    
    
    if(firstName.length <= 5 && password.length >= 5){
        console.log('111');
        
        return res.status(400).json({message : 'password must be less than 5 character'});
    }
    if(firstName.length > 5 && password.length < 5){
        console.log('222');
        return res.status(400).json({message : 'password must be more than 5 character'});
    }
    next();
}