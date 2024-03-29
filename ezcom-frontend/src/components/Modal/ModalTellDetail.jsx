import React, { useEffect, useState } from "react";
import axios from "axios";
import { HelpOutline as HelpOutlineIcon } from "@mui/icons-material";
import "./style.css";

const ModalTellDetail = ({ response, isModalOpen, setIsModalOpen, setIsPaymentModalOpen }) => {
    const [text, setText] = useState("");
    const [textStatus, setTextStatus] = useState("");

    useEffect(() => {
        if (response && response.type === "buyOrder") {
            setText("Create BuyOrder ");
            setTextStatus("Successfully.");
        } else if (response && response.type === "sellOrder") {
            setText("Create Sell Order ");
            setTextStatus("Successfully.");
        } else if (response && response.type === "matchedOrder") {
            setText("Your order has been ");
            setTextStatus("Matched.");
        }
    }, [response]);

    //   // Function to close modal and reload window
    const closeModal = () => {
        setIsModalOpen(false);
        setIsPaymentModalOpen(false);
    };

    //   // Determine text color based on response type
    const textColorClass =
        response.type === "buyOrder"
            ? "text-green-500 text-xl"
            : response.type === "sellOrder"
            ? "text-green-500 text-xl"
            : response.type === "matchedOrder"
            ? "text-green-500 text-xl"
            : "";

    return (
        <div>
            {isModalOpen && (
                <div className="blurmore">
                    <div className="flex flex-col justify-center bg-400 px-10 pt-6 pb-4 rounded-lg border border-300">
                        <div className="flex flex-col w-1/1 mt-3">
                            <div>
                                {text}
                                <span className={`font-2xl ${textColorClass}`}>
                                    {textStatus}
                                </span>
                            </div>
                        </div>
                        <button
                            className="self-center border-400 border-[2px] rounded py-[8px] px-[32px] m-[16px] bg-green-500 hover:bg-green-700"
                            onClick={closeModal}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalTellDetail;
