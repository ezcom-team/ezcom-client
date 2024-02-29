import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { AdvanceCategories } from "../components/AdvanceCategories/AdvanceCategories";
import { Loading } from "../components/Loading/Loading";
import axios from "axios";
import { CardItem } from "../components/cardItem";

export const AdvanceFilter = () => {
    const [allData, setAllData] = useState([]);
    const [data, setData] = useState([]);
    const [allSpec, setAllSpec] = useState([]);
    const [spec, setSpec] = useState([]);
    const [loading, setLoading] = useState(true);
    const [typeFilters, setTypeFilters] = useState();
    // const [colorFilters, setColorFilters] = useState([]);

    const [numberFilters, setNumberFilters] = useState({});
    const [PID, setPID] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseData = await axios.get(
                    "https://ezcom-backend-production-09b5.up.railway.app/products/"
                );
                setAllData(responseData.data);
                setData(responseData.data);
                setLoading(false);
                // console.log("🚀 ~ fetchData ~ setData:", responseData.data);
                const responseSpec = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/specs/${typeFilters}`
                );
                setAllSpec(responseSpec.data);
                setSpec(responseSpec.data);
                console.log(
                    "🚀 ~ fetchData ~ responseSpec:",
                    responseSpec.data
                );
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, [typeFilters]);

    // for filter
    const handleTypeChange = ({ typeFilters, colorFilters }) => {
        setTypeFilters(typeFilters);
        // console.log("Adv Filtervalue = ", typeFilters);
        // console.log("Color Filters = ", colorFilters);

        const newData = allData.filter(
            (product) =>
                (typeFilters.length === 0 || typeFilters === product.Type) &&
                (colorFilters.length === 0 ||
                    colorFilters.includes(product.Color))
        );

        setData(newData);
    };

    const handleColorChange = ({ typeFilters, colorFilters }) => {
        // console.log("Adv Filtervalue = ", typeFilters);
        // console.log("Color Filters = ", colorFilters);

        const newData = allData.filter(
            (product) =>
                (typeFilters.length === 0 || typeFilters === product.Type) &&
                (colorFilters.length === 0 ||
                    colorFilters.some((element) =>
                        product.Color.includes(element)
                    ))
        );

        setData(newData);
    };

    const filterByRange = (spec, filterKey, filterRange) => {
        return spec
            .filter((item) => {
                const itemValue = parseFloat(item[filterKey]);
                return (
                    itemValue >= parseFloat(filterRange[0]) &&
                    itemValue <= parseFloat(filterRange[1])
                );
            })
            .map((filteredItem) => filteredItem.PID);
    };

    const handleNumberChange = (id, filterValue) => {
        setNumberFilters(filterValue);

        const filtered = filterByRange(allSpec, id, [
            filterValue[id][0],
            filterValue[id][1],
        ]);

        setPID(filtered);
        const filteredData = allData.filter((item) =>
            filtered.includes(item.ID)
        );
        setData(filteredData);
    };

    // console.log("🚀 ~ handleNumberChange ~ setPID:", PID);
    console.log("🚀 ~ handleNumberChange ~ setData:", data);
    // console.log("🚀 ~ AdvanceFilter ~ filterValue:", numberFilters);

    return (
        <div>
            <Nav />
            <div className="flex justify-center my-[48px]">Filter product</div>
            <div className="flex justify-center m-[24px]">
                <AdvanceCategories
                    onTypeChange={handleTypeChange}
                    onColorChange={handleColorChange}
                    onNumberChange={handleNumberChange}
                />
            </div>
            {loading ? (
                <div className="my-[120px] h-full overflow-y-scroll place-items-center md:place-content-start">
                    <Loading />
                </div>
            ) : (
                <div className="flex justify-center">
                    {allData != null ? (
                        <div className="grid gap-6 w-3/4 h-full grid-cols-1 overflow-y-scroll place-items-center md:place-content-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
                        <div className="grid h-full grid-cols-1 overflow-y-scroll bg-400 place-items-center md:place-content-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                            No product
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
