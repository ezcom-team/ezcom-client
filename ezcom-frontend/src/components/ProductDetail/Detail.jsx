import React, { useState } from "react";
// import "../Modal-notwork/Modal.css"; // Import your CSS file for styling
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { data } from "../../content/detail.js";
import Modal from "../Modal-notwork/Modal.jsx";
import { Link } from "react-router-dom";

function Productdetail({ product }) {
  const [isModalOpenSell, setisModalOpenSell] = useState(false);

  const openModalSell = () => {
    setisModalOpenSell(true);
  };

  const closeModalSell = () => {
    setisModalOpenSell(false);
  };

  const [inputValue, setInputValue] = useState("");

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div className="mx-auto md:max-w-[95vw] lg:max-w-[85vw] xl:max-w-[75vw]">
      <div className="w-100 md:grid md:grid-cols-2 mt-10">
        <div className="border border-300 rounded-l-md p-4 ">
          <img src={product.Image} className="" alt="Product Image" />
        </div>
        <div className="w-100 flex flex-col gap-3 bg-400 p-5 rounded-r-md">
          {/* Product Details */}
          <div className="">
            <div className="text-3xl text-100 mb-2">{product.Name}</div>
            <div className="text-200">{product.Type}</div>
          </div>
          <hr className="h-1 my-3 border-0 bg-300"></hr>

          <div className="grid grid-cols-3 justify-items-center text-200">
            <div className="grid justify-items-center ">
              <div className="mb-2">ราคารับซื้อสูงสุด</div>
              <div className="text-3xl text-100">{product.Price}</div>
            </div>
            <div className="grid justify-items-center ">
              <div className="mb-2">ราคาขายต่ำสุด</div>
              <div className="text-3xl  text-100">{data.priceLowSell}</div>
            </div>
            <div className="grid justify-items-center ">
              <div className="mb-2">ราคาขายล่าสุด</div>
              <div className=" text-3xl  text-100">{data.priceLastSell}</div>
            </div>
          </div>

          <hr className="h-1 my-3 border-0 bg-300 mb-6"></hr>

          {/* Buttons */}
          <div className="flex gap-1 mb-6 text-100 text-xl ">
            <button
              id="test"
              className="flex-grow-0 w-72 border-[2px] border-green-600 py-3 rounded-md hover:bg-green-600 duration-500"
              // Open the modal when this button is clicked
            >
              {data.textBuy}
            </button>

            <button
              class="flex-grow-0  w-72 border-[2px] border-primary rounded-md hover:bg-orange-500 duration-500"
              onClick={openModalSell}
            >
              {data.textSell}
            </button>
            <Link
              to={`/Compare/${product.ID}`}
              class="flex justify-center border-[2px] border-yellow-500 rounded-md hover:bg-yellow-500 w-14 duration-500"
            >
              <button>{data.textVS}</button>
            </Link>
          </div>

          <button
            className="text-200 p-4 flex justify-start text-lg rounded-md border-[2px] border-300 hover:bg-300 duration-500"
            // Open the modal when this button is clicked
          >
            รายละเอียดสินค้า
          </button>

          {/* Modal */}
          {isModalOpenSell && (
            <div className="modal-overlay">
              <div className="modal bg-400">
                <div className="flex justify-center text-100 text-2xl">
                  Sell Order
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
                    <div className="text-2xl text-primary">{inputValue*1.07}</div>
                    
                  </div>
                  <div className="flex flex-col flex-1 items-center gap-2">
                    <span>You Get</span>  
                    <div className="text-2xl text-green-600">{inputValue*1}</div>
                  </div>
                  </div>

                  <div className="flex justify-center mt-4 gap-5">
                    <button className=" w-40 bg-green-600 hover:bg-green-700 transition text-200 p-2 rounded">
                    Create Order
                    </button>
                    <button
                      onClick={closeModalSell}
                      className=" w-40 bg-primary hover:bg-orange-700 transition text-200 p-2 rounded"
                    >
                      Cancal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
