// import { Title } from "react-bootstrap/lib/Modal.js";
import { Cart } from "../models/cart.model.js";

export const cartItems = async (req, res) => {
    try {
        const {title,price,image,quantity,userId}=req.body;

        const existingItem = await Cart.findOne({ userId, title });

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
        const { userId } = req.params;  // ✅ Use req.params instead of req.body
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const cartItems = await Cart.find({ userId });
        res.status(200).json({
            message: "Cart items fetched successfully",
            data: cartItems,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


export const deleteCartItem = async (req, res) => {
    try {
        // console.log("REaching")
        const { title } = req.params;
        // console.log(userId,productId)
        const deletedItem = await Cart.findOneAndDelete({ title:title});
        // console.log(deletedItem)

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({ message: "Item deleted successfully", deletedItem });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
