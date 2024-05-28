import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";


interface ICartState {
  items: {[key: number]: number},
  productFullInfo: TProduct[]
}

const initialState: ICartState = {
  items: {},
  productFullInfo: []
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
  }
})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer;