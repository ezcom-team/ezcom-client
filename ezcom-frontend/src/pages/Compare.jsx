import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { CompareSpec } from "../components/Spec/CompareSpec";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddCompare } from "../components/AddCompare";
import { MoreCompareSpec } from "../components/MoreCompare/MoreCompareSpec";
import { CompareData } from "../components/Spec/CompareData";
import { MoreCompareData } from "../components/MoreCompare/MoreCompareData";

export const Compare = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);

    const [selectedItemId, setSelectedItemId] = useState("");
    const [moreData, setMoreData] = useState([]);
    const [moreSpec, setMoreSpec] = useState([]);

    const [openModal, setOpenModal] = useState(false);

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
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, [selectedItemId]);

    const handleOpenModal = () => {
        if (data && data.Type) {
            setOpenModal(true);
        }
    };

    const handleAddToCompare = (itemId) => {
        setSelectedItemId(itemId);
        console.log("Selected item ID at compare:", selectedItemId);
    };

    const handleMoreCompareDelete = (index) => {
        const updatedMoreData = [...moreData];
        updatedMoreData.splice(index, 1);
        setMoreData(updatedMoreData);

        const updatedMoreSpec = [...moreSpec];
        updatedMoreSpec.splice(index, 1);
        setMoreSpec(updatedMoreSpec);
    };
    console.log("Spec:", spec);
    // console.log("MDaata", moreData);
    // console.log("Mspec", moreSpec);

    return (
        <div className="bg-black">
            <div className=" top-0">
                <Nav />
            </div>
            <div className="bg-black text-2xl">
                <AddCompare
                    product={data}
                    open={openModal}
                    setOpen={setOpenModal}
                    type={(data && data.Type) || ""}
                    onUpdateSelectedItemId={handleAddToCompare}
                />
                <div className="flex justify-center text-center text-100 mt-[48px]">
                    <div className="my-auto p-[52px] flex justify-center">
                        <button
                            className="w-10 h-10 bg-300 text-100 text-4xl rounded-full"
                            onClick={handleOpenModal}
                        >
                            +
                        </button>
                    </div>
                    <div>
                        <CompareData item={data} />
                    </div>
                    <div className="flex">
                        {moreData.map((item, index) => (
                            <MoreCompareData
                                item={item}
                                onDelete={() => handleMoreCompareDelete(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center text-center text-100 mb-[48px]">
                    <div className="flex">
                        <div>
                            <table className="">
                                <thead className="text-primary">
                                    <tr className="bg-400">
                                        <th className="p-2">Specs</th>
                                    </tr>
                                </thead>
                                {data.Type === "GPU" ? (
                                    <tbody>
                                        <tr>
                                            <td>VGA</td>
                                        </tr>
                                        <tr>
                                            <td>VGA</td>
                                        </tr>
                                        <tr>
                                            <td>VGA</td>
                                        </tr>
                                    </tbody>
                                ) : data.Type === "headset" ? (
                                    <tbody>
                                        <tr className="bg-300">
                                            <td className="py-2 px-1">
                                                Cable Length
                                            </td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="py-2 px-1">
                                                Connection
                                            </td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="py-2 px-1">
                                                Headset Type
                                            </td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="py-2 px-1">
                                                Microphone
                                            </td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="py-2">
                                                Noise Cancelling
                                            </td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="py-2 px-1">
                                                Weight
                                            </td>
                                        </tr>
                                    </tbody>
                                ) : data.Type === "keyboard" ? (
                                    <tbody>
                                        <tr className="bg-300">
                                            <td className="p-2">Form factor</td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">Height</td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">Length</td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">PCB</td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">RGB</td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">Switches</td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">Weight</td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">Width</td>
                                        </tr>
                                    </tbody>
                                ) : data.Type === "mouse" ? (
                                    <tbody>
                                        <tr className="bg-300">
                                            <td className="p-2">Colors</td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">Sensor</td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">
                                                Button switch
                                            </td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">Connection</td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">Length</td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">Weight</td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">
                                                Polling rate
                                            </td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">
                                                Button force
                                            </td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">Shape</td>
                                        </tr>
                                        <tr className="bg-400">
                                            <td className="p-2">Height</td>
                                        </tr>
                                        <tr className="bg-300">
                                            <td className="p-2">Width</td>
                                        </tr>
                                    </tbody>
                                ) : data.Type === "mousePad" ? (
                                    <tbody>
                                        <tr>
                                            <td>Mousepad</td>
                                        </tr>
                                        <tr>
                                            <td>Mousepad</td>
                                        </tr>
                                        <tr>
                                            <td>Mousepad</td>
                                        </tr>
                                    </tbody>
                                ) : data.Type === "CPU" ? (
                                    <tbody>
                                        <tr>
                                            <td>CPU</td>
                                        </tr>
                                        <tr>
                                            <td>CPU</td>
                                        </tr>
                                        <tr>
                                            <td>CPU</td>
                                        </tr>
                                    </tbody>
                                ) : data.Type === "monitor" ? (
                                    <tbody>
                                        <tr>
                                            <td>monitor</td>
                                        </tr>
                                        <tr>
                                            <td>monitor</td>
                                        </tr>
                                        <tr>
                                            <td>monitor</td>
                                        </tr>
                                    </tbody>
                                ) : (
                                    <div>No data type</div>
                                )}
                            </table>
                        </div>
                        <div>
                            <CompareSpec item={data} spec={spec} />
                        </div>
                    </div>
                    <div className="flex">
                        {moreData.map((item, index) => (
                            <div className="flex" key={index}>
                                <MoreCompareSpec
                                    item={item}
                                    spec={moreSpec[index]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
