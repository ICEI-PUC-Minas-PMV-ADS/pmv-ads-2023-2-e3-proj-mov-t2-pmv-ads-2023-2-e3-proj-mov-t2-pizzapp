import { IProducts } from "./product-services";
import { enviroments } from "../enviroments/index";
import axios from "axios";

export async function getChart() {
  const url = `${enviroments.baseUrl}/chart`;
  const chart = await axios.get(url).then((response) => {
    return response.data;
  });
  return chart;
}

export async function addProductToChart(product: IProducts) {
  const chart = await getChart();
  const productExists = chart.find(
    (item: IProducts) => item.name === product.name
  );
  if (productExists) {
    productExists.quantity += 1;
    const url = `${enviroments.baseUrl}/chart/${productExists.id}`;
    const chart = await axios
      .put(url,  productExists )
      .then((response) => response.data);
    return chart;
  }
  const url = `${enviroments.baseUrl}/chart`;
  product.quantity = 1;
  return await axios.post(url, product).then((response) => response.data);
}

export async function removeOneProductFromChart(product: IProducts) {
  const chart = await getChart();
  const productExists = chart.find(
    (item: IProducts) => item.name === product.name
  );
  if (productExists && productExists.quantity > 1) {
    productExists.quantity -= 1;
    const url = `${enviroments.baseUrl}/chart/${productExists.id}`;
    const chart = await axios
      .put(url,  productExists )
      .then((response) => response.data);
    return chart;
  }
  const url = `${enviroments.baseUrl}/chart/${product.id}`;
  return axios.delete(url).then((response) => response.data);
}

export async function removeProductFromChart(product: IProducts) {
  const url = `${enviroments.baseUrl}/chart/${product.id}`;
  return axios.delete(url).then((response) => response.data);
}

export async function clearChart() {}
