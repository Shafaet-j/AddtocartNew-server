import { z } from "zod";

// Define Zod schema for the user
export const productValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    price: z.number(),
    imageUrl: z.string(),
    colors: z.array(z.string()),
    sizes: z.array(z.string()),
  }),
});
