import axios from "axios";
import React, { useState } from "react";
import Payment from "../Modal/Payment";

function Verify({ dataToSend, isPaymentModalOpen, setIsPaymentModalOpen }) {
    const [verify, setVerify] = useState("Verified");
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [dataSent, setDataSent] = useState({});

    const yes = (e) => {
        setVerify("Verified");
        console.log("yessssssssss", verify);
        setData();
        setIsPaymentOpen(true);
    };

    const no = (e) => {
        setVerify("");
        console.log("nooooooo", verify);
        setData();
        setIsPaymentOpen(true);
    };

    const setData = () => {
        const temp = {
            ...dataToSend,
            // color: {dataToSend}
            verify: verify,
        };
        setDataSent(temp);
    };
    console.log("data----", dataToSend);
    return (
        <div className="modal">
            {isPaymentModalOpen && (
                <Payment
                    dataToSend={dataSent}
                    isPaymentModalOpen={isPaymentOpen}
                    setIsPaymentModalOpen={setIsPaymentModalOpen}
                />
            )}
            <div className="flex flex-col items-center justify-center p-10 rounded-md bg-400 border border-300">
                You need to verify?
                <div className="flex gap-5 mt-4">
                    <button
                        className="bg-green-600 py-2 px-4 rounded-md hover:bg-green-700"
                        onClick={yes}
                    >
                        Yes
                    </button>
                    <button
                        className="bg-primary py-2 px-4 rounded-md hover:bg-orange-700"
                        onClick={no}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Verify;
