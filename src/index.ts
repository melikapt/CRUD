import express from "express";
import { connectToDB } from "./db/mongoose";
import userRoute from "./routes/user";

const app = express();

connectToDB();

app.use(express.json());
app.use("/user", userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}...`))