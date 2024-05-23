import { sendSuccessResponse } from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { userServices } from "./services";

const addUser=tryCatch(async(req,res)=>{
    const newUser=await userServices.addUser(req.body);

     sendSuccessResponse(res, {
       status: 200,
       message: "User added Successfully",
       data: newUser,
     });
})

export const userController={addUser};