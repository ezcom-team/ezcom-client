import React, { useState } from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import "./home.css"
import { Link } from "react-router-dom";
import PopDetail from "../components/Modal/ModalTellDetail";
function Home() {
  const count = useSelector(state => state.counter.value);
  const user = useSelector(state => state.user.user);
  const [x, setX] = useState("");
  const check = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setX(storedUser);
  };
  return (
    <div className="flex flex-col min-h-screen ">
      <Nav />
      <div className="flex flex-col  items-center">
        <div className="bg-400 min-h-screen  flex flex-col lg:flex-row justify-center items-center w-[75%]">
          <div className="w-3/5 lg:w-3/5 flex flex-col justify-start items-start p-8">
            <h1 className="text-[100px] font-bold text-primary mb-4">Ezcom</h1>
            <p className="text-2xl text-200 mb-8 w-3/4">
              Find the best deals on second-hand computers from <br />trusted sellers.
            </p>
            
            <Link to="/landing"  className="bg-primary hover:bg-orange-700 text-200 font-bold py-4 px-8 rounded-full">
              Get Start !!!
            </Link>
          </div>
          <div className="w-3/5 lg:w-2/5 flex justify-center items-center">
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
