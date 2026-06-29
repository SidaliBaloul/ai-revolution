import { z } from "zod";

export const contactSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(1, "*Full Name is required"),

  email: z
    .string()
    .trim()
    .min(1, "*Email is required"),

    subject: z
    .string()
    .trim()
    .min(1, "*Subject is required"),

    message: z
    .string()
    .trim()
    .min(1, "*Message is required"),
});