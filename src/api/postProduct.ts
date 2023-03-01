import axios from "axios";
import { IProduct } from "../intarfaces/IProduct";
import { url } from "../constants/url";

export async function postProducts(product: IProduct) {
  return axios.post(`${url}`, product);
}
