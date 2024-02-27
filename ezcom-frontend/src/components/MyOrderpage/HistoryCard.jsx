import p1 from "../../img/p1.jpg";
import axios from "axios";

const HistoryCard = ({
  orderID,
  productImg,
  price,
  traderImg,
  trader,
  time,
  status,
}) => {
  const isoTimestamp = time;
  const dateObject = new Date(isoTimestamp);
  const formattedTime = dateObject.toLocaleString();
  const statusDone = status == "done";

  const receivedhandler = async () => {
    const token = localStorage.getItem("access-token");
    console.log("=======", orderID);
    try {
      const response = await axios.put(
        `https://ezcom-backend-production-09b5.up.railway.app/order/matched-order/received`,
        {
          orderID: orderID,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Fetch Error", error);
    }
  };

  return (
    <div className="grid grid-cols-[12%_12%_12%_40%_20%] bg-300 py-3 mb-1  text-100 rounded-md">
      <div className="flex align-middle">
        <div className="h-20 ml-5">
          <img src={productImg} className="max-w-full max-h-full" />
        </div>
      </div>
      <div className="flex align-middle">
        <div className="my-auto text-2xl text-primary">
          <div className="">฿ {price}</div>
        </div>
      </div>
      <div className="flex align-middle">
        <div className="flex gap-2 my-auto">
          <div className="h-10 ">
            <img
              src={traderImg}
              className="max-w-full max-h-full rounded-full"
            />
          </div>
          <div className="my-auto ">{trader}</div>
        </div>
      </div>

      <div className="flex justify-center align-middle">
        <div className="my-auto ">
          <div className="">{formattedTime}</div>
        </div>
      </div>
      <div className="flex items-center justify-start align-middle">
        <div className="my-auto text-100">{status}</div>
        {statusDone ? (
          <button
            onClick={receivedhandler}
            className="ml-2 text-green-800 bg-green-500 h-[30px] p-1 rounded-md hover:bg-300 hover:text-200"
          >
            received
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default HistoryCard;
