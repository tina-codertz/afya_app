import express from "express"
import  { register, login, getUser } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/auth.js";
const router = express.Router();

console.log("auth routes loaded")

router.post("/register", register)
 
router.post("/login", login);
router.get("/user", authenticateToken, getUser);

export default router
