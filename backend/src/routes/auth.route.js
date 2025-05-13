import express from "express";
import {
  checkLoggedInOrNOT,
  login,
  logout,
  onboarding,
  signup,
} from "../controllers/auth.controller.js";
import protectRoute from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

authRouter.post("/onboarding", protectRoute, onboarding);

// check if user is logged in
authRouter.get("/me", protectRoute, checkLoggedInOrNOT);

export default authRouter;
