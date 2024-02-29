import React from "react";

export const CompareData = ({ item }) => {
  return (
    <div className="w-auto max-w-[400px] text-base">
      <div className="w-[320px] overflow-hidden">
        <div className="flex justify-center">
          <img src={item.Image} className="max-h-[180px]" />
        </div>
        <div>{item.Name}</div>
        <div className="text-primary">฿ {item.Price}</div>
      </div>
    </div>
  );
};
