import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "../components/Categories";
import { CardItem } from "../components/cardItem";
import { Searchbar } from "../components/Searchbar";
import axios from "axios";

// import { PromoteSlider } from "../components/PromoteSlider";
// import { Hamburger } from "../components/Hamburger";

function Landing() {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ezcom-backend-production-09b5.up.railway.app/products/"
        );
        setAllData(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }

    fetchData();
  }, []);

  const filterChangeHandler = filtervalue => {
    console.log("Filtervalue = ", filtervalue);
    if (filtervalue.length != 0) {
      const newData = allData.filter(product => {
        return filtervalue.includes(product.Type);
      });
      setData(newData);
    } else {
      setData(allData);
      console.log("clear");
    }
  };
  console.log(data);

  return (
    <div className="w-full">
      <Nav />
      <div className="flex justify-center w-full h-auto bg-400">
        <div className="w-3/4 py-5 bg-400 lg:py-10">
          {/* <PromoteSlider /> */}
        </div>
      </div>
      <div className="flex justify-between w-full h-16 bg-400 lg:h-24 md:justify-end">
        <div className="flex justify-center m-5 md:hidden">
          {/* <Hamburger className='z-50' /> */}
        </div>
        <Searchbar />
      </div>
      <div className="flex justify-center w-full h-screen bg-400">
        <div className="hidden w-1/4 h-full mx-0 md:block bg-400 lg:mx-4">
          <div className="flex justify-center my-5">
            <Categories onFilterChange={filterChangeHandler} />
          </div>
          <div className="flex justify-center my-5">
            <Categories />
          </div>
        </div>
        <div className="grid w-3/4 h-full grid-cols-1 overflow-y-scroll bg-400 place-items-center md:place-content-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data.map(item => (
            <CardItem
              id={item.ID}
              img={item.Image}
              name={item.Name}
              price={item.Price}
              quantity={item.Quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
