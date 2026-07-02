import pool from "../config/db.js";

export const getCustomers = async () => {
  const result = await pool.query(`
    SELECT *
    FROM customers
    ORDER BY "createdAt" DESC
  `);

  return result.rows;
};

export const getCustomerById = async (id) => {
  const result = await pool.query(
    `
    SELECT *
    FROM customers
    WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
};

export const createCustomer = async (customer) => {
  const {
    name,
    phone,
    email,
    address,
    city,
    cnic,
    openingBalance,
    creditLimit,
    status,
  } = customer;

  const result = await pool.query(
    `
    INSERT INTO customers (
      name,
      phone,
      email,
      address,
      city,
      cnic,
      "openingBalance",
      "creditLimit",
      status
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *
    `,
    [
      name,
      phone,
      email,
      address,
      city,
      cnic,
      openingBalance,
      creditLimit,
      status,
    ]
  );

  return result.rows[0];
};

export const updateCustomer = async (id, customer) => {
  const {
    name,
    phone,
    email,
    address,
    city,
    cnic,
    openingBalance,
    creditLimit,
    status,
  } = customer;

  const result = await pool.query(
    `
    UPDATE customers
    SET
      name = $1,
      phone = $2,
      email = $3,
      address = $4,
      city = $5,
      cnic = $6,
      "openingBalance" = $7,
      "creditLimit" = $8,
      status = $9,
      "updatedAt" = CURRENT_TIMESTAMP
    WHERE id = $10
    RETURNING *
    `,
    [
      name,
      phone,
      email,
      address,
      city,
      cnic,
      openingBalance,
      creditLimit,
      status,
      id,
    ]
  );

  return result.rows[0];
};

export const deleteCustomer = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM customers
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};