import { z } from "zod";

// Define Zod schema for the user
export const cartValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    price: z.number(),
    imageUrl: z.string(),
    quantity: z.number(),
    total: z.number(),
  }),
});
