import {z} from "zod";
import message from "../helper/message.json";

export const contactSchema=z.object({
    phone:z.array(z.string()).nonempty(message.min_phone_length),
    mobile:z.array(z.string()).nonempty(message.min_mobile_length),
    address:z.string().optional()
})

export type Contact = z.infer<typeof contactSchema>;