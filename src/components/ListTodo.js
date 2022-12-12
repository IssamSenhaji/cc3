import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import userSlice from "../redux/userSlice";

export const getUsers = createAsyncThunk(
    "produits/getProduits",  
    async () => {
            const response = await axios.get("https://dummyjson.com/todos");
            return response.data;
        }
  );
const TodoSlice= createSlice({
    name: 'Todo',
    initialState: {
        data:[],
        loading:'idle',
        error:null,
        selectedUsers:'',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
          if (state.loading === "idle") {
            state.loading = "pending";
          }
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
          if (state.loading === "pending") {
            state.data = action.payload;
            state.loading = "idle";
          }
        });
        builder.addCase(getUsers.rejected, (state, action) => {
          if (state.loading === "pending") {
            state.loading = "idle";
            state.error = "Error occured";
          }
        });
      },
        
})
export default TodoSlice.reducer;