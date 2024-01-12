import React, { useState } from "react";
import { CardItem } from "../cardItem/index";

const CardDetail = () => {
  return (
    <div className=" bg-300 rounded-md w-5/6 ">
      <div className="flex flex-col gap-2 p-6 text-200 text-md">
        <div className="flex justify-between mb-6  text-100 text-2xl ">
          <div>ผู้ขายจัดส่งสินค้ามายัง EZCOM</div>
          <span>status : <span className="text-primary">DONE</span></span>
          
        </div>
        <div className="flex ">
            <p>ระยะเวลาจัดส่ง :</p>
            <span>12/6/66 - 15/6/66</span>
        </div>

        <div className="flex justify-between">
            <div className="flex ">
            <p>หมายเลขการจัดส่ง :</p>
            <span>36pm214op214k3of</span>
            </div>
            <button className=" underline">รายละเอียด</button>
        </div>

      </div>
    </div>
  );
};

export default CardDetail;
