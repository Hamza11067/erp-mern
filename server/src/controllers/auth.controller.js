import { registerUser } from "../services/auth.service.js";
import { loginUser } from "../services/auth.service.js";

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


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};