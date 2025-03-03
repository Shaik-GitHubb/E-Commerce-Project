import express from "express";
import {login, register,getUser,logout, changePassword} from "../controller/user.controller.js";

const userrouter = express.Router();

userrouter.post("/register", register);
userrouter.post("/login", login);
userrouter.get("/me",getUser);
userrouter.get("/logout",logout);
userrouter.post("/changePassword",changePassword);

export default userrouter;