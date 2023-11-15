import { enviroments } from "../enviroments/index";
import axios from "axios";
import { IProducts } from "./product-services";

export type IOrder = {
  products: IProducts[];
  name: string;
  table: string;
  total: string;
  status: string;
  id?: string;
};

export async function getOrders(): Promise<IOrder[]> {
  const url = `${enviroments.baseUrl}/orders`;
  const orders = await axios.get(url).then((response) => {
    return response.data;
  });
  return orders;
}

export async function getOrderByName(name: string): Promise<IOrder> {
  const url = `${enviroments.baseUrl}/orders`;
  const order = await axios.get(url).then((response) => response.data);
  return order.find((item: any) => item.name === name);
}

export async function updateOrder(order: IOrder) {
  const url = `${enviroments.baseUrl}/orders/${order.id}`;
  const res = await axios.patch(url, order).then((response) => response.data);
  return res;
}

export async function createOrder(chart: any) {
  const url = `${enviroments.baseUrl}/orders`;
  const order = { ...chart, status: "pending" };
  const response = await axios
    .post(url, order)
    .then((response) => response.data);
  return response;
}
