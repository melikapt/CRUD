import { IUserRepository, IUserInfoWithoutId, IUserInfo } from '../services/userService';
import { User } from './user';

export class UserRepository implements IUserRepository {
    async updateUser(userInfo: IUserInfo): Promise<void> {
        const updatedUser = await User.findByIdAndUpdate(userInfo.userId,{firstName:userInfo.firstName,lastName:userInfo.lastName});
        if(!updatedUser){
            throw new Error("user not found");
        }
    }
    async deleteUser(userId: string): Promise<void> {
        await User.findByIdAndDelete(userId);
    }
    async getUsers(): Promise<IUserInfo[]> {
        return await User.find();
    }
    async createUser(userInfo: IUserInfoWithoutId): Promise<void> {
        await User.create(userInfo);
    }
    async getUserById(userId: string): Promise<IUserInfo> {
        const user = await User.findById(userId)
        if (!user) {
            throw new Error("user not found");
        }
        const { firstName, lastName, _id } = user;
        return { firstName, lastName, userId: _id.toString() }
    }
}