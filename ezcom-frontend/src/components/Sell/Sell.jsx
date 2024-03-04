import { useEffect, useState } from "react";
import SellDetail from "./SellDetail";
import axios from "axios";

const Sell = ({ pid }) => {
  const [sellOrders, setSellOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/order/sells/${pid}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);

        setSellOrders(response.data);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-[75vw] mx-auto mt-10 ">
      <div className="grid grid-cols-[15%_40%_15%_15%_15%] mb-4 text-100">
        <div className="flex justify-center ml-[12px]">Condition</div>
        <div className="">Color</div>
        <div className="">Seller</div>
        <div className="">Price</div>
      </div>
      {sellOrders == null ? (
        <div className="text-100 flex justify-center m-[140px]">No order</div>
      ) : (
        <div>
          {sellOrders.sort((a, b) => a.Price - b.Price).map((order) => (
            <SellDetail
              condition={order.Condition}
              color={order.Color}
              sellerName={order.Seller_name}
              price={order.Price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sell;
