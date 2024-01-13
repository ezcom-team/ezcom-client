import BuyDetail from './BuyDetail';
import SellDetail from '../Sell/SellDetail'

const Buy = () =>{
    return(
        <div className="max-w-[75vw] mx-auto mt-10 ">

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


