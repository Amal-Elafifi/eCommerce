import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import {axiosErrorHandler} from "@utils";
import { RootState } from "@store/index";

type TDataType= "productsFullInfo" | "productIds";
type TResponse= TProduct[];

const actGetWishlist = createAsyncThunk("/wishlist/actGetWishlist", async(dataType: TDataType, thunkAPI) =>{
  const {rejectWithValue, signal, getState} = thunkAPI;
  const{auth} = getState() as RootState;
  try {
    const wishlistItems = await axios.get<{productId: number}[]>(`/wishlist?userId=${auth.user?.id}`, {signal });

    if(!wishlistItems.data.length){
      return {data: [], dataType: "productsFullInfo"};
    }
    if(dataType === "productIds"){

      const concatenatedItems = wishlistItems.data.map(item => `id=${item.productId}`).join("&");
      return{data: concatenatedItems, dataType: "productIds"}

    }else{

      const concatenatedItems = wishlistItems.data.map(item => `id=${item.productId}`).join("&");
      const response = await axios.get<TResponse>(`/products?${concatenatedItems}`)

      return {data: response.data, dataType: "productsFullInfo"};
    }
  
  } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));

  } 

})

export default actGetWishlist;