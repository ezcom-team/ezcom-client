import React from "react";

export const CompareData = ({ item }) => {
    return (
        <div className="w-auto mt-[75px] max-w-[400px] ml-3 bg-back">
            <div className="max-h-[332px] bg-300 rounded-lg px-auto">
                <div className="w-[320px] h-[300px] max-h-[322px] p-[8px] mt-[8px]">
                    <div className="flex justify-center">
                        <img
                            src={item.Image}
                            className="max-h-[180px]"
                        />
                    </div>
                    <div className="max-w-[310px] bg-300 rounded-b-lg pb-1">
                        <div>{item.Name}</div>
                        <div className="text-primary">฿ {item.Price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
