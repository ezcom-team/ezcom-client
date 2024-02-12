
const OrderDetailAdmin = ({ order }) => {

    let type = "";
    let name = "";
    let textColorClass = "";

    if (order.Seller_name) {
        type = "Buy";
    } else if (order.Buyer_name) {
        type = "Sell";
    } else {
        type = "No transaction information available";
    }

    if (order.Seller_name) {
        name = order.Seller_name;
    } else if (order.Buyer_name) {
        name = order.Buyer_name;
    } else {
        type = "No transaction information available";
    }

    if (type === "Sell") {
        textColorClass = "text-red-500";
    } else if (type === "Buy") {
        textColorClass = "text-green-500";
    }

    return (
        <div className="grid grid-cols-[40%_15%_10%_10%_15%_10%] bg-300 text-200 py-3 mb-1 ">
            <div className="flex align-middle pl-10">
                <div className="h-20 ml-5">
                    <img src={order.Product_img} className='max-h-full max-w-full' />
                </div>
                <div className="my-auto ">
                    <div className='ml-2 text-xl'>
                        {order.Product_name}
                    </div>
                    <div className='flex ml-3'>
                        <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                        <div className='ml-1'>{order.Condition}</div>
                    </div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto flex gap-2 text-2xl text-primary">
                    <div className="my-auto ">{order.Price}</div>
                </div>
            </div>
            <div className="flex align-middle pl-4">
                <div className="my-auto  text-2xl ">
                    <div className={textColorClass}>{type}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto text-100 text-2xl">
                    <div className="">{name}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className="my-auto ">{order.CreatedAt}</div>
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