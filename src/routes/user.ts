import express from "express";
import { validate } from "../middleware/validateData";
import { getUsers } from "../controller/userController";

const router = express.Router();

router.get('/', getUsers);

export default router;