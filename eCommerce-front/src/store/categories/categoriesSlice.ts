import {createSlice} from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";


interface ICategories {
  records: {id: number, title: string, prefix: string, image: string}[],
  loading: "idle" | "pending" | "fulfilled" | "rejected",
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
    reducers:{},
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
        if(action.payload && typeof action.payload === "string"){
          state.error = action.payload;
        }
      })
    },
})

export {actGetCategories};
export default categoriesSlice.reducer;