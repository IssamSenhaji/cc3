import React from "react";

import { useSelector } from "react-redux";

export default function Header() {
    const {name}=useSelector(state=>state.user)
    
  return (
    <div>
        <h1>hhd</h1>
        <p>hello {name}</p>
    </div>
  )
}
