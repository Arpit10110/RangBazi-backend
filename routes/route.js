import express from "express";
import { register,login} from "../controllers/Usercontroller.js";
import { sentdeposite } from "../controllers/WalltedController.js";
const router = express.Router()


router.post("/register",register)
router.post("/login",login)
router.post("/sentdeposite",sentdeposite)

export default router;