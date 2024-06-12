import jwt from "jsonwebtoken";

export const secureLogin = async (payload: any) => {
  const { userEmail } = payload;

  // Ensure the secret is defined
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }

  // Create the payload
  const tokenPayload = { userEmail };

  // Sign the JWT
  const token = jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });

  return token;
};
