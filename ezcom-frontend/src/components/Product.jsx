import React from "react";
import { useState } from "react";

function Product() {
  const DynamicForm = ({ labels }) => (
    <form className="flex flex-col p-4 text-white rounded-md bg-300">
      {labels.map((label) => (
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
    setSelectedForm(labelsForFormA);
  };
  const showFormB = () => {
    setSelectedForm(labelsForFormB);
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
