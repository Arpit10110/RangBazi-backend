import express from "express";
import { config } from "dotenv";
import router from "./routes/route.js";
import cors from"cors"
export  const app = express();
config({
    path:"./db/config.env"
})
app.use(cors({
    origin: [process.env.Fronted_URL],
    methods: ['GET', 'POST','PUT', 'DELETE'],
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router)
