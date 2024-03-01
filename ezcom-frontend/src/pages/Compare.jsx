import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { CompareSpec } from "../components/Spec/CompareSpec";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddCompare } from "../components/AddCompare";
import { MoreCompareSpec } from "../components/MoreCompare/MoreCompareSpec";
import { CompareData } from "../components/Spec/CompareData";
import { MoreCompareData } from "../components/MoreCompare/MoreCompareData";
import {
    cpuDetails,
    gpuDetails,
    headsetDetails,
    keyboardDetails,
    monitorDetails,
    mouseDetails,
    mousePadDetails,
} from "../components/ProductDetail/SpecDetail.jsx";
import { Loading } from "../components/Loading/Loading.jsx";

export const Compare = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);

    const [selectedItemId, setSelectedItemId] = useState("");
    const [moreData, setMoreData] = useState([]);
    const [moreSpec, setMoreSpec] = useState([]);

    const [openModal, setOpenModal] = useState(false);

    const details = {
        GPU: gpuDetails,
        headset: headsetDetails,
        keyboard: keyboardDetails,
        mouse: mouseDetails,
        mousePad: mousePadDetails,
        CPU: cpuDetails,
        monitor: monitorDetails,
    };

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

    useEffect(() => {
        async function fetchData() {
            try {
                const responseProduct = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/${selectedItemId}`
                );
                const responseSpec = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/spec/${responseProduct.data.Type}/${responseProduct.data.Specs}`
                );

                setMoreData((moreData) => [...moreData, responseProduct.data]);
                setMoreSpec((moreSpec) => [...moreSpec, responseSpec.data]);
                console.log(" ---- ", moreData);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
        setSelectedItemId("");
    }, [selectedItemId]);

    const handleOpenModal = () => {
        if (data && data.Type) {
            setOpenModal(true);
        }
    };

    const handleAddToCompare = (itemId) => {
        setSelectedItemId(itemId);
        console.log("Selected item ID at compare:", selectedItemId);
        console.log("here :", moreData);
    };

    const handleMoreCompareDelete = (index) => {
        const updatedMoreData = [...moreData];
        updatedMoreData.splice(index, 1);
        setMoreData(updatedMoreData);

        const updatedMoreSpec = [...moreSpec];
        updatedMoreSpec.splice(index, 1);
        setMoreSpec(updatedMoreSpec);
    };

    return (
        <div>
            <div>
                <Nav />
            </div>
            {data.Type !== undefined ? (
                <div className="overflow-auto w-[100%]">
                    <AddCompare
                        product={data}
                        open={openModal}
                        setOpen={setOpenModal}
                        type={(data && data.Type) || ""}
                        onUpdateSelectedItemId={handleAddToCompare}
                    />
                    <div className="flex justify-center text-center text-100 mt-[48px]">
                        <div className="my-auto w-[170px] p-[52px] flex justify-center">
                            <button
                                className="w-10 h-10 text-sm text-green-800 bg-green-500 rounded-xl"
                                onClick={handleOpenModal}
                            >
                                add
                            </button>
                        </div>
                        <div>
                            <CompareData item={data} />
                        </div>
                        <div className="flex">
                            {moreData.map((item, index) => (
                                <MoreCompareData
                                    item={item}
                                    onDelete={() =>
                                        handleMoreCompareDelete(index)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center text-center text-200 mb-[48px] text-base">
                        <div className="flex">
                            <div className="">
                                <div className="text-primary">
                                    <div className="">
                                        <div className="h-[40px]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {details[data.Type].map(
                                            (detail, index) => (
                                                <div
                                                    key={index}
                                                    className={
                                                        index % 2 === 0
                                                            ? "h-10 flex justify-center p-2 bg-300"
                                                            : "h-10 flex justify-center p-2"
                                                    }
                                                >
                                                    <div>{detail}</div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[320px]">
                                <CompareSpec
                                    item={data}
                                    spec={spec}
                                    color={data.Color}
                                />
                            </div>
                        </div>

                        <div className="flex">
                            {moreData.map((item, index) => (
                                <div className="flex" key={index}>
                                    {/* <MoreCompareSpec item={item} spec={moreSpec[index]} /> */}
                                    <CompareSpec
                                        item={item}
                                        spec={moreSpec[index]}
                                        color={item.Color}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <Loading />
                </div>
            )}
        </div>
    );
};
