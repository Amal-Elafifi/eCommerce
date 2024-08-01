import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {TFormData } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";


type TResponse ={
  accessToken: string;
  user: TFormData
}

const actAuthLogin = createAsyncThunk("auth/actAuthLogin", async(formData: TFormData ,thunk)=>{
  const {rejectWithValue} = thunk;
  try {
    const response = await axios.post<TResponse>("/login", formData);
    return response.data
  } catch (error) {
      return rejectWithValue( axiosErrorHandler(error))
    }
  }
);

export default actAuthLogin;