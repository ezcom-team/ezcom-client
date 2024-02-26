import React from "react";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Selling from "../components/OrderAdmin/OrderAdmin";
import Graph from "../components/Graph/Graph";
import Product from "../components/Product";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import axios from "axios";
import Account from "../components/AccountAdmin/Account";
import ModalEdit from '../components/Modal/ModalEdit';

function Admin() {
  const [activeComponent, setActiveComponent] = useState("Order");

  const toggle = component => {
    setActiveComponent(component);
  };
  let CurrentComponent;  

  switch (activeComponent) {
    case "Graph":
      CurrentComponent = <Graph />;
      break;
    case "Product":
      CurrentComponent = <Product />;
      break;
    case "Order":
      CurrentComponent = <Selling />;
      break;
    case "User":
      CurrentComponent = <Account />
      break;
    default:
      CurrentComponent = null;
  }

  return (
    <div>
      <Nav />

      <div className="flex flex-row min-h-full ">
        {/* Left Sidebar */}
        <div className=" w-max-40 mt-3 pt-[180px] px-5">
          {/* <div className="p-4">
            <h1 className="text-2xl font-bold text-primary">Menu</h1>
          </div> */}
          <div className="left-0 w-64 overflow-y-auto text-white bg-400 h-fit rounded-s-lg rounded-e-lg">
            <div className="flex flex-col text-xl p-2x">
              {/* <div className="mb-2">
                <a href="#" className="text-100 hover:text-200" onClick={() => toggle("Graph")}>Graph</a>
              </div>
              <div className="mb-2">
                <a href="#" className="text-100 hover:text-200" onClick={() => toggle("Product")}>Product</a>
              </div>
              <div className="mb-2">
                <a href="#" className="text-100 hover:text-200" onClick={() => toggle("Order")}>Order</a>
              </div>
              <div className="mb-2">
                <a href="#" className="text-100 hover:text-200" onClick={() => toggle("User")}>User</a>
              </div> */}

              <a
                href="#"
                onClick={() => toggle("Graph")}
                className="w-full p-3 pl-10 border-b-2 border-300 hover:text-200 hover:bg-400"
              >
                <TrendingUpIcon /> Graph
              </a>
              <a
                href="#"
                onClick={() => toggle("Product")}
                className="w-full p-3 pl-10 border-b-2 border-300 hover:text-200 hover:bg-400"
              >
                <ShoppingBasketIcon /> Product
              </a>
              <a
                href="#"
                onClick={() => toggle("Order")}
                className="w-full p-3 pl-10 border-b-2 border-300 hover:text-200 hover:bg-400"
              >
                <ShoppingCartIcon /> Order
              </a>
              <a
                href="#"
                onClick={() => toggle("User")}
                className="w-full p-3 pl-10 border-b-2 border-300 hover:text-200 hover:bg-400"
              >
                <AccountCircleIcon /> User
              </a>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-5 p-3 h-[150px]  ">
            <div className="flex items-center justify-center flex-1 p-2 text-5xl rounded-lg bg-300 text-primary">
              1850 <span className="ml-2 text-4xl text-100"> items</span>
            </div>
            <div className="flex items-center justify-center flex-1 p-2 text-5xl text-green-500 rounded-lg bg-300">
              9999 <span className="ml-2 text-4xl text-100"> orders</span>
            </div>
            <div className="flex items-center justify-center flex-1 p-2 text-5xl text-blue-500 rounded-lg bg-300">
              11005 <span className="ml-2 text-4xl text-100"> users</span>
            </div>
          </div>
          <div className="w-full p-0 mt-10">{CurrentComponent}</div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
