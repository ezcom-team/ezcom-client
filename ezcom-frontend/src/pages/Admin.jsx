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

import MatchedOrder from "../components/MatchedOrderAdmin/MatchedOrder";
import ModalEdit from "../components/Modal/ModalEdit";

function Admin() {
  const [activeComponent, setActiveComponent] = useState("Order");
  const [items, setItems] = useState("0");
  const [orders, setOrders] = useState("0");
  const [users, setUsers] = useState("0");

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
      CurrentComponent = <Account />;
      break;
    case "MatchedOrder":
      CurrentComponent = <MatchedOrder />;
      break;
    default:
      CurrentComponent = null;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("access-token");

        const usersResponse = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/user/users`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(usersResponse.data.length);
        setUsers(usersResponse.data.length);

        const itemsResponse = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/products/`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(itemsResponse.data);
        setItems(itemsResponse.data.length);

        const itembuyResponse = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/order/buys`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log("itembuy data:", itembuyResponse.data);

        const itemsellResponse = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/order/sells`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log("itemsell data:", itemsellResponse.data);

        const totalLength =
          itembuyResponse.data.length + itemsellResponse.data.length;
        console.log("Total length:", totalLength);
        setOrders(totalLength);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Nav />

      <div className="flex flex-row min-h-full ">
        {/* Left Sidebar */}
        <div className=" w-max-40 mt-3 pt-[180px] px-5">
          <div className="left-0 w-64 overflow-y-auto text-white bg-400 h-fit rounded-s-lg rounded-e-lg">
            <div className="flex flex-col text-xl p-2x">
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
                onClick={() => toggle("MatchedOrder")}
                className="w-full p-3 pl-10 border-b-2 border-300 hover:text-200 hover:bg-400"
              >
                <ShoppingCartIcon /> MatchedOrder
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
              {items} <span className="ml-2 text-4xl text-100"> items</span>
            </div>
            <div className="flex items-center justify-center flex-1 p-2 text-5xl text-green-500 rounded-lg bg-300">
              {orders} <span className="ml-2 text-4xl text-100"> orders</span>
            </div>
            <div className="flex items-center justify-center flex-1 p-2 text-5xl text-blue-500 rounded-lg bg-300">
              {users} <span className="ml-2 text-4xl text-100"> users</span>
            </div>
          </div>
          <div className="w-full p-0 mt-10">{CurrentComponent}</div>
        </div>
      </div>
    </div>
  );
}
export default Admin;
