import pic from '../../img/testPic.png'
import {data} from '../../content/detail'
import picProduct from "../../img/testPic.png";

const SellCard = ({ order }) =>{
    const isoTimestamp = order.CreatedAt;
    const dateObject = new Date(isoTimestamp);
    const formattedTime = dateObject.toLocaleString();

    const getBackgroundColor = (condition) => {
        switch (condition) {
            case 'A':
                return 'bg-green-500';
            case 'B':
                return 'bg-yellow-500';
            case 'C':
                return 'bg-red-500';
            default:
                return 'bg-white';
        }
    }

    return (
        <div className="max-w-[95vw] xl:max-w-[75vw] mx-auto  gap-10 mt-3">
            <div className="grid grid-cols-[30%_12%_10%_10%_20%_10%] bg-300 py-3 mb-1 text-200 rounded-md">
            <div className="flex align-middle">
                <div className="flex h-20 ml-5">
                    <img src={picProduct} className="max-h-full max-w-full" />
                    <div className="my-auto">{data.nameProduct}</div>
                </div>
            </div>
            <div className="flex align-middle justify-center">
                <div className="my-auto text-primary text-2xl ">
                    <div className=""> ฿ {order.Price}</div>
                </div>
            </div>
            <div className="flex align-middle justify-center ">
                <div className="my-auto">
                    <div className={`flex justify-center p-[2px] rounded-3xl w-[44px] h-[28px] my-[8px] font-bold ${getBackgroundColor(order.Condition)}`}>
                        {order.Condition}
                    </div>
                </div>
            </div>
            <div className="flex align-middle justify-center">
                <div className="my-auto justify-center text-red-600 text-2xl">
                    <div className="flex justify-center m-1 p-[4px] rounded-full w-[32px] h-[32px] font-bold"                                 
                        style={{
                            backgroundColor: order.Color,
                        }}
                    ></div>
                </div>
            </div>

            <div className="flex align-middle justify-center">
                <div className="my-auto justify-center">
                    <div className="">{formattedTime}</div>
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