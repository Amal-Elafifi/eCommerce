import { TCategory } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosErrorHandler} from "@utils";
import axios from "axios";


type TResponse = TCategory[];

// _ stands for payload
const actGetCategories = createAsyncThunk<TResponse>("categories/actGetCategories", async(_, thunkAPI) => {
  
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<TResponse>("/categories", {
      signal: thunkAPI.signal,
    });
    return response.data;
    
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetCategories;
