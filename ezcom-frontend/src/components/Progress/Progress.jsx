import React from "react";
import { CardItem } from "../cardItem/index";
import CardDetail from "../CardDetail/Carddetail.jsx";
import ProgressStep from "./ProgressStep.jsx";

const ProcessPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-10/12">
        {/* Left Column */}
        <div className="flex p-4 overflow-y-auto">
          {/* Display card for each order */}
          <div className="p-4 mb-4 overflow-auto h-[900px]">
            <div className="flex justify-center text-2xl text-200">
              รายการที่ต้องได้รับ
            </div>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            {/* Repeat the above card for each order */}
          </div>
        </div>

        <div className="flex-grow  mt-10">
          <div className="h-[200px] bg-400 w-5/6">
            <ProgressStep />
          </div>
          <div className="flex-grow p-4 overflow-y-auto h-[650px] mt-10">
            <div className="flex flex-col gap-3 p-4 ">
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />
              <CardDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
