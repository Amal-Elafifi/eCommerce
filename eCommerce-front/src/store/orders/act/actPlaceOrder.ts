import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actPlaceOrder = createAsyncThunk("order/actPlaceOrder", async(subtotal: number, thunkAPI) => {
  const {rejectWithValue, getState} = thunkAPI;
  const {auth, Cart} = getState() as RootState;

  const orderItems = Cart.productsFullInfo.map(ele =>(
    {
      userId: ele.id,
      title: ele.title,
      price: ele.price,
      img: ele.img,
      quantity: Cart.items[ele.id],
    })
  );
  try {
    const response = await axios.post("/orders",{
      userId: auth.user?.id,
      items: orderItems,
      subtotal,
    })
    return response.data

  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }


})


export default actPlaceOrder;