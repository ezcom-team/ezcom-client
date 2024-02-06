import SellDetail from "./SellDetail";

const Sell = () => {
    return (
        <div className="max-w-[75vw] mx-auto mt-10 ">

            <div className="grid grid-cols-[50%_15%_10%_10%_15%] mb-4 text-100">
                <div className="ml-5">Item</div>
                <div className="">Buyer</div>
                <div className="">Number</div>
                <div className="">Price</div>

            </div>
            <SellDetail />
            <SellDetail />
            <SellDetail />
            <SellDetail />
            <SellDetail />
        </div>


    )
}

export default Sell;