import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Buy from "../components/Buy/Buy";
import Selling from "../components/MyOrderpage/SellingPart";
import Graph from "../components/Graph/Graph";
import Productdetail from "../components/ProductDetail/ProductDetail";
import Product from "../components/Product";

function Admin() {
  const labelsForFormA = [
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

  const [activeComponent, setActiveComponent] = useState("Order");

  const toggle = (component) => {
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
      CurrentComponent = <Buy />;
      break;
    default:
      CurrentComponent = null;
  }

  
  return (
    <div>
      <Nav />

      <div className="flex flex-row min-h-full">
        {/* Left Sidebar */}
        <div className="w-64 mt-3 ">
        <div className="p-4">
              <h1 className="text-2xl font-bold text-primary">Menu</h1>
            </div>
          <div className="bg-300 text-white w-64 h-fit fixed left-0 overflow-y-auto py-5 px-4 rounded-lg">
            <nav className="p-4 ">
              <ul className=''>
                <li className="mb-2">
                  <a href="#" className="text-100 hover:text-200" onClick={() => toggle("Graph")}>Graph</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-100 hover:text-200" onClick={() => toggle("Product")}>Product</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-100 hover:text-200" onClick={() => toggle("Order")}>Order</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-100 hover:text-200" onClick={() => toggle("User")}>User</a>
                </li>
              </ul>
            </nav>
            {/* <nav className="p-4 ">
        <div>
        <button
          className="ml-3 hover:bg-300 px-4 p-2 rounded-md"
          onClick={() => toggle("Buy")}
        >
          Buy
        </button>
        </div>
      </nav> */}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col flex-1 bg-400">

          <div className="flex gap-5 p-3 h-[150px] text-4xl bg-400 ">
            <div className="flex-1 bg-300 text-primary p-2 flex items-center justify-center rounded-lg">1850 <span className="text-100">items</span></div>
            <div className="flex-1 bg-300 text-green-500 p-2 flex items-center justify-center rounded-lg">9999 <span className="text-100">orders</span></div>
            <div className="flex-1 bg-300 text-blue-500 p-2 flex items-center justify-center rounded-lg">11005 <span className="text-100">users</span></div>
          </div>
          <div className="mt-10 w-full p-0">
            {CurrentComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;


/* <div className="flex flex-col items-center justify-center flex-1 gap-4">
        <div className="flex flex-row gap-8">
          <button
            className="p-1 text-white border-2 border-white rounded-sm"
            onClick={showFormA}
          >
            mouse
          </button>
          <button
            className="p-1 text-white border-2 border-white rounded-sm"
            onClick={showFormB}
          >
            mousepad
          </button>
          <button className="p-1 text-white border-2 border-white rounded-sm">
            cpu
          </button>
        </div>
        {selectedForm && <DynamicForm labels={selectedForm} />}
      </div> */





