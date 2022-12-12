import React,{useState} from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../redux/userSlice";

export default function Form() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const dispatch=useDispatch()
    const handelSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser({name,email}));
    }

  return (
    <form onSubmit={handelSubmit}>
        <div>
            <input
                type="text"
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
        <div>
            <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
    </form>
  )
}
