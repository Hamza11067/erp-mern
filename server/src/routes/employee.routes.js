import express from "express";
import {
  addEmployee,
  listEmployees,
  getEmployee,
  editEmployee,
  removeEmployee,
} from "../controllers/employee.controller.js";

import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";

const router = express.Router();

router.post("/", authenticate, authorize("admin"), addEmployee);
router.get("/", authenticate, listEmployees);
router.get("/:id", authenticate, getEmployee);
router.put("/:id", authenticate, authorize("admin"), editEmployee);
router.delete("/:id", authenticate, authorize("admin"), removeEmployee);

export default router;