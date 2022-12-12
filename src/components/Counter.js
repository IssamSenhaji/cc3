import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { decrement,increment,incrementByAmount } from "../redux/counterSlice";
import "./Counter.css"
function Counter(){
    
    const {count}=useSelector(state=>state.counter);
    const dispatch=useDispatch();

    const handelIncrement=()=>{
        dispatch(increment())

    }
    
    const handelDecrement=()=>{
        dispatch(decrement())
    }
    
    const handelIncByValue=(vl)=>{
        dispatch(incrementByAmount(3))
    }
    return(
        <div>
            <p className="zero">{count}</p>
            <button onClick={handelIncrement}>Increment</button>
            <button onClick={handelDecrement}>Decrement</button>
            <button onClick={handelIncByValue}>Increment By 3</button>
            
        </div>
    )
}
export default Counter