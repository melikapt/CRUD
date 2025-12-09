import { ZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate = (schema: ZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const validated = schema.safeParse({
                body: req.body,
                // query:req.query,
                // params:req.params
            })
            if(validated.success === false){
                if(validated.error instanceof ZodError){
                    console.log('11111');
                    
                    res.status(400).json({ cause: validated.error.cause, message: validated.error.message })
                }
            }
            // console.log("🚀 ~ validate ~ t:", t)
            next()
        } catch (error) {
            console.log("🚀 ~ validate ~ error:", error)
            console.log("instanceof ZodError :: ",error instanceof ZodError)
            if (error instanceof ZodError) {
                res.status(400).json({ cause: error.cause, message: error.message })
            }
            res.status(500).json('Internal server error...')
        }
    }
}