import express from "express";
import {userController} from '../injection/injection';

const router = express.Router();

router.get('/:id', userController.getUser);
router.post('/create', userController.createUser);
router.get('/',userController.getUsers);
router.delete('/:id',userController.deleteUser);

export default router;