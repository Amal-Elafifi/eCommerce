import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};


const actAuthRegister = createAsyncThunk("auth/actAuthRegister", async(formData: TFormData, thunk) => {
  const {rejectWithValue} = thunk;
  
  try {
    const response =  await axios.post("/register", formData);
    return response.data;

  } catch (error) {
    console.log(error);
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actAuthRegister;