import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { CompareSpec } from "../components/Spec/CompareSpec";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AddCompare } from "../components/AddCompare";
import { MoreCompareSpec } from "../components/MoreCompare/MoreCompareSpec";
import { CompareData } from "../components/Spec/CompareData";
import { MoreCompareData } from "../components/MoreCompare/MoreCompareData";

export const Compare = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [spec, setSpec] = useState([]);

  const [selectedItemId, setSelectedItemId] = useState("");
  const [moreData, setMoreData] = useState([]);
  const [moreSpec, setMoreSpec] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseProduct = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/products/${id}`
        );
        const responseSpec = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/products/spec/${responseProduct.data.Type}/${responseProduct.data.Specs}`
        );
        setData(responseProduct.data);
        setSpec(responseSpec.data);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseProduct = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/products/${selectedItemId}`
        );
        const responseSpec = await axios.get(
          `https://ezcom-backend-production-09b5.up.railway.app/products/spec/${responseProduct.data.Type}/${responseProduct.data.Specs}`
        );

        setMoreData(moreData => [...moreData, responseProduct.data]);
        setMoreSpec(moreSpec => [...moreSpec, responseSpec.data]);
        console.log(" ---- ", moreData);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    }

    fetchData();
  }, [selectedItemId]);

  const handleOpenModal = () => {
    if (data && data.Type) {
      setOpenModal(true);
    }
  };

  const handleAddToCompare = itemId => {
    setSelectedItemId(itemId);
    console.log("Selected item ID at compare:", selectedItemId);
    console.log("here :", moreData);
  };

  const handleMoreCompareDelete = index => {
    const updatedMoreData = [...moreData];
    updatedMoreData.splice(index, 1);
    setMoreData(updatedMoreData);

    const updatedMoreSpec = [...moreSpec];
    updatedMoreSpec.splice(index, 1);
    setMoreSpec(updatedMoreSpec);
  };

  return (
    <div>
      <div className="top-0 ">
        <Nav />
      </div>
      <div className="text-2xl">
        <AddCompare
          product={data}
          open={openModal}
          setOpen={setOpenModal}
          type={(data && data.Type) || ""}
          onUpdateSelectedItemId={handleAddToCompare}
        />
        <div className="flex justify-center text-center text-100 mt-[48px]">
          <div className="my-auto w-[170px] p-[52px] flex justify-center">
            <button
              className="w-10 h-10 text-sm text-green-800 bg-green-500 rounded-xl"
              onClick={handleOpenModal}
            >
              add
            </button>
          </div>
          <div>
            <CompareData item={data} />
          </div>
          <div className="flex">
            {moreData.map((item, index) => (
              <MoreCompareData
                item={item}
                onDelete={() => handleMoreCompareDelete(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center text-center text-200 mb-[48px] text-base">
          <div className="flex">
            <div>
              <table className="">
                <thead className="text-primary">
                  <tr className="">
                    <th className="h-[40px]"></th>
                  </tr>
                </thead>
                {data.Type === "GPU" ? (
                  <tbody>
                    <tr className="bg-300 w-[144px] overflow-hidden">
                      <td className="p-2">Colors</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Boost clock</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Memory size</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Memory type</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2 w-[170px] overflow-hidden">
                        NVIDIA CUDA cores
                      </td>
                    </tr>
                  </tbody>
                ) : data.Type === "headset" ? (
                  <tbody>
                    <tr className="bg-300">
                      <td className="p-2 w-[170px] overflow-hidden">Colors</td>
                    </tr>
                    <tr className="">
                      <td className="px-1 py-2">Cable Length</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="px-1 py-2">Connection</td>
                    </tr>
                    <tr className="">
                      <td className="px-1 py-2">Headset Type</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="px-1 py-2">Microphone</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Noise Cancelling</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="px-1 py-2">Weight</td>
                    </tr>
                  </tbody>
                ) : data.Type === "keyboard" ? (
                  <tbody>
                    <tr className="bg-300">
                      <td className="p-2 w-[170px] overflow-hidden">Colors</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Form factor</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Height</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Length</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">PCB</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">RGB</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Switches</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Weight</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Width</td>
                    </tr>
                  </tbody>
                ) : data.Type === "mouse" ? (
                  <tbody>
                    <tr className="bg-300">
                      <td className="p-2 w-[170px] overflow-hidden">Colors</td>
                    </tr>

                    <tr className="">
                      <td className="p-2">Sensor</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Button switch</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Connection</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Length</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Weight</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Polling rate</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Button force</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Shape</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Height</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Width</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">DPI</td>
                    </tr>
                  </tbody>
                ) : data.Type === "mousePad" ? (
                  <tbody>
                    <tr className="bg-300">
                      <td className="p-2 w-[170px] overflow-hidden">Colors</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Glide</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Height</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Length</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Material</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Stitched edges</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Thickness</td>
                    </tr>
                  </tbody>
                ) : data.Type === "CPU" ? (
                  <tbody>
                    <tr className="bg-300">
                      <td className="p-2 w-[170px] overflow-hidden">Colors</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Core speed base</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Core speed boost</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Cores</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Socket</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">TDP</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Threads</td>
                    </tr>
                  </tbody>
                ) : data.Type === "monitor" ? (
                  <tbody>
                    <tr className="bg-300">
                      <td className="p-2 w-[170px] overflow-hidden">Colors</td>
                    </tr>
                    <tr className="bg-300">
                      <td className="p-2">Aspect ratio</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Free sync</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Gsync</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Panel tech</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Refresh rate</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Resolution</td>
                    </tr>
                    <tr className="">
                      <td className="p-2">Size</td>
                    </tr>
                  </tbody>
                ) : (
                  <div>No data type</div>
                )}
              </table>
            </div>
            <div className="w-[320px]">
              <CompareSpec item={data} spec={spec} color={data.Color} />
            </div>
          </div>
          <div className="flex">
            {moreData.map((item, index) => (
              <div className="flex" key={index}>
                {/* <MoreCompareSpec item={item} spec={moreSpec[index]} /> */}
                <CompareSpec
                  item={item}
                  spec={moreSpec[index]}
                  color={item.Color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
