import axios from "axios";
import React, { useState } from "react";

function TrackingNumber({ setShowSentModal, orderID }) {
  const [number, setNumber] = useState("");
  const closeHandler = () => {
    setShowSentModal(false);
  };
  const createHandler = async () => {
    const token = localStorage.getItem("access-token");
    try {
      const response = await axios.put(
        `https://ezcom-backend-production-09b5.up.railway.app/order/matched-order/tracking-number`,
        {
          orderID: orderID,
          tracking_number: number,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Fetch Error", error);
    }
  };

  const handleInputChange = e => {
    setNumber(e.target.value);
  };
  return (
    <div className="modal">
      <div className="flex flex-col items-center justify-center p-5 rounded-md bg-400">
        <div>
          {/* <label className="block mb-2 text-sm font-medium text-200 dark:text-white">
            Tracking Number
          </label> */}
          <input
            id="tracking_number"
            type="text"
            className="bg-300 border border-gray-300 text-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="tracking number"
            value={number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-row items-center justify-center mt-2">
          <button
            onClick={createHandler}
            className=" mr-3 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-1 py-0.5 text-center"
          >
            Create
          </button>
          <button
            onClick={closeHandler}
            className="text-white bg-300 hover:bg-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-1 py-0.5 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackingNumber;
