import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProductApi } from "../../../api/deleteProduct";
import { IProduct } from "../../../intarfaces/IProduct";
import { RootState } from "../../store/store";
import { setProducts } from "../productSlice";


export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ( id : string, { dispatch, getState }) => {
    const products: IProduct[] = (getState() as RootState).products.products;
   
    const filteredArr = products.filter(prod => prod.id !== id)
    dispatch(setProducts(filteredArr))

    await deleteProductApi(id)
  }
);
