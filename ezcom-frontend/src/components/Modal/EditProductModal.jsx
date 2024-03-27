import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { ConfirmModal } from "./ConfirmModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditProductModal = ({ open, item, setIsOpen }) => {
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [selectedForm, setSelectedForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    function showToast(bool, text) {
        if (bool) {
            toast.success(text);
        } else toast.error(text);
    }
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
                if (responseProduct.data.Type === "mouse") {
                    setSelectedForm(mouse);
                } else if (responseProduct.data.Type === "keyboard") {
                    setSelectedForm(keyboard);
                } else if (responseProduct.data.Type === "mousePad") {
                    setSelectedForm(mousePad);
                } else if (responseProduct.data.Type === "headset") {
                    setSelectedForm(headset);
                } else if (responseProduct.data.Type === "GPU") {
                    setSelectedForm(GPU);
                } else if (responseProduct.data.Type === "CPU") {
                    setSelectedForm(CPU);
                } else if (responseProduct.data.Type === "monitor") {
                    setSelectedForm(monitor);
                }
                setLoading(false);
                showToast(true, "Success");
            } catch (error) {
                showToast(false, "Fetch Error");
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, [item.ID]);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openConfirmModal = () => {
        setIsConfirmModalOpen(true);
    };

    const closeConfirmModal = () => {
        setIsConfirmModalOpen(false);
    };

    const confirmDelete = () => {
        deleteProduct();
        setIsConfirmModalOpen(false);
        setIsOpen(false);
    };

    const deleteProduct = async () => {
        try {
            const response = await axios.delete(
                `https://ezcom-backend-production-09b5.up.railway.app/products/${item.ID}`
            );
            showToast(true, "Success from");
        } catch (error) {
            console.error("Error sending request:", error);
            showToast(false, "Error sending request");
        }
    };

    const mouse = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "dpi", text: "DPI", type: "text" },
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
    ];

    const keyboard = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "form_factor", text: "Form_Factor", type: "text" },
        { id: "PCB", text: "PCB", type: "text" },
        { id: "height", text: "Height", type: "text" },
        { id: "length", text: "Length", type: "text" },
        { id: "switches", text: "Switches", type: "text" },
        { id: "RGB", text: "RGB", type: "text" },
        { id: "width", text: "Width", type: "text" },
        { id: "weight", text: "Weight", type: "text" },
    ];

    const mousePad = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "height", text: "Height", type: "text" },
        { id: "thickness", text: "Thickness", type: "text" },
        { id: "material", text: "Material", type: "text" },
        { id: "length", text: "Length", type: "text" },
        { id: "stitched_edges", text: "Stitched_edges", type: "text" },
        { id: "glide", text: "Glide", type: "text" },
    ];

    const headset = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "headset_type", text: "Headset_Type", type: "text" },
        { id: "cable_length", text: "Cable_Length", type: "text" },
        { id: "connection", text: "Connection", type: "text" },
        { id: "microphone", text: "Microphone", type: "text" },
        { id: "noise_cancelling", text: "Noise_Cancelling", type: "text" },
        { id: "weight", text: "Weight", type: "text" },
    ];

    const GPU = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "nvidia_cuda_cores", text: "NVIDIA_CUDA_Cores", type: "text" },
        { id: "memory_size", text: "Memory_Size", type: "text" },
        { id: "boost_clock", text: "Boost_Clock", type: "text" },
        { id: "memory_type", text: "Memory_Type", type: "text" },
    ];

    const CPU = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "socket", text: "Socket", type: "text" },
        { id: "threads", text: "Threads", type: "text" },
        { id: "core_speed_base", text: "Core_Speed_Base", type: "text" },
        { id: "cores", text: "Cores", type: "text" },
        { id: "TDP", text: "TDP", type: "text" },
        { id: "core_speed_boost", text: "Core_Speed_Boost", type: "text" },
    ];

    const monitor = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "size", text: "Size", type: "text" },
        { id: "aspect_ratio", text: "Aspect_Ratio", type: "text" },
        { id: "g_sync", text: "G_Sync", type: "text" },
        { id: "panel_tech", text: "Panel_Tech", type: "text" },
        { id: "resolution", text: "Resolution", type: "text" },
        { id: "refresh_rate", text: "Refresh_Rate", type: "text" },
        { id: "free_sync", text: "FreeSync", type: "text" },
    ];

    const DynamicForm = ({ labels, initialData, initialSpec }) => {
        const combinedObj = Object.assign({}, initialData, initialSpec);
        const [formData, setFormData] = useState(combinedObj);
        const [colors, setColors] = useState([]);

        const handleInputChange = (e) => {
            const { name, value, files, checked } = e.target;
            if (name === "Image") {
                setFormData({
                    ...formData,
                    Image: files[0],
                });
            } else if (name === "Color") {
                const checkboxArray = colors || []; // เรียกใช้ค่าที่เก็บไว้หรือให้เป็นอาร์เรย์ว่างถ้ายังไม่มี
                let updatedArray;
                if (checked) {
                    updatedArray = [...checkboxArray, value]; // เพิ่มค่าเข้าไปในอาร์เรย์
                } else {
                    updatedArray = checkboxArray.filter(
                        (color) => color !== value
                    ); // ลบค่าที่ถูก uncheck ออกจากอาร์เรย์
                }
                setColors(updatedArray);
            } else {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            let data = new FormData(); // สร้าง FormData ใหม่

            labels.map((label) => {
                if (label.id === "color") {
                    colors.forEach((element) => {
                        data.append(label.id, element);
                    });
                } else data.append(label.id, formData[label.text]);
            });
            data.append("specs", item.Specs);
            data.append("pID", spec.PID);

            // ส่ง FormData ไปยังเซิร์ฟเวอร์
            sendData(data);
            showToast(true, "Success before sent");
            setIsOpen(false);
        };

        const sendData = async (data) => {
            try {
                // สร้าง request ด้วย Axios

                const response = await axios.put(
                    `https://ezcom-backend-production-09b5.up.railway.app/products/${item.ID}`,
                    data,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                showToast(true, "Success sent data");
            } catch (error) {
                // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
                console.error("Error sending request:", error);
                showToast(false, "Error sending request:");
            }
        };

        return (
            <div>
                <ToastContainer position="top-center" />
                <form onSubmit={handleSubmit}>
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <div class="grid gap-6 mb-6 md:grid-cols-3">
                                {labels.map((label) => (
                                    <div key={label.id}>
                                        <label
                                            htmlFor={label.id}
                                            className="block mb-2 text-sm font-medium text-200 dark:text-white"
                                        >
                                            {label.text}
                                        </label>
                                        {label.id === "color" ? (
                                            <div className="grid grid-cols-4 gap-y-[4px]">
                                                <div>
                                                    <input
                                                        id={`${label.id}-black`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="black"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-black`}
                                                        className="ml-2"
                                                    >
                                                        Black
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        id={`${label.id}-white`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="white"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-white`}
                                                        className="ml-2"
                                                    >
                                                        White
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        id={`${label.id}-pink`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="pink"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-pink`}
                                                        className="ml-2"
                                                    >
                                                        Pink
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        id={`${label.id}-yellow`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="yellow"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-yellow`}
                                                        className="ml-2"
                                                    >
                                                        Yellow
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        id={`${label.id}-red`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="red"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-red`}
                                                        className="ml-2"
                                                    >
                                                        Red
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        id={`${label.id}-green`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="green"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-green`}
                                                        className="ml-2"
                                                    >
                                                        Green
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        id={`${label.id}-blue`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="blue"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-blue`}
                                                        className="ml-2"
                                                    >
                                                        Blue
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        id={`${label.id}-other`}
                                                        type="checkbox"
                                                        name={label.text}
                                                        value="other"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="bg-transparent cursor-pointer accent-primary opacity-40 checked:opacity-100"
                                                    />
                                                    <label
                                                        htmlFor={`${label.id}-other`}
                                                        className="ml-2"
                                                    >
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        ) : (
                                            <input
                                                id={label.id}
                                                type={label.type}
                                                name={label.text}
                                                value={
                                                    label.id === "image"
                                                        ? formData[label.files]
                                                        : formData[label.text]
                                                }
                                                className="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder={label.id}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

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
        );
    };

    return (
        <div>
            <ToastContainer position="top-center" />
            {open && (
                <div className="modal">
                    <div className="bg-400 rounded-lg p-[24px] border border-300">
                        <div className="flex justify-center text-2xl">
                            <span>Edit Product</span>
                        </div>
                        <div className="flex flex-col gap-4 p-2 mt-3 text-100">
                            <div className="grid grid-cols-3 p-4 rounded-sm ">
                                <div className="flex col-span-2 rounded-l-md">
                                    <img
                                        src={item.Image}
                                        className=" max-h-[100px]"
                                        alt="Product Image"
                                    />
                                    <div className="flex my-auto m-[24px]">
                                        <div className="flex text-2xl p-[8px]">
                                            <div>{item.Name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center my-auto">
                                    <button
                                        onClick={openConfirmModal}
                                        className="text-red-500 bg-300 hover:bg-red-600 hover:text-100 rounded-lg texy base p-[12px]"
                                    >
                                        Delete product
                                    </button>
                                </div>
                            </div>
                            <form>
                                <div className="p-4 rounded-lg">
                                    {selectedForm && (
                                        <DynamicForm
                                            labels={selectedForm}
                                            initialData={data}
                                            initialSpec={spec}
                                        />
                                    )}
                                </div>
                            </form>
                            <div>
                                <ConfirmModal
                                    isOpen={isConfirmModalOpen}
                                    onClose={closeConfirmModal}
                                    onConfirm={confirmDelete}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
