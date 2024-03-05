import { useState } from "react";
import p1 from "../../img/p1.jpg";

const BuyDetail = ({ conditions, colors, buyerName, price, buyerImg }) => {
    // console.log(colors);

    const [formData, setFormData] = useState({
        conditions: conditions,
        colors: colors,
        buyerName: buyerName,
        price: price,
        buyerImg: buyerImg,
    });

    const getBackgroundColor = (condition) => {
        switch (condition) {
            case "A":
                return "bg-green-500";
            case "B":
                return "bg-yellow-500";
            case "C":
                return "bg-red-500";
            default:
                return "bg-white";
        }
    };

    const resetDataToSend = () => {
        setFormData({
            conditions: "",
            colors: "",
            buyerName: "",
            price: "",
            buyerImg: "",
        });
    };
    // console.log("checkformdata",formData)
    async function createOrder() {
        const token = localStorage.getItem("access-token");
        const dataToSend = {
            ...formData,
        };
        console.log("my sell order ");
        console.log("datasent", dataToSend);
        try {
            const response = await axios.post(
                `https://ezcom-backend-production-09b5.up.railway.app/order/buy`,
                dataToSend,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            console.log("Created order ----", response.data);
        } catch (error) {
            // showToast(false, "Fetch Error")
            console.log("error is ....");
            console.error("Fetch Error", error);
        }

        resetDataToSend();
        window.location.reload();
    }

    return (
        <div className="grid grid-cols-[15%_40%_15%_15%_15%] bg-300 py-3 mb-1 text-200 rounded-md">
            <div className="flex my-auto justify-center">
                {conditions.map((condition) => (
                    <div
                        className={`flex justify-center mx-1 p-[2px] rounded-3xl w-[44px] h-[28px] font-bold ${getBackgroundColor(
                            condition
                        )}`}
                    >
                        {condition}
                    </div>
                ))}
            </div>
            <div className="flex">
                <div className="my-auto">
                    <div className="flex">
                        {colors.map((color) => (
                            <div
                                className="flex justify-center m-1 p-[4px] rounded-full w-[32px] h-[32px] font-bold"
                                style={{
                                    backgroundColor: color,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="flex gap-2 my-auto">
                    <div className="h-10 ">
                        <img
                            src={buyerImg}
                            className="max-w-full max-h-full rounded-full"
                        />
                    </div>
                    <div className="my-auto ">{buyerName}</div>
                </div>
            </div>
            <div className="flex align-middle">
                <div className="my-auto text-base text-primary">
                    <div className=""> ฿ {price}</div>
                </div>
            </div>
        </div>
    );
};
export default BuyDetail;
