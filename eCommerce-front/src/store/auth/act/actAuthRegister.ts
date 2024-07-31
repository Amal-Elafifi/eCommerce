import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


type TFormData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const actAuthRegister = createAsyncThunk("auth/actAuthRegister", async(formData: TFormData, thunk) => {
  const {rejectWithValue} = thunk;
  
  try {
    const response =  await axios.post("/register", formData);
    console.log(response.data)
    return response.data;

  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actAuthRegister;