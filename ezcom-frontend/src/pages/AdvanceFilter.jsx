import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { AdvanceCategories } from "../components/AdvanceCategories/AdvanceCategories";
import { Loading } from "../components/Loading/Loading";
import axios, { all } from "axios";
import { CardItem } from "../components/cardItem";

export const AdvanceFilter = () => {
    const [allData, setAllData] = useState([]);
    const [data, setData] = useState([]);
    const [allSpec, setAllSpec] = useState([]);
    const [spec, setSpec] = useState([]);
    const [loading, setLoading] = useState(true);
    const [PID, setPID] = useState([]);

    const [colorValue, setColorValue] = useState([]);
    const [numberValue, setNumberValue] = useState([]);
    const [checkboxValue, setCheckboxValue] = useState([]);

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
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    // for filter

    const filterByColor = (allData, typeFilters, colorFilters) => {
        const newData = allData.filter(
            (product) =>
                (typeFilters.length === 0 || typeFilters === product.Type) &&
                (colorFilters.length === 0 ||
                    colorFilters.some((element) =>
                        product.Color.includes(element)
                    ))
        );

        setColorValue(newData);
        const newID = newData.map((value) => {
            return value.ID;
        });
        return newID;
    };

    const handleColorChange = ({
        typeFilters,
        colorFilters,
        numberValue,
        checkValue,
    }) => {
        setColorValue(colorFilters);
        combinedFilter(typeFilters, colorFilters, numberValue, checkValue);
    };

    const handleTypeChange = ({ typeFilters, colorFilters }) => {
        // console.log("Adv Filtervalue = ", typeFilters);
        // console.log("Color Filters = ", colorFilters);
        async function fetchData() {
            const responseSpec = await axios.get(
                `https://ezcom-backend-production-09b5.up.railway.app/products/specs/${typeFilters}`
            );
            setAllSpec(responseSpec.data);
            setSpec(responseSpec.data);

            console.log("🚀 ~ fetchData ~ setSpec:", allSpec);
        }
        fetchData();

        const newData = allData.filter(
            (product) =>
                (typeFilters.length === 0 || typeFilters === product.Type) &&
                (colorFilters.length === 0 ||
                    colorFilters.includes(product.Color))
        );

        setData(newData);
    };

    const filterByRange = (spec, filterKey) => {
        const storedID = [];
        const box = {};
        let keys = Object.keys(filterKey);
        let countKey = keys.length;
        if (!keys) {
            console.log("in if by range")
            spec.map((item) => {
                storedID.push(item.PID);
            });
            return storedID;
        }
        spec.map((item) => {
            for (const key in filterKey) {
                const itemValue = parseFloat(item[key]);
                // console.log("🚀 ~ spec.map ~ itemValue:", itemValue);
                // console.log("🚀 ~ spec.map ~ key 0 :", filterKey[key][0]);
                // console.log("🚀 ~ spec.map ~ key 1 :", filterKey[key][1]);
                if (
                    itemValue >= parseFloat(filterKey[key][0]) &&
                    itemValue <= parseFloat(filterKey[key][1])
                ) {
                    if (!(item.PID in box)) {
                        box[item.PID] = 1;
                    } else {
                        box[item.PID] += 1;
                    }
                }
            }
        });
        for (const id in box) {
            if (box[id] == countKey) {
                storedID.push(id);
            }
        }
        // [id, id]
        return storedID;
    };

    const handleNumberChange = (type, colorValue, filterValue, checkValue) => {
        setNumberValue(filterValue);
        combinedFilter(type, colorValue, filterValue, checkValue);
    };

    const filterByCheckbox = (spec, filterKey) => {
        const storedID = [];
        const box = {};
        let keys = Object.keys(filterKey);
        let countKey = keys.length;
        if (Object.keys(filterKey).length == 0) {
            console.log("in if by checkbox")
            spec.map((item) => {
                storedID.push(item.PID);
            });
            return storedID;
        }
        spec.map((item) => {
            for (const key in filterKey) {
                // console.log("fil keyyyyy", filterKey[key]);
                // console.log("item keyyyyy", item[key]);
                // console.log("key length", filterKey[key].length);
                if (
                    filterKey[key].length === 0 ||
                    filterKey[key].includes(item[key])
                ) {
                    console.log("true");
                    if (!(item.PID in box)) {
                        box[item.PID] = 1;
                    } else {
                        box[item.PID] += 1;
                    }
                }
            }
        });
        console.log("boxx", box);
        for (const id in box) {
            if (box[id] == countKey) {
                storedID.push(id);
            }
        }
        // [id, id]

        return storedID;
    };

    const handleCheckboxChange = (type, colorValue, n, c) => {
        console.log("🚀 ~ handleCheckboxChange ~ c:", colorValue);
        setCheckboxValue(c);
        combinedFilter(type, colorValue, n, c);
    };

    const combinedFilter = (
        typeFilters,
        colorValue,
        numberValue,
        checkboxValue
    ) => {
        const newID = filterByColor(allData, typeFilters, colorValue);
        const newID1 = filterByRange(allSpec, numberValue);
        const newID2 = filterByCheckbox(allSpec, checkboxValue);
        console.log("🚀 ~ combinedFilter ~ newID:", newID);
        console.log("🚀 ~ combinedFilter ~ newID1:", newID1);
        console.log("🚀 ~ combinedFilter ~ newID2:", newID2);

        const combinedID = newID.filter(
            (value) => newID1.includes(value) && newID2.includes(value)
        );
        console.log("🚀 ~ combinedFilter ~ combinedID:", combinedID);

        setPID(combinedID);
        const newData = allData.filter((item) => combinedID.includes(item.ID));
        setData(newData);
    };

    // console.log("🚀 ~ combinedFilter ~ numberValue:", numberValue);
    // console.log("🚀 ~ combinedFilter ~ checkboxValue:", checkboxValue);
    return (
        <div>
            <Nav />
            <div className="flex justify-center my-[48px]">Filter product</div>
            <div className="flex justify-center m-[24px]">
                <AdvanceCategories
                    onTypeChange={handleTypeChange}
                    onColorChange={handleColorChange}
                    onNumberChange={handleNumberChange}
                    onCheckboxChange={handleCheckboxChange}
                    // checkboxValue={checkboxValue}
                    // setCheckboxValue={setCheckboxValue}
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
