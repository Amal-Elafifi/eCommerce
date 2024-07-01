import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";


type TResponse= TProduct[];

const actGetWishlist = createAsyncThunk("/wishlist/actGetWishlist", async(_, thunkAPI) =>{
  const {rejectWithValue, fulfillWithValue} = thunkAPI;
  try {
    const wishlistItems = await axios.get<{productId: "number"}[]>("/wishlist?userId=1");

    if(!wishlistItems.data.length){
      return fulfillWithValue([]);
    }
    const concatenatedItems = wishlistItems.data.map(item => `id=${item.productId}`).join("&");
    const response = await axios.get<TResponse>(`/products?${concatenatedItems}`);
    return response.data;

  } catch (error) {

    if(isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message)
    } else{
      return rejectWithValue("Unexpected Error");
    }

  } 



})

export default actGetWishlist;