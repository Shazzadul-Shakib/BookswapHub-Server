const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");

// ** Middleware to read eng files ** //
const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port= process.env.PORT || 5000




// ** server connection check ** //
app.get("/",(_,res)=>{
    res.send("Bookswaphub server is running...");
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})