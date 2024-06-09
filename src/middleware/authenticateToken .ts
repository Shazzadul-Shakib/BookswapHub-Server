import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

const authenticateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies?.token;

  if (!token) {
    res.status(401).json({ message: "Unauthorized access" });
    return;
  }

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: jwt.VerifyErrors | null, user: string | JwtPayload | undefined) => {
      if (err) {
        res.status(403).json({ message: "Forbidden access" });
        return;
      }
      req.user = user;
      next();
    }
  );
};

export default authenticateToken;
