import { enviroments } from "../enviroments/index";
import axios from "axios";
import { getChart } from "./chart-services";

export async function getOrders() {
  const url = `${enviroments.baseUrl}/orders`;
  const orders = await axios.get(url).then((response) => {
    return response.data;
  });
  return orders;
}

export async function getOrderByName(name: string) {
  const url = `${enviroments.baseUrl}/orders`;
  const order = await axios.get(url).then((response) => response.data);
  return order.find((item: any) => item.name === name);
}

export async function createOrder(chart: any) {
    const url = `${enviroments.baseUrl}/orders`;
    const order = {...chart, status: 'pending'}
    const response = await axios.post(url, order).then((response) => response.data);
    return response;  
}