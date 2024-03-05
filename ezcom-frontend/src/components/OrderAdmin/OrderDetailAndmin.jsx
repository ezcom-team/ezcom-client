const OrderDetailAdmin = ({ order }) => {
  let type = "";
  let name = "";
  let textColorClass = "";
  const isoTimestamp = order.CreatedAt;
  const dateObject = new Date(isoTimestamp);
  const formattedTime = dateObject.toLocaleString();

  if (order.Seller_name) {
    type = "Sell";
  } else if (order.Buyer_name) {
    type = "Buy";
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
    <div className="grid grid-cols-[50%_10%_10%_10%_20%] bg-300 text-200 py-3 mb-[8px] rounded">
      <div className="flex pl-5 align-middle">
        <div className="h-20 ml-5">
          <img src={order.Product_img} className="max-w-full max-h-full" />
        </div>
        <div className="my-auto ">
          <div className="ml-2 text-base text-100">{order.Product_name}</div>
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
      <div className="flex pl-4 align-middle">
        <div className="my-auto text-base ">
          <div className={textColorClass}>{type}</div>
        </div>
      </div>

      <div className="flex align-middle">
        <div className="my-auto text-base text-100">
          <div className="">{name}</div>
        </div>
      </div>

      <div className="flex align-middle">
        <div className="flex gap-2 my-auto text-sm">
          <div className="my-auto ">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailAdmin;
