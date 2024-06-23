import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { TProduct } from "@customTypes/product";

type TResponse = TProduct;

const actGetProductsByItems = createAsyncThunk("Cart/actGetProductsByItems", async(_, thunkAPI) => {
    const {rejectWithValue, fulfillWithValue, getState} = thunkAPI;
    const {Cart} = getState() as RootState; 
    const itemsId= Object.keys(Cart.items);
    
    if(!itemsId.length){
      return fulfillWithValue([]);
    }
    
    try {
      const concatenatedItemsIds = itemsId.map(itemId => `id=${itemId}`).join("&");
      const response =await axios.get<TResponse>(`/products?${concatenatedItemsIds}`);
      return response.data

    } catch (error) {
      if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data.message || error.message)
      }else {
        return rejectWithValue("An unexpected error")
      }
    }

  })

export default actGetProductsByItems;