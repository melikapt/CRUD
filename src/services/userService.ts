export interface IUserInfoWithoutId {
    firstName: string,
    lastName: string,

}

export interface IUserInfo extends IUserInfoWithoutId {
    userId: string;
}

export interface IUserRepository {
    createUser(userInfo: IUserInfoWithoutId): Promise<void>;
    getUserById(userId: string): Promise<IUserInfo>;
}


export class UserService {
    constructor(
        private readonly userRepository:IUserRepository
    ){}
      createUser = async (userInfo: IUserInfoWithoutId) => {
        await this.userRepository.createUser(userInfo);
    }

      getUserById = async (userId: string) => {
        return this.userRepository.getUserById(userId);
    }
}

