import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    wallet:{
        type:String,
        required:true
    },
})

export const User = mongoose.model("User",Schema)