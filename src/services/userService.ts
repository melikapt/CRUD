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
    getUsers(): Promise<IUserInfo[]>;
    deleteUser(userId: string): Promise<void>;
    updateUser(userInfo: IUserInfo):Promise<void>;
}


export class UserService {
    constructor(
        private readonly userRepository: IUserRepository
    ) { }
    createUser = async (userInfo: IUserInfoWithoutId) => {
        await this.userRepository.createUser(userInfo);
    }
    getUserById = async (userId: string) => {
        return await this.userRepository.getUserById(userId);
    }
    getUsers = async () => {
        return await this.userRepository.getUsers();
    }
    deleteUser = async (userId: string) => {
        await this.userRepository.deleteUser(userId);
    }
    updateUser = async (userInfo: IUserInfo)=>{
        await this.userRepository.updateUser(userInfo);
    }
}

