import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Password Reset API is running 🚀",
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});