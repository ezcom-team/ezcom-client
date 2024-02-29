import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const ModalSell = ({ product, isBuyModalOpen, setisBuyModalOpen }) => {
  const [price, setPrice] = useState();
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");

  function showToast(bool, text) {
    if (bool) {
      toast.success(text)
    }
    else
      toast.error(text)

  }

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = () => {
    createOrder();
    setisBuyModalOpen(false);
  };

  const closeModal = () => {
    setisBuyModalOpen(false);
  };

  async function createOrder() {
    const token = localStorage.getItem("access-token");
    const dataToSend = {
      price: parseFloat(price),
      condition,
      color,
      product_id: product.ID,
    };
    console.log("my sell order ");
    console.log(dataToSend);
    try {
      const response = await axios.post(
        `https://ezcom-backend-production-09b5.up.railway.app/order/sell`,
        dataToSend,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Created order", response.data);
    } catch (error) {
      showToast(false,"Fetch Error")
      console.log("error is ....");
      console.error("Fetch Error", error);
    }

    resetDataToSend();
    window.location.reload();
  }

  const resetDataToSend = () => {
    setPrice();
    setCondition("");
    setColor("");
  };

  return (
    <div>
      {isBuyModalOpen && (
        <div className="modal ">
          <div className="bg-400 ">
            <div className="flex justify-center text-100 text-2xl">
              <span>Sell order</span>
            </div>
            {/* <span className="close-btn " onClick={closeModalSell}>
            &times;
          </span> */}
            <div className="flex flex-col p-2 gap-4 mt-3 text-100">
              <div className="flex p-4 bg-300 gap-4 rounded-sm">
                <div className="border border-300 rounded-l-md">
                  <img
                    src={product.Image}
                    className=" max-h-[100px]"
                    alt="Product Image"
                  />
                </div>
                <div className="flex gap-10">
                  <div className="flex flex-col justify-between">
                    <div>Item</div>
                    <div>Lowest Sell</div>
                    <div>Highest Buy Order</div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>{product.Name}</div>
                    <div className=" text-green-600 text-2xl">
                      {product.Price}
                    </div>
                    <div className=" text-primary text-xl">{product.Price}</div>
                  </div>
                </div>
              </div>
              <form>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-around ">Condition</div>
                  <div className="flex gap-10">
                    <div className="flex gap-1">
                      <select
                        value={condition}
                        onChange={handleConditionChange}
                        // style={{ height: "100px" }}
                        className="text-100 bg-400 pl-2"
                      >
                        <option>--- Select condition ---</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Price</div>
                  <input
                    value={price}
                    type="number"
                    onChange={handlePriceChange}
                    className=" bg-400 rounded-sm text-100 px-1 pl-2"
                  ></input>
                </div>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Color</div>
                  {/* <input className="bg-100 rounded-sm text-400 px-1"></input> */}
                  <select
                    value={color}
                    onChange={handleColorChange}
                    // style={{ height: "100px" }}
                    className="text-100 bg-400 pl-2"
                  >
                    <option>--- Select color ---</option>
                    {product.Color.map((colors) => (
                      <option value={colors}>{colors}</option>
                    ))}
                  </select>
                </div>
                {/* <div className='grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm'>
                <div className='flex justify-center '>Amount to be paid</div>
                <input className='bg-100 rounded-sm text-400 px-1'></input>
              </div> */}
                <div className="flex justify-center mt-4 gap-5">
                  <button
                    onClick={handleSubmit}
                    className=" w-40 bg-green-600 hover:bg-green-700 transition text-200 p-2 rounded"
                  >
                    <span>Create Order</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className=" w-40 bg-primary hover:bg-orange-700 transition text-200 p-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSell;
