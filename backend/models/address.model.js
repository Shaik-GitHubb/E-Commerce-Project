import mongoose from "mongoose"
import { User } from "./user.model.js";

const addressSchema=new mongoose.Schema({
    userid : { type : mongoose.Schema.Types.ObjectId , required : true , ref : User},
    name : { type : String, required : true },
    phoneno : { type : String , required : true },
    pincode : { type : String , required : true },
    locality : { type : String , required : true },
    address : { type : String , required : true },
    city : { type : String , required : true },
    landmark : { type : String },
})

export const Address = mongoose.model("Address",addressSchema);