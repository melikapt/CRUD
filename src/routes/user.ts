import express from "express";
import { validate } from "../middleware/validateData";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controller/userController";
import { userSchema, updateUserSchema } from "../schema/userSchema";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/create', validate(userSchema), createUser);
router.put('/:id', validate(updateUserSchema), updateUser);
router.delete('/:id', deleteUser);
export default router;