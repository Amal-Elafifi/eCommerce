import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";
import actGetProductsbyCatPrefix from "./act/actGetProductsbyCatPrefix";


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
    reducers: {
      productsCleanup: (state) => {
        state.records = [];
      }
    },
    extraReducers: (builder) =>{
      builder.addCase(actGetProductsbyCatPrefix.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      }),
      builder.addCase(actGetProductsbyCatPrefix.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.records = action.payload;
        state.error = null;
      }),
      builder.addCase(actGetProductsbyCatPrefix.rejected,(state, action) => {
        state.loading = "rejected";
        state.error = action.payload as string;
      })
    }
});


export const {productsCleanup} = productsSlice.actions;
export {actGetProductsbyCatPrefix};
export default productsSlice.reducer;