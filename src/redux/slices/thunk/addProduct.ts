import { createAsyncThunk } from "@reduxjs/toolkit";
import { postProducts } from "../../../api/postProduct";
import { IProduct } from "../../../intarfaces/IProduct";
import { RootState } from "../../store/store";
import { setProducts } from "../productSlice";


export const addProduct = createAsyncThunk(
  "products/addProduct",
  async ( product : IProduct, { dispatch, getState }) => {
    const products: IProduct[] = (getState() as RootState).products.products;
    dispatch(setProducts([product, ...products]));
    await postProducts(product);
  }
);
