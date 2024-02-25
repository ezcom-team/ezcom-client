import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

export const EditProductModal = ({ open, item, setIsOpen }) => {
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [selectedForm, setSelectedForm] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseProduct = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/${item.ID}`
                );
                const responseSpec = await axios.get(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/spec/${responseProduct.data.Type}/${responseProduct.data.Specs}`
                );

                setData(responseProduct.data);
                setSpec(responseSpec.data);
                setForm(responseProduct.data.Type);
                setLoading(false);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, [item.ID]);

    const setForm = (type) => {
        setSelectedForm(Mouse);
    };

    const Mouse = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "sensor", text: "Sensor", type: "text" },
        { id: "buttonSwitch", text: "ButtonSwitch", type: "text" },
        { id: "connection", text: "Connection", type: "text" },
        { id: "length", text: "Length", type: "text" },
        { id: "weight", text: "Weight", type: "text" },
        { id: "pollingRate", text: "PollingRate", type: "text" },
        { id: "buttonForce", text: "ButtonForce", type: "text" },
        { id: "shape", text: "Shape", type: "text" },
        { id: "height", text: "Height", type: "text" },
        { id: "width", text: "Width", type: "text" },
        { id: "price", text: "Price", type: "text" },
        { id: "quantity", text: "Quantity", type: "text" },
        // เพิ่ม label อื่น ๆ ตามต้องการ
    ];

    const DynamicForm = ({ labels, initialData, initialSpec }) => {
        var combinedObj = Object.assign({}, initialData, initialSpec);
        const [formData, setFormData] = useState(combinedObj);
        console.log("🚀 ~ DynamicForm ~ formData:", formData);

        const handleInputChange = (e) => {
            const { name, value, files } = e.target;
            if (name === "image") {
                setFormData({
                    ...formData,
                    image: files[0],
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            sendData(formData);
        };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                        {labels.map((label) => (
                            <div>
                                <label
                                    htmlFor={label.id}
                                    class="block mb-2 text-sm font-medium text-200 dark:text-white"
                                >
                                    {label.text}
                                </label>
                                <input
                                    id={label.id}
                                    type={label.type}
                                    name={label.text}
                                    value={
                                        label.id === "image"
                                            ? ""
                                            : formData[label.text]
                                    }
                                    class="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={label.id}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        );
    };

    const handleSubmit = () => {
        createOrder();
        setisBuyModalOpen(false);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // console.log("🚀 ~ EditProductModal ~ data:", data);
    // console.log("🚀 ~ EditProductModal ~ spec:", spec);

    return (
        <div>
            {open && (
                <div className="modal">
                    <div className="bg-400 border-[2px] border-gray-600 rounded-lg p-[24px]">
                        <div className="flex justify-center text-2xl text-100">
                            <span>Edit product</span>
                        </div>
                        <div className="flex flex-col gap-4 p-2 mt-3 text-100">
                            <div className="flex gap-4 p-4 rounded-sm bg-300">
                                <div className="border border-300 rounded-l-md">
                                    <img
                                        src={item.Image}
                                        className=" max-h-[100px]"
                                        alt="Product Image"
                                    />
                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col justify-between">
                                        <div>Item</div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>{item.Name}</div>
                                    </div>
                                </div>
                            </div>
                            <form>
                                <div className="p-4 bg-300 rounded-sm">
                                    {loading ? (
                                        <Loading />
                                    ) : (
                                        <>
                                            {selectedForm && (
                                                <DynamicForm
                                                    labels={selectedForm}
                                                    initialData={data}
                                                    initialSpec={spec}
                                                />
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="flex justify-center gap-5 mt-4">
                                    <button
                                        onClick={handleSubmit}
                                        className="w-40 p-2 transition bg-green-600 rounded hover:bg-green-700 text-200"
                                    >
                                        <span>Save</span>
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="w-40 p-2 transition rounded bg-primary hover:bg-orange-700 text-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
