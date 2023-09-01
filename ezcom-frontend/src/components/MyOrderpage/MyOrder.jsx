import picProduct from "../../img/testPic.png";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import React, { useState } from "react";

import Buying from "./BuyingPart";
import Selling from "./SellingPart";
import History from "./History";



const BuyOrSellOrTrade = () => {
  const [activeComponent, setActiveComponent] = useState("Selling");

  const toggle = (component) => {
    setActiveComponent(component);
  };
  let CurrentComponent;

  switch (activeComponent) {
    case "Selling":
      CurrentComponent = <Selling />;
      break;
    case "Buying":
      CurrentComponent = <Buying />
      break;
    case "History":
      CurrentComponent = <History />;
      break;
    default:
      CurrentComponent = null;
  }

  
  return (
    <div className="max-w-[95vw] mx-auto  gap-10 mt-8  xl:max-w-[75vw]">
      <div className="flex gap-9 py-5 bg-primary text-100 mb-10 rounded-md">
        <button
          className="ml-3 hover:bg-300 px-4 p-2 rounded-md"
          onClick={() => toggle("Selling")} 
        >
          Selling
        </button>
        <button
          onClick={() => toggle("Buying")}
          className=" hover:bg-300 px-4 p-2 rounded-md"
        >
          Buying
        </button>
        <button
          onClick={() => toggle("History")}
          className="hover:bg-300 px-4 p-2 rounded-md"
        >
          History
        </button>
      </div>
      {/* <Dropdown/> */}
      {CurrentComponent}
    </div>
  );
};

export default BuyOrSellOrTrade;
