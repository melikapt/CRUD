import express from "express";
import {userController} from '../injection/injection';

const router = express.Router();

router.get('/:id', userController.getUser);
router.post('/create', userController.createUser);

export default router;