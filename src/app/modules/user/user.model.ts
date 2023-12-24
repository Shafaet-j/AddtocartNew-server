import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcryptjs";
import config from "../../config";
import { TOrder } from "../order/order.interface";

const orderSchema = new Schema<TOrder>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  orders: [orderSchema],
});

//using document pre middleware
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt));
});

const User = model<TUser>("User", userSchema);

export default User;
