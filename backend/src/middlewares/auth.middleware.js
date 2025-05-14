import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode)
      return res.status(401).json({ message: "Unauthorized - Invalid token" });

    const user = await User.findById(decode.userId).select("-password");

    if (!user)
      return res.status(401).json({ message: "Unauthorized - User not found" });

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    return res.status(500).json({ message: "Protect Route middleware Error" });
  }
};

export default protectRoute;
