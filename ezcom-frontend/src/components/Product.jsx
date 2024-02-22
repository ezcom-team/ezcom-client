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
    { id: "email", text: "Email", type: "text" },
    { id: "phone", text: "Phone", type: "number" },
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
      sendData(formData); // ส่งข้อมูลผ่าน Axios เมื่อ form ถูกส่ง
    };

    return (
      <form
        className="flex flex-col p-4 text-white rounded-md"
        onSubmit={handleSubmit}
      >
        {labels.map(label => (
          <div className="flex flex-wrap w-auto max-h-50">
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="text-200"
            >
              {label.type === "file" ? (
                <input type={label.type} />
              ) : (
                <TextField
                  id={label.id}
                  type={label.type}
                  name={label.id}
                  label={label.text}
                  variant="outlined"
                  color="primary"
                  onChange={handleInputChange}
                />
              )}
            </Box>
          </div>
        ))}
        <button
          type="submit"
          className="p-1 mt-4 text-white border-2 border-white rounded-sm"
        >
          Submit
        </button>
      </form>
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
      <div className="flex flex-row gap-8">
        <button
          className="p-1 text-white border-2 border-white rounded-sm"
          onClick={showFormA}
        >
          mouse
        </button>
        <button
          className="p-1 text-white border-2 border-white rounded-sm"
          onClick={showFormB}
        >
          mousepad
        </button>
        <button className="p-1 text-white border-2 border-white rounded-sm">
          cpu
        </button>
      </div>
      {selectedForm && <DynamicForm labels={selectedForm} />}
    </div>
  );
}

export default Product;
