import HistoryCard from "./HistoryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../Loading/Loading";

const History = () => {
    const [matchOrder, setMatchOrder] = useState([]);
    const userId = localStorage.getItem("user-id");
    const formattedUserId = userId.slice(1, -1);

    const [loading, setLoading] = useState(true);

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
                setMatchOrder(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className=" min-w-full bg-400 p-5 rounded-b-md">
            <div className="grid grid-cols-[25%_15%_25%_15%_20%]  text-200 rounded-md pb-2">
                <div className="flex justify-center">Items</div>
                <div className="flex justify-center">Price</div>
                <div className="flex justify-center">Trader</div>
                <div className="flex justify-center">Order time</div>
                <div className="flex justify-center">Status</div>
            </div>
            <hr className="h-[2px] border-0 bg-300"></hr>
            {loading === false ? (
                <div>
                    {matchOrder !== null ? (
                        <div>
                            {matchOrder.map((order) => (
                                <HistoryCard
                                    orderID={order.ID}
                                    productImg={
                                        order.Product_img != ""
                                            ? order.Product_img
                                            : "https://github.com/identicons/sumetsm.png"
                                    }
                                    price={order.Price}
                                    traderImg={
                                        order.Seller_id === userId
                                            ? order.Buyer_img
                                            : order.Seller_img
                                    }
                                    trader={
                                        order.Buyer_id === formattedUserId
                                            ? order.SellerName
                                            : order.BuyerName
                                    }
                                    time={order.CreatedAt}
                                    status={order.Status}
                                    order={order}
                                    userId={formattedUserId}
                                    verify={order.Verify}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-100 flex justify-center mt-[64px]">
                            No history
                        </div>
                    )}
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};
export default History;
