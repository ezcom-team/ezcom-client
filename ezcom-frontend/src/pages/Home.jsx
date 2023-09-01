import React from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";


function Home() {
  const count = useSelector(state => state.counter.value);
  return (
    <div >
      <Nav />
      <h1 className="text-3xl font-bold underline">
        Hello world! pleum fix {count} 
      </h1>
    </div>
  );
}

export default Home;
