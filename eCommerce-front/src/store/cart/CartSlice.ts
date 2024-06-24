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
    },
    cartItemsChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity
    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter(item => item.id !== action.payload);
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
export const {addToCart, cartItemsChangeQuantity, cartItemRemove} = CartSlice.actions
export default CartSlice.reducer;