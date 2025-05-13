import express from "express";

import protectRoute from "../middlewares/auth.middleware.js";
import {
  acceptFriendRequest,
  getFriendRequests,
  getMyFriends,
  getOutgoingFriendReqs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", protectRoute, getRecommendedUsers);
userRouter.get("/friends", protectRoute, getMyFriends);

userRouter.post("/friend-request/:id", protectRoute, sendFriendRequest);
userRouter.put("/friend-request/:id/accept", protectRoute, acceptFriendRequest);

userRouter.get("/friend-requests", protectRoute, getFriendRequests);
userRouter.get(
  "/outgoing-friend-requests",
  protectRoute,
  getOutgoingFriendReqs
);

export default userRouter;
