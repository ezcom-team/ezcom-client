import axios from "axios";
import OrderDetailAdmin from "./OrderDetailAndmin";
import { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";

const OrderAdmin = () => {
    const [order, setOrder] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const token = localStorage.getItem("access-token");
                const [responseSell, responseBuy] = await Promise.all([
                    axios.get(
                        `https://ezcom-backend-production-09b5.up.railway.app/order/sells`,
                        {
                            headers: {
                                Authorization: token,
                            },
                        }
                    ),
                    axios.get(
                        `https://ezcom-backend-production-09b5.up.railway.app/order/buys`,
                        {
                            headers: {
                                Authorization: token,
                            },
                        }
                    ),
                ]);

                // Combine both buys and sells data
                const combinedData = [
                    ...responseSell.data,
                    ...responseBuy.data,
                ];

                // Sort the combined data based on the time property
                combinedData.sort((a, b) => {
                    const dateA = new Date(a.CreatedAt);
                    const dateB = new Date(b.CreatedAt);
                    return dateB - dateA;
                });
                setOrder(combinedData);
                setLoading(false);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className=" max-w-[75vw] mx-auto p-2">
            <div className="grid grid-cols-[50%_10%_10%_10%_20%] mb-4 text-200">
                <div className="flex justify-center ml-5">Item</div>
                <div className="">Price</div>
                <div className="">Type</div>
                <div className="">Own</div>
                <div className="">Time</div>
            </div>
            {loading ? (
                <div className="my-[120px] h-full overflow-y-scroll place-items-center">
                    <Loading />
                </div>
            ) : (
                <div>
                    {order ? (
                        <div>
                            {order.map((order) => (
                                <OrderDetailAdmin order={order} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-100 flex justify-center mt-[64px]">
                            No sell order
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default OrderAdmin;
