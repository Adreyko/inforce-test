import axios from "axios";
import { IProduct } from "../intarfaces/IProduct";
import { url } from "../constants/url";

export async function updateProductApi(product: IProduct) {
  return axios.put(`${url}/${product.id}`, product);
}
