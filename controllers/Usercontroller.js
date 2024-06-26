import { response } from "express";
import {User} from "../models/User.js"

export const register = async(req,res)=>{
    const {name,email,password,phone}=req.body;
    let userfound= await User.findOne({email})
    if(userfound){
        res.json({
            success: false,
            message:"User already exists"
        })
    }
    else{
        userfound = await User.create({
          name: name,
          email: email,
          password: password,
          phone: phone,
          wallet:500
        })
        res.json({
            success: true,
            message:"Your registered successfully",
            id: userfound._id,
            wallet:500
        })
    }
}
export const login = async(req,res)=>{
    const {email,password}=req.body;
    let userfound= await User.findOne({email})
    if(!userfound){
        res.json({
            success: false,
            message:"User not found"
        })
    }
    else{
            if(userfound.password==password)
            {
                res.json({
                    success: true,
                    message:`welcome ${userfound.name}`,
                    userdata:userfound
                })
            }
            else{
                res.json({
                    success: false,
                    message:"Wrong password"
                })
            }
    }
}


export const getalluser=async(req,res)=>{
        const alldata= await User.find({});
        res.json({
            success: true,
            data: alldata
        })
}