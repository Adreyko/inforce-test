import axios, { AxiosResponse } from "axios";
import { IProduct } from "../intarfaces/IProduct";
export async function getProducts(
  url: string
): Promise<AxiosResponse<IProduct[]>> {
  return axios.get(url);
}
