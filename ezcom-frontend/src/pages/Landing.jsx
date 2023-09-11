import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "../components/Categories";
import { CardItem } from "../components/cardItem";
import { Searchbar } from "../components/Searchbar";
import axios from 'axios';

// import { PromoteSlider } from "../components/PromoteSlider";
// import { Hamburger } from "../components/Hamburger";

function Landing() {
  
  const [allData, setAllData] = useState([])
  const [data, setData] = useState([])
  
  useEffect(() => {
    async function fetchData() {
    try {
      const response = await axios.get('https://ezcom-backend-production-09b5.up.railway.app/products/')
      setAllData(response.data)
      setData(response.data)
    } catch (error) {
      console.error('Fetch Error', error)
    }}

    fetchData()

  }, [])

  const filterChangeHandler = (filtervalue) => {
    console.log('Filtervalue = ', filtervalue);
    if (filtervalue.length != 0) {
      const newData = allData.filter((product) => {
        return filtervalue.includes(product.Type)
      })
      setData(newData)
    }
    else {
      setData(allData)
      console.log('clear')
    }
  }
  console.log(data)

  return (
    <div className="w-full">
      <Nav />
      <div className="w-full bg-400 h-auto flex justify-center">
        <div className="bg-400 w-3/4 py-5 lg:py-10">
          {/* <PromoteSlider /> */}
        </div>
      </div>
      <div className="bg-400 w-full h-16 lg:h-24 flex justify-between md:justify-end">
        <div  className="m-5 flex md:hidden justify-center">
          {/* <Hamburger className='z-50' /> */}
        </div>
        <Searchbar />
      </div>
      <div className="bg-400 w-full h-screen flex justify-center">
        <div className="hidden md:block bg-400 w-1/4 h-full mx-0 lg:mx-4">
          <div className="my-5 flex justify-center">
            <Categories onFilterChange={filterChangeHandler} />
          </div>
          <div className="my-5 flex justify-center">
            <Categories />
          </div>
        </div>
        <div className="bg-400 w-3/4 h-full overflow-y-scroll grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.map(item => (
              <CardItem id={item.ID} img={item.Image} name={item.Name} price={item.Price} quantity={item.Quantity} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
