import React from "react";
import Nav from "../components/Nav";
import Detail from "../components/Detail";
import Graph from "../components/Graph";

import BuyOrSellOrTrade from "../components/BuyOrSellOrTrade";



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

