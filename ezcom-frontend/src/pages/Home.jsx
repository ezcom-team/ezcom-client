import React, { useState } from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

function Home() {
  const count = useSelector(state => state.counter.value);
  const user = useSelector(state => state.user.user)
  const [x,setX] = useState("")
  const check=()=>{
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setX(storedUser)  
  }
  return (
    <div>
      <Nav />
      <h1 className="text-3xl font-bold underline">Hello world! fix {x}</h1>
      <button onClick={check}>check</button>
    </div>
  );
}

export default Home;
