import express from "express";
import {
  addDepartment,
  listDepartments,
} from "../controllers/department.controller.js";

import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";

const router = express.Router();

// only admin can create department
router.post("/", authenticate, authorize("admin"), addDepartment);

// all logged-in users can view
router.get("/", authenticate, listDepartments);

export default router;