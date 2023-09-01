import picProduct from "../../img/testPic.png";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import { data } from "../../content/detail.js";
import React, { useState } from "react";

import Sell from "./Sell";
import Pending from "./Pending";

const Selling = () => {
    const [activeComponent, setActiveComponent] = useState("selling");

    const toggle = (component) => {
        setActiveComponent(component);
    };
    let CurrentComponent;

    switch (activeComponent) {
        case "selling":
            CurrentComponent = <Sell />;
            break;
        case "pending":
            CurrentComponent = <Pending />;
            break;
        default:
            CurrentComponent = null;
    }

    return (
        <div className="max-w-[95vw] xl:max-w-[75vw] min-h-screen mx-auto  gap-10 mt-10">
            <div className="flex gap-9 py-5 bg-primary rounded-t-md text-100">
                <button
                    className="ml-3 hover:bg-300 px-4 p-2 rounded-md"
                    onClick={() => toggle("selling")}
                >
                    Selling
                </button>
                <button
                    onClick={() => toggle("pending")}
                    className=" hover:bg-300 px-4 p-2 rounded-md"
                >
                    Pending
                </button>
            </div>
            {CurrentComponent}
            {/* <div className="h-full flex flex-row gap-2 bg-200 p-5 rounded-b-md">
                

            </div> */}
        </div>
    );
};
export default Selling;
