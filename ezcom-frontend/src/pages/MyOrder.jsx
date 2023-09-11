import React from "react";
import Nav from "../components/Nav";
import MyOrder from "../components/MyOrderpage/MyOrder";

function Landing() {
  return (
    <div className="bg-back min-h-full">
      <Nav />
      <MyOrder />
    </div>
  );
}

export default Landing;
