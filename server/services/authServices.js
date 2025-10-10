import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; // not "userSchema"
import "dotenv/config";

export const register = async (fullName, email, password) => {
  const existingUser = await User.findOne({ email }); // ✅ Mongoose built-in method
  if (existingUser) throw new Error("Email already exists");

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({
    fullName,
    email,
    password_hash: passwordHash,
  });

  const token = jwt.sign(
    { user_id: user._id, email: user.email },
    process.env.JWT_SECRET
  );

  return { token, user };
};

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { user_id: user._id, email: user.email },
    process.env.JWT_SECRET
  );

  return { token, user };
};

export const getUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  return user;
};
