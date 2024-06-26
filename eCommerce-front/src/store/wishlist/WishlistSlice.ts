import {createSlice, isAction} from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";


interface IWishlistState {
  itemsId: number[],
  error:  null |string
}

const initialState: IWishlistState = {
  itemsId: [],
  error: null
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
  }
})





export default WishlistSlice.reducer;
export {actLikeToggle};