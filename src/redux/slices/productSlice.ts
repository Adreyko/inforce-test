import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../intarfaces/IProduct";

interface IState {
  products: IProduct[];
  error: null | string;
  status: "loading" | "resolved" | "rejected" | null;
}

const initialState: IState = {
  error: null,
  status: null,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state: IState, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    setSortByAmount(state: IState, action: PayloadAction<IProduct[]>){
      state.products = action.payload
    }
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
