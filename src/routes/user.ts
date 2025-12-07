import express from "express";
import { validate } from "../middleware/validateData";
import { getUsers,getUser,createUser } from "../controller/userController";
import {userSchema} from "../schema/userSchema";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id',getUser);
router.post('/create',validate(userSchema),createUser);
export default router;