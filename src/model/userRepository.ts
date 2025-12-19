import { IUserRepository, IUserInfoWithoutId, IUserInfo } from '../services/userService';
import { User } from './user';

export class UserRepository implements IUserRepository {
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