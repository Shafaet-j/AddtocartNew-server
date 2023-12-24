import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { productService } from "./product.service";

const createProduct = CatchAsyncError(async (req: Request, res: Response) => {
  const product = req.body;

  const result = await productService.creteProductService(product);

  res.status(201).json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
});

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await productService.getSingleProductService(id);

    if (!result) {
      res.status(400).json({
        success: false,
        message: "Product not found!",
        error: {
          code: 404,
          description: "Product not found please provide an valid Product id",
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "Product not found!",
      error: {
        code: 404,
        description: "Product not found please provide an valid Product id",
      },
    });
  }
};

const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductService();

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "Product not found!",
      error: {
        code: 404,
        description: "Product not found",
      },
    });
  }
};

export const productControllers = {
  createProduct,
  getSingleProduct,
  getAllProducts,
};
