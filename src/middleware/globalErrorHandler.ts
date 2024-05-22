import { ErrorRequestHandler } from "express";
import { sendErrorResponse } from "../utils/responseHelper";

export const globalErrorHandler: ErrorRequestHandler = (err, _, res, __) => {
  sendErrorResponse(res, {
    status: 400,
    message: err.message,
    error: err,
  });
};
