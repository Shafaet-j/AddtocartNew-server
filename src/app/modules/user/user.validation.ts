import { z } from "zod";

// Define Zod schema for the user
export const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    password: z.string().max(20),
    email: z.string().email(),
    imageUrl: z.string(),
  }),
});
