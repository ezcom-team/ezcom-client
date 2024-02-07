import React, { useEffect, useState } from "react";
import CardDetail from "../CardDetail/Carddetail.jsx";
import ProgressStep from "./ProgressStep.jsx";
import axios from "axios";
import { CardReceive } from "../CardReceive/CardReceive.jsx";

const ProcessPage = () => {
    const [matchedOrder, setMatchedOrder] = useState([]);
    const [currentStatus, setCurrentStatus] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const response = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/matched-order`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                console.log(response.data);
                setMatchedOrder(response.data);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    const handleActive = (status) => {
        setCurrentStatus(status);
        console.log(currentStatus);
    };

    // console.log(matchedOrder);

    return (
        <div className="flex justify-center">
            <div className="flex w-10/12">
                {/* Left Column */}
                <div className="flex p-4 overflow-y-auto">
                    {/* Display card for each order */}
                    <div className="p-4 mb-4 overflow-auto h-[900px]">
                        <div className="flex justify-center text-2xl text-200">
                            รายการที่ต้องได้รับ
                        </div>
                        {matchedOrder.map((order) => (
                            <CardReceive
                                price={order.Price}
                                image={order.Product_img}
                                name={order.Product_name}
                                setActive={() => handleActive(order.Status)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex-grow  mt-10">
                    <div className="h-[200px] bg-400 w-5/6">
                        <ProgressStep status={currentStatus} />
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto h-[650px] mt-10">
                        <div className="flex flex-col gap-3 p-4 ">
                            <CardDetail />
                            <CardDetail />
                            <CardDetail />
                            <CardDetail />
                            <CardDetail />
                            <CardDetail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessPage;
