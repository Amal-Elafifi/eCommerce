import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@types";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { cartItemsQuantitySelector } from "./selectors/cartItemsSelector";


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
    },
    cartCleanUp: (state) => {
      state.productsFullInfo = [];
    },
    clearCartAfterPlacingOrder: (state) => {
      state.items ={};
      state.productsFullInfo= []
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "fulfilled",
      state.productsFullInfo = action.payload as TProduct[] ,
      state.error = null
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)){
        state.error = action.payload
    }
  })
}
})

export {actGetProductsByItems, cartItemsQuantitySelector};
export const {
  addToCart,
  cartItemsChangeQuantity,
  cartItemRemove,
  clearCartAfterPlacingOrder,
  cartCleanUp
} = CartSlice.actions
  
export default CartSlice.reducer;