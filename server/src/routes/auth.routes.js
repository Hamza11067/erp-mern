import { register, login } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/auth.controller.js";
import { Router } from "express";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticate, getProfile);


export default router;