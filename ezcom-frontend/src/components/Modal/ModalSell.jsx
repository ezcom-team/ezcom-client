import React, { useState } from "react"
import "./style.css"
const ModalSell = ({ product, isBuyModalOpen , setisBuyModalOpen}) => {

  const [price, setPrice] = useState(0);
  const [color, setColor] = useState([]);
  const [condition, setCondition] = useState([]);

  const [orderData, setOrderData] = useState({
    product_id: '',
    condition: [],
    price: 0,
    color: [],
  });  

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderData({
      product_id: product.ID,
      condition: condition,
      price: price,
      color: color,
    })

    // resetOrderdata();
    setisBuyModalOpen(false);
  };

  const closeModal = () => {
    setisBuyModalOpen(false);
  };

  const resetOrderdata = () => {
    setOrderData({
      product_id: '',
      condition: [],
      price: 0,
      color: [],
    })
  }

  console.log('Sell = ', orderData)

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
                    <div className=" text-primary text-xl">
                      {product.Price}
                    </div>
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
                  // select multi
                    id="color"
                    name="color"
                    value={color}
                    onChange={handleColorChange}
                    // style={{ height: "100px" }}
                    className="text-100 bg-400 pl-2"
                  >
                    {product.Color.map((colors) => (
                        <option value={colors}>{colors}</option>
                    ))}
                  </select>
                </div>
                {/* <div className='grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm'>
                <div className='flex justify-center '>Amount to be paid</div>
                <input className='bg-100 rounded-sm text-400 px-1'></input>
              </div> */}
                <div className="flex ">
                  <div className="flex flex-col flex-1 items-center gap-2">
                    <span>Buyer Pay</span>
                    <div className="text-2xl text-primary">{price * 1.07}</div>

                  </div>
                  <div className="flex flex-col flex-1 items-center gap-2">
                    <span>You Get</span>
                    <div className="text-2xl text-green-600">{price * 1}</div>
                  </div>
                </div>

                <div className="flex justify-center mt-4 gap-5">
                  <button onClick={handleSubmit} className=" w-40 bg-green-600 hover:bg-green-700 transition text-200 p-2 rounded">
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
        </div>)}
    </div>

  );
};

export default ModalSell;
