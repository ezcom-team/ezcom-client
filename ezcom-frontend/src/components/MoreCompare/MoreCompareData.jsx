import React from "react";

export const MoreCompareData = ({ item, onDelete }) => {
    const handleDelete = () => {
        onDelete();
    };

    return (
        <div className="w-auto max-w-[400px] ml-3 bg-back">
            <div className="max-h-[332px] px-auto">
                <div className="relative flex justify-end">
                    <div
                        className="bg-red-500 top-0 right-0 w-[30px] h-[30px] rounded-full absolute"
                        onClick={handleDelete}
                    >
                        <button className="text-100 ">X</button>
                    </div>
                </div>
                <div className="w-[320px] h-[300px] max-h-[322px] p-[8px] bg-300 rounded-lg">
                    <div className="flex justify-center">
                        <img src={item.Image} className="max-h-[180px]" />
                    </div>
                    <div className="max-w-[310px] rounded-b-lg pb-1">
                        <div>{item.Name}</div>
                        <div className="text-primary">$ {item.Price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
