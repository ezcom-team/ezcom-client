import picProduct from '../img/testPic.png'
import { data } from "../content/detail";
import p2 from '../img/p2.jpg'


const OrderDetailAdmin = () => {
    return (
        <div className="grid grid-cols-[40%_15%_10%_10%_15%_10%] bg-300 text-200 py-3 mb-1 ">
            <div className="flex align-middle pl-10">
                <div className="h-20 ml-5">
                    <img src={picProduct} className='max-h-full max-w-full' />
                </div>
                <div className="my-auto ">
                    <div className='ml-2 text-xl'>
                    {data.nameProduct}
                    </div>
                    <div className='flex ml-3'>
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                    <div className='ml-1'>A</div>
                    </div>
                </div>
            </div>
            
            <div className="flex align-middle">
                <div className="my-auto flex gap-2 text-2xl text-primary">
                    <div className="my-auto ">{data.priceHighBuy}</div>
                </div>
            </div>
            <div className="flex align-middle pl-4">
                <div className="my-auto  text-2xl text-red-600">
                    <div className="">{data.type}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto text-100 text-2xl">
                    <div className="">{data.buyer}</div>
                </div>
            </div>
            
            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className="my-auto ">{data.buytime}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto flex gap-2 round">
                    <a className="border-[2px] border-primary px-8 py-2 rounded-md hover:bg-orange-600" href='#'>
                        Edit
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
export default OrderDetailAdmin;