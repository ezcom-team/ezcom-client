import picProduct from "../../img/testPic.png";
import { data } from "../../content/detail.js";
import pic from '../../img/p1.jpg'
import pic2 from '../../img/p2.jpg'

const ChatCard = () => {
    return (
        // <div className="max-w-[80vw]  p-5  gap-10 mt-3">
        //     <div className="border-red-500 border-[3px] p-2 rounded">
        //         <div className="my-auto mb-4 text-xl text-100">{data.nameProduct}</div>
        //         <div className="grid grid-cols-[25%_25%_25%_25%]  bg-300 mb-1  text-200 rounded-md">
        //             <div className="flex align-middle">
        //                 <div className="flex flex-col h-20 ml-5">
        //                     <img src={picProduct} className="max-h-full max-w-full" />
        //                 </div>
        //             </div>
        //             <div className="flex align-middle">
        //                 <div className="my-auto text-green-500 text-3xl ">
        //                     <div className=""> {data.priceHighBuy}</div>
        //                 </div>
        //             </div>

        //             <div className="h-[35px] flex flex-col justify-center">
        //                 <div className="flex justify-center">

        //             <img src={pic} className="flex   max-h-[25px] max-w-[25px] rounded-full mr-2 " />
        //                 </div>
        //             <div className='my-auto text-xl flex justify-center'>Napong</div>
        //         </div>





        //             <div className="flex align-middle justify-center">
        //                 <div className="flex flex-col gap-3 my-auto justify-center">
        //                     <a
        //                         className="bg-green-500 px-6 py-1 rounded-md hover:bg-green-600 text-100"
        //                         href="#"
        //                     >
        //                         Accept
        //                     </a>
        //                     <a
        //                         className=" bg-red-500 px-6 py-1 rounded-md hover:bg-red-600 text-100"
        //                         href="#"
        //                     >
        //                         Decline
        //                     </a>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>

        // </div>
        <div className="flex flex-col bg-300 py-3 px-5 border-[4px] border-400 rounded-md shadow-xl">
            <div className="flex justify-center mb-2 text-xl text-100">
                {data.nameProduct}
            </div>
            <div className="flex justify-between px-10 text-200">
                <div className="flex flex-col justify-center">
                    <div className=" self-center">
                        <img className="max-h-[80px] rounded-full" src={pic} alt="player1" />
                    </div>
                    <div>Napong </div>
                </div>
                <div >
                    <img className="max-h-[100px]" src={picProduct} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className=" self-center">
                        <img className="max-h-[80px] rounded-full" src={pic2} alt="player1" />
                    </div>
                    <div>Gnopan </div>
                </div>
            </div>
            <div className="mt-2 self-center text-xl p-2 rounded-md bg-primary text-100">{data.priceHighBuy}</div>
            <button className=" self-end underline text-sm text-200 hover:text-gray-300">รายละเอียด</button>
        </div>
    )
}
export default ChatCard;