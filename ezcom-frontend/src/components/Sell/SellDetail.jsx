import picProduct from '../../img/testPic.png'
import p1 from '../../img/p1.jpg'
import p2 from '../../img/p2.jpg'
import { data } from "../../content/detail";

const SellDetail = () => {
    return (
        <div className="grid grid-cols-[50%_15%_10%_10%_15%] bg-300 text-200 py-3 mb-1 ">
            <div className="flex align-middle">
                <div className="h-20 ml-5">
                    <img src={picProduct} className='max-h-full max-w-full' />
                </div>
                <div className="my-auto ">
                    <div className='ml-2'>
                    {data.nameProduct}
                    </div>
                </div>
            </div>
            
            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className='h-10 '>
                        <img src={p2} className='max-h-full max-w-full rounded-full' />
                    </div>
                    <div className="my-auto ">{data.buyer}</div>
                </div>
            </div>
            <div className="flex align-middle pl-4">
                <div className="my-auto  text-2xl">
                    <div className="">{data.amount}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto text-primary text-2xl">
                    <div className="">{data.priceHighBuy}</div>
                </div>
            </div>
            
            <div className="flex align-middle">
                <div className="my-auto flex gap-2 round">
                    <a className="border-[2px] border-primary px-8 py-2 rounded-md hover:bg-orange-600" href='#'>
                        Supply
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
export default SellDetail;