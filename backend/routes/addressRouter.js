import express from "express";
import { getAddress, postAddress } from "../controller/address.controller.js";

const addressRouter = express.Router();

addressRouter.post("/post",postAddress);
addressRouter.get("/get",getAddress);

export default addressRouter;