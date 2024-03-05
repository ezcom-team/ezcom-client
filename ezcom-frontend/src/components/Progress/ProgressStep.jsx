import React, { useEffect, useState } from "react";
import "./style.css";
import DoneIcon from "@mui/icons-material/Done";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import SellIcon from "@mui/icons-material/Sell";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WarehouseIcon from "@mui/icons-material/Warehouse";
const ProgressStep = ({ status }) => {
    const steps = ["Sent", "Verify", "Delivery", "Done"];
    const [currentStep, setCurrentStep] = useState(0);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const setStep = () => {
            if (status === "sent") {
                setCurrentStep(2);
            } else if (status === "verify") {
                setCurrentStep(3);
            } else if (status === "deliverly") {
                setCurrentStep(4);
            } else if (status === "done") {
                setCurrentStep(5);
            }
        };
        setStep();
    }, [status]);

    let sec;
    switch (currentStep) {
        case 0:
            sec = <AirportShuttleIcon fontSize="medium" />;
            break;

        case 1:
            sec = <SellIcon fontSize="medium" />;
            break;

        case 2:
            sec = <MonetizationOnIcon fontSize="medium" />;
            break;

        case 3:
            sec = <CreateNewFolderIcon fontSize="medium" />;
            break;

        default:
            sec = null;
    }

    return (
        <>
            <div className="flex justify-center pl-10 bg-400 pt-[70px]">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${
                            currentStep === i + 1 && "active"
                        } ${(i + 1 < currentStep || complete) && "complete"}`}
                    >
                        <div className="step">
                            {i + 1 < currentStep || complete ? (
                                <DoneIcon fontSize="medium" />
                            ) : (
                                (() => {
                                    switch (i + 1) {
                                        case 1:
                                            return (
                                                <WarehouseIcon fontSize="medium" />
                                            );
                                        case 2:
                                            return <VerifiedIcon />;
                                        case 3:
                                            return <AirportShuttleIcon />;
                                        case 4:
                                            return (
                                                <LocationOnIcon fontSize="medium" />
                                            );
                                    }
                                })()
                            )}
                        </div>

                        <p className="text-200">{step}</p>
                    </div>
                ))}
            </div>
            {/* <button
                className="bg-gray-800 text-gray-100 p-2"
                onClick={() => {
                    currentStep === steps.length
                        ? setComplete(true)
                        : setCurrentStep((prev) => prev + 1);
                }}
            >
                {currentStep === steps.length ? "Done" : "Next"}
            </button> */}
        </>
    );
};

export default ProgressStep;
