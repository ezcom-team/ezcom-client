import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
    const labelsForFormMouse = [
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
        { id: "price", text: "Price", type: "text" },
        { id: "quantity", text: "Quantity", type: "text" },
    ];

    const labelsForFormHeadset = [
        { id: "image", text: "Image", type: "file" },
        { id: "type", text: "Type", type: "text" },
        { id: "name", text: "Name", type: "text" },
        { id: "color", text: "Color", type: "text" },
        { id: "desc", text: "Desc", type: "text" },
        { id: "headset_type", text: "Headset_type", type: "text" },
        { id: "cable_length", text: "Cable_length", type: "text" },
        { id: "connection", text: "Connection", type: "text" },
        { id: "microphone", text: "Microphone", type: "text" },
        { id: "noise_cancelling", text: "Noise_cancelling", type: "text" },
        { id: "weight", text: "Weight", type: "text" },
    ];
    const labelsForFormGPU = [
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
    const labelsForFormCPU = [
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
    const labelsForFormKeyboard = [
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
    const labelsForFormMousepad = [
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
    const labelsForFormMonitor = [
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

    const sendData = async (formData) => {
        console.log("form data :", formData);
        try {
            console.log("color is " + " : " + formData.color);
            // สร้าง request ด้วย Axios

            const response = await axios.post(
                "https://ezcom-backend-production-09b5.up.railway.app/products",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(response.data);

            setSelectedForm("");
            setSelected("");
            success("Create product success");
        } catch (error) {
            // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
            console.error("Error sending request:", error);
            fail("Somthing wrong");
        }
    };
    const DynamicForm = ({ labels }) => {
        const [formData, setFormData] = useState({});

        const handleInputChange = (e) => {
            const { name, value, files, checked } = e.target;
            if (name === "image") {
                setFormData({
                    ...formData,
                    image: files[0],
                });
            } else if (name === "color") {
                const checkboxArray = formData[name] || []; // เรียกใช้ค่าที่เก็บไว้หรือให้เป็นอาร์เรย์ว่างถ้ายังไม่มี
                let updatedArray;
                if (checked) {
                    updatedArray = [...checkboxArray, value]; // เพิ่มค่าเข้าไปในอาร์เรย์
                } else {
                    updatedArray = checkboxArray.filter(
                        (color) => color !== value
                    ); // ลบค่าที่ถูก uncheck ออกจากอาร์เรย์
                }
                setFormData({
                    ...formData,
                    [name]: updatedArray,
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
            console.log(formData);
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            let data = new FormData(); // สร้าง FormData ใหม่

            labels.map((label) => {
                // temp = label.id;
                console.log("check : ", label.id, formData[label.id]);
                if (label.id === "color") {
                    formData[label.id].forEach((element) => {
                        data.append(label.id, element);
                    });
                } else data.append(label.id, formData[label.id]);
            });

            // ส่ง FormData ไปยังเซิร์ฟเวอร์
            console.log("before sens :", data);
            sendData(data);
        };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-3">
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
                                                name={label.id}
                                                value="black"
                                                onChange={handleInputChange}
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
                                                name={label.id}
                                                value="white"
                                                onChange={handleInputChange}
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
                                                name={label.id}
                                                value="pink"
                                                onChange={handleInputChange}
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
                                                name={label.id}
                                                value="yellow"
                                                onChange={handleInputChange}
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
                                                name={label.id}
                                                value="red"
                                                onChange={handleInputChange}
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
                                                name={label.id}
                                                value="green"
                                                onChange={handleInputChange}
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
                                                name={label.id}
                                                value="blue"
                                                onChange={handleInputChange}
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
                                                name={label.id}
                                                value="other"
                                                onChange={handleInputChange}
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
                                        name={label.id}
                                        className="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder={label.id}
                                        onChange={handleInputChange}
                                        required
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="text-white mb-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Create
                    </button>
                </form>
            </div>
        );
    };

    const [selectedForm, setSelectedForm] = useState("");
    const [selected, setSelected] = useState("");

    function success(text) {
        toast.success(text);
    }
    function fail(text) {
        toast.error(text);
    }

    const showFormMouse = () => {
        setSelectedForm(labelsForFormMouse);
        setSelected("mouse");
    };
    const showFormMousePad = () => {
        setSelectedForm(labelsForFormMousepad);
        setSelected("mousePad");
    };
    const showFormHeadset = () => {
        setSelectedForm(labelsForFormHeadset);
        setSelected("headset");
    };
    const showFormKeyboard = () => {
        setSelectedForm(labelsForFormKeyboard);
        setSelected("keyboard");
    };
    const showFormCPU = () => {
        setSelectedForm(labelsForFormCPU);
        setSelected("CPU");
    };
    const showFormGPU = () => {
        setSelectedForm(labelsForFormGPU);
        setSelected("GPU");
    };
    const showFormMonitor = () => {
        setSelectedForm(labelsForFormMonitor);
        setSelected("monitor");
    };
    return (
        <div className="flex flex-col items-center justify-center flex-1 gap-4 text-200">
            <ToastContainer position="top-center" theme="dark" />
            <div className="text-4xl">Create new product</div>
            <div className="flex flex-row justify-center min-w-full gap-8">
                <button
                    type="button"
                    className={`
                    ${
                        selected === "mouse"
                            ? "bg-100 text-400"
                            : "bg-300 text-100"
                    } py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100`}
                    onClick={showFormMouse}
                >
                    mouse
                </button>
                <button
                    type="button"
                    className={`
                    ${
                        selected === "headset"
                            ? "bg-100 text-400"
                            : "bg-300 text-100"
                    } py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100`}
                    onClick={showFormHeadset}
                >
                    headset
                </button>
                <button
                    type="button"
                    className={`
                    ${
                        selected === "mousePad"
                            ? "bg-100 text-400"
                            : "bg-300 text-100"
                    } py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100`}
                    onClick={showFormMousePad}
                >
                    mousePad
                </button>
                <button
                    type="button"
                    className={`
                    ${
                        selected === "keyboard"
                            ? "bg-100 text-400"
                            : "bg-300 text-100"
                    } py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100`}
                    onClick={showFormKeyboard}
                >
                    keyboard
                </button>
                <button
                    type="button"
                    className={`
                    ${
                        selected === "GPU"
                            ? "bg-100 text-400"
                            : "bg-300 text-100"
                    } py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100`}
                    onClick={showFormGPU}
                >
                    GPU
                </button>
                <button
                    type="button"
                    className={`
                    ${
                        selected === "CPU"
                            ? "bg-100 text-400"
                            : "bg-300 text-100"
                    } py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100`}
                    onClick={showFormCPU}
                >
                    CPU
                </button>
                <button
                    type="button"
                    className={`
                    ${
                        selected === "monitor"
                            ? "bg-100 text-400"
                            : "bg-300 text-100"
                    } py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100`}
                    onClick={showFormMonitor}
                >
                    monitor
                </button>
            </div>
            {selectedForm && <DynamicForm labels={selectedForm} />}
        </div>
    );
}

export default Product;
