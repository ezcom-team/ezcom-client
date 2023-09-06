import React from "react";
import Nav from "../components/Nav";
import Detail from "../components/ProductDetail/Detail";
import Graph from "../components/Graph/Graph";

import BuyOrSellOrTrade from "../components/HeaderDetailPage/BuyOrSellOrTrade";



function About() {
  return (
    <div className=" bg-400">
      <Nav />
      <Detail /> 
      <BuyOrSellOrTrade />
    </div>
  );
}

export default About;

