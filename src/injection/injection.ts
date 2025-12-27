import {UserController} from '../controller/userController';
import { UserRepository } from '../model/userRepository';
import { UserService } from '../services/userService';
import {HashProvider} from "../providers/hashProvider";

const hashProvider = new HashProvider();
const userRepository = new UserRepository();
const userService = new UserService(userRepository,hashProvider);
export const userController = new UserController(userService);