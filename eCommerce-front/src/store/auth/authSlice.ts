import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import actAuthRegister from "./act/actAuthRegister";

interface IAuthState {
  loading: TLoading,
  error: string| null,
}

const initialState: IAuthState = {
  loading: "idle",
  error: null
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
    })
  }
})

export {actAuthRegister};
export default AuthSlice.reducer;