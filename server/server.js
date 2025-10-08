import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/afya_connect")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/users", userRoutes);


app.get("/test", (req, res) => {
  res.send("Backend connected!");
});

const PORT = process.env.PORT 
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
