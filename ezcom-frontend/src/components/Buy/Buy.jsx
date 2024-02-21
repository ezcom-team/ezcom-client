import BuyDetail from "./BuyDetail";
import SellDetail from "../Sell/SellDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const Buy = ({ pid }) => {
    const [buyOrders, setBuyOrders] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const response = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/buys/${pid}`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                console.log(response.data);

                setBuyOrders(response.data);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="max-w-[75vw] mx-auto mt-10 ">
            <div className="grid grid-cols-[15%_40%_15%_15%_15%] mb-4 text-100">
                <div className="flex justify-center">Condition</div>
                <div className="">Color</div>
                <div className="">Buyer</div>
                <div className="">Price</div>
                <div className=""></div>
            </div>

            {buyOrders == null ? (
                <div className="text-100 flex justify-center m-[140px]">
                    No order
                </div>
            ) : (
                <div>
                    {buyOrders.map((order) => (
                        <BuyDetail
                            conditions={order.Condition}
                            colors={order.Color}
                            buyerName={order.Buyer_name}
                            price={order.Price}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Buy;
