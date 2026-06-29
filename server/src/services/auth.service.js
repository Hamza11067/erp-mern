import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "../models/user.model.js";

export async function registerUser(userData) {
  const { fullName, email, password } = userData;

  // Check if user already exists
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists.");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = await createUser({
    fullName,
    email,
    password: hashedPassword,
  });

  return {
    success: true,
    message: "User registered successfully.",
    data: newUser,
  };
}