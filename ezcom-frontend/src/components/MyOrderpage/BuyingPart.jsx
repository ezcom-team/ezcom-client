import { useEffect, useState } from "react";
import BuyCard from "./BuyCard";
import axios from "axios";

const Buying = () => {
    const [myBuyOrder, setMyBuyOrder] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const response = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/buy`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                //   console.log(response.data)
                setMyBuyOrder(response.data);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="h-full  min-w-full  gap-2 bg-400 p-5 rounded-md">
            <div className="grid grid-cols-[30%_10%_8%_18%_18%_12%]  text-200 rounded-md">
                <div className="flex pl-[36px]">Items</div>
                <div className="flex justify-center">Price</div>
                <div className="flex justify-center">Condition</div>
                <div className="flex justify-center">Color</div>
                <div className="flex justify-center">Create Time</div>
                <div className="flex justify-center">Status</div>
            </div>
            <hr class="h-[2px]  border-0 bg-300"></hr>
            {myBuyOrder ? (
                <div>
                    {myBuyOrder.map((buyOrder) => (
                        <BuyCard order={buyOrder} />
                    ))}
                </div>
            ) : (
                <div className="text-100 flex justify-center mt-[64px]">
                    No buy order
                </div>
            )}
        </div>
    );
};
export default Buying;
