import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("coonnection issue ", err);
  });
const app = express();

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

app.use("/api/user", userRoutes);
