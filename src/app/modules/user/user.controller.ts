import { Request, Response } from "express";
import { userService } from "./user.service";
import { CatchAsyncError } from "../../utils/CatchAsyncError";

const createUser = CatchAsyncError(async (req: Request, res: Response) => {
  const user = req.body;

  const result = await userService.creteUserService(user);

  //remove password from result
  const changeResult = { ...result.toObject(), password: undefined };

  res.status(201).json({
    success: true,
    message: "User created successfully!",
    data: changeResult,
  });
});

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userService.getSingleUserService(Number(userId));

    if (!result) {
      res.status(400).json({
        success: false,
        message: "User not found!",
        error: {
          code: 404,
          description: "User not found please provide an valid user id",
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found please provide an valid user id",
      },
    });
  }
};

const getAllUser = async (_req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserService();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found",
      },
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = req.body;
    const result = await userService.updateSingleUserService(userId, user);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found please provide an valid user id",
      },
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await userService.deleteUserService(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found please provide an valid user id",
      },
    });
  }
};

const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = req.body;
    const result = await userService.addOrderService(userId, order);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order created unsuccessful!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found please provide an valid user id",
      },
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userService.getSingleUserService(Number(userId));

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Order found unsuccessful!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: { orders: result?.orders },
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found please provide an valid user id",
      },
    });
  }
};

const totalPriceOfOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userService.orderPriceSumService(Number(userId));

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: result,
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found please provide an valid user id",
      },
    });
  }
};

export const userControllers = {
  createUser,
  getSingleUser,
  getAllUser,
  updateSingleUser,
  deleteSingleUser,
  addOrder,
  getAllOrder,
  totalPriceOfOrder,
};
