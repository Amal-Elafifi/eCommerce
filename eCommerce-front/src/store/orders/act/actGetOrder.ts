import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { TOrderItems } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


type TResponse = TOrderItems;

const actGetOrder = createAsyncThunk("/orders/actGetOrders", async(_, thunkAPI) => {
  const{rejectWithValue, getState, signal} = thunkAPI;
  const {auth} = getState() as RootState;

  try {
    const response = await axios.get<TResponse>(`/orders?userId=${auth.user?.id}`, {signal})
    return response.data;

  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }

})

export default actGetOrder;