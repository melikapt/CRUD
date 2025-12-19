import { ZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate = (schema: ZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const validated = schema.safeParse(
                req.body
            )
            console.log("🚀 ~ validate ~ validated:", validated)
            if (validated.success === false) {
                if (validated.error instanceof ZodError) {
                    console.log('11111');

                    return res.status(400).json({message : validated.error.message} )
                }
            }
            next()
        } catch (error) {
            console.log("🚀 ~ validate ~ error:", error)
            console.log("instanceof ZodError :: ", error instanceof ZodError)
            if (error instanceof ZodError) {
                throw res.status(400).json({ cause: error.cause, message: error.message })
            }
            throw res.status(500).json('Internal server error...')
        }
    }
}