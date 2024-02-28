import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "../components/Categories";
import { CardItem } from "../components/cardItem";
import { Searchbar } from "../components/Searchbar";
import axios from "axios";
import { PriceRange } from "../components/PriceRange";
import { ColorFilter } from "../components/ColorFilter/ColorFilter";
import { Loading } from "../components/Loading/Loading";

// import { PromoteSlider } from "../components/PromoteSlider";
// import { Hamburger } from "../components/Hamburger";

function Landing() {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [searchFilters, setSearchFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ezcom-backend-production-09b5.up.railway.app/products/"
        );
        setAllData(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }

    fetchData();
  }, []);

  // for adv filter

  // const filterData = (data, filters) => {
  //     return data.filter((product) => {
  //         const advanceFilterMatch =
  //             filters.advanceFilters.length === 0 ||
  //             filters.advanceFilters.includes(product.Type);
  //         const colorFilterMatch =
  //             filters.colorFilters.length === 0 ||
  //             filters.colorFilters.includes(product.Color);

  //         return advanceFilterMatch & colorFilterMatch;
  //     });
  // };

  // const filterChangeHandler = (filterValue) => {
  //     const newData = filterData(allData, {
  //         advanceFilters: filterValue,
  //         colorFilters: colorFilters,
  //     });
  //     setData(newData);
  // };

  // const handleAdvanceFilterChange = ({ advanceFilter, colorFilters }) => {
  //     console.log("Adv Filtervalue = ", advanceFilter);
  //     console.log("Color Filters = ", colorFilters);

  //     const newData = allData.filter((product) => (
  //         (advanceFilter.length === 0 || advanceFilter.includes(product.Type)) &&
  //         (colorFilters.length === 0 || colorFilters.includes(product.Color))
  //     ));

  //     setData(newData);
  // };

  const handleSearchChange = filterValue => {
    console.log("SearchValue = ", filterValue);
    setSearchFilters(filterValue);

    const newData = allData.filter(product => {
      const serachValue = filterValue.toLowerCase();

      return (
        (serachValue.length === 0 ||
          product.Name.toLowerCase().includes(serachValue)) &&
        (typeFilters.length === 0 || typeFilters.includes(product.Type)) &&
        (colorFilters.length === 0 ||
          colorFilters.some(element => product.Color.includes(element))) &&
        (priceFilters.length === 0 ||
          (product.Price >= priceFilters[0] &&
            product.Price <= priceFilters[1]))
      );
    });
    setData(newData);
  };

  const handleTypeChange = filterValue => {
    console.log("Filtervalue = ", filterValue);
    setTypeFilters(filterValue);

    const newData = allData.filter(product => {
      return (
        (searchFilters.length === 0 ||
          product.Name.toLowerCase().includes(searchFilters)) &&
        (filterValue.length === 0 || filterValue.includes(product.Type)) &&
        (colorFilters.length === 0 ||
          colorFilters.some(element => product.Color.includes(element))) &&
        (priceFilters.length === 0 ||
          (product.Price >= priceFilters[0] &&
            product.Price <= priceFilters[1]))
      );
    });
    setData(newData);
  };

  const handleColorChange = color => {
    console.log("🚀 ~ colorChangeHandler ~ colorFilters:", color);
    setColorFilters(color);

    const newData = allData.filter(product => {
      return (
        (searchFilters.length === 0 ||
          product.Name.toLowerCase().includes(searchFilters)) &&
        (typeFilters.length === 0 || typeFilters.includes(product.Type)) &&
        (color.length === 0 ||
          color.some(element => product.Color.includes(element))) &&
        (priceFilters.length === 0 ||
          (product.Price >= priceFilters[0] &&
            product.Price <= priceFilters[1]))
      );
    });

    setData(newData);
  };

  const handlePriceChange = price => {
    console.log("Price = ", price);
    setPriceFilters(price);

    const newData = allData.filter(product => {
      return (
        (searchFilters.length === 0 ||
          product.Name.toLowerCase().includes(searchFilters)) &&
        (typeFilters.length === 0 || typeFilters.includes(product.Type)) &&
        (colorFilters.length === 0 ||
          colorFilters.some(element => product.Color.includes(element))) &&
        (price.length === 0 ||
          (product.Price >= price[0] && product.Price <= price[1]))
      );
    });
    setData(newData);
  };

  return (
    <div className="w-full">
      <Nav />
      <div className="flex justify-center w-full h-auto">
        <div className="w-3/4 py-5 lg:py-10">{/* <PromoteSlider /> */}</div>
      </div>
      {/* <div className="flex justify-between w-full h-16 lg:h-24 md:justify-end">
                <div className="flex justify-center m-5 md:hidden">
                    <Hamburger className='z-50' />
                </div>
            </div> */}
      <div className="flex justify-center w-full h-screen ">
        <div className="hidden w-1/4 h-full mx-0 md:block lg:mx-4">
          <div className="flex justify-center my-5">
            <Searchbar onSearch={handleSearchChange} />
          </div>
          <div className="flex justify-center my-5 ">
            <Categories onFilterChange={handleTypeChange} />
          </div>
          <div className="flex justify-center my-5">
            <ColorFilter onColorChange={handleColorChange} />
          </div>
          <div className="flex justify-center pb-5 my-5">
            <PriceRange onPriceChange={handlePriceChange} />
          </div>
        </div>
        {loading ? (
          <div className="my-[120px] w-3/4 h-full overflow-y-scroll place-items-center md:place-content-start">
            <Loading />
          </div>
        ) : (
          <>
            {allData != null ? (
              <div className="grid w-3/4 h-full grid-cols-1 overflow-y-scroll place-items-center md:place-content-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
            ) : (
              <div className="grid w-3/4 h-full grid-cols-1 overflow-y-scroll bg-400 place-items-center md:place-content-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                No product
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Landing;
