import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../models/employee.model.js";

export const addEmployee = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      departmentId,
      designation,
      salary,
    } = req.body;

    const employee = await createEmployee({
      fullName,
      email,
      phone,
      departmentId,
      designation,
      salary,
    });

    res.status(201).json({
      success: true,
      employee,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const listEmployees = async (req, res) => {
  try {
    const { search = "" } = req.query;

    const employees = await getAllEmployees(search);

    res.json({
      success: true,
      employees,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await getEmployeeById(req.params.id);

    res.json({
      success: true,
      employee,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const editEmployee = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      departmentId,
      designation,
      salary,
    } = req.body;

    const employee = await updateEmployee(req.params.id, {
      fullName,
      email,
      phone,
      departmentId,
      designation,
      salary,
    });

    res.json({
      success: true,
      employee,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeEmployee = async (req, res) => {
  try {
    const employee = await deleteEmployee(req.params.id);

    res.json({
      success: true,
      employee,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};