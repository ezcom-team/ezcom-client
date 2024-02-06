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

    useEffect(() => {
        async function fetchData() {
            try {
                const responseProduct = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/${id}`
                );
                const responseSpec = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/spec/${responseProduct.data.Type}/${responseProduct.data.Specs}`
                );
                setData(responseProduct.data);
                setSpec(responseSpec.data);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);
    console.log(data);

    // console.log(id)
    return (
        <div className="bg-back">
            <Nav />
            <Productdetail product={data} spec={spec} />
            <BuyOrSellOrTrade pid={id} />
        </div>
    );
}

export default Detail;
