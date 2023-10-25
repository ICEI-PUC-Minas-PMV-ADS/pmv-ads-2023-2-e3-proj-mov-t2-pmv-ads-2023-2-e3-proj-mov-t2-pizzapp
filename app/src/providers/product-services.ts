import axios from "axios";
import { enviroments } from "../enviroments/index";

export interface IProducts {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  groupId: string
}

export async function getProducts(): Promise<IProducts[]> {
  const url = `${enviroments.baseUrl}/products/`;
  const products = await axios.get(url).then((response) => {
    return response.data;
  });
  return products;
}

export async function getProductsByGroup (groupId: string): Promise<IProducts[]> {
  const url = `${enviroments.baseUrl}/groups/${groupId}/products`;
  const products = await axios.get(url).then((response) => {
    return response.data;
  });
  return products;
}

export async function createProductInGroup(
  groupId: string,
  product: any
): Promise<IProducts | any> {
  try {
    const url = `${enviroments.baseUrl}/groups/${groupId}/products`;
    const newProduct = await axios.post(url, product).then((response) => {
      return response.data;
    });
    return newProduct;
  } catch (error) {
    console.log(error);
  }
}

export async function editProductInGroup(
  product: any
): Promise<IProducts | any> {
  try {
    const url = `${enviroments.baseUrl}/products/${product.id}`;
    const newProduct = await axios.put(url, product).then((response) => {
      return response.data;
    });
    return newProduct;
  } catch (error) {
    console.log(error);
  }
}