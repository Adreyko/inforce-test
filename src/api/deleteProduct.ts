import axios from "axios";
import { url } from "../constants/url";

export async function deleteProductApi(id: string) {
  return axios.delete(`${url}/${id}`);
}
