import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../../api/getProducts";
import { setProducts } from "../productSlice";

export const fetchProducts = createAsyncThunk("products/fetchProducts",
async (url: string, { dispatch }) => {
    const { data } = await getProducts(url);
    dispatch(setProducts(data));
  }
);
