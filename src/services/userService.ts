import message from "../helper/message.json";
import { User } from "../model/user";

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

export const getUserService = async (userId:string) => {
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
            message: message.find_user,
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

export const createUserService = async (body:object) => {
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
        console.log("🚀 ~ getUser ~ error:", error)
        return {
            success: false,
            statusCode: 500,
            message: message.server_error,
        }
    }
}