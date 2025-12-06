import express from "express";
import {connectToDB} from "./db/mongoose";

const app = express();

connectToDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on port ${PORT}...`))