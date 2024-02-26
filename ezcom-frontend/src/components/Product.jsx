import React from "react";
import { useState } from "react";
import axios from "axios";

function Product() {
  const labelsForFormMouse = [
    { id: "image", text: "Image", type: "file" },
    { id: "type", text: "Type", type: "text" },
    { id: "name", text: "Name", type: "text" },
    { id: "color", text: "Color", type: "text" },
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
    { id: "legth", text: "Legth", type: "text" },
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
    { id: "freeSync", text: "FreeSync", type: "text" },
  ];
  const sendData = async formData => {
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
    } catch (error) {
      // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
      console.error("Error sending request:", error);
    }
  };
  const DynamicForm = ({ labels }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = e => {
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
          updatedArray = checkboxArray.filter(color => color !== value); // ลบค่าที่ถูก uncheck ออกจากอาร์เรย์
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

    const handleSubmit = e => {
      e.preventDefault();

      let data = new FormData(); // สร้าง FormData ใหม่

      labels.map(label => {
        // temp = label.id;
        console.log("check : ", label.id, formData[label.id]);
        if (label.id === "color") {
          formData[label.id].forEach(element => {
            data.append(label.id, element);
          });
        } else data.append(label.id, formData[label.id]);
      });

      // labels.map(label => {
      //   if (label.id === "color") {
      //     const selectedColors = Array.from(formData.getAll(label.id)).filter(
      //       color => formData.get(label.id + "-" + color)
      //     );
      //     formData.append(label.id, selectedColors.join(", "));
      //   } else {
      //     formData.append(label.id, document.getElementById(label.id).value);
      //   }
      // });

      // ส่ง FormData ไปยังเซิร์ฟเวอร์
      console.log("before sens :", data);
      sendData(data);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            {labels.map(label => (
              <div key={label.id}>
                <label
                  htmlFor={label.id}
                  className="block mb-2 text-sm font-medium text-200 dark:text-white"
                >
                  {label.text}
                </label>
                {label.id === "color" ? (
                  <div>
                    <input
                      id={`${label.id}-red`}
                      type="checkbox"
                      name={label.id}
                      value="red"
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${label.id}-red`} className="mr-2">
                      Red
                    </label>

                    <input
                      id={`${label.id}-green`}
                      type="checkbox"
                      name={label.id}
                      value="green"
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${label.id}-green`} className="mr-2">
                      Green
                    </label>

                    <input
                      id={`${label.id}-blue`}
                      type="checkbox"
                      name={label.id}
                      value="blue"
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${label.id}-blue`} className="mr-2">
                      Blue
                    </label>

                    <input
                      id={`${label.id}-black`}
                      type="checkbox"
                      name={label.id}
                      value="black"
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${label.id}-black`} className="mr-2">
                      Black
                    </label>

                    <input
                      id={`${label.id}-white`}
                      type="checkbox"
                      name={label.id}
                      value="white"
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`${label.id}-white`}>White</label>
                  </div>
                ) : (
                  <input
                    id={label.id}
                    type={label.type}
                    name={label.id}
                    className="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="-"
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

  const [selectedForm, setSelectedForm] = useState(null);

  const showFormMouse = () => {
    setSelectedForm(labelsForFormMouse);
  };
  const showFormMousePad = () => {
    setSelectedForm(labelsForFormMousepad);
  };
  const showFormHeadset = () => {
    setSelectedForm(labelsForFormHeadset);
  };
  const showFormKeyboard = () => {
    setSelectedForm(labelsForFormKeyboard);
  };
  const showFormCPU = () => {
    setSelectedForm(labelsForFormCPU);
  };
  const showFormGPU = () => {
    setSelectedForm(labelsForFormGPU);
  };
  const showFormMonitor = () => {
    setSelectedForm(labelsForFormMonitor);
  };
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4 text-200">
      <div className="text-4xl text-100">create new product</div>

      <p className="text-xl">เลือกประเภท</p>
      <div className="flex flex-row justify-center min-w-full gap-8">
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-100"
          onClick={showFormMouse}
        >
          mouse
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={showFormHeadset}
        >
          head set
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={showFormMousePad}
        >
          mouse pad
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={showFormKeyboard}
        >
          keyboard
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={showFormGPU}
        >
          GPU
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={showFormCPU}
        >
          CPU
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-300 text-100 focus:outline-100 rounded-lg hover:bg-gray-100 hover:text-400 focus:z-10 focus:ring-4 focus:ring-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={showFormMonitor}
        >
          monitor
        </button>
      </div>
      <hr className=" min-w-[300px]" />
      {selectedForm && <DynamicForm labels={selectedForm} />}
    </div>
  );
}

export default Product;
