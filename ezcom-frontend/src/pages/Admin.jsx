import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
function Admin() {
  const labelsForFormA = [
    { id: "imgae", text: "Image", type: "file" },
    { id: "name", text: "Name", type: "text" },
    { id: "desc", text: "Desc", type: "text" },
    { id: "sensor", text: "Sensor", type: "text" },
    { id: "buttonSwitch", text: "ButtonSwitch", type: "text" },
    { id: "connection", text: "Connection", type: "text" },
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];

  const labelsForFormB = [
    { id: "email", text: "Email", type: "text" },
    { id: "phone", text: "Phone", type: "number" },
    // เพิ่ม label อื่น ๆ ตามต้องการ
  ];

  const DynamicForm = ({ labels }) => (
    <form className="flex flex-col p-4 overflow-scroll text-white rounded-md bg-300 max-h-96">
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
      <button
        type="submit"
        className="mt-3 rounded-md bg-slate-400 text-slate-600"
      >
        create
      </button>
    </form>
  );

  const [selectedForm, setSelectedForm] = useState(null);

  const showFormA = () => {
    setSelectedForm(labelsForFormA);
  };

  const showFormB = () => {
    setSelectedForm(labelsForFormB);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
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
    </div>
  );
}

export default Admin;
