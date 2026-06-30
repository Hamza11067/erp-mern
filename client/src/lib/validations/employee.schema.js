import { z } from "zod";

export const employeeSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters"),

  email: z
    .email("Invalid email address")
    .trim(),

  phone: z
    .string()
    .trim()
    .min(11, "Phone number is required"),

  department: z
    .string()
    .trim()
    .min(2, "Department is required"),

  designation: z
    .string()
    .trim()
    .min(2, "Designation is required"),

  salary: z.coerce
    .number()
    .positive("Salary must be greater than 0"),
});

export default employeeSchema;