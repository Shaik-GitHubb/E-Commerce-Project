import express from "express";
import { getItems, postItem } from "../controller/product.controller.js";

const productrouter = express.Router();

productrouter.get("/add", postItem);
productrouter.get("/get",getItems)

export default productrouter;