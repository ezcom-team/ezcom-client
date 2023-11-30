import React from "react";
import Nav from "../components/Nav";
import MyOrder from "../components/MyOrderpage/MyOrder";
import Chat from "../components/Chat/Chat";
import Payment from "../components/Payment/Payment";


function Landing() {
  return (
    <div className="bg-back min-h-screen">
      <Nav />
      {/* <MyOrder /> */}
      {/* <Chat /> */}
      <Payment />
    </div>
  );
}

export default Landing;
