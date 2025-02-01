import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
    try {
        const {username,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: username,
            email: email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email});
        if(!email) return res.status(400).json("Enter Email");
        if(!password) return res.status(400).json("Enter Password");
        if(!user) return res.status(400).json({msg:"User does not exist"});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg:"Incorrect password"});
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"1d"});
        res.status(200).json({message:"Login success",token:token});
    }
    catch(err){
        console.log(err)
    }
}
