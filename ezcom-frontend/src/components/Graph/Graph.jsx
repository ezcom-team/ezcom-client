import React, { useEffect, useState } from "react";
import { CardAllProduct } from "../CardAllProduct/CardAllProduct";
import { Loading } from "../Loading/Loading";
import axios from "axios";
import { EditProductModal } from "../Modal/EditProductModal";

const Graph = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "https://ezcom-backend-production-09b5.up.railway.app/products/"
                );
                setAllProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Fetch Error", error);
            }
        }

        fetchData();
    }, []);

    const openEditModal = (item) => {
        setItem(item);
        setOpenModal(!openModal);
    };

    console.log("🚀 ~ Graph ~ allProduct:", allProduct);

    return (
        <div className="mx-auto mt-10 bg-b2 p-10 rounded-md">
            <div>
                {openModal ? (
                    <>
                        <EditProductModal
                            open={openEditModal}
                            item={item}
                            setIsOpen={openEditModal}
                        />
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div>
                {loading ? (
                    <div className="my-[120px] w-3/4 h-full overflow-y-scroll place-items-center md:place-content-start">
                        <Loading />
                    </div>
                ) : (
                    <>
                        {allProduct != null ? (
                            <div className="h-full overflow-y-scroll grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                                {allProduct.map((item) => (
                                    <div onClick={() => openEditModal(item)}>
                                        <CardAllProduct
                                            img={item.Image}
                                            name={item.Name}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-400 w-3/4 h-full overflow-y-scroll grid place-items-center md:place-content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                                No product
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Graph;
