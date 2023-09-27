import React, { useState } from 'react';
import '../Modal/Modal.css'; // Import your CSS file for styling
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { data } from '../../content/detail.js';
import Modal from '../Modal/Modal';

function Productdetail({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto md:max-w-[95vw] lg:max-w-[85vw] xl:max-w-[75vw]">
      {/* Buttons */}
      <div className="flex flex-col justify-center ml-2 mt-3">
        <button className="flex text-200">
          <FavoriteBorderIcon />
        </button>
        <button className="flex text-200">
          <FavoriteBorderIcon />
        </button>
        <button className="flex text-200">
          <FavoriteBorderIcon />
        </button>
      </div>


      <div className="w-100 md:grid md:grid-cols-2">
        <div className="border border-300 rounded-l-md ">
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
              onClick={openModal} // Open the modal when this button is clicked
            >
              {data.textBuy}
            </button>

            <button class="flex-grow-0  w-72 border-[2px] border-primary rounded-md hover:bg-orange-500 duration-500">{data.textSell}</button>
            <button class="flex-grow border-[2px] border-yellow-500 rounded-md hover:bg-yellow-500 w-14 duration-500">{data.textVS}</button>
          </div>

          <button
            className="text-200 p-4 flex justify-start text-lg rounded-md border-[2px] border-300 hover:bg-300 duration-500"
          // Open the modal when this button is clicked
          >
            รายละเอียดสินค้า
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal bg-400">
                <div className='flex justify-center text-100 text-2xl'>Sell Order</div>
                <span className="close-btn " onClick={closeModal}>
                  &times;
                </span>
                <div className='flex flex-col p-2 gap-4 mt-3 text-100'>
                  <div className='flex p-4 bg-300 gap-4 rounded-sm'>
                    <div className="border border-300 rounded-l-md">
                      <img src={product.Image} className=" max-h-[100px]" alt="Product Image" />
                    </div>
                    <div className='flex gap-10'>
                      <div className='flex flex-col justify-between'>
                        <div>Item</div>
                        <div>Lowest Sell</div>
                        <div>Highest Buy Order</div>
                      </div>
                      <div className='flex flex-col justify-between'>
                        <div>{product.Name}</div>
                        <div className=' text-green-600 text-2xl'>{product.Price}</div>
                        <div className=' text-primary text-xl'>{product.Price}</div>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm'>
                    <div className='flex justify-center '>Condition</div>
                    <input className='bg-100 rounded-sm text-400 px-1'></input>
                  </div>
                  <div className='grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm'>
                    <div className='flex justify-center '>Price</div>
                    <input className='bg-100 rounded-sm text-400 px-1'></input>
                  </div>
                  <div className='grid grid-cols-[30%_70%] p-4 bg-300   rounded-sm'>
                    <div className='flex justify-center '>Amount to be paid</div>
                    <input className='bg-100 rounded-sm text-400 px-1'></input>
                  </div>
                  <div className='flex justify-center mt-4 gap-5'>
                  <button className=' w-40 bg-green-600 hover:bg-green-700 transition text-200 p-2 rounded'>Create Order</button>
                  <button className=' w-40 bg-primary hover:bg-orange-700 transition text-200 p-2 rounded'>Cancal</button>
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
