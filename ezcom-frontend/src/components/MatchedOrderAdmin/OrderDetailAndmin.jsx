const OrderDetailAdmin = ({ order }) => {
    let type = "";
    let name = "";
    let textColorClass = "";
    const isoTimestamp = order.CreatedAt;
    const dateObject = new Date(isoTimestamp);
    const formattedTime = dateObject.toLocaleString();

    return (
        <div className="grid grid-cols-[40%_15%_10%_10%_15%_10%] bg-300 text-200 py-3 mb-1 ">
            <div className="flex pl-5 align-middle">
                <div className="h-20 ml-5">
                    <img
                        src={order.Product_img}
                        className="max-w-full max-h-full"
                    />
                </div>
                <div className="my-auto ">
                    <div className="ml-2 text-base text-100">
                        {order.Product_name}
                    </div>
                    <div className="flex ml-2">
                        <div className="w-4 h-4 mt-1 bg-green-500 rounded-full"></div>
                        <div className="ml-1">{order.Condition}</div>
                    </div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="flex gap-2 my-auto text-base text-primary">
                    <div className="my-auto ">฿ {order.Price}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto text-base text-100">
                    <div className={textColorClass}>{order.BuyerName}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="my-auto text-base text-100">
                    <div className="">{order.SellerName}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="flex gap-2 my-auto text-sm">
                    <div className="my-auto ">{formattedTime}</div>
                </div>
            </div>

            <div className="flex align-middle">
                <div className="flex gap-2 my-auto round">
                    <a
                        className="border-[2px] border-primary px-8 py-2 rounded-md hover:bg-orange-600"
                        href="#"
                    >
                        Edit
                    </a>
                </div>
            </div>
        </div>
    );
};
export default OrderDetailAdmin;
