import picProduct from "../../img/testPic.png";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import BuyCard from "./BuyCard";
import { data } from "../../content/detail.js";

const Buying = () => {
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
        <div className='h-full  min-w-full  gap-2 bg-200 p-5 rounded-md'>
            <div className="grid grid-cols-[30%_12%_10%_10%_20%]  text-400 rounded-md pl-5">
                <div className='flex'>Items</div>
                <div className='flex'>Price</div>
                <div className='flex'>Max Price</div>
                <div className='flex justify-center'>Progress</div>
                <div className='flex justify-center'>Create Time</div>
            </div>
            <hr class="h-[2px]  border-0 bg-300"></hr>
            <BuyCard/>
        </div>


        
    );
};
export default Buying;
