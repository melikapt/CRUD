import express from "express";
import { validate } from "../middleware/validateData";

const router = express.Router();

router.get('/', getUsers);