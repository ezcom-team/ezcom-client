import SellDetail from "./SellDetail";

const Sell = () =>{
    return(
        <div className="max-w-[75vw] mx-auto mt-10 ">

            {/* header start*/}
            {/* <div className="flex gap-x-10 justify-between pb-5 bg-blue-700 text-gray-100 px-4 mb-4">
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


            <div className="grid grid-cols-[50%_15%_10%_10%_15%] mb-4 text-100">
                <div className="ml-5">Item</div>
                <div className="">Buyer</div>
                <div className="">Number</div>
                <div className="">Price</div>
                
            </div>
            <SellDetail/>
            <SellDetail/>
            <SellDetail/>
            <SellDetail/>
            <SellDetail/>
        </div>

            
    )
}

export default Sell;