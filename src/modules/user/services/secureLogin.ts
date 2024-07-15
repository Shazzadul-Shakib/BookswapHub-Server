import jwt from "jsonwebtoken";

interface Payload {
  userEmail: string;
}

export const secureLogin = async (payload: Payload): Promise<string> => {
  const { userEmail } = payload;

  // Ensure the secret is defined
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }

  // Create the payload
  const tokenPayload = { userEmail };

  // Sign the JWT
  const token = jwt.sign(tokenPayload, secret, { expiresIn: "30d" });
  return token;
};
