import { Schema, model } from "mongoose";

const userEnum = {
    FEMALE: 'female',
    MALE: 'male'
}
export interface IUser {
    firstName: string;
    lastName: string;
    gender?: string;
    contactId: string;
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: userEnum
    },
    contactId: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

export const User = model<IUser>('user', userSchema);