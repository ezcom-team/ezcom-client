import { useEffect, useState } from "react";
import SellCard from "./SellCard";
import axios from "axios";

const Sell = () => {
    const [mySellOrder, setMySellOrder] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const response = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/sell`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                console.log(response.data);
                setMySellOrder(response.data);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="h-full  min-w-full  gap-2 bg-400 p-5 rounded-md">
            <div className="grid grid-cols-[30%_12%_10%_10%_20%_10%]  text-100 rounded-md">
                <div className="flex pl-[36px]">Items</div>
                <div className="flex justify-center">Price</div>
                <div className="flex justify-center">Condition</div>
                <div className="flex justify-center">Color</div>
                <div className="flex justify-center">Create Time</div>
                <div className="flex justify-center">Status</div>
            </div>
            <hr class="h-[2px]  border-0 bg-300"></hr>
            {mySellOrder ? (
                <div>
                    {mySellOrder.map((sellOrder) => (
                        <SellCard order={sellOrder} />
                    ))}
                </div>
            ) : (
                <div className="text-100 flex justify-center mt-[64px]">
                    No sell order
                </div>
            )}
        </div>
    );
};
export default Sell;
