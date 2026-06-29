import pool from "../config/db.js";

export const getDashboardStats = async (req, res) => {
  try {
    const employees = await pool.query("SELECT COUNT(*) FROM employees");
    const departments = await pool.query("SELECT COUNT(*) FROM departments");
    const products = await pool.query("SELECT COUNT(*) FROM products");

    res.json({
      success: true,
      data: {
        employees: parseInt(employees.rows[0].count),
        departments: parseInt(departments.rows[0].count),
        products: parseInt(products.rows[0].count),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};