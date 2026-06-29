import { registerUser } from "../services/auth.service.js";

export async function register(req, res) {
  try {
    const result = await registerUser(req.body);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}