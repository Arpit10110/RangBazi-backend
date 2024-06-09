import mongoose from "mongoose";
const dbconnect = ()=>{
    mongoose.connect(process.env.Mongoose_Url,({dbName:"Rangbazzi"})).then(()=>{
        console.log("Db connected successfully");
    }).catch((err)=>{
        console.log(err)
    });
}

export default dbconnect