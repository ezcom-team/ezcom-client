import React, { useState } from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import "./home.css"
import { Link } from "react-router-dom";

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
            <img
            id="p1"
              src="https://media.discordapp.net/attachments/1161860132708286487/1212296896828416000/222.png?ex=65f15277&is=65dedd77&hm=024287a36ec8d20d13c2d48c0ca14fa58e6352c6545abcac1bee957fb0fd1777&=&format=webp&quality=lossless"
              alt="Placeholder"
              className="object-cover rounded-full"
            />
            <img
            id="p2"
              src="https://cdn.discordapp.com/attachments/1161860132708286487/1212112826035077160/unnamed.png?ex=65f0a709&is=65de3209&hm=da1fc732f498b177ed4be87a51f2695a296d03df5e90f2ddabe41fd471b561cc&"
              alt="Placeholder"
              className="object-cover rounded-lg "
            />

            <img
            id="p3"
              src="https://media.discordapp.net/attachments/1161860132708286487/1212296897214021664/111.png?ex=65f15277&is=65dedd77&hm=a160d257b714f18dca49b84fc1a78b1c41d3cb9dec25b6d31e69ea26824999c2&=&format=webp&quality=lossless"
              alt="Placeholder"
              className="object-cover rounded-full "
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
