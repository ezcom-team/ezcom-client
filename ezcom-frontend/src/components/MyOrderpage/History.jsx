import HistoryCard from "./HistoryCard";
import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [matchOrder, setMatchOrder] = useState([]);
  const userId = localStorage.getItem("user-id");
  const formattedUserId = userId.slice(1, -1);

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
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }

    fetchData();
  }, []);

  console.log("🚀 ~ fetchData ~ matchedOrder:", matchOrder);
  console.log("🚀 ~ useEffect ~ id:", formattedUserId);

  return (
    <div className="h-full min-h-[100vh] min-w-full flex flex-col gap-2 bg-400 p-5 rounded-b-md">
      <div className="grid grid-cols-[12%_12%_12%_40%_20%]  text-100 rounded-md pl-5 pb-2">
        <div className="flex">Items</div>
        <div className="flex">Price</div>
        <div className="flex">Trader</div>
        <div className="flex justify-center">Order time</div>
        <div className="flex">Status</div>
      </div>
      <hr className="h-[2px]  border-0 bg-300"></hr>
      {matchOrder !== null ? (
        <>
          {matchOrder.map(order => (
            <HistoryCard
              orderID={order.ID}
              productImg={
                order.Product_img != ""
                  ? order.Product_img
                  : "https://github.com/identicons/sumetsm.png"
              }
              price={order.Price}
              // need fix img
              traderImg={
                order.Seller_id === userId ? order.Buyer_img : order.Seller_img
              }
              trader={
                order.Buyer_id === formattedUserId
                  ? order.SellerName
                  : order.BuyerName
              }
              time={order.CreatedAt}
              status={order.Status}
            />
          ))}
        </>
      ) : (
        <div className="text-100 flex justify-center mt-[64px]">No history</div>
      )}
    </div>
  );
};
export default History;
