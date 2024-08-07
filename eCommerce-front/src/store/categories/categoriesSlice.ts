import {createSlice} from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TCategory, TLoading, isString } from "@types";


interface ICategories {
  records: TCategory[],
  loading: TLoading,
  error: string | null
}


const initialState: ICategories = {
  records: [],
  loading: "idle",
  error: null
}


const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{
      categoriesRecordsCleanUP: (state) => {
        state.records = [];
      }
    },
    extraReducers:(builder) => {
      builder.addCase(actGetCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      }),
      builder.addCase(actGetCategories.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.records =action.payload;
        state.error = null;
      }),
      builder.addCase(actGetCategories.rejected, (state, action) => {
        state.loading = "rejected";
        if(isString(action.payload)){
          state.error = action.payload;
        }
      })
    },
})

export const {categoriesRecordsCleanUP} = categoriesSlice.actions;
export {actGetCategories};
export default categoriesSlice.reducer;