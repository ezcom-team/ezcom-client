import React from "react";
import Nav from "../components/Nav";
import MyOrder from "../components/MyOrderpage/MyOrder";
import Chat from "../components/Chat/Chat";
import Payment from "../components/Payment/Payment";
import ProgressStep from "../components/Progress/ProgressStep";
// import ModalContainer from '../components/Modal/ModalContainer';


function Landing() {
  return (
    <div className="bg-400 min-h-screen">
      <Nav />
      <MyOrder />
    </div>
  );
}

export default Landing;
