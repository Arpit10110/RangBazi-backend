import express from "express";
import { register,login,getalluser} from "../controllers/Usercontroller.js";
import { sentdeposite,sentwithdrawal,pendingdeposite,pendingwithdrawal,walletvalue,addmoney,minusmoney } from "../controllers/WalltedController.js";
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Welcome to rangbaaz backend !!!")
})
router.post("/register",register)
router.post("/login",login)
router.post("/sentdeposite",sentdeposite)
router.post("/sentwithdrawal",sentwithdrawal)
router.get("/getalluser",getalluser)
router.get("/pendingdeposite",pendingdeposite)
router.get("/pendingwithdrawal",pendingwithdrawal)
router.post("/walletvalue",walletvalue);
router.post("/minusmoney",minusmoney);
router.post("/addmoney",addmoney);
export default router;