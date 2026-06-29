import pool from "../config/db.js";

export async function createDepartment(name) {
  const result = await pool.query(
    "INSERT INTO departments (name) VALUES ($1) RETURNING *",
    [name]
  );

  return result.rows[0];
}

export async function getAllDepartments() {
  const result = await pool.query(
    "SELECT * FROM departments ORDER BY id DESC"
  );

  return result.rows;
}