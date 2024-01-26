import React, { useState } from "react";
// import "../Modal-notwork/Modal.css"; // Import your CSS file for styling
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModalBuy from "../Modal/ModalBuy.jsx";
import ModalSell from "../Modal/ModalSell.jsx";
import { data } from "../../content/detail.js";
import { Link } from "react-router-dom";

function Productdetail({ product }) {
  const [isBuyModalOpen, setisBuyModalOpen] = useState(false);
  const [isSellModalOpen, setisSellModalOpen] = useState(false);

  const openModalBuy = () => {
    setisBuyModalOpen(true);
  };

  const openModalSell = () => {
    setisSellModalOpen(true);
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
              <div className="mb-2">ราคาขายต่ำสุด</div>
              <div className="text-3xl text-100">{product.Price}</div>
            </div>
            <div className="grid justify-items-center ">
              <div className="mb-2">ราคารับซื้อสูงสุด</div>
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
              onClick={openModalBuy}
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
          <ModalBuy
            product={product}
            isBuyModalOpen={isBuyModalOpen}
            setisBuyModalOpen={setisBuyModalOpen}
          />
          <ModalSell
            product={product}
            isBuyModalOpen={isSellModalOpen}
            setisBuyModalOpen={setisSellModalOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
