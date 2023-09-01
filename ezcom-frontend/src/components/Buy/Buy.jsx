import BuyDetail from './BuyDetail';
import SellDetail from '../Sell/SellDetail'

const Buy = () =>{
    return(
        <div className="max-w-[75vw] mx-auto mt-10 ">

            {/* header start*/}
            {/* <div className="flex gap-x-10 justify-between pb-5 bg-black text-gray-100 px-4 mb-4">
                <div className="flex gap-5 align-bottom " >
                    <button className="">buy</button>
                    <button className="">sell</button>
                    <button className="">trade</button>
                </div>
                <span className="">bulk buy</span>
            </div>

            <div className="grid grid-flow-col justify-between just px-3 mb-4">
                <div className="">brand new</div>
                <div className="">sort</div>
            </div> */}
            {/* header end */}


            <div className="grid grid-cols-[15%_40%_15%_15%_15%] mb-4 text-100">
                <div className="ml-5">Item</div>
                <div className="">Condition</div>
                <div className="">Seller</div>
                <div className="">Price</div>
                <div className=""></div>
            </div>
            <BuyDetail/>
            <BuyDetail/>
            <BuyDetail/>
            <BuyDetail/>
            <BuyDetail/>
            
        </div>
    )
}

export default Buy;


