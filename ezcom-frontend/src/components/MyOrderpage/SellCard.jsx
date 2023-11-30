import pic from '../../img/testPic.png'
import {data} from '../../content/detail'
import picProduct from "../../img/testPic.png";

const SellCard = () =>{
    return (
        <div className="max-w-[95vw] xl:max-w-[75vw] mx-auto  gap-10 mt-3">
            <div className="grid grid-cols-[30%_12%_10%_10%_20%_10%] bg-300 py-3 mb-1  text-200 rounded-md">
            <div className="flex align-middle">
                <div className="flex h-20 ml-5">
                    <img src={picProduct} className="max-h-full max-w-full" />
                    <div className="my-auto">{data.nameProduct}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto text-primary text-2xl ">
                    <div className=""> {data.priceHighBuy}</div>
                </div>
            </div>
            <div className="flex align-middle ">
                <div className="my-auto justify-center">
                    <div className="">  {data.priceLowSell}</div>
                </div>
            </div>
            <div className="flex align-middle justify-center">
                <div className="my-auto justify-center text-red-600 text-2xl">
                    <div className=""> Sell</div>
                </div>
            </div>

            <div className="flex align-middle justify-center">
                <div className="my-auto justify-center">
                    <div className="">  Date:{data.buytime}</div>
                </div>
            </div>

            <div className="flex align-middle justify-center">
                <div className="my-auto justify-center">
                <a
                    className="border-[2px] border-primary px-8 py-3 rounded-md hover:bg-primary text-100"
                    href="#"
                >
                    Cancel
                </a>
                </div>
            </div>

        </div>
        </div> 
    ) 
}

export default SellCard;