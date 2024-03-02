import React from "react";
import Nav from "../components/Nav";
import MyOrder from "../components/MyOrderpage/MyOrder";
import Chat from "../components/Chat/Chat";
import ProgressStep from "../components/Progress/ProgressStep";
// import ModalContainer from '../components/Modal/ModalContainer';


function MyOrderPage() {
  return (
    <div className="bg-400 min-h-screen">
      <Nav />
      <MyOrder />
    </div>
  );
}

export default MyOrderPage;
