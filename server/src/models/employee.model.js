import pool from "../config/db.js";

export async function createEmployee(data) {
  const query = `
    INSERT INTO employees (full_name, email, department_id, salary)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [
    data.full_name,
    data.email,
    data.department_id,
    data.salary,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getAllEmployees() {
  const query = `
    SELECT 
      e.id,
      e.full_name,
      e.email,
      e.salary,
      d.name AS department
    FROM employees e
    LEFT JOIN departments d ON e.department_id = d.id
    ORDER BY e.id DESC;
  `;

  const result = await pool.query(query);
  return result.rows;
}

export async function getEmployeeById(id) {
  const result = await pool.query(
    "SELECT * FROM employees WHERE id = $1",
    [id]
  );
  return result.rows[0];
}

export async function updateEmployee(id, data) {
  const query = `
    UPDATE employees
    SET full_name=$1, email=$2, department=$3, salary=$4
    WHERE id=$5
    RETURNING *;
  `;

  const values = [
    data.full_name,
    data.email,
    data.department,
    data.salary,
    id,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function deleteEmployee(id) {
  const result = await pool.query(
    "DELETE FROM employees WHERE id=$1 RETURNING *",
    [id]
  );

  return result.rows[0];
}