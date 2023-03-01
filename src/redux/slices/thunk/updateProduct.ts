import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProductApi } from "../../../api/updateProductApi";
import { IProduct } from "../../../intarfaces/IProduct";
import { RootState } from "../../store/store";
import { setProducts } from "../productSlice";


export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: IProduct, { dispatch, getState }) => {
    const products: IProduct[] = (getState() as RootState).products.products;

    const updatedProduct = products.map((prod) =>
      prod.id === product.id ? product : prod
    );

    dispatch(setProducts(updatedProduct));

    await updateProductApi(product);
  }
);
