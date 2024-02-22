import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "../components/Categories";
import { CardItem } from "../components/cardItem";
import { Searchbar } from "../components/Searchbar";
import axios from "axios";
import { PriceRange } from "../components/PriceRange";
import { ColorFilter } from "../components/ColorFilter/ColorFilter";

// import { PromoteSlider } from "../components/PromoteSlider";
// import { Hamburger } from "../components/Hamburger";

function Landing() {
    const [allData, setAllData] = useState([]);
    const [data, setData] = useState([]);
    const [typeFilters, setTypeFilters] = useState([]);
    const [colorFilters, setColorFilters] = useState([]);
    const [priceFilters, setPriceFilters] = useState([]);

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

    const handleTypeChange = (filterValue) => {
        console.log("Filtervalue = ", filterValue);
        setTypeFilters(filterValue);

        const newData = allData.filter((product) => {
            return (
                (filterValue.length === 0 ||
                    filterValue.includes(product.Type)) &&
                (colorFilters.length === 0 ||
                    colorFilters.some((element) =>
                        product.Color.includes(element)
                    )) &&
                (priceFilters.length === 0 ||
                    (product.Price >= priceFilters[0] &&
                        product.Price <= priceFilters[1]))
            );
        });
        setData(newData);
    };

    const handleColorChange = (color) => {
        console.log("🚀 ~ colorChangeHandler ~ colorFilters:", color);
        setColorFilters(color);

        const newData = allData.filter((product) => {
            return (
                (typeFilters.length === 0 ||
                    typeFilters.includes(product.Type)) &&
                (color.length === 0 ||
                    color.some((element) => product.Color.includes(element))) &&
                (priceFilters.length === 0 ||
                    (product.Price >= priceFilters[0] &&
                        product.Price <= priceFilters[1]))
            );
        });

        setData(newData);
    };

    const handlePriceChange = (price) => {
        console.log("Price = ", price);
        setPriceFilters(price);

        const newData = allData.filter((product) => {
            return (
                (typeFilters.length === 0 ||
                    typeFilters.includes(product.Type)) &&
                (colorFilters.length === 0 ||
                    colorFilters.some((element) =>
                        product.Color.includes(element)
                    )) &&
                (price.length === 0 ||
                    (product.Price >= price[0] && product.Price <= price[1]))
            );
        });
        setData(newData);
    };

    // console.log(data);

    return (
        <div className="w-full">
            <Nav />
            <div className="flex justify-center w-full h-auto">
                <div className="w-3/4 py-5 lg:py-10">
                    {/* <PromoteSlider /> */}
                </div>
            </div>
            {/* <div className="flex justify-between w-full h-16 lg:h-24 md:justify-end">
                <div className="flex justify-center m-5 md:hidden">
                    <Hamburger className='z-50' />
                </div>
            </div> */}
            <div className=" w-full h-screen flex justify-center">
                <div className="hidden md:block w-1/4 h-full mx-0 lg:mx-4">
                    <div className="my-5 flex justify-center">
                        <Searchbar />
                    </div>
                    <div className="my-5 flex justify-center ">
                        <Categories onFilterChange={handleTypeChange} />
                    </div>
                    <div className="my-5 flex justify-center">
                        <ColorFilter onColorChange={handleColorChange} />
                    </div>
                    <div className="flex justify-center my-5">
                        <PriceRange onPriceChange={handlePriceChange} />
                    </div>
                </div>
                {allData != null ? (
                    <div className="w-3/4 h-full overflow-y-scroll grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        {data.map((item) => (
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
                    <div className="bg-400 w-3/4 h-full overflow-y-scroll grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        No product
                    </div>
                )}
            </div>
        </div>
    );
}

export default Landing;
