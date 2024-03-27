import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellCard = ({ order }) => {
    const isoTimestamp = order.CreatedAt;
    const dateObject = new Date(isoTimestamp);
    const formattedTime = dateObject.toLocaleString();

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

    function showToast(bool, text) {
        if (bool) {
            toast.success(text);
        } else toast.error(text);
    }

    const cancelOrder = async () => {
        const token = localStorage.getItem("access-token");
        try {
            const response = await axios.delete(
                `https://ezcom-backend-production-09b5.up.railway.app/order/sell/${order.ID}`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            showToast(true, "Success");
        } catch (error) {
            console.error("Error sending request:", error);
            showToast(false, "Error");
        }
    };

    return (
        <div className="max-w-[95vw] xl:max-w-[75vw] mx-auto  gap-10 mt-3">
            <div className="grid grid-cols-[30%_10%_8%_18%_18%_15%] bg-300 py-3 mb-1 text-200 rounded-md">
                <div className="flex align-middle justify-center">
                    <div className="flex h-20">
                        <img
                            src={order.Product_img}
                            className="max-h-full max-w-full"
                        />
                        <div className="my-auto mx-[16px]">
                            {order.Product_name}
                        </div>
                    </div>
                </div>
                <div className="flex align-middle justify-center">
                    <div className="my-auto text-primary text-2xl ">
                        <div className=""> ฿ {order.Price}</div>
                    </div>
                </div>
                <div className="flex align-middle justify-center ">
                    <div className="my-auto">
                        <div
                            className={`flex justify-center p-[2px] rounded-3xl w-[44px] h-[28px] my-[8px] font-bold ${getBackgroundColor(
                                order.Condition
                            )}`}
                        >
                            {order.Condition}
                        </div>
                    </div>
                </div>
                <div className="flex align-middle justify-center">
                    <div className="my-auto justify-center text-red-600 text-2xl">
                        <div
                            className="flex justify-center m-1 p-[4px] rounded-full w-[32px] h-[32px] font-bold"
                            style={{
                                backgroundColor: order.Color,
                            }}
                        ></div>
                    </div>
                </div>

                <div className="flex align-middle justify-center">
                    <div className="my-auto justify-center">
                        <div className="">{formattedTime}</div>
                    </div>
                </div>

                <div className="flex align-middle justify-center">
                    <button
                        onClick={cancelOrder}
                        className="my-auto justify-center border-[2px] border-primary px-8 py-3 rounded-md hover:bg-primary text-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellCard;
