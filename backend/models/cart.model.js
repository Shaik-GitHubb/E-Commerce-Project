import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    title : { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });

  export const Cart = mongoose.model("Cart", cartSchema);