import pool from "../config/db.js";

export async function createEmployee(data) {
  const query = `
    INSERT INTO employees (
      "fullName",
      email,
      phone,
      "departmentId",
      designation,
      salary
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    data.fullName,
    data.email,
    data.phone,
    data.departmentId,
    data.designation,
    data.salary,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getAllEmployees(search = "") {
  const query = `
    SELECT
      e.id,
      e."fullName",
      e.email,
      e.phone,
      e."departmentId",
      e.designation,
      e.salary,
      d.name AS department
    FROM employees e
    LEFT JOIN departments d
      ON e."departmentId" = d.id
    WHERE
      e."fullName" ILIKE $1
    ORDER BY e.id DESC;
  `;

  const values = [`%${search}%`];

  const result = await pool.query(query, values);
  return result.rows;
}

export async function getEmployeeById(id) {
  const result = await pool.query(
    `
    SELECT
      e.id,
      e."fullName",
      e.email,
      e.phone,
      e."departmentId",
      e.designation,
      e.salary,
      d.name AS department
    FROM employees e
    LEFT JOIN departments d
      ON e."departmentId" = d.id
    WHERE e.id = $1;
    `,
    [id]
  );

  return result.rows[0];
}

export async function updateEmployee(id, data) {
  const query = `
    UPDATE employees
    SET
      "fullName" = $1,
      email = $2,
      phone = $3,
      "departmentId" = $4,
      designation = $5,
      salary = $6,
      "updatedAt" = NOW()
    WHERE id = $7
    RETURNING *;
  `;

  const values = [
    data.fullName,
    data.email,
    data.phone,
    data.departmentId,
    data.designation,
    data.salary,
    id,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function deleteEmployee(id) {
  const result = await pool.query(
    "DELETE FROM employees WHERE id = $1 RETURNING *;",
    [id]
  );

  return result.rows[0];
}