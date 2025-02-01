import express from "express";
import {login, register} from "../controller/user.controller.js";

const userrouter = express.Router();

userrouter.post("/register", register);
userrouter.post("/login", login);

export default userrouter;