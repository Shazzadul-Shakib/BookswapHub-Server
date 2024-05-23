import { Response } from "express";

type TsuccessResponse = { status: number; message: string; data: any };
type TerrorResponse = { status: number; message: string; error: any };
type TexistsResponse = { message: string };

export const sendSuccessResponse = (
  res: Response,
  { status, message, data }: TsuccessResponse
) => {
  res.status(status).json({ ok: true, message, data });
};

export const sendErrorResponse = (
  res: Response,
  { status, message, error }: TerrorResponse
) => {
  res.status(status).json({ ok: false, message, error });
};

export const sendExistsResponse=(res:Response,{message}:TexistsResponse)=>{
  res.send({message});
}