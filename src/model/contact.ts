import { Schema, model } from "mongoose";

interface IContact {
    phone: string[];
    mobile: string[];
    address?: string;
}

const contactSchema = new Schema<IContact>({
    phone: {
        type: [String],
        required: true
    },
    mobile: {
        type: [String],
        required: true
    },
    address: {
        type: String
    }
})

export const Contact = model<IContact>('contact', contactSchema);