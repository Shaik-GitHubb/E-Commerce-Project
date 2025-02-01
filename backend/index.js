import express from "express";
// import {register} from "../controller/user.controller.js";
import cors from "cors";
import userrouter from "./router/userRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

const url=process.env.MONGO_URL;

mongoose.connect(url).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/user", userrouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});