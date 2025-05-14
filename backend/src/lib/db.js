// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connecting error", error);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB connected:", db.connection.host);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
