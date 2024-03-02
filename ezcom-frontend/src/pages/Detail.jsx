import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Productdetail from "../components/ProductDetail/Productdetail";
import BuyOrSellOrTrade from "../components/HeaderDetailPage/BuyOrSellOrTrade";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [order, setOrder] = useState([]);
    const [matchedOrder, setMatchedOrder] = useState([]);

    const [highestPrice, setHighestPrice] = useState(0);
    const [recentPrice, setRecentPrice] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
            try {
                const responseProduct = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/${id}`
                );
                const responseSpec = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/spec/${responseProduct.data.Type}/${responseProduct.data.Specs}`
                );
                const responeOrder = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/buys/${id}`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                const responeMatchedOrder = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/order/matched-order`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                setData(responseProduct.data);
                setSpec(responseSpec.data);
                setOrder(responeOrder.data);
                setMatchedOrder(responeMatchedOrder.data);
                console.log(
                    "🚀 ~ fetchData ~ responeMatchedOrder.data:",
                    responeMatchedOrder.data
                );
                console.log(
                    "🚀 ~ fetchData ~ responeOrder.data:",
                    responeOrder.data
                );
                highestBuyOrder(responeOrder.data);
                recentMatchedOrder(responeMatchedOrder.data);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    console.log(data);

    const highestBuyOrder = (orders) => {
        for (const order of orders) {
            const currentPrice = order.Price;

            if (currentPrice > highestPrice) {
                setHighestPrice(currentPrice);
            }
        }
    };

    const recentMatchedOrder = (matchedOrders) => {
        let mostRecentOrder = null;
        let mostRecentDate = new Date(0);

        for (const order of matchedOrders) {
            const createdAt = new Date(order.CreatedAt);

            if (createdAt > mostRecentDate) {
                mostRecentDate = createdAt;
                mostRecentOrder = order;
            }
        }

        setRecentPrice(mostRecentOrder ? mostRecentOrder.Price : 0);
    };

    // console.log(id)
    return (
        <div className="bg-back">
            <Nav />
            <Productdetail
                product={data}
                spec={spec}
                highestBuyOrder={highestPrice}
                recentMatchedOrder={recentPrice}
            />
            <BuyOrSellOrTrade pid={id} />
        </div>
    );
}

export default Detail;
