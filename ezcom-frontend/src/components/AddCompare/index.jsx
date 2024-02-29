import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import { CompareCard } from "../CompareCard";

export const AddCompare = ({
  product,
  open,
  setOpen,
  type,
  onUpdateSelectedItemId,
}) => {
  const [allData, setAllData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState("");
  const filteredItems = allData.filter(item => item.Type == type);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ezcom-backend-production-09b5.up.railway.app/products/"
        );
        setAllData(response.data);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const newSelectedItemId = selectedItemId;

    //Callback
    onUpdateSelectedItemId(newSelectedItemId);
  }, [selectedItemId]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCompare = itemId => {
    setOpen(false);
    setSelectedItemId(itemId);
    console.log("Selected item ID:", itemId);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "bg-400",
            // border: '2px solid #000',
            boxShadow: 24,
            // p: 4,
          }}
        >
          {allData != null ? (
            <div className="grid h-full grid-cols-1 overflow-scroll rounded-lg bg-400 place-items-center md:place-content-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {filteredItems
                .filter(item => item.ID !== product.ID)
                .map(item => (
                  <CompareCard
                    id={item.ID}
                    img={item.Image}
                    name={item.Name}
                    price={item.Price}
                    quantity={item.Quantity}
                    onAddToCompare={handleAddToCompare}
                  />
                ))}
            </div>
          ) : (
            <div className="grid h-full grid-cols-1 bg-400 place-items-center md:place-content-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              No product
            </div>
          )}
          <button
            className="absolute top-0 right-0 p-5 text-100"
            onClick={handleClose}
          >
            X
          </button>
        </Box>
      </Modal>
    </div>
  );
};
