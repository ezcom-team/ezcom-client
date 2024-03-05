import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const ModalSell = ({
    product,
    isBuyModalOpen,
    setisBuyModalOpen,
    highestBuyOrder,
}) => {
    const [price, setPrice] = useState();
    const [color, setColor] = useState("");
    const [condition, setCondition] = useState("");
    const [showTip, setShowTip] = useState(false);

    function showToast(bool, text) {
        if (bool) {
            toast.success(text);
        } else toast.error(text);
    }

    const handleConditionChange = (event) => {
        setCondition(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(Number(event.target.value));
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleSubmit = () => {
        createOrder();
        setisBuyModalOpen(false);
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
        };
        console.log("my sell order ");
        console.log(dataToSend);
        try {
            const response = await axios.post(
                `https://ezcom-backend-production-09b5.up.railway.app/order/sell`,
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

        resetDataToSend();
        window.location.reload();
    }

    const resetDataToSend = () => {
        setPrice();
        setCondition("");
        setColor("");
    };

    return (
        <div>
            {isBuyModalOpen && (
                <div className="modal ">
                    <div className="bg-400 rounded border border-300">
                        <div className="flex justify-center text-200 text-base mt-[32px]">
                            <span>Sell order</span>
                        </div>
                        <div className="flex flex-col p-2 mt-3 text-200">
                            <div className="flex p-4 gap-4 rounded-t-sm">
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
                                        <div className=" text-green-600 text-base">
                                            ฿ {product.Price}
                                        </div>
                                        <div className=" text-primary text-base">
                                            ฿ {highestBuyOrder}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form>
                                <div className="grid grid-cols-[30%_70%] p-4">
                                    <div className="flex justify-around ">
                                        Condition
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="flex gap-1">
                                            <select
                                                value={condition}
                                                onChange={handleConditionChange}
                                                className="text-100 bg-300 pl-2 rounded"
                                                required
                                            >
                                                <option className="bg-400">
                                                    Select condition
                                                </option>
                                                <option
                                                    value="A"
                                                    className="bg-400"
                                                >
                                                    A
                                                </option>
                                                <option
                                                    value="B"
                                                    className="bg-400"
                                                >
                                                    B
                                                </option>
                                                <option
                                                    value="C"
                                                    className="bg-400"
                                                >
                                                    C
                                                </option>
                                            </select>
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
                                                            Condition A:
                                                            Second-hand goods
                                                            that have not been
                                                            unboxed.
                                                        </div>
                                                        <div>
                                                            Condition B:
                                                            Second-hand goods.
                                                        </div>
                                                        <div>
                                                            Condition C: Old
                                                            second-hand goods
                                                            with defects.
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
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
                                        className="bg-300 rounded-sm text-100 px-1 pl-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        required
                                    ></input>
                                </div>
                                <div className="grid grid-cols-[30%_70%] p-4 rounded-b-sm">
                                    <div className="flex justify-center ">
                                        Color
                                    </div>
                                    <select
                                        value={color}
                                        onChange={handleColorChange}
                                        // style={{ height: "100px" }}
                                        className="text-100 bg-300 pl-2 rounded"
                                        required
                                    >
                                        <option className="bg-400">
                                            Select color
                                        </option>
                                        {product.Color.map((colors) => (
                                            <option
                                                value={colors}
                                                className="bg-400"
                                            >
                                                {colors}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex justify-center m-4 gap-5">
                                    <button
                                        onClick={handleSubmit}
                                        className=" w-40 bg-green-600 hover:bg-green-700 transition text-200 p-2 rounded"
                                    >
                                        <span>Create Order</span>
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className=" w-40 bg-primary hover:bg-orange-700 transition text-200 p-2 rounded"
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

export default ModalSell;
