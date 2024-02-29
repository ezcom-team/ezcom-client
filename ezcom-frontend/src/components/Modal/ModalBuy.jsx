import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const ModalBuy = ({ product, isBuyModalOpen, setisBuyModalOpen }) => {
  const [price, setPrice] = useState();
  const [color, setColor] = useState([]);
  const [condition, setCondition] = useState([]);

  function showToast(bool, text) {
    if (bool) {
      toast.success(text)
    }
    else
      toast.error(text)

  }

  const handleConditionChange = (value) => {
    if (condition.includes(value)) {
      setCondition(condition.filter((item) => item !== value));
    } else {
      setCondition([...condition, value]);
    }
  };

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const handleColorChange = (selectedColor) => {
    if (color.includes(selectedColor)) {
      setColor(color.filter((item) => item !== selectedColor));
    } else {
      setColor([...color, selectedColor]);
    }
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
    console.log("my buy order ");
    console.log(dataToSend);
    try {
      const response = await axios.post(
        `https://ezcom-backend-production-09b5.up.railway.app/order/buy`,
        dataToSend,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Created order", response.data);
    } catch (error) {
      showToast(false, "Fetch Error")
      console.log("error is ....");
      console.error("Fetch Error", error);
    }

    resetDataToSend();
    window.location.reload();
  }

  const resetDataToSend = () => {
    setPrice();
    setCondition([]);
    setColor([]);
  };

  return (
    <div>
      {isBuyModalOpen && (
        <div className="modal ">
          <div className="bg-400 ">
            <div className="flex justify-center text-2xl text-100">
              <span>Buy order</span>
            </div>
            {/* <span className="close-btn " onClick={closeModalSell}>
            &times;
          </span> */}
            <div className="flex flex-col gap-4 p-2 mt-3 text-100">
              <div className="flex gap-4 p-4 rounded-sm bg-300">
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
                    <div className="text-2xl text-green-600 ">
                      {product.Price}
                    </div>
                    <div className="text-xl text-primary">{product.Price}</div>
                  </div>
                </div>
              </div>
              <form>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-around ">Condition</div>
                  <div className="flex gap-10">
                    <div className="flex gap-1">
                      <input
                        type="checkbox"
                        value={condition.includes("A")}
                        onChange={() => handleConditionChange("A")}
                        className="px-1 rounded-sm bg-100 text-400"
                      ></input>
                      <div>A</div>
                    </div>
                    <div className="flex gap-1">
                      <input
                        type="checkbox"
                        value={condition.includes("B")}
                        onChange={() => handleConditionChange("B")}
                        className="px-1 rounded-sm bg-100 text-400"
                      />
                      <div>B</div>
                    </div>
                    <div className="flex gap-1">
                      <input
                        type="checkbox"
                        value={condition.includes("C")}
                        onChange={() => handleConditionChange("C")}
                        className="px-1 rounded-sm bg-400 text-400"
                      />
                      <div>C</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Price</div>
                  <input
                    value={price}
                    type="number"
                    onChange={handlePriceChange}
                    className="px-1 pl-2 rounded-sm bg-400 text-100"
                  ></input>
                </div>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Color</div>
                  {/* <input className="px-1 rounded-sm bg-100 text-400"></input> */}
                  <div>
                    {product.Color.map((colors) => (
                      <div key={colors} className="flex gap-1">
                        <input
                          type="checkbox"
                          value={color.includes(colors)}
                          onChange={() => handleColorChange(colors)}
                          className="px-1 rounded-sm bg-100 text-400"
                        />
                        <div>{colors}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className='grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm'>
                <div className='flex justify-center '>Amount to be paid</div>
                <input className='px-1 rounded-sm bg-100 text-400'></input>
              </div> */}
                <div className="flex ">
                  <div className="flex flex-col items-center flex-1 gap-2">
                    <span>Buyer Pay</span>
                    <div className="text-2xl text-primary">{price * 1.07}</div>
                  </div>
                  <div className="flex flex-col items-center flex-1 gap-2">
                    <span>You Get</span>
                    <div className="text-2xl text-green-600">{price * 1}</div>
                  </div>
                </div>

                <div className="flex justify-center gap-5 mt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-40 p-2 transition bg-green-600 rounded hover:bg-green-700 text-200"
                  >
                    <span>Pay</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className="w-40 p-2 transition rounded bg-primary hover:bg-orange-700 text-200"
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

export default ModalBuy;
