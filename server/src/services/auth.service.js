import bcrypt from "bcrypt";
import AppError from "../utils/AppError.js";
import { createUser, findUserByEmail } from "../models/user.model.js";
import jwt from "jsonwebtoken";
// import { findUserByEmail } from "../repositories/auth.repository.js";

export async function registerUser(userData) {
  const { fullName, email, password } = userData;

  // Check if user already exists
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new AppError("Email already exists.", 409);
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


export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);

  console.log("User: ", user)

  if (!user) {
    throw new Error("Invalid email or password");
  }

  console.log("Entered Password:", password)
  console.log("Stored Hash:", user.password)

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  console.log("Password Match: ", isPasswordCorrect)

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    token,
    user: {
      id: user.id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
    },
  };
};