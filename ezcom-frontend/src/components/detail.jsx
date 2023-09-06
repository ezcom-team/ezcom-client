import picProduct from '../img/testPic.png'
import {data} from '../content/detail'
const Detail = () => {
    return (
        <div className="  max-w-[80vw]  mx-auto  bg-g ">
            <div className="grid grid-cols-[90%_10%] ">
                <div className='bg-red-400'>{data.path}</div>
                <div className="justify-end bg-slate-500 ">icon</div>
            </div>


            <div className=" grid grid-cols-2 ">
                <div className="pic">
                    <img src={picProduct} />
                </div>
                <div className="flex flex-col  gap-10">
                    <div className="">
                        <div className="text-3xl ">{data.nameProduct}</div>
                        <div className=" text-gray-700">{data.subNameProduct}</div>
                    </div>

                    <div className="grid grid-cols-3 justify-items-center">
                        <div className="grid justify-items-center">
                            <div className="">ราคารับซื้อสูงสุด</div>
                            <div className="">{data.priceHighBuy}</div>
                        </div>
                        <div className="grid justify-items-center">
                            <div className="">ราคาขายต่ำสุด</div>
                            <div className="">{data.priceLowSell}</div>
                        </div><div className="grid justify-items-center">
                            <div className="">ราคาขายล่าสุด</div>
                            <div className="">{data.priceLastSell}</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40%_40%_20%] justify-items-center">
                        <a href='#' className="">
                            <div className=" rounded-md bg-red-800 text-gray-100 px-24 py-2">{data.textBuy}</div>
                        </a>
                        <a href='#' className="">
                            <div className=" rounded-md bg-green-800 text-gray-100 px-24 py-2">{data.textSell}</div>
                        </a>
                        <a href='#' className="">
                            <div className=" rounded-md bg-yellow-400 text-gray-100 px-11 py-2">{data.textVS}</div>
                        </a>
                        </div>
                    <div className="">รายละเอียดสินค้า</div>
                </div>
            </div>

        </div>
    )
}

export default Detail;