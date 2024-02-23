import React from "react";
import "./index.css";

import { Link } from "react-router-dom";

export const CardItem = props => {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className="m-5 w-52 h-[240px] p-2 bg-300 hover-drop-shadow shadow-lg hover:shadow-black rounded-lg flex justify-center cursor-pointer">
        <div className="grid place-items-center">
          <div className="m-0 max-w-[112px] max-h-[112px] flex justify-center">
            <img src={props.img} className="object-contain w-full h-full" />
          </div>
          <div className="text-sm text-center text-100">
            <div>{props.name}</div>
            <div>
              ฿ <span className="text-primary">{props.price}.-</span>
            </div>
            <div>({props.quantity}) items</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
