import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";
import actGetProductsbtCatPrefix from "./act/actGetProductsbyCatPrefix";


interface IProduct {
  records: TProduct[],
  loading: TLoading,
  error: string | null,
}

const initialState: IProduct = {
  records: [],
  loading: "idle",
  error: null  
};

const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
      builder.addCase(actGetProductsbtCatPrefix.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      }),
      builder.addCase(actGetProductsbtCatPrefix.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.records = action.payload;
        state.error = null;
      }),
      builder.addCase(actGetProductsbtCatPrefix.rejected,(state, action) => {
        state.loading = "rejected";
        state.error = action.payload as string;
      })
    }
});

export {actGetProductsbtCatPrefix};
export default productsSlice.reducer;