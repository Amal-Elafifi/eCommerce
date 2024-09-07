import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import {axiosErrorHandler} from "@utils";
import { TProduct } from "@types";

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
      const response =await axios.get<TResponse>(`/products?${concatenatedItemsIds}`, {
        signal: thunkAPI.signal,
      });
      return response.data

    } catch (error) {
        rejectWithValue(axiosErrorHandler(error));
      }
    

  })

export default actGetProductsByItems;