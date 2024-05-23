import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TResponse = TProduct[];

const actGetProductsbyCatPrefix = createAsyncThunk<TResponse>("products/actGetProductsbyCatPrefix", async(prefix: string, thunkAPI)=> {
  const {rejectWithValue} = thunkAPI;

  try {
    const response = await axios.get(`http://localhost:5005/products?cat_prefix=${prefix}`);
    return response.data;
    
  } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.message)
    } 
    return rejectWithValue("unexpected error! Product not fount")
  }
})

export default actGetProductsbyCatPrefix;