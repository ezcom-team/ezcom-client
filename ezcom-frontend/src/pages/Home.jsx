import React, { useState } from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

function Home() {
  const count = useSelector(state => state.counter.value);
  const user = useSelector(state => state.user.user);
  const [x, setX] = useState("");
  const check = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setX(storedUser);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-3xl font-bold underline text-fuchsia-300">
          Hello world! fix {x}
        </h1>
        <button className=" text-red-50" onClick={check}>
          check
        </button>
      </div>
    </div>
  );
}

export default Home;
