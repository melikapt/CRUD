import express, { NextFunction,Response,Request } from "express";
import { connectToDB } from "./db/mongoose";
import userRoute from "./routes/user";
import { errorHandler } from "./middleware/errorHandler";
import {sendResponse} from "./middleware/sendRequest";


const app = express();

connectToDB();

app.use(express.json());
app.use(sendResponse);
app.use("/user", userRoute);

app.use((req:Request,res:Response,next:NextFunction)=>{
    res.status(404).json("page not found");
})

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}...`))