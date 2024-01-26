import picProduct from '../../img/testPic.png'
import p1 from '../../img/p1.jpg'
import p2 from '../../img/p2.jpg'

const SellDetail = ({ condition, color, sellerName, price }) => {
    return (
        <div className="grid grid-cols-[15%_40%_15%_15%_15%] bg-300 py-3 mb-1 text-200 rounded-md">
            <div className="flex align-middle">
                <div className=''>{condition}</div>
            </div>
            
            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className=''>{color}</div>
                </div>
            </div>
            <div className="flex align-middle pl-4">
                <div className="my-auto text-2xl">
                    <div className="my-auto ">{sellerName}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto text-primary text-2xl">
                    <div className=""> ฿ {price}</div>
                </div>
            </div>
            
            <div className="flex align-middle">
                <div className="my-auto flex gap-2 round">
                    <a className="border-[2px] border-green-600 px-8 py-2 rounded-md hover:bg-green-600 duration-500" href='#'>
                        Buy
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
export default SellDetail;