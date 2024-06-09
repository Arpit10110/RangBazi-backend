import { app } from "./app.js";
import dbconnect from "./db/dbconnect.js";
dbconnect()
app.listen(process.env.Port,()=>{
    console.log(`Server listening on  port ${process.env.Port} `);
})