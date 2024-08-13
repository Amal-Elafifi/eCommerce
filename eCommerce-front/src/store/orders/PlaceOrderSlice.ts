import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TOrderItems } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";

interface IOrderSlice {
  orderList: TOrderItems[],
  loading: TLoading,
  error: null | string
}

const initialState: IOrderSlice ={
  orderList: [],
  loading: "idle",
  error: null
}


const PlaceOrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers:{
    resetOrderStatus: (state) => {
      state.loading = "idle";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actPlaceOrder.pending, state => {
      state.loading = "pending";
      state.error = null;
    }),
    builder.addCase(actPlaceOrder.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.orderList = action.payload;
    }),
    builder.addCase(actPlaceOrder.rejected, (state, action) =>{
      state.loading = "rejected";
      if(isString(action.payload)){
        state.error = action.payload;
      }
    })
  
  }
})

export const {resetOrderStatus} = PlaceOrderSlice.actions;
export {actPlaceOrder};
export default PlaceOrderSlice.reducer;