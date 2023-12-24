import { Schema, model } from "mongoose";
import { TCart } from "./cart.interface";

const cartSchema = new Schema<TCart>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
});

const Cart = model<TCart>("Cart", cartSchema);

export default Cart;
