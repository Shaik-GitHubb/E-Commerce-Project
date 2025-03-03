import { Address } from "../models/address.model.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const postAddress = async (req,res) => {
    try{
        const { userid, name, phoneno, pincode, locality, address, city, landmark } = req.body;
       

        const newAddress = await Address({
            userid,
            name,
            phoneno,
            pincode,
            locality,
            address,
            city,
            landmark,
        })

       const data= await newAddress.save();

        res.status(200).json({
            message : "Address Added Successfully",
            data : data,
        });
    }
    catch(error){
        res.status(400).json({
            message : "Server error"
        });
    }
}


export const getAddress = async (req,res) => {
    try{
        // const {userid,name} = req.body;

        const token = req.cookies.token;
        if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");

        const addressdata = await Address.find( {userid:user?._id} );

        res.status(200).json({
            message : "Address get Successfully",
            data : addressdata
        });
    }
    catch(error){
        res.status(400).json({
            message : "Something Error Occured"
        });
    }
}