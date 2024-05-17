import express from "express";
import cors from "cors";

export const app = express();

// ---- parser---- //
app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    res.status(200).json({message:"Server is running"});
})
