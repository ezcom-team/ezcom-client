import React, { useState,useEffect }  from "react";
import Nav from "../components/Nav";
import Productdetail from "../components/ProductDetail/Detail";
import BuyOrSellOrTrade from "../components/HeaderDetailPage/BuyOrSellOrTrade";
import { useParams } from "react-router-dom";
import axios from "axios";


function Detail() {
  const { id } = useParams();
  const [data,setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try {
      const response = await axios.get(`https://ezcom-backend-production-09b5.up.railway.app/products/${id}`)
      setData(response.data)
    } catch (error) {
      console.error('Fetch Error', error)
    }}

    fetchData()

  }, [])
  console.log(data)

  // console.log(id)
  return (
    <div className="bg-back">
      <Nav />
      <Productdetail product={data}/> 
      <BuyOrSellOrTrade />
    </div>
  );
}

export default Detail;

