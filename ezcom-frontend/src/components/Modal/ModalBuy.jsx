import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Payment from "./Payment";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const ModalBuy = ({
    product,
    isBuyModalOpen,
    setisBuyModalOpen,
    highestBuyOrder,
}) => {
    const [price, setPrice] = useState();
    const [color, setColor] = useState([]);
    const [condition, setCondition] = useState([]);
    const [verified, setVerified] = useState("");
    const [data, setData] = useState([]);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [showTip, setShowTip] = useState(false);

    isPaymentModalOpen;
    function showToast(bool, text) {
        if (bool) {
            toast.success(text);
        } else toast.error(text);
    }

    const handleConditionChange = (value) => {
        if (condition.includes(value)) {
            setCondition(condition.filter((item) => item !== value));
        } else {
            setCondition([...condition, value]);
        }
    };

    const handlePriceChange = (event) => {
        setPrice(Number(event.target.value));
    };

    const handleColorChange = (selectedColor) => {
        if (color.includes(selectedColor)) {
            setColor(color.filter((item) => item !== selectedColor));
        } else {
            setColor([...color, selectedColor]);
        }
    };

    const handleVerifiedChange = (e) => {
        if (e.target.checked) {
            setVerified("Verified");
        } else {
            setVerified("Not verified");
        }
    };

    const handleSubmit = () => {
        createOrder();
        setisBuyModalOpen(false);
        setIsPaymentModalOpen(true);
    };

    const closeModal = () => {
        setisBuyModalOpen(false);
    };

    async function createOrder() {
        const token = localStorage.getItem("access-token");
        const dataToSend = {
            price: parseFloat(price),
            condition,
            color,
            product_id: product.ID,
            verify: verified,
        };
        setData(dataToSend);
        resetDataToSend();
    }

    const resetDataToSend = () => {
        setPrice();
        setCondition([]);
        setColor([]);
        setVerified();
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
            {isPaymentModalOpen && (
                <div className="modal">
                    <Payment
                        dataToSend={data}
                        isPaymentModalOpen={isPaymentModalOpen}
                        setIsPaymentModalOpen={setIsPaymentModalOpen}
                    />
                </div>
            )}
            {isBuyModalOpen && (
                <div className="modal">
                    <div className="bg-400 rounded border border-300">
                        <div className="flex justify-center text-base text-200 mt-[32px]">
                            <span>Buy order</span>
                        </div>
                        <div className="flex flex-col p-2 mt-3 text-200">
                            <div className="flex gap-4 p-4 rounded-t-sm">
                                <div className="border border-300 rounded-l-md">
                                    <img
                                        src={product.Image}
                                        className=" max-h-[100px]"
                                        alt="Product Image"
                                    />
                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col justify-between">
                                        <div>Item</div>
                                        <div>Lowest Sell</div>
                                        <div>Highest Buy Order</div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>{product.Name}</div>
                                        <div className="text-base text-green-600 ">
                                            ฿ {product.Price}
                                        </div>
                                        <div className="text-base text-primary">
                                            ฿ {highestBuyOrder}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-[30%_70%] p-4">
                                    <div className="flex justify-around ">
                                        Condition
                                    </div>
                                    <div className="flex gap-[24px]">
                                        <div className="flex gap-1">
                                            <input
                                                type="checkbox"
                                                value={condition.includes("A")}
                                                onChange={() =>
                                                    handleConditionChange("A")
                                                }
                                                className="px-1 rounded-sm bg-100 text-400 bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                            ></input>
                                            <div
                                                className={`my-auto flex justify-center mx-1 px-[16px] rounded-xl ${getBackgroundColor(
                                                    "A"
                                                )}`}
                                            >
                                                A
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <input
                                                type="checkbox"
                                                value={condition.includes("B")}
                                                onChange={() =>
                                                    handleConditionChange("B")
                                                }
                                                className="px-1 rounded-sm bg-100 text-400 bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                            />
                                            <div
                                                className={`my-auto flex justify-center mx-1 px-[16px] rounded-xl ${getBackgroundColor(
                                                    "B"
                                                )}`}
                                            >
                                                B
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <input
                                                type="checkbox"
                                                value={condition.includes("C")}
                                                onChange={() =>
                                                    handleConditionChange("C")
                                                }
                                                className="px-1 rounded-sm bg-100 text-400 bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                            />
                                            <div
                                                className={`my-auto flex justify-center mx-1 px-[16px] rounded-xl ${getBackgroundColor(
                                                    "C"
                                                )}`}
                                            >
                                                C
                                            </div>
                                        </div>
                                        <div
                                            className="flex cursor-pointer text-200 hover:text-100"
                                            onMouseEnter={() =>
                                                setShowTip(true)
                                            }
                                            onMouseLeave={() =>
                                                setShowTip(false)
                                            }
                                        >
                                            <HelpOutlineIcon />
                                            {showTip && (
                                                <div className="bg-400 text-200 rounded-md px-[4px] fixed ml-[24px]">
                                                    <div>
                                                        Condition A: Second-hand
                                                        goods that have not been
                                                        unboxed.
                                                    </div>
                                                    <div>
                                                        Condition B: Second-hand
                                                        goods.
                                                    </div>
                                                    <div>
                                                        Condition C: Old
                                                        second-hand goods with
                                                        defects.
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[30%_70%] p-4">
                                    <div className="flex justify-center ">
                                        Price
                                    </div>
                                    <input
                                        value={price}
                                        type="number"
                                        onChange={handlePriceChange}
                                        className="px-1 pl-2 rounded-sm bg-300 text-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        required
                                    ></input>
                                </div>
                                <div className="grid grid-cols-[30%_70%] p-4">
                                    <div className="flex justify-center ">
                                        Color
                                    </div>
                                    <div>
                                        {product.Color.map((colors) => (
                                            <div
                                                key={colors}
                                                className="flex gap-1"
                                            >
                                                <input
                                                    type="checkbox"
                                                    value={color.includes(
                                                        colors
                                                    )}
                                                    onChange={() =>
                                                        handleColorChange(
                                                            colors
                                                        )
                                                    }
                                                    className="px-1 rounded-sm bg-100 text-400 bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                />
                                                <div>{colors}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-[30%_70%] p-4 rounded-b-sm">
                                    <div className="flex justify-center">
                                        Verified
                                    </div>
                                    <div className="flex gap-1">
                                        <input
                                            type="checkbox"
                                            onChange={handleVerifiedChange}
                                            className="px-1 rounded-sm bg-100 text-400 bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                        />
                                        <div>verified</div>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-5 m-4">
                                    <button
                                        onClick={handleSubmit}
                                        className="w-40 p-2 transition bg-green-600 rounded hover:bg-green-700 text-200"
                                    >
                                        <span>Pay</span>
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="w-40 p-2 transition rounded bg-primary hover:bg-orange-700 text-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalBuy;
