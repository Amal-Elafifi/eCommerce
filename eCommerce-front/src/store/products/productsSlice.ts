import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@types";
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
      productsRecordsCleanup: (state) => {
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
        if(isString(action.payload)){
          state.error = action.payload;
        }
      })
    }
});


export const {productsRecordsCleanup} = productsSlice.actions;
export {actGetProductsbyCatPrefix};
export default productsSlice.reducer;