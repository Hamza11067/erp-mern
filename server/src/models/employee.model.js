import pool from "../config/db.js";

export async function createEmployee(data) {
  const query = `
    INSERT INTO employees (
      full_name,
      email,
      phone,
      department_id,
      designation,
      salary
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    data.full_name,
    data.email,
    data.phone,
    data.department_id,
    data.designation,
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
  e.phone,
  e.department_id,
  e.designation,
  e.salary,
  d.name AS department
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.id
ORDER BY e.id DESC;
  `;

  const result = await pool.query(query);
  return result.rows;
}

export async function getEmployeeById(id) {
  const result = await pool.query("SELECT * FROM employees WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
}

export async function updateEmployee(id, data) {
  const query = `
    UPDATE employees
    SET
      full_name = $1,
      email = $2,
      phone = $3,
      department_id = $4,
      designation = $5,
      salary = $6,
      updated_at = NOW()
    WHERE id = $7
    RETURNING *;
  `;

  const values = [
    data.full_name,
    data.email,
    data.phone,
    data.department_id,
    data.designation,
    data.salary,
    id,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function deleteEmployee(id) {
  const result = await pool.query(
    "DELETE FROM employees WHERE id=$1 RETURNING *",
    [id],
  );

  return result.rows[0];
}
