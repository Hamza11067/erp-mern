import pool from "../config/db.js";

export async function findUserByEmail(email) {

  console.log("Searching email: ", email)

  const query = `
    SELECT *
    FROM users
    WHERE email = $1
  `;

  const result = await pool.query(query, [email]);

  console.log(result.rows)

  return result.rows[0];
}

export async function createUser(user) {
  const query = `
    INSERT INTO users (full_name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, full_name, email, role, created_at;
  `;

  const values = [
    user.fullName,
    user.email,
    user.password,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}