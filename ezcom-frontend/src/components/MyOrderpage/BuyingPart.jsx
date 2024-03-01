import { useEffect, useState } from "react";
import BuyCard from "./BuyCard";
import axios from "axios";
import { Loading } from "../Loading/Loading";

const Buying = () => {
    const [myBuyOrder, setMyBuyOrder] = useState([]);

    const [loading, setLoading] = useState(true);

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
                setMyBuyOrder(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="h-full min-w-full gap-2 p-5 rounded-md bg-400">
            <div className="grid grid-cols-[30%_10%_8%_18%_18%_15%]  text-200 rounded-md pb-2">
                <div className="flex justify-center">Items</div>
                <div className="flex justify-center">Price</div>
                <div className="flex justify-center">Condition</div>
                <div className="flex justify-center">Color</div>
                <div className="flex justify-center">Create Time</div>
                <div className="flex justify-center">Status</div>
            </div>
            <hr className="h-[2px] border-0 bg-300"></hr>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};
export default Buying;
