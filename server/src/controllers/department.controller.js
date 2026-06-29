import {
  createDepartment,
  getAllDepartments,
} from "../models/department.model.js";

export const addDepartment = async (req, res) => {
  try {
    const { name } = req.body;

    const department = await createDepartment(name);

    res.status(201).json({
      success: true,
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const listDepartments = async (req, res) => {
  try {
    const departments = await getAllDepartments();

    res.json({
      success: true,
      departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};