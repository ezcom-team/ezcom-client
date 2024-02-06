import OrderDetailAdmin from "./OrderDetailAndmin";

const OrderAdmin = () => {
    return (
        <div className=" max-w-[85vw] mx-auto mt-10 ">

            <div className="grid grid-cols-[40%_15%_10%_10%_15%] mb-4 text-100">
                <div className="ml-5 flex justify-center">Item</div>
                <div className="">Price</div>
                <div className="">Type</div>
                <div className="">Own</div>
                <div className="">Time</div>

            </div>
            <OrderDetailAdmin />
            <OrderDetailAdmin />
            <OrderDetailAdmin />
            <OrderDetailAdmin />
            <OrderDetailAdmin />
            <OrderDetailAdmin />
            <OrderDetailAdmin />
        </div>


    )
}

export default OrderAdmin;