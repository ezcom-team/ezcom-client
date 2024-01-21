import React, { useState } from "react"
import axios from "axios";
import "./style.css"
const ModalBuy = ({ product, isBuyModalOpen , setisBuyModalOpen}) => {

  const [price, setPrice] = useState(0);
  const [color, setColor] = useState([]);
  const [condition, setCondition] = useState([]);

  const [orderData, setOrderData] = useState({
    product_id: '',
    condition: [],
    price: 0,
    color: [],
  });  

  const handleConditionChange = (value) => {
    if (condition.includes(value)) {
      setCondition(condition.filter(item => item !== value));
    } else {
      setCondition([...condition, value]);
    }
  }

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const handleColorChange = (selectedColor) => {
    if (color.includes(selectedColor)) {
      setColor(color.filter(item => item !== selectedColor));
    } else {
      setColor([...color, selectedColor]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderData({
      product_id: product.ID,
      condition: condition,
      price: price,
      color: color,
    })

    createOrder();
    resetOrderdata();
    setisBuyModalOpen(false); 
  };

  const closeModal = () => {
    setisBuyModalOpen(false); 
  };

  async function createOrder() {
    try {
        const response = await axios.post(`https://ezcom-backend-production-09b5.up.railway.app/order/buy`, orderData);
        console.log('Created order', response.data)
      } catch (error) {
        console.error('Fetch Error', error);
      }
  }

  const resetOrderdata = () => {
    setOrderData({
      product_id: '',
      condition: [],
      price: 0,
      color: [],
    })
  }

  console.log('Buy = ', orderData)

  return (
    <div>
      {isBuyModalOpen && (
        <div className="modal ">
          <div className="bg-400 ">
            <div className="flex justify-center text-100 text-2xl">
              <span>Buy order</span>
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
                      <input
                        type="checkbox"
                        value={condition.includes('A')}
                        onChange={() => handleConditionChange('A')}
                        className="bg-100 rounded-sm text-400 px-1"
                      ></input>
                      <div>A</div>
                    </div>
                    <div className="flex gap-1">
                      <input
                        type="checkbox"
                        value={condition.includes('B')}
                        onChange={() => handleConditionChange('B')}
                        className="bg-100 rounded-sm text-400 px-1"
                      />
                      <div>B</div>
                    </div>
                    <div className="flex gap-1">
                      <input
                        type="checkbox"
                        value={condition.includes('C')}
                        onChange={() => handleConditionChange('C')}
                        className="bg-400 rounded-sm text-400 px-1"
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
                    className=" bg-400 rounded-sm text-100 px-1 pl-2"
                  ></input>
                </div>
                <div className="grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm">
                  <div className="flex justify-center ">Color</div>
                  {/* <input className="bg-100 rounded-sm text-400 px-1"></input> */}
                    <div>
                      {product.Color.map((colors) => (
                          <div key={colors} className="flex gap-1">
                            <input
                              type="checkbox"
                              value={color.includes(colors)}
                              onChange={() => handleColorChange(colors)}
                              className="bg-100 rounded-sm text-400 px-1"
                              />
                            <div>{colors}</div>
                          </div>
                      ))}
                    </div>
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
                    <span>Pay</span>
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

export default ModalBuy;
