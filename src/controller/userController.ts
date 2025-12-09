import { Request, Response, NextFunction } from "express";
import { getUsersService, getUserService, createUserService, updateUserService, deleteUserService } from "../services/userService";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getUsersService();
        res.status(result.statusCode).json(result)
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        throw new Error(`something failed : ${error}`);

    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id
        if (!userId) {
            throw new Error('user id not found');
        };
        const result = await getUserService(userId);
        res.status(result.statusCode).json(result)
    } catch (error) {
        console.log("🚀 ~ getUser ~ error:", error)
        throw new Error(`something failed : ${error}`);
    }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await createUserService(req.body);
        res.status(result.statusCode).json(result)
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        throw new Error(`something failed : ${error}`);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            throw new Error('user id not found');
        }
        const result = await updateUserService(userId, req.body);
        res.status(result.statusCode).json(result);
    } catch (error) {
        console.log("🚀 ~ updateUser ~ error:", error)
        throw new Error(`something failed : ${error}`)
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            throw new Error('user id not found');
        }
        const result = await deleteUserService(userId);
        console.log("🚀 ~ deleteUser ~ result:", result)
        res.status(result.statusCode).json(result);
    } catch (error) {
        console.log("🚀 ~ deleteUser ~ error:", error)
        throw new Error(`something failed : ${error}`)
    }
}