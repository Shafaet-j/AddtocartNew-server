import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoute } from "./modules/user/user.route";
import notFoundRoute from "./middleware/notFoundRoute";
import globalErrorHandler from "./middleware/globalErrorHandler";
import { productRoute } from "./modules/product/product.route";
import { cartRoute } from "./modules/cart/cart.route";
const app: Application = express();

//using parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api", userRoute, cartRoute, productRoute);

app.get("/", (_req: Request, res: Response) => {
  res.send(` server is working perfectlyyyyy`);
});

// unknown route handling
app.all("*", notFoundRoute);

//global error handling
app.use(globalErrorHandler);

export default app;
