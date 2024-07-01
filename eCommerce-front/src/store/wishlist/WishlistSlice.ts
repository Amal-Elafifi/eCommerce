import {createSlice} from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";


interface IWishlistState {
  itemsId: number[],
  productsFullInfo: TProduct[],
  error:  null |string,
  loading: TLoading
}

const initialState: IWishlistState = {
  itemsId: [],
  productsFullInfo: [],
  error: null,
  loading: "idle"
}


const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state)=>{
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action)=>{
      if(action.payload.type === "add"){
         state.itemsId.push(action.payload.id);
      }else{
        state.itemsId = state.itemsId.filter(itemId => itemId !== action.payload.id)
      }
    }) ;
    builder.addCase(actLikeToggle.rejected, (state, action)=>{
      if(action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    }) ;
    // actGetWishlist items
    builder.addCase(actGetWishlist.pending, (state)=>{
      state.loading= "pending"
      state.error= null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action)=>{
      state.loading= "fulfilled";
      state.productsFullInfo = action.payload;
      state.error= null;
    });
    builder.addCase(actGetWishlist.rejected, (state, action)=>{
      state.loading= "rejected";
      if(action.payload && typeof action.payload === "string")
        state.error= action.payload;
    });
  }
})





export {actLikeToggle, actGetWishlist};
export default WishlistSlice.reducer;