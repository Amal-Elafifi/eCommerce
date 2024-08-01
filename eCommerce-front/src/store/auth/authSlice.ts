import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";

interface IAuthState {
  loading: TLoading,
  error: string| null,
  accessToken: string,
  user: object
}

const initialState: IAuthState = {
  loading: "idle",
  error: null,
  accessToken: "",
  user: {}
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register
    builder.addCase(actAuthRegister.pending, state => {
      state.loading = "pending"
    }),
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "fulfilled"
      state.error = null;
    }),
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "rejected";
      if(isString(action.payload)){
        state.error = action.payload
      }  
    }),
    // login
    builder.addCase(actAuthLogin.pending, state => {
        state.loading = "pending"
        state.error = null
    }),
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
        state.loading= "fulfilled";
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user
    }),
    builder.addCase(actAuthLogin.rejected, (state, action) => {
        state.loading= "rejected";
        state.error = action.payload as string
    })
  }
})

export {actAuthRegister, actAuthLogin};
export default AuthSlice.reducer;