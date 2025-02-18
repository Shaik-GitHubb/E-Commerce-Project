import express from "express";
// import {register} from "../controller/user.controller.js";
import cors from "cors";
import userrouter from "./routes/userRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import productrouter from "./routes/productRouter.js";
import cartrouter from "./routes/cartRouter.js";

dotenv.config();


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true, 
}));

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

app.use(express.static("public"))
app.use("/products",productrouter)

app.use("/cart",cartrouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});