export interface IUserInfoWithoutId {
    firstName: string,
    lastName: string,
    // password?: string,
}

export interface IUserInfo extends IUserInfoWithoutId {
    userId: string;
}

export interface IUserRepository {
    createUser(userInfo: IUserInfoWithoutId, password: string): Promise<void>;
    getUserById(userId: string): Promise<IUserInfo>;
    getUsers(): Promise<IUserInfo[]>;
    deleteUser(userId: string): Promise<void>;
    updateUser(userInfo: IUserInfo): Promise<void>;
}

export interface IHashProvider {
    hash(password: string): Promise<string>;
}


export class UserService {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly hashProvider: IHashProvider,
    ) { }
    createUser = async (userInfo: IUserInfoWithoutId, password: string) => {
        const hashedPassword = await this.hashProvider.hash(password);
        console.log("🚀 ~ UserService ~ hashedPassword:", hashedPassword)
        await this.userRepository.createUser(userInfo, hashedPassword);
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
    updateUser = async (userInfo: IUserInfo) => {
        await this.userRepository.updateUser(userInfo);
    }
}

