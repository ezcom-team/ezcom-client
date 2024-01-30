import picProduct from "../../img/testPic.png";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import BuyCard from "./BuyCard";
import { data } from "../../content/detail.js";
import { useEffect, useState } from "react";
import axios from "axios";

const Buying = () => {
    const [myBuyOrder, setMyBuyOrder] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        async function fetchData() {
          try {
              const response = await axios.get(`https://ezcom-backend-production-09b5.up.railway.app/order/buy`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
              );
              console.log(response.data)
              setMyBuyOrder(response.data);
            } catch (error) {
              console.error('Fetch Error', error);
            }
        }
        
        fetchData();
      }, []);

    return (
        // <div className="grid grid-cols-[15%_40%_15%_15%_15%] bg-300 py-3 mb-1 pb-96 text-200 rounded-md">
        //     <div className="flex align-middle">
        //         <div className="h-20 ml-5">
        //             <img src={picProduct} className="max-h-full max-w-full" />
        //         </div>
        //     </div>
        //     <div className="flex align-middle">
        //         <div className="my-auto ">
        //             <div className=""> Condition {data.productCondition}%</div>
        //         </div>
        //     </div>
        //     <div className="flex align-middle">
        //         <div className="my-auto flex gap-2">
        //             <div className="h-10 ">
        //                 <img src={p1} className="max-h-full max-w-full rounded-full" />
        //             </div>
        //             <div className="my-auto ">{data.seller}</div>
        //         </div>
        //     </div>
        //     <div className="flex align-middle">
        //         <div className="my-auto  text-2xl text-primary">
        //             <div className="">{data.priceLowSell}</div>
        //         </div>
        //     </div>
        //     <div className="flex align-middle my-auto">
        //         <a
        //             className=" bg-green-600 px-8 py-2 rounded-md hover:bg-green-700"
        //             href="#"
        //         >
        //             Buy
        //         </a>
        //     </div>
        // </div>
        <div className='h-full  min-w-full  gap-2 bg-400 p-5 rounded-md'>
            <div className="grid grid-cols-[30%_10%_8%_18%_18%_12%]  text-200 rounded-md">
                <div className='flex pl-[36px]'>Items</div>
                <div className='flex justify-center'>Price</div>
                <div className='flex justify-center'>Condition</div>
                <div className='flex justify-center'>Color</div>
                <div className='flex justify-center'>Create Time</div>
                <div className='flex justify-center'>Status</div>
            </div>
            <hr class="h-[2px]  border-0 bg-300"></hr>
            {myBuyOrder.map((buyOrder) => (
                <BuyCard order={buyOrder} />
            ))}
        </div>


        
    );
};
export default Buying;
