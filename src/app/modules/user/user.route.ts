import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidationSchema } from "./user.validation";

const route = express.Router();

route.post(
  "/users",
  validateRequest(userValidationSchema),
  userControllers.createUser
);

route.get("/users/:userId", userControllers.getSingleUser);

route.get("/users", userControllers.getAllUser);

route.put("/users/:userId", userControllers.updateSingleUser);

route.delete("/users/:userId", userControllers.deleteSingleUser);

route.put("/users/:userId/orders", userControllers.addOrder);

route.get("/users/:userId/orders", userControllers.getAllOrder);

route.get(
  "/users/:userId/orders/total-price",
  userControllers.totalPriceOfOrder
);

export const userRoute = route;
