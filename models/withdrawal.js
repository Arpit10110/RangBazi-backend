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
    account:{
        type:String,
        required:true
    }, 
    ifsc:{
        type:String,
        required :true
    },
    bankname:{
        type:String,
        required :true
    },
    branchname:{
        type:String,
        required :true
    },
    pending:{
        type:Boolean,
        required:true
    }
})

export const Withdrawal = mongoose.model("Withdrawal",Schema)