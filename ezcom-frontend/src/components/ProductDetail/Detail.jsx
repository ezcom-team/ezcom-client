import picProduct from "../../img/testPic.png";
import { data } from "../../content/detail.js";
// import React from "react";

const Detail = () => {
  return (
    <div className="mx-auto md:max-w-[95vw] lg:max-w-[85vw] xl:max-w-[75vw]">
      <div className="flex flex-col justify-center ml-2 mt-3 ">
        <div className="flex text-200 mb-2">{data.path}</div>
        <div></div>
        <div className="flex  text-200">icon icon icon</div>
      </div>

      <div className="w-100 md:grid md:grid-cols-2 ">
        <div className="mt-10">
          <img src={picProduct} className="" /> 
        </div>
        <div className="w-100 flex flex-col gap-3  bg-400 p-3">
          <div className="">
            <div className="text-3xl text-100 mb-2">{data.nameProduct}</div>
            <div className=" text-200">{data.subNameProduct}</div>
          </div>
          <hr class="h-1 my-3 border-0 bg-300"></hr>

          <div className="grid grid-cols-3 justify-items-center text-200">
            <div className="grid justify-items-center ">
              <div className="mb-2">ราคารับซื้อสูงสุด</div>
              <div className="text-3xl text-100">{data.priceHighBuy}</div>
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

          <hr class="h-1 my-3 border-0 bg-300 mb-6"></hr>
          <div class="flex gap-1 mb-6 text-100 text-xl">
            <button class="flex-grow-0  w-72 bg-green-600 py-3 rounded-md hover:bg-green-500">{data.textBuy}</button>
            <button class="flex-grow-0  w-72 bg-primary rounded-md hover:bg-orange-500">{data.textSell}</button>
            <button class="flex-grow bg-yellow-600 rounded-md hover:bg-yellow-500 w-14">{data.textVS}</button>
          </div>

          <button className="text-200 p-4 flex justify-start text-lg rounded-md hover:bg-300 ">
            รายละเอียดสินค้า
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

