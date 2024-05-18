import express from "express";
import cors from "cors";
import { appRouter } from "./router";
import { globalErrorHandler } from "./middleware/globalErrorHandler";

export const app = express();

// ---- parser---- //
app.use(express.json());
app.use(cors());

// ----- Routers ----- //
app.use("/api/v1",appRouter);

app.get("/",(_,res)=>{
    res.status(200).json({message:"Server is running okay..."});
})

app.use(globalErrorHandler);