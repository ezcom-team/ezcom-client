import React from "react";
import Nav from "../components/Nav";
import MyOrder from "../components/MyOrderpage/MyOrder";
import Chat from "../components/Chat/Chat";

import Progress from "../components/Progress/Progress";
import Payment from "../components/Modal/Payment";
import { CardItem } from "../components/cardItem";


function ProgressPage() {
  return (
    <div className="bg-back min-h-screen">
      <Nav />
      <Progress />
    </div>
  );
}

export default ProgressPage;
