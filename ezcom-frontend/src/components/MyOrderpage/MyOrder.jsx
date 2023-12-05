import React, { useState } from "react";
import Buying from "./BuyingPart";
import Selling from "./SellingPart";
import History from "./History";

const BuyOrSellOrTrade = () => {
  const [activeComponent, setActiveComponent] = useState("Selling");
  const [isButtonActive, setIsButtonActive] = useState({
    Selling: false,
    Buying: false,
    History: false,
  });

  const toggle = (component) => {
    setActiveComponent(component);
    setIsButtonActive((prevState) => ({
      Selling: false,
      Buying: false,
      History: false,
      [component]: true,
    }));
  };

  let CurrentComponent;

  switch (activeComponent) {
    case "Selling":
      CurrentComponent = <Selling />;
      break;
    case "Buying":
      CurrentComponent = <Buying />;
      break;
    case "History":
      CurrentComponent = <History />;
      break;
    default:
      CurrentComponent = null;
  }

  return (
    <div
      className={`max-w-[95vw] mx-auto gap-10 mt-8 xl:max-w-[75vw] ${
        isButtonActive.Selling ? "" : ""
      }`}
    >
      <div className="flex gap-9 py-5 bg-primary text-100 rounded-t-md">
        <button
          className={`ml-3 hover:bg-200 hover:text-primary px-4 p-2 rounded-md ${
            isButtonActive.Selling ? "bg-200 text-primary" : ""
          }`}
          onClick={() => toggle("Selling")}
        >
          Selling
        </button>
        <button
          onClick={() => toggle("Buying")}
          className={`hover:bg-200 hover:text-primary px-4 p-2 rounded-md ${
            isButtonActive.Buying ? "bg-200 text-primary" : ""
          }`}
        >
          Buying
        </button>
        <button
          onClick={() => toggle("History")}
          className={`hover:bg-200 hover:text-primary px-4 p-2 rounded-md ${
            isButtonActive.History ? "bg-200 text-primary" : ""
          }`}
        >
          History
        </button>
      </div>
      {CurrentComponent}
    </div>
  );
};

export default BuyOrSellOrTrade;
