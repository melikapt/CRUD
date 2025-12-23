import express from "express";
import { userController } from '../injection/injection';
import { catchAsync } from "../utils/catchAsync";

const router = express.Router();

router.get('/:id', catchAsync(userController.getUser));
router.post('/create', catchAsync(userController.createUser));
router.get('/', catchAsync(userController.getUsers));
router.delete('/:id', catchAsync(userController.deleteUser));
router.put('/:id', catchAsync(userController.updateUser));

export default router;