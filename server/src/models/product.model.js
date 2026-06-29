import pool from "../config/db.js";

export async function createProduct(data) {
  const query = `
    INSERT INTO products (name, sku, price, stock)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [
    data.name,
    data.sku,
    data.price,
    data.stock,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getAllProducts() {
  const result = await pool.query(
    "SELECT * FROM products ORDER BY id DESC"
  );

  return result.rows;
}