import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { ConfirmModal } from "./ConfirmModal";

export const EditProductModal = ({ open, item, setIsOpen }) => {
  const [data, setData] = useState([]);
  const [spec, setSpec] = useState([]);
  const [selectedForm, setSelectedForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

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
        }
        setLoading(false);
      } catch (error) {
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
      console.log(response.data);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  console.log("🚀 ~ EditProductModal ~ itemID:", item.ID);
  console.log("🚀 ~ EditProductModal ~ itemSpec:", item.Specs);

  const mouse = [
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
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];

  const DynamicForm = ({ labels, initialData, initialSpec }) => {
    const combinedObj = Object.assign({}, initialData, initialSpec);
    const [formData, setFormData] = useState(combinedObj);
    const [colors, setColors] = useState([]);

    console.log("🚀 ~ DynamicForm ~ combinedObj:", combinedObj);
    console.log("🚀 ~ DynamicForm ~ initialData:", initialData);

    const handleInputChange = e => {
      const { name, value, files, checked } = e.target;
      if (name === "Image") {
        console.log("🚀 ~ handleInputChange ~ name:", name);
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
          updatedArray = checkboxArray.filter(color => color !== value); // ลบค่าที่ถูก uncheck ออกจากอาร์เรย์
        }
        setColors(updatedArray);
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
      console.log("🚀 ~ handleInputChange ~ :", formData["Color"]);
    };

    const handleSubmit = e => {
      e.preventDefault();

      let data = new FormData(); // สร้าง FormData ใหม่

      labels.map(label => {
        // temp = label.id;
        console.log("check : ", label.id, formData[label.text]);
        if (label.id === "color") {
          colors.forEach(element => {
            data.append(label.id, element);
          });
        } else data.append(label.id, formData[label.text]);
      });
      data.append("specs", item.Specs);
      console.log("check : ", "specs", item.Specs);

      // ส่ง FormData ไปยังเซิร์ฟเวอร์
      console.log("before sens :", data);
      sendData(data);
      setIsOpen(false);
    };

    const sendData = async data => {
      console.log("form data :", data);
      try {
        console.log("color is " + " : " + data.color);
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
        console.log(response.data);
      } catch (error) {
        // ดำเนินการเมื่อมีข้อผิดพลาดในการส่ง request
        console.error("Error sending request:", error);
      }
    };

    console.log(formData.image);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div class="grid gap-6 mb-6 md:grid-cols-3">
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
                          name={label.text}
                          value="red"
                          onChange={handleInputChange}
                        />
                        <label htmlFor={`${label.id}-red`} className="mr-2">
                          Red
                        </label>

                        <input
                          id={`${label.id}-green`}
                          type="checkbox"
                          name={label.text}
                          value="green"
                          onChange={handleInputChange}
                        />
                        <label htmlFor={`${label.id}-green`} className="mr-2">
                          Green
                        </label>

                        <input
                          id={`${label.id}-blue`}
                          type="checkbox"
                          name={label.text}
                          value="blue"
                          onChange={handleInputChange}
                        />
                        <label htmlFor={`${label.id}-blue`} className="mr-2">
                          Blue
                        </label>

                        <input
                          id={`${label.id}-black`}
                          type="checkbox"
                          name={label.text}
                          value="black"
                          onChange={handleInputChange}
                        />
                        <label htmlFor={`${label.id}-black`} className="mr-2">
                          Black
                        </label>

                        <input
                          id={`${label.id}-white`}
                          type="checkbox"
                          name={label.text}
                          value="white"
                          onChange={handleInputChange}
                        />
                        <label htmlFor={`${label.id}-white`}>White</label>
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
                        placeholder="-"
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
              className="w-40 p-2 transition bg-green-600 rounded hover:bg-green-400 text-200"
            >
              <span>Save</span>
            </button>
            <button
              onClick={closeModal}
              className="w-40 p-2 transition border rounded border-primary hover:bg-primary text-200"
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
      {open && (
        <div className="modal">
          <div className="bg-400 rounded-lg p-[24px]">
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
                    className=" bg-primary hover:bg-orange-400 rounded-lg text-xl p-[12px]"
                  >
                    Delete product
                  </button>
                </div>
              </div>
              <form>
                <div className="p-4 rounded-lg bg-300">
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
