import { IHashProvider } from "../services/userService";
import { genSalt, hash } from "bcrypt";

export class HashProvider implements IHashProvider {
    async hash(password: string): Promise<string> {
        console.log("🚀 ~ HashProvider ~ hash ~ password:", password)
        const salt = await genSalt(10);
        const hashedPass = await hash(password, salt);
        console.log("🚀 ~ HashProvider ~ hash ~ hashedPass:", hashedPass)
        return hashedPass;
    }
}