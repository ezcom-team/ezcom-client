import React, { useState } from "react";
import "./style.css";
import DoneIcon from '@mui/icons-material/Done';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import SellIcon from '@mui/icons-material/Sell';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const ProgressStep = () => {
  const steps = ["Prepare", "Verify", "Delivery", "Done"];
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)

  let sec;
switch(currentStep){
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
          <div key={i} className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"}`}>
            <div className="step">{
              (i + 1 < currentStep || complete) ? <DoneIcon fontSize="medium" /> : i+1  
            }
            </div>
            <p className="text-200">{step}</p>
          </div>
        ))}
      </div>
      <button className="bg-gray-800 text-gray-100 p-2" onClick={() => {
        currentStep === steps.length 
          ? setComplete(true) 
          : setCurrentStep((prev) => prev + 1);
        
      }}
      >
        {currentStep === steps.length ? "Done" : "Next"}
      </button>
    </>
  );
};

export default ProgressStep;
