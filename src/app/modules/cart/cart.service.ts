import { TCart } from "./cart.interface";
import Cart from "./cart.model";

const creteCartService = async (productData: TCart) => {
  return await Cart.create(productData);
};
const getCartByTitle = async (title: string) => {
  return await Cart.findOne({ title });
};
const getAllCarts = async () => {
  return await Cart.find();
};
const getCartByID = async (id: string) => {
  return await Cart.findById(id);
};
const deleteCart = async (id: string) => {
  return await Cart.findByIdAndDelete(id);
};
const updateCartWithQuantityAndTotal = async (
  payload: TCart,
  quantity: number
) => {
  return await Cart.findOneAndUpdate(
    { title: payload?.title },
    {
      quantity: quantity + payload.quantity,
      total: payload.price * (quantity + payload.quantity),
    },
    { new: true }
  );
};

export const cartService = {
  creteCartService,
  getCartByTitle,
  updateCartWithQuantityAndTotal,
  deleteCart,
  getCartByID,
  getAllCarts,
};
