import { products } from "../data.js";
import { Product } from "../models/product.model.js";

export const postItem = async (req, res) => {
    try {
        await Product.deleteMany({});
        const allProduct = await Product.insertMany(products);

        res.status(200).json({
            message: "Product added successfully",
            data: allProduct,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getItems = async (req, res) => {
    try {
        const allProduct = await Product.find({});
        res.status(200).json({
            message: "Product fetched successfully",
            data: allProduct,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};