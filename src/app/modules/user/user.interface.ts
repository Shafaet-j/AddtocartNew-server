import { TOrder } from "../order/order.interface";

export interface TUser {
  name: string;
  password: string;
  email: string;
  imageUrl: string;
  orders?: TOrder[];
}
