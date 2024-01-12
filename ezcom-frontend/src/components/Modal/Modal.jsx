import React, { useState } from "react"
import "./style.css"
const Modal = ({ type, product, isModalOpen , setisModalOpen}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const closeModal = () => {
    setisModalOpen(false); 
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal ">
          <div className="bg-400 ">
            <div className="flex justify-center text-100 text-2xl">
              {type == "sell" ? (<span>Sell order</span>) : (<span>Buy order</span>)}
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
                    <div className=" text-primary text-xl">
                      {product.Price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                <div className="flex justify-around ">Condition</div>
                <div className="flex gap-10">
                  <div className="flex gap-1">
                    <input
                      type="checkbox"
                      className="bg-100 rounded-sm text-400 px-1"
                    ></input>
                    <div>A</div>
                  </div>
                  <div className="flex gap-1">
                    <input
                      type="checkbox"
                      className="bg-100 rounded-sm text-400 px-1"
                    ></input>
                    <div>B</div>
                  </div>
                  <div className="flex gap-1">
                    <input
                      type="checkbox"
                      className="bg-400 rounded-sm text-400 px-1"
                    ></input>
                    <div>C</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                <div className="flex justify-center ">Price</div>
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  className=" bg-400 rounded-sm text-100 px-1 pl-2"
                ></input>
              </div>
              <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                <div className="flex justify-center ">Color</div>
                {/* <input className="bg-100 rounded-sm text-400 px-1"></input> */}

                <select
                  id="color"
                  name="color"
                  // style={{ height: "100px" }}
                  className="text-100 bg-400 pl-2"
                >
                  <option value="white" >White</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                </select>
              </div>
              {/* <div className='grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm'>
              <div className='flex justify-center '>Amount to be paid</div>
              <input className='bg-100 rounded-sm text-400 px-1'></input>
            </div> */}
              <div className="flex ">
                <div className="flex flex-col flex-1 items-center gap-2">
                  <span>Buyer Pay</span>
                  <div className="text-2xl text-primary">{inputValue * 1.07}</div>

                </div>
                <div className="flex flex-col flex-1 items-center gap-2">
                  <span>You Get</span>
                  <div className="text-2xl text-green-600">{inputValue * 1}</div>
                </div>
              </div>

              <div className="flex justify-center mt-4 gap-5">
                <button className=" w-40 bg-green-600 hover:bg-green-700 transition text-200 p-2 rounded">
              {type == "sell" ? (<span>Create Order</span>) : (<span>Pay</span>)}
                </button>
                <button
                  onClick={closeModal}
                  className=" w-40 bg-primary hover:bg-orange-700 transition text-200 p-2 rounded"
                >
                  Cancal
                </button>
              </div>
            </div>
          </div>

        </div>)}
    </div>

  );
};

export default Modal;
