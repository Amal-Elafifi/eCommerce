import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosErrorHandler} from "@utils";
import axios from "axios";


type TResponse = TProduct[];

const actGetProductsbyCatPrefix = createAsyncThunk("products/actGetProductsbyCatPrefix",
                                  async(prefix: string, thunkAPI)=> {
  const {rejectWithValue, signal} = thunkAPI;

  try {
    const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`, {signal }
  );
    return response.data;
    
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetProductsbyCatPrefix;