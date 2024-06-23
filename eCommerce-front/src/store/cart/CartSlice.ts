import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { TLoading } from "@customTypes/shared";


interface ICartState {
  items: {[key: string]: number},
  productsFullInfo: TProduct[],
  loading: TLoading,
  error: null | string
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null
}


const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      if(state.items[id]){
          state.items[id]++;
      }else{
        state.items[id] = 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "fulfilled",
      state.productsFullInfo = action.payload ,
      state.error = null
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload
    }
  })
}
})

export {actGetProductsByItems};
export const {addToCart} = CartSlice.actions
export default CartSlice.reducer;