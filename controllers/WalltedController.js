import { Wallet } from "../models/Wallet.js"

export const sentdeposite = async (req,res)=>{
    const {name,email,amount,transid,userid,imgurl,pending}=req.body;
    await Wallet.create({
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