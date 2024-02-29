
import React, { useState } from "react";

import Buy from "../Buy/Buy";
import Sell from "../Sell/Sell";

import Graph from "../RealGraph/RealGraph";



const BuyOrSellOrTrade = ({ pid }) => {
  const [activeComponent, setActiveComponent] = useState("Buy");

  const toggle = (component) => {
    setActiveComponent(component);
  };
  let CurrentComponent;

  switch (activeComponent) {
    case "Buy":
      CurrentComponent = <Buy pid={pid} />;
      break;
    case "Sell":
      CurrentComponent = <Sell pid={pid} />;
      break;
    case "Trade":
      CurrentComponent = <Graph />;
      break;
    default:
      CurrentComponent = null;
  }

  
  return (
    <div className="max-w-[95vw] xl:max-w-[75vw] mx-auto pb-96 gap-10">
      <hr class="h-1 my-8 border-0 bg-300"></hr>

      <div className="flex gap-9 py-5 bg-primary rounded-md text-100">
        <button
          className="ml-3 hover:bg-300 px-4 p-2 rounded-md"
          onClick={() => toggle("Buy")}
        >
          Buy
        </button>
        <button
          onClick={() => toggle("Sell")}
          className=" hover:bg-300 px-4 p-2 rounded-md"
        >
          Sell
        </button>
        <button
          onClick={() => toggle("Trade")}
          className="hover:bg-300 px-4 p-2 rounded-md"
        >
          Trade
        </button>
      </div>
      {/* <Dropdown/> */}
      {CurrentComponent}
    </div>
  );
};

export default BuyOrSellOrTrade;
