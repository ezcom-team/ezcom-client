import React, { useState } from "react";
import ModalBuy from "../Modal/ModalBuy.jsx";
import ModalSell from "../Modal/ModalSell.jsx";
import { data } from "../../content/detail.js";
import { Link } from "react-router-dom";
import { CompareSpec } from "../Spec/CompareSpec.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
    cpuDetails,
    gpuDetails,
    headsetDetails,
    keyboardDetails,
    monitorDetails,
    mouseDetails,
    mousePadDetails,
} from "./SpecDetail.jsx";

function Productdetail({ product, spec, highestBuyOrder, recentMatchedOrder }) {
    const [isBuyModalOpen, setisBuyModalOpen] = useState(false);
    const [isSellModalOpen, setisSellModalOpen] = useState(false);
    const [isMoreDetail, setIsMoreDetail] = useState(false);

    const openModalBuy = () => {
        setisBuyModalOpen(true);
    };

    const openModalSell = () => {
        setisSellModalOpen(true);
    };

    const openMoreDetail = () => {
        setIsMoreDetail(!isMoreDetail);
    };

    const details = {
        GPU: gpuDetails,
        headset: headsetDetails,
        keyboard: keyboardDetails,
        mouse: mouseDetails,
        mousePad: mousePadDetails,
        CPU: cpuDetails,
        monitor: monitorDetails,
    };

    return (
        <div className="mx-auto md:max-w-[95vw] lg:max-w-[85vw] xl:max-w-[75vw]">
            <div className="w-100 md:grid md:grid-cols-2 mt-10">
                <div className="border border-300 rounded-l-md p-4">
                    <img src={product.Image} className="" alt="Product Image" />
                </div>
                <div className="flex flex-col gap-3 bg-400 p-5 rounded-r-md">
                    {/* Product Details */}
                    <div className="">
                        <div className="text-3xl text-100 mb-2">
                            {product.Name}
                        </div>
                        <div className="text-200">{product.Type}</div>
                    </div>
                    <hr className="h-1 my-3 border-0 bg-300"></hr>

                    <div className="grid grid-cols-3 justify-items-center text-200">
                        <div className="grid justify-items-center ">
                            <div className="mb-2">ราคาขายต่ำสุด</div>
                            <div className="text-3xl text-100">
                                ฿ {product.Price}
                            </div>
                        </div>
                        <div className="grid justify-items-center ">
                            <div className="mb-2">ราคารับซื้อสูงสุด</div>
                            <div className="text-3xl  text-100">
                                ฿ {highestBuyOrder}
                            </div>
                        </div>
                        <div className="grid justify-items-center ">
                            <div className="mb-2">ราคาขายล่าสุด</div>
                            <div className=" text-3xl  text-100">
                                ฿ {recentMatchedOrder}
                            </div>
                        </div>
                    </div>

                    <hr className="h-1 my-3 border-0 bg-300 mb-6"></hr>

                    {/* Buttons */}
                    <div className="flex gap-1 mb-6 text-100 text-xl ">
                        <button
                            id="test"
                            className="flex-grow-0 w-72 border-[2px] border-green-600 py-3 rounded-md hover:bg-green-600 duration-500"
                            onClick={openModalBuy}
                        >
                            {data.textBuy}
                        </button>

                        <button
                            className="flex-grow-0  w-72 border-[2px] border-primary rounded-md hover:bg-orange-500 duration-500"
                            onClick={openModalSell}
                        >
                            {data.textSell}
                        </button>
                        <Link
                            to={`/Compare/${product.ID}`}
                            className="flex justify-center border-[2px] border-yellow-500 rounded-md hover:bg-yellow-500 w-14 duration-500"
                        >
                            <button>{data.textVS}</button>
                        </Link>
                    </div>

                    {/* Modal */}
                    <ModalBuy
                        product={product}
                        isBuyModalOpen={isBuyModalOpen}
                        setisBuyModalOpen={setisBuyModalOpen}
                        highestBuyOrder={highestBuyOrder}
                    />
                    <ModalSell
                        product={product}
                        isBuyModalOpen={isSellModalOpen}
                        setisBuyModalOpen={setisSellModalOpen}
                        highestBuyOrder={highestBuyOrder}
                    />
                </div>
            </div>
            <div className="w-100%">
                <div className="flex justify-center">
                    <button
                        className="mt-[24px] text-200 p-4 flex justify-start rounded-md border-[2px] border-300 hover:bg-300 duration-500"
                        onClick={openMoreDetail}
                    >
                        รายละเอียดสินค้า
                        <div className="my-auto">
                            {isMoreDetail ? (
                                <>
                                    <ExpandLessIcon className="ml-[8px]" />
                                </>
                            ) : (
                                <>
                                    <ExpandMoreIcon className="ml-[8px]" />
                                </>
                            )}
                        </div>
                    </button>
                </div>

                {isMoreDetail ? (
                    <div className="flex justify-center text-200 border-[2px] border-300 rounded-md p-[12px] mt-[24px]">
                        <div className="">
                            <div className="text-primary">
                                <div className="bg-400">
                                    <div className="p-2 flex justify-center">
                                        Specs
                                    </div>
                                </div>
                            </div>
                            <div>
                                {details[product.Type].map((detail, index) => (
                                    <div
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "h-10 flex justify-center p-2 bg-300"
                                                : "h-10 flex justify-center p-2"
                                        }
                                    >
                                        <div>{detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <CompareSpec
                            item={product}
                            spec={spec}
                            color={product.Color}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default Productdetail;
