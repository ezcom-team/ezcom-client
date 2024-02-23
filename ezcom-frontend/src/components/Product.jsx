import React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Product() {
  const labelsForFormMouse = [
    { id: "image", text: "Image", type: "file" },
    { id: "type", text: "Type", type: "text" },
    { id: "name", text: "Name", type: "text" },
    { id: "color", text: "color", type: "text" },
    { id: "desc", text: "Desc", type: "text" },
    { id: "sensor", text: "Sensor", type: "text" },
    { id: "buttonSwitch", text: "ButtonSwitch", type: "text" },
    { id: "connection", text: "Connection", type: "text" },
    { id: "legth", text: "Legth", type: "text" },
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

  const labelsForFormMousepad = [
    { id: "type", text: "Type", type: "text" },
    { id: "image", text: "Image", type: "file" },
    { id: "name", text: "Name", type: "text" },
    { id: "color", text: "Color", type: "text" },
    { id: "desc", text: "Desc", type: "text" },
    { id: "headset_type", text: "Headset_type", type: "text" },
    { id: "cable_length", text: "Cable_length", type: "text" },
    { id: "connection", text: "Connection", type: "text" },
    { id: "microphone", text: "Microphone", type: "text" },
    { id: "noise_cancelling", text: "Noise_cancelling", type: "text" },
    { id: "weight", text: "Weight", type: "text" },
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];
  const sendData = async formData => {
    console.log("form data :", formData);
    try {
      console.log("string" + " : " + formData.name);
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
    } catch (error) {
      // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
      console.error("Error sending request:", error);
    }
  };

  const DynamicForm = ({ labels }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = e => {
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

    const handleSubmit = e => {
      e.preventDefault();
      sendData(formData);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
            {labels.map(label => (
              <div>
                <label
                  for={label.id}
                  class="block mb-2 text-sm font-medium text-200 dark:text-white"
                >
                  {label.text}
                </label>
                <input
                  id={label.id}
                  type={label.type}
                  name={label.id}
                  class="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="-"
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            class="text-white mb-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </form>
      </div>
    );
  };

  const [selectedForm, setSelectedForm] = useState(null);

  const showFormA = () => {
    setSelectedForm(labelsForFormMouse);
  };
  const showFormB = () => {
    setSelectedForm(labelsForFormMousepad);
  };
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4 text-200">
      <div className="text-4xl text-100">create new product</div>
      <hr className=" min-w-[90px]"/>
      <div className="flex flex-row justify-center min-w-full gap-8">
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 hover:ring-4 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100"
          onClick={showFormA}
        >
          mouse
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={showFormB}
        >
          head phone
        </button>
      </div>
      {selectedForm && <DynamicForm labels={selectedForm} />}
    </div>
  );
}

export default Product;
