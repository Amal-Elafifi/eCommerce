import {createSlice} from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { TLoading, TProduct, isString } from "@types";
import { logOut  } from "@store/auth/authSlice";


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
  reducers: {
    wishlistProductsFullInfoCleanUp: (state) => {
      state.productsFullInfo = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state)=>{
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action)=>{
      if(action.payload.type === "add"){
         state.itemsId.push(action.payload.id);
      }else if(action.payload.type === "remove"){

        state.itemsId = state.itemsId.filter(itemId => itemId !== action.payload.id)
        state.productsFullInfo = state.productsFullInfo.filter(item => item.id !== action.payload.id)

      }
    }) ;
    builder.addCase(actLikeToggle.rejected, (state, action)=>{
      if(isString(action.payload)){
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
      if(action.payload.dataType === "productsFullInfo"){
        state.productsFullInfo = action.payload.data as TProduct[];

      }else if(action.payload.dataType === "productIds"){
        state.itemsId= action.payload.data as number[];
      }
      state.error= null;
    });
    builder.addCase(actGetWishlist.rejected, (state, action)=>{
      state.loading= "rejected";
      if(isString(action.payload))
        state.error= action.payload;
    });
    // reset wishlist when logout
    builder.addCase(logOut, state => {
      state.itemsId = [];
      state.productsFullInfo = [];
    })
  }
})





export {actLikeToggle, actGetWishlist};
export const {wishlistProductsFullInfoCleanUp} = WishlistSlice.actions;
export default WishlistSlice.reducer;

