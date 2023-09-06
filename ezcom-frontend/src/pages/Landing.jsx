import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "../components/Categories";
import { CardItem } from "../components/cardItem";
import { Searchbar } from "../components/Searchbar";
import axios from 'axios';

import MenuIcon from '@mui/icons-material/Menu';
// import { PromoteSlider } from "../components/PromoteSlider";

function Landing() {
  
  const [data, setData] = useState([])
  
  useEffect(() => {
    async function fetchData() {
    try {
      const response = await axios.get('https://ezcom-backend-production-09b5.up.railway.app/products/')
      setData(response.data)
    } catch (error) {
      console.error('Fetch Error', error)
    }}

    fetchData()

  }, [])
  console.log(data)

  return (
    <div className="w-full">
      <Nav />
      <div className="w-full bg-100 h-auto flex justify-center">
        <div className="bg-400 w-3/4 py-5 lg:py-10">
          {/* <PromoteSlider /> */}
        </div>
      </div>
      <div className="bg-200 w-full h-16 lg:h-24 flex justify-between sm:justify-center md:justify-end">
        <div  className="m-5 flex sm:hidden justify-center">
          <MenuIcon />
        </div>
        <div className="my-1 mx-3 hidden sm:flex md:hidden justify-center z-50">
          <Categories />
        </div>
        <div className="my-1 mx-3 hidden sm:flex md:hidden justify-center z-50">
          <Categories />
        </div>
        <Searchbar />
      </div>
      <div className="bg-200 w-full h-screen flex justify-center">
        <div className="hidden md:block bg-400 w-1/4 h-full mx-0 md:mx-4">
          <div className="m-5 flex justify-center">
            <Categories />
          </div>
          <div className="m-5 flex justify-center">
            <Categories />
          </div>
        </div>
        <div className="bg-200 w-3/4 h-full overflow-y-scroll grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map(item => (
              <CardItem img={item.Image} name={item.Name} price={item.Price} quantity={item.Quantity} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
