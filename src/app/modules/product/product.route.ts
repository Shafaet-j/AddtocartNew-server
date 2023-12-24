import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { productValidationSchema } from "./product.validation";
import { productControllers } from "./product.controller";

const route = express.Router();

route.post(
  "/product",
  validateRequest(productValidationSchema),
  productControllers.createProduct
);

route.get("/product/:id", productControllers.getSingleProduct);

route.get("/products", productControllers.getAllProducts);

export const productRoute = route;
