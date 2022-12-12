import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice ({
    name: "Todo",
    initialState:{
        user:{}
    },
    reducers: {
        addUser : (state, action) => {
            state.user = action.payload;
        }
    }
});

export default TodoSlice.reducer;
export const {addUser} = TodoSlice.actions