import { TOrder } from "../order/order.interface";
import { TUser } from "./user.interface";
import User from "./user.model";

const creteUserService = async (userData: TUser) => {
  return await User.create(userData);
};

const getSingleUserService = async (userId: number) => {
  return await User.findOne({ userId });
};

const getAllUserService = async () => {
  return await User.find({}).select("username fullName age email address");
};

const updateSingleUserService = async (userId: string, updateUser: TUser) => {
  return await User.findOneAndUpdate({ userId }, updateUser, {
    new: true,
  });
};

const deleteUserService = async (userId: string) => {
  return await User.deleteOne({ userId });
};

const addOrderService = async (userId: string, order: TOrder) => {
  return await User.findOneAndUpdate(
    { userId },
    { $push: { orders: order } },
    { new: true }
  );
};

const orderPriceSumService = async (userId: number) => {
  return await User.aggregate([
    { $match: { userId } },
    {
      $unwind: "$orders",
    },
    {
      $group: {
        _id: null,
        totalPrice: {
          $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
      },
    },
  ]);
};

export const userService = {
  creteUserService,
  getSingleUserService,
  getAllUserService,
  updateSingleUserService,
  deleteUserService,
  addOrderService,
  orderPriceSumService,
};
