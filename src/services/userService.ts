import message from "../helper/message.json";
import { User } from "../model/user";
import { IUpdateUser } from "../interface/userInterface";
import { success } from "zod";

export const getUsersService = async () => {
    try {
        console.log('11');

        const users = await User.find();
        if (users.length === 0) {
            return {
                success: false,
                statusCode: 404,
                message: message.not_exist_users,
                data: []
            }
        }
        return {
            success: true,
            statusCode: 200,
            message: message.find_users,
            data: users
        };
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        return {
            success: false,
            statusCode: 500,
            message: message.server_error,
        }
    }
}

export const getUserService = async (userId: string) => {
    console.log("🚀 ~ getUserService ~ userId:", userId)
    try {
        const user = await User.findById({ _id: userId });
        console.log("🚀 ~ getUser ~ user:", user)
        if (!user) {
            return {
                success: false,
                statusCode: 404,
                message: message.not_exist_users,
                data: []
            }
        }

        return {
            success: true,
            statusCode: 200,
            message: message.not_find_user,
            data: user
        };
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error)
        return {
            success: false,
            statusCode: 500,
            message: message.server_error,
        }
    }
}

export const createUserService = async (body: object) => {
    console.log("🚀 ~ createUserService ~ body:", body)
    try {
        const user = await User.create(body)
        console.log("🚀 ~ createUserService ~ user:", user)

        return {
            success: true,
            statusCode: 200,
            message: message.create_user,
            data: user
        };
    } catch (error) {
        console.log("🚀 ~ createUserService ~ error:", error)
        console.log("🚀 ~ getUser ~ error:", error)
        return {
            success: false,
            statusCode: 500,
            message: message.server_error,
        }
    }
}

export const updateUserService = async (userId: string, data: IUpdateUser) => {
    try {
        const existUser = await User.findByIdAndUpdate(userId, data, { new: true });
        console.log("🚀 ~ updateUserService ~ existUser:", existUser)
        if (!existUser) {
            return {
                success: false,
                statusCode: 404,
                message: message.not_find_user
            }
        }

        return {
            success: true,
            statusCode: 200,
            message: message.update_user
        }

    } catch (error) {
        console.log("🚀 ~ updateUserService ~ error:", error)
        return {
            success: false,
            statusCode: 500,
            message: message.server_error
        }
    }
}

export const deleteUserService = async (id: string) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        console.log("🚀 ~ deleteUserService ~ deletedUser:", deletedUser)
        if (!deletedUser) {
            return {
                success: false,
                statusCode: 404,
                message: message.not_find_user
            }
        }
        return {
            success: false,
            statusCode: 200,
            message: message.deleted_user
        }
    } catch (error) {
        console.log("🚀 ~ deleteUserService ~ error:", error)
        return {
            success: false,
            statusCode: 500,
            message: message.server_error
        }
    }
}