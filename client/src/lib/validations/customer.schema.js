import { z } from "zod";

const customerSchema = z.object({
  name: z.string().min(3, "Customer name is required"),

  phone: z
    .string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits"),

  email: z
    .string()
    .email("Invalid email")
    .or(z.literal("")),

  address: z.string().min(3, "Address is required"),

  city: z.string().min(2, "City is required"),

  cnic: z
    .string()
    .regex(/^\d{5}-\d{7}-\d$/, "Invalid CNIC format"),

  openingBalance: z.coerce.number().min(0),

  creditLimit: z.coerce.number().min(0),

  status: z.boolean(),
});

export default customerSchema;