// import { createSlice} from "@reduxjs/toolkit";
// export const counterSlice=createSlice({
//     name:'counter',
//     initialState:{
//         count:0
//     },
//     reducers:{
//         increment:(state)=>{
//             state.count += 1
//         },
//         decrement:(state)=>{
//             state.count -= 1
//         },
//         incrementByAmount:(state,action)=>{
//             state.count += action.payload
//         }
        
//     }
// })
// export const{increment,decrement,incrementByAmount}=counterSlice.actions
// export default counterSlice.reducer
import { createSlice} from "@reduxjs/toolkit";
export const userSlice=createSlice({
    name:'user',
    initialState:{
        name:"",
        email:""
    },
    reducers:{
      addUser:(state,action)=>{
        state.name=action.payload.name;
        state.email=action.payload.email;
      }
        
    }
})
export const{addUser}=userSlice.actions
export default userSlice.reducer