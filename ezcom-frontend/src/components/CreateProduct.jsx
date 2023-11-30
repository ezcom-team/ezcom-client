import React, { useState } from "react";

function CreateProduct() {
  const [formData, setFormData] = useState({});
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit data", formData);
  };

  return (
    <form onSubmin={handleSubmit}>
      <label>
        Name :
        <input type="text" name="textInpput" value={formData.text} />
      </label>
    </form>
  );
}

export default CreateProduct;
