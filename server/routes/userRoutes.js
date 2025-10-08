import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
    console.log("received user data:",req.body)
  try {
    const { email, userId } = req.body;
    const user = await User.findOneAndUpdate(
      { email },
      { email, userId },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (err) {
    console.error("error saving user",err);
    res.status(500).json({ error: "Failed to save user" });
  }
});

export default router;
