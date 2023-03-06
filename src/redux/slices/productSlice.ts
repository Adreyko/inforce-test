import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../intarfaces/IProduct";

interface IState {
  products: IProduct[];
  error: null | string;
  status: "loading" | "resolved" | "rejected" | null;
  sortOrder: "asc" | "desc" | "largest" | "least";
}

const initialState: IState = {
  error: null,
  status: null,
  products: [],
  sortOrder: "asc",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state: IState, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    setSortOrder(
      state,
      action: PayloadAction<"asc" | "desc" | "largest" | "least">
    ) {
      state.sortOrder = action.payload;
    },
  },
});

export const { setProducts, setSortOrder } = productSlice.actions;
export default productSlice.reducer;
