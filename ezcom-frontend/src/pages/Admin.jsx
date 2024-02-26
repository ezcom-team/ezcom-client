import React from "react";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Selling from "../components/OrderAdmin/OrderAdmin";
import Graph from "../components/Graph/Graph";
import Product from "../components/Product";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import axios from "axios";
import Account from "../components/AccountAdmin/Account";
import ModalEdit from '../components/Modal/ModalEdit';

function Admin() {
  const labelsForFormA = [
    { id: "imgae", text: "Image", type: "file" },
    { id: "name", text: "Name", type: "text" },
    { id: "desc", text: "Desc", type: "text" },
    { id: "sensor", text: "Sensor", type: "text" },
    { id: "buttonSwitch", text: "ButtonSwitch", type: "text" },
    { id: "connection", text: "Connection", type: "text" },
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];

  const labelsForFormB = [
    { id: "email", text: "Email", type: "text" },
    { id: "phone", text: "Phone", type: "number" },
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];

  


  const DynamicForm = ({ labels }) => (
    <form className="flex flex-col p-4 overflow-scroll text-white rounded-md bg-300 max-h-96">
      {labels.map(label => (
        <label key={label.id}>
          {label.text}
          <div className="border-2 rounded-md border-200">
            <input
              className="px-2 text-gray-200"
              type={label.type}
              name={label.id}
            />
          </div>
        </label>
      ))}
      <button
        type="submit"
        className="mt-3 rounded-md bg-slate-400 text-slate-600"
      >
        create
      </button>
    </form>
  );



  const toggle = (component) => {
    setActiveComponent(component);
  };
  let CurrentComponent;

  const [activeComponent, setActiveComponent] = useState("");

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

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

    
    const openModalBuy = (user) => {
      setUser(user)
      setisBuyModalOpen(true);
    };

    // console.log("id admin page: "+id)

  return (
    <div>
      <Nav />
      
      <div className="flex flex-row min-h-full">

        {/* Left Sidebar */}
        <div className="w-64 mt-3 ">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-primary">Menu</h1>
          </div>
          <div className="bg-400 text-white w-64 h-fit  left-0 overflow-y-auto rounded-s-lg rounded-e-lg">
            <div className="p-2x flex flex-col text-xl">
              <a href="#" onClick={() => toggle("Graph")} className="w-full pl-10 bg-300 p-3 border-b-2 border-400 hover:text-200 hover:bg-400"><TrendingUpIcon /> Graph</a>
              <a href="#" onClick={() => toggle("Product")} className="w-full pl-10 bg-300 p-3 border-b-2 border-400 hover:text-200 hover:bg-400"><ShoppingBasketIcon /> Product</a>
              <a href="#" onClick={() => toggle("Order")} className="w-full pl-10 bg-300 p-3 border-b-2 border-400 hover:text-200 hover:bg-400"><ShoppingCartIcon /> Order</a>
              <a href="#" onClick={() => toggle("User")} className="w-full pl-10 bg-300 p-3 border-b-2 border-400 hover:text-200 hover:bg-400"><AccountCircleIcon /> User</a>

            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col flex-1 bg-400">

          <div className="flex gap-5 p-3 h-[150px]  bg-400  ">
            <div className="flex-1 bg-300 text-primary p-2 flex items-center justify-center rounded-lg text-5xl">1850 <span className="text-100 ml-2 text-4xl"> items</span></div>
            <div className="flex-1 bg-300 text-green-500 p-2 flex items-center justify-center rounded-lg text-5xl">9999 <span className="text-100 ml-2 text-4xl"> orders</span></div>
            <div className="flex-1 bg-300 text-blue-500 p-2 flex items-center justify-center rounded-lg text-5xl">11005 <span className="text-100 ml-2 text-4xl"> users</span></div>
          </div>
          <div className="mt-10 w-full p-0">
            {/* {CurrentComponent} */}
            {activeComponent === "Graph" ? (<Graph/>) : activeComponent === "Product" ? (<Product/>) : activeComponent === "Order" ? (<Selling/>) : activeComponent === "User" ? (<Account openModalBuy={openModalBuy} />) : (<></>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;