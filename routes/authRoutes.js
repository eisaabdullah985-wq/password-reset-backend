import express from "express";
import { signup, login , forgotPassword, resetPassword } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

router.get("/welcome", protect, (req, res) => {
  res.status(200).json({
    message: `Welcome ${req.user.name}`,
    user: req.user,
  });
});

export default router;