import React, { useState } from "react";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./style.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreditCardForm = ({
    dataToSend,
    isPaymentModalOpen,
    setIsPaymentModalOpen,
}) => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expiryDateMonth, setexpiryDateMonth] = useState("");
    const [expiryDateYear, setexpiryDateYear] = useState("");
    const [cvv, setCVV] = useState("");

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value.replace(/[^\d]/g, "").slice(0, 16));
    };

    const handleCardHolderChange = (e) => {
        setCardHolder(e.target.value.toUpperCase());
    };

    const handleexpiryDateMonthChange = (e) => {
        setexpiryDateMonth(e.target.value.replace(/[^\d]/g, "").slice(0, 2));
    };

    const handleexpiryDateYearChange = (e) => {
        setexpiryDateYear(e.target.value.replace(/[^\d]/g, "").slice(0, 2));
    };

    const handleCVVChange = (e) => {
        setCVV(e.target.value.replace(/[^\d]/g, "").slice(0, 3));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to payment gateway)
        const alldata = `${cardNumber} ${cardHolder} ${expiryDateMonth} ${expiryDateYear} ${cvv}`;
        console.log("____alldata___", alldata);

        const updatedFormData = {
            ...dataToSend,
            creditCard: alldata,
        };
        console.log("_______", updatedFormData);
        createOrder(updatedFormData);
    };

    const closeModal = () => {
        setIsPaymentModalOpen(false);
    };

    async function createOrder(dataToSend) {
        const token = localStorage.getItem("access-token");
        console.log("dataformPayment", dataToSend);
        try {
            const response = await axios.post(
                `https://ezcom-backend-production-09b5.up.railway.app/order/buy`,
                dataToSend,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            console.log("Created order", response.data);
        } catch (error) {
            showToast(false, "Fetch Error");
            console.log("error is ....");
            console.error("Fetch Error", error);
        }

        // resetDataToSend();
        window.location.reload();
    }

    function showToast(bool, text) {
        if (bool) {
            toast.success(text);
        } else toast.error(text);
    }

    return (
        <div>
            {isPaymentModalOpen && (
                <div className="modal">
                    <div className="flex justify-center bg-400  p-10 rounded-lg ml-20 mt-10  ">
                        <div className="w-96 h-60 text-100 pb-5 pt-10 px-9 mx-1 text-start align-middle bg-blue-500  bg-gradient-to-b from-blue-800 border-400 border-1 rounded-2xl drop-shadow-xl shadow-xl">
                            <DeveloperBoardIcon
                                className="text-yellow-400"
                                style={{ fontSize: 52 }}
                            />
                            <div className="flex justify-center">
                                <div className="mt-5 text-3xl">
                                    {cardNumber
                                        .padEnd(16, "•")
                                        .match(/.{1,4}/g)
                                        .join(" ")}
                                    <div className="mr-10 mt-2 text-sm align-bottom text-end">
                                        {expiryDateMonth
                                            ? `${expiryDateMonth} / ${expiryDateYear}`
                                            : "MM/YY"}
                                    </div>
                                    <div className="mt-5 align-bottom text-xs text-start">
                                        {cardHolder || "CARD HOLDER"}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="cvv">{cvv.padEnd(3, '•')}</div> */}
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 pl-4 justify-center "
                        >
                            <div className="">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    maxLength="16"
                                    className="bg-300 p-2 rounded-md pl-4 text-back"
                                    placeholder="Card Number"
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div>
                                <label>
                                    <input
                                        type="text"
                                        name="cardHolder"
                                        value={cardHolder}
                                        onChange={handleCardHolderChange}
                                        className="bg-300 p-2 rounded-md pl-4 text-back"
                                        placeholder="Cardholder Name"
                                        style={{ width: "100%" }}
                                    />
                                </label>
                            </div>

                            <div className="flex gap-2">
                                <label>
                                    <input
                                        type="text"
                                        name="MM"
                                        value={expiryDateMonth}
                                        onChange={handleexpiryDateMonthChange}
                                        className="bg-300 p-2 rounded-md pl-4 text-back"
                                        placeholder="MM"
                                        maxLength="2"
                                    />
                                </label>

                                <label>
                                    <input
                                        type="text"
                                        name="YY"
                                        value={expiryDateYear}
                                        onChange={handleexpiryDateYearChange}
                                        className="bg-300 p-2 rounded-md pl-4 text-back"
                                        placeholder="YY"
                                        maxLength="5"
                                    />
                                </label>

                                <label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={cvv}
                                        onChange={handleCVVChange}
                                        className="bg-300 p-2 rounded-md pl-4 text-back"
                                        placeholder="CVV"
                                        maxLength="3"
                                    />
                                </label>
                            </div>
                            <div className="flex gap-2 justify-between">
                                <button
                                    type="submit"
                                    className="flex min-w-[68%] justify-center bg-green-500 rounded-xl p-2  text-100 text-xl"
                                    onClick={handleSubmit}
                                >
                                    PAY NOW
                                </button>
                                <button
                                    className="flex min-w-[30%] justify-center bg-red-500 rounded-xl p-2  text-100 text-xl "
                                    onClick={closeModal}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreditCardForm;
