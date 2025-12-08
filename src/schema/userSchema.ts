import { z } from "zod";
import message from "../helper/message.json";

export const userSchema = z.object({
    firstName: z.string({ error: message.required_error }),
    lastName: z.string({ error: message.required_error }),
    gender: z.enum(['FEMALE', 'MALE'], { error: message.required_error }),
    // contactId: z.string(/*{ error: message.required_error }*/)
})

export const updateUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
})

export type User = z.infer<typeof userSchema>;