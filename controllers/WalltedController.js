import { deposite } from "../models/deposite.js"
import { User } from "../models/User.js";
import {Withdrawal} from "../models/withdrawal.js"

export const sentdeposite = async (req,res)=>{
    const {name,email,amount,transid,userid,imgurl,pending}=req.body;
    await deposite.create({
        userid:userid,
        name:name,
        amount:amount,
        transid:transid,
        email:email,
        imgurl:imgurl,
        pending:pending,
    })
    res.json({
        success: true,
        message:"deposit pending"
    })
}
export const sentwithdrawal = async (req,res)=>{
    const {name,email,amount,account,ifsc,bankname,branchname,userid,pending}=req.body;
    await Withdrawal.create({
        userid:userid,
        name:name,
        amount:amount, 
        account:account,
        email:email,
        ifsc:ifsc,
        bankname:bankname,
        branchname:branchname,
        pending:pending,
    }) 
    res.json({
        success: true,
        message:"Withdrawal pending"
    })
}

export const pendingdeposite = async (req,res)=>{
    const alldata =await deposite.find({});
    res.json({
        success: true,
        data:alldata
    })
}

export const pendingwithdrawal = async (req,res)=>{
    const alldata =await Withdrawal.find({});
    res.json({
        success: true,
        data:alldata
    })
}
export const walletvalue =async(req,res)=>{
        let {id}=req.body;
        const data=await User.findById(id);
        res.json({
            success: true,
            wallet: data.wallet
        }) 
}

export const minusmoney = async (req,res)=>{
    const {id,value}= req.body;
    const data = await User.findById(id);
    if(data.wallet>=value)
    {
        let minusvalue = data.wallet - value;
        data.wallet=(Math.round(minusvalue * 100) / 100).toFixed(2)
        await data.save();
        res.json({
            success: true,
            alldata:data
        })
    }else{
        res.json({
            success: false,
            message:"Low balance"
        })
    }
   
}
export const addmoney = async (req,res)=>{
    const {id,value}= req.body;
    const data = await User.findById(id);
    let amount = data.wallet + value;
    let winprize=(Math.round(amount * 100) / 100).toFixed(2)
    console.log(value)
    data.wallet = winprize;
    await data.save();
    res.json({
        success: true,
        alldata:data
    })
}