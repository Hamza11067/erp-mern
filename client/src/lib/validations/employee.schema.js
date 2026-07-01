import { z } from "zod";

export const employeeSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  phone: z
    .string()
    .trim()
    .min(11, "Phone number must be at least 11 digits"),

  departmentId: z.coerce
    .number()
    .positive("Department is required"),

  designation: z
    .string()
    .trim()
    .min(2, "Designation is required"),

  salary: z.coerce
    .number()
    .positive("Salary must be greater than 0"),
});

export default employeeSchema;