import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Buy from "../Buy/Buy";
import Sell from "../Sell/Sell";
import Graph from "../RealGraph/RealGraph";

const BuyOrSellOrTrade = ({ pid }) => {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState("Buy");
  const [selectedButton, setSelectedButton] = useState(null);
  const [Btn, setBtn] = useState("");
  // const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    let buttonName;
    switch (Btn) {
      case "Sell":
        buttonName = "Sell";
        break;
      case "Trade":
        buttonName = "Trade";
        break;
      default:
        buttonName = "Buy";
    }

    setSelectedButton(buttonName);
  }, [location, Btn]);

  const toggle = (component) => {
    setActiveComponent(component);
    setBtn(component);
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
      <hr className="h-1 my-8 border-0 bg-300"></hr>

      <div className="flex gap-9 py-5 bg-primary rounded-md text-100">
        <button
          className={`ml-3 hover: px-4 p-2 rounded-md ${
            selectedButton === "Buy" ? "bg-400" : ""
          }`}
          onClick={() => toggle("Buy")}
        >
          Buy
        </button>
        <button
          onClick={() => toggle("Sell")}
          className={` px-4 p-2 rounded-md ${
            selectedButton === "Sell" ? "bg-400" : ""
          }`}
        >
          Sell
        </button>
        <button
          onClick={() => toggle("Trade")}
          className={` px-4 p-2 rounded-md ${
            selectedButton === "Trade" ? "bg-400" : ""
          }`}
        >
          Trade
        </button>
      </div>
      {CurrentComponent}
    </div>
  );
};

export default BuyOrSellOrTrade;
