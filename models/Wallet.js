import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    transid:{
        type:String,
        required:true
    },
    imgurl:{
        type:String,
        required :true
    },
    pending:{
        type:Boolean,
        required:true
    }
})

export const Wallet = mongoose.model("Wallet",Schema)