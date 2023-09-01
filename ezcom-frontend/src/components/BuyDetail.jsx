import picProduct from "../img/testPic.png";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import { data } from "../content/detail.js";

const BuyDetail = () => {
    return (
        <div className="grid grid-cols-[15%_40%_15%_15%_15%] bg-300 py-3 mb-1 text-200 rounded-md">
            <div className="flex align-middle">
                <div className="h-20 ml-5">
                    <img src={picProduct} className="max-h-full max-w-full" />
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto ">
                    <div className=""> Condition {data.productCondition}%</div>
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
            <div className="flex align-middle">
                <div className="my-auto  text-2xl text-primary">
                    <div className="">{data.priceLowSell}</div>
                </div>
            </div>
            <div className="flex align-middle my-auto">
                <a
                    className=" bg-green-600 px-8 py-2 rounded-md hover:bg-green-700"
                    href="#"
                >
                    Buy
                </a>
            </div>
        </div>
    );
};
export default BuyDetail;
