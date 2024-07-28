import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import {axiosErrorHandler} from "@utils";


type TResponse= TProduct[];

const actGetWishlist = createAsyncThunk("/wishlist/actGetWishlist", async(_, thunkAPI) =>{
  const {rejectWithValue, fulfillWithValue, signal} = thunkAPI;
  try {
    const wishlistItems = await axios.get<{productId: "number"}[]>("/wishlist?userId=1", {signal });

    if(!wishlistItems.data.length){
      return fulfillWithValue([]);
    }
    const concatenatedItems = wishlistItems.data.map(item => `id=${item.productId}`).join("&");
    const response = await axios.get<TResponse>(`/products?${concatenatedItems}`
  );
    return response.data;

  } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));

  } 



})

export default actGetWishlist;