import express from "express";
import { cartItems, deleteCartItem, getCartItems } from "../controller/cart.controller.js";

const cartrouter = express.Router();

cartrouter.post("/add", cartItems);
cartrouter.get("/get/:userId", getCartItems);
cartrouter.delete("/delete/:title", deleteCartItem);

export default cartrouter;