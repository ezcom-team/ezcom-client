import React from "react";

export const MoreCompareData = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="w-auto max-w-[400px] bg-back">
      <div className="max-h-[332px] px-auto">
        <div className="relative flex justify-end px-1 text-xs">
          <button
            className="absolute top-0 right-0 p-2 text-red-800 bg-red-500 rounded-full"
            onClick={handleDelete}
          >
            remove
          </button>
        </div>
        <div className="w-auto max-w-[400px] text-base">
          <div className="w-[320px] overflow-hidden">
            <div className="flex justify-center">
              <img src={item.Image} className="max-h-[180px]" />
            </div>
            <div>{item.Name}</div>
            <div className="text-primary">฿ {item.Price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
