import p1 from "../../img/p1.jpg";

const HistoryCard = ({
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

    return (
        <div className="grid grid-cols-[12%_12%_12%_40%_20%] bg-300 py-3 mb-1  text-200 rounded-md">
            <div className="flex align-middle">
                <div className="h-20 ml-5">
                    <img src={productImg} className="max-h-full max-w-full" />
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto  text-2xl text-primary">
                    <div className="">฿ {price}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto flex gap-2">
                    <div className="h-10 ">
                        <img
                            src={traderImg}
                            className="max-h-full max-w-full rounded-full"
                        />
                    </div>
                    <div className="my-auto ">{trader}</div>
                </div>
            </div>

            <div className="flex align-middle justify-center">
                <div className="my-auto ">
                    <div className="">{formattedTime}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto text-green-400 text-xl">{status}</div>
            </div>
        </div>
    );
};
export default HistoryCard;
