import picProduct from "../../img/testPic.png";

import { useState } from "react";
import Payment from "../Modal/Payment";
// import "../style.css";
import Verify from "../Modal/Verify";
const SellDetail = ({ condition, color, sellerImg, sellerName, price, id }) => {
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [formData, setFormData] = useState({
        condition: [condition],
        color: [color],
        price: price,
        product_id: id,
    });

    const popUp = () => {
        setIsPaymentOpen(true);
    };

    const getBackgroundColor = (condition) => {
        switch (condition) {
            case "A":
                return "bg-green-500";
            case "B":
                return "bg-yellow-500";
            case "C":
                return "bg-red-500";
            default:
                return "bg-white";
        }
    };

    return (
        <div>
            {isPaymentOpen && (
                <div className="modal">
                    <Verify
                        dataToSend={formData}
                        isPaymentModalOpen={isPaymentOpen}
                        setIsPaymentModalOpen={setIsPaymentOpen}
                    />
                </div>
            )}
            <div className="grid grid-cols-[15%_40%_15%_15%_15%] bg-300 py-3 mb-1 text-200 rounded-md">
                <div className="flex my-auto justify-center">
                    <div
                        className={`flex justify-center mx-1 p-[2px] rounded-3xl w-[44px] h-[28px] font-bold ${getBackgroundColor(
                            condition
                        )}`}
                    >
                        {condition}
                    </div>
                </div>

                <div className="flex align-middle">
                    <div className="my-auto flex gap-2">
                        <div
                            className="flex justify-center m-1 p-[4px] rounded-full w-[32px] h-[32px] font-bold"
                            style={{
                                backgroundColor: color,
                            }}
                        ></div>
                    </div>
                </div>
                <div className="flex align-middle gap-2">
                    <div className="h-10">
                        <img
                            src={sellerImg}
                            className="max-w-full max-h-full rounded-full"
                        />
                    </div>
                    <div className="my-auto text-base">
                        <div className="my-auto ">{sellerName}</div>
                    </div>
                </div>

                <div className="flex align-middle">
                    <div className="my-auto text-primary text-base">
                        <div className=""> ฿ {price}</div>
                    </div>
                </div>

                <div className="flex align-middle">
                    <div className="my-auto flex gap-2 round">
                        <button
                            className="border-[2px] border-green-600 px-8 py-2 rounded-md hover:bg-green-600 duration-500"
                            onClick={popUp}
                        >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SellDetail;
