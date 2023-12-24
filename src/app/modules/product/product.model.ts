import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  colors: { type: [String], required: true },
  sizes: { type: [String], required: true },
});

const Product = model<TProduct>("Product", productSchema);

export default Product;
