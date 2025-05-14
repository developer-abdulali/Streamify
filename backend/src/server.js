import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";

import connectDB from "./lib/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/chat", chatRouter);

app.get("/", (req, res) => {
  res.send("Streamify server is live...");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
  connectDB();
});
