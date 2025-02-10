import { Cart } from "../models/cart.model";

export const cartItems = async (req, res) => {
    try {
        const {title,price,image,quantity,userId}=req.body;

        const existingItem = await Cart.findOne({ title: title });
        if (existingItem) {
            existingItem.quantity = quantity;
            await existingItem.save();
            res.status(200).json({
                message: "Item quantity updated successfully",
                data: existingItem,
            });
        }
        else{
            const newItem = new Cart({ title, price, image, quantity, userId });
            const savedItem = await newItem.save();
            res.status(200).json({
                message: "Item added successfully",
                data: savedItem,
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

export const getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find({ });
        res.status(200).json({
            message: "Cart items fetched successfully",
            data: cartItems,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}