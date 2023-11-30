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
        <div className="max-w-[95vw] xl:max-w-[75vw] min-h-screen mx-auto  gap-10 ">
            {CurrentComponent}
        </div>
    );
};
export default Selling;
