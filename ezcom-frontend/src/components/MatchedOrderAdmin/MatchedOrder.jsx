import axios from "axios";
import OrderDetailAdmin from "./OrderDetailAndmin";
import { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";

const MatchedOrder = () => {
    const [order, setOrder] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem("access-token");
                const response = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/matched-order`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                setOrder(response.data);
                setLoading(false)
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className=" max-w-[75vw] mx-auto p-2">
            <div className="grid grid-cols-[40%_15%_10%_10%_15%] mb-4 text-200">
                <div className="flex justify-center ml-5">Item</div>
                <div className="">Price</div>
                <div className="">Buyer</div>
                <div className="">Seller</div>
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

export default MatchedOrder;
