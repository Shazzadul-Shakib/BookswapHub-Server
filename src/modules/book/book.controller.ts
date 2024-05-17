import { sendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { bookServices } from "./services";

const addBook=tryCatch(async(req,res)=>{
    const newBook=await bookServices.addBook(req.body);
    sendSuccessResponse(res,{
        status:200,
        message:"Book added Successfully",
        data:newBook
    })
})

export const bookController={addBook};