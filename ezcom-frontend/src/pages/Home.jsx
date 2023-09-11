import React from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

function Home() {
  const count = useSelector(state => state.counter.value);
  const user = useSelector(state => state.user.user);
  return (
    <div>
      <Nav />
      <h1 className="text-3xl font-bold underline">Hello world! fix {count}</h1>
    </div>
  );
}

export default Home;
