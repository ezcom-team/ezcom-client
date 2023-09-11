import picProduct from "../../img/testPic.png";
import p1 from "../../img/p1.jpg";
import { data } from "../../content/detail.js";


const PendingCard = () =>{
    return(
        <div className="grid grid-cols-[12%_12%_12%_40%_20%] bg-300 py-3 mb-1  text-200 rounded-md">
            <div className="flex align-middle">
                <div className="h-20 ml-5">
                    <img src={picProduct} className="max-h-full max-w-full" />
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto  text-2xl text-primary">
                    <div className="">{data.priceLowSell}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className="h-10 ">
                        <img src={p1} className="max-h-full max-w-full rounded-full" />
                    </div>
                    <div className="my-auto ">{data.seller}</div>
                </div>
            </div>
            
            <div className="flex align-middle justify-center">
                <div className="my-auto ">
                    <div className="">  Date:{data.buytime}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto text-yellow-300">
                {data.pendingstatus}

                </div>
            </div>
        </div>
    )
}
export default PendingCard;