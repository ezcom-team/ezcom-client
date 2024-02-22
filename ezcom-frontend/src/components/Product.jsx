import React from "react";
import { useState } from "react";

function Product() {
  const labelsForFormMouse = [
    { id: "imgae", text: "Image", type: "file" },
    { id: "name", text: "Name", type: "text" },
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
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];

  const labelsForFormMousepad = [
    { id: "email", text: "Email", type: "text" },
    { id: "phone", text: "Phone", type: "number" },
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];
  const DynamicForm = ({ labels }) => (
    <form className="flex flex-col p-4 text-white rounded-md bg-300">
      {labels.map(label => (
        <label key={label.id}>
          {label.text}
          <div className="border-2 rounded-md border-200">
            <input
              className="px-2 text-gray-200"
              type={label.type}
              name={label.id}
            />
          </div>
        </label>
      ))}
    </form>
  );

  const [selectedForm, setSelectedForm] = useState(null);

  const showFormA = () => {
    setSelectedForm(labelsForFormMouse);
  };
  const showFormB = () => {
    setSelectedForm(labelsForFormMousepad);
  };
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
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
