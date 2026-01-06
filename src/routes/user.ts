import express from "express";
import { userController } from '../injection/injection';
import { catchAsync } from "../utils/catchAsync";
import {userSchema} from "../schema/userSchema";
import {validate} from "../middleware/validateData";
import {checkNameLength} from "../middleware/checkNameLength";
import {checkTime} from "../middleware/checkTime";

const router = express.Router();

router.get('/:id', catchAsync(userController.getUser));
router.post('/create',validate(userSchema),checkNameLength ,catchAsync(userController.createUser));
router.get('/', catchAsync(userController.getUsers));
router.delete('/:id',checkTime, catchAsync(userController.deleteUser));
router.put('/:id', catchAsync(userController.updateUser));

export default router;