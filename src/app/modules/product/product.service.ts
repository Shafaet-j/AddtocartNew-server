import { TProduct } from "./product.interface";
import Product from "./product.model";
import User from "./product.model";

const creteProductService = async (productData: TProduct) => {
  return await Product.create(productData);
};

const getSingleProductService = async (id: string) => {
  return await User.findById(id);
};

const getAllProductService = async () => {
  return await User.find();
};

const updateSingleUserService = async (
  userId: string,
  updateUser: TProduct
) => {
  return await User.findOneAndUpdate({ userId }, updateUser, {
    new: true,
  });
};

export const productService = {
  creteProductService,
  getSingleProductService,
  getAllProductService,
  updateSingleUserService,
};
