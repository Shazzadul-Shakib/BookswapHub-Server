import {
  sendExistsResponse,
  sendSuccessResponse,
} from "../../utils/responseHelper";
import { tryCatch } from "../../utils/tryCatch";
import { userServices } from "./services";

const addUser = tryCatch(async (req, res) => {
  const result = await userServices.addUser(req.body);

  if (!result.exists) {
    sendSuccessResponse(res, {
      status: 200,
      message: "User added successfully",
      data: result.newUser,
    });
  } else {
    sendExistsResponse(res, {
      message: "User already in database. so chill!",
    });
  }
});

export const userController = { addUser };
