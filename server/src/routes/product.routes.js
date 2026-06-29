import express from "express";
import {
  addProduct,
  listProducts,
} from "../controllers/product.controller.js";

import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";

const router = express.Router();

router.post("/", authenticate, authorize("admin"), addProduct);
router.get("/", authenticate, listProducts);

export default router;